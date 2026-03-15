import { useRef, useEffect, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import { useMotionValue, animate } from "framer-motion";
import * as THREE from "three";
import type { Project } from "../data/projects";
import { GalaxyPoints } from "./GalaxyPoints";

useGLTF.preload("/models/gameboy_cartridge/scene.gltf");
useGLTF.preload("/models/sims_4_emotion_plumbobs/scene.gltf");

interface ProjectCartridgeProps {
  project: Project;
  index: number;
  isInserted: boolean;
  isSelected?: boolean;
  onSelect: () => void;
  onHover?: (project: Project | null) => void;
}

const SLOT_POSITION: [number, number, number] = [0, 0.65, 0.26];
const SLOT_ROTATION: [number, number, number] = [0, 0, 0];

// Gallery layout: 5 cartridges in a wide arc (radius 3), each with its own space on the desk
const ARC_RADIUS = 3;
const ARC_CENTER_Z = 1.5;
const ARC_ANGLES = [-70, -35, 0, 35, 70].map((deg) => (deg * Math.PI) / 180);

const GALLERY_POSITIONS: [number, number, number][] = ARC_ANGLES.map((angle) => [
  ARC_RADIUS * Math.sin(angle),
  -0.5,
  ARC_CENTER_Z + ARC_RADIUS * Math.cos(angle),
]);

const GALLERY_ROTATIONS: [number, number, number][] = ARC_ANGLES.map((angle) => [
  0,
  -angle,
  0,
]);

const GAMEBOY_SCALE = 0.08;
const PLUMBOB_SCALE = 0.07;
const PLUMBOB_OFFSET = 0.45;

export function ProjectCartridge({
  project,
  index,
  isInserted,
  onSelect,
  onHover,
}: ProjectCartridgeProps) {
  const groupRef = useRef<THREE.Group>(null);
  const plumbobRef = useRef<THREE.Group>(null);

  const gameboy = useGLTF("/models/gameboy_cartridge/scene.gltf");
  const plumbobsScene = useGLTF("/models/sims_4_emotion_plumbobs/scene.gltf");
  const [labelTexture, setLabelTexture] = useState<THREE.Texture | null>(null);

  const floatPosition = GALLERY_POSITIONS[index];
  const floatRotation = GALLERY_ROTATIONS[index];

  const targetPos = isInserted ? SLOT_POSITION : floatPosition;
  const targetRot = isInserted ? SLOT_ROTATION : floatRotation;

  const posX = useMotionValue(floatPosition[0]);
  const posY = useMotionValue(floatPosition[1]);
  const posZ = useMotionValue(floatPosition[2]);
  const rotX = useMotionValue(floatRotation[0]);
  const rotY = useMotionValue(floatRotation[1]);
  const rotZ = useMotionValue(floatRotation[2]);

  const springConfig = { type: "spring" as const, stiffness: 120, damping: 18 };

  useEffect(() => {
    animate(posX, targetPos[0], springConfig);
    animate(posY, targetPos[1], springConfig);
    animate(posZ, targetPos[2], springConfig);
    animate(rotX, targetRot[0], springConfig);
    animate(rotY, targetRot[1], springConfig);
    animate(rotZ, targetRot[2], springConfig);
  }, [isInserted, targetPos, targetRot, posX, posY, posZ, rotX, rotY, rotZ]);

  useEffect(() => {
    const thumb = project.thumbnail ?? `https://picsum.photos/seed/${project.id}/400/300`;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const tex = new THREE.CanvasTexture(img);
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      setLabelTexture(tex);
    };
    img.src = thumb;
  }, [project.thumbnail, project.id]);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.position.set(posX.get(), posY.get(), posZ.get());
    groupRef.current.rotation.set(rotX.get(), rotY.get(), rotZ.get());

    if (plumbobRef.current && !isInserted) {
      plumbobRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  const sceneClone = useMemo(() => {
    const clone = gameboy.scene.clone();
    return clone;
  }, [gameboy.scene]);

  useEffect(() => {
    if (!labelTexture) return;
    sceneClone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const mat = (child.material as THREE.MeshStandardMaterial)?.clone();
        if (mat) {
          mat.map = labelTexture;
          child.material = mat;
        }
      }
    });
  }, [sceneClone, labelTexture]);

  const plumbobColor = project.plumbobColor ?? project.color;
  const isMedSyn = project.id === "04";

  const plumbobMesh = useMemo(() => {
    if (isMedSyn) return null;
    const meshes: THREE.Mesh[] = [];
    plumbobsScene.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) meshes.push(child);
    });
    const source =
      meshes.length > 0 ? meshes[index % meshes.length] : null;
    if (!source) return null;
    const mesh = source.clone();
    const mat = (mesh.material as THREE.MeshStandardMaterial)?.clone();
    if (mat) {
      mat.emissive = new THREE.Color(plumbobColor);
      mat.emissiveIntensity = 0.6;
      mesh.material = mat;
    }
    return mesh;
  }, [plumbobsScene.scene, plumbobColor, index, isMedSyn]);

  return (
    <group ref={groupRef}>
      {!isInserted && (
        <mesh
          position={[0, -0.02, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
        >
          <circleGeometry args={[0.2, 16]} />
          <meshStandardMaterial
            color={plumbobColor}
            transparent
            opacity={0.15}
            roughness={1}
            metalness={0}
          />
        </mesh>
      )}
      <group
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover?.(project);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          onHover?.(null);
        }}
      >
        <primitive object={sceneClone} scale={GAMEBOY_SCALE} />
      </group>

      {!isInserted && isMedSyn && (
        <group ref={plumbobRef} position={[0, PLUMBOB_OFFSET, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <GalaxyPoints color={plumbobColor} />
        </group>
      )}
      {!isInserted && plumbobMesh && (
        <group ref={plumbobRef} position={[0, PLUMBOB_OFFSET, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={plumbobMesh} scale={PLUMBOB_SCALE} />
        </group>
      )}

      <Html
        position={[0, 0.2, 0.08]}
        center
        transform
        occlude
        style={{
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "pre-wrap",
          fontSize: "5px",
          color: "#4a3a5a",
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 600,
          letterSpacing: "0.15em",
          wordSpacing: "0.4em",
          textTransform: "uppercase",
          textShadow: "0 1px 1px rgba(255,255,255,0.9)",
          maxWidth: "80px",
          textAlign: "center",
          lineHeight: 1.6,
        }}
      >
        {project.title.toUpperCase().replace(/\s+/g, "  ")}
      </Html>
    </group>
  );
}
