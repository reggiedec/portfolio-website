import { useRef, useState, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { useMotionValue, animate } from "framer-motion";
import * as THREE from "three";
import type { Project } from "../data/projects";
import { asset } from "../utils/asset";

function useVideoTexture(videoUrl: string | undefined): THREE.VideoTexture | null {
  const [texture, setTexture] = useState<THREE.VideoTexture | null>(null);

  useEffect(() => {
    if (!videoUrl) {
      setTexture(null);
      return;
    }

    const video = document.createElement("video");
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.crossOrigin = "anonymous";
    video.src = videoUrl;

    const tex = new THREE.VideoTexture(video);
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    setTexture(tex);

    video.onerror = () => {
      tex.dispose();
      setTexture(null);
    };
    video.play().catch(() => {});

    return () => {
      video.pause();
      video.src = "";
      tex.dispose();
      setTexture(null);
    };
  }, [videoUrl]);

  return texture;
}

interface HandheldConsoleProps {
  selectedProject: Project | null;
  isCartridgeInserted: boolean;
}

type ScreenPhase = "boot" | "idle" | "project";

function createBootTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 192;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#0a0a14";
  ctx.fillRect(0, 0, 256, 192);
  ctx.fillStyle = "#6a8aff";
  ctx.font = "bold 16px system-ui";
  ctx.textAlign = "center";
  ctx.fillText("REGINE OS v2.13", 128, 90);
  ctx.fillStyle = "#4a4a6a";
  ctx.font = "10px system-ui";
  ctx.fillText("INITIALIZING...", 128, 110);
  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  return tex;
}

function createIdleTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 192;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#1a1a2e";
  ctx.fillRect(0, 0, 256, 192);
  ctx.fillStyle = "#4a4a6a";
  ctx.font = "14px system-ui";
  ctx.textAlign = "center";
  ctx.fillText("INSERT CARTRIDGE", 128, 96);
  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  return tex;
}

export function HandheldConsole({
  selectedProject,
  isCartridgeInserted,
}: HandheldConsoleProps) {
  const groupRef = useRef<THREE.Group>(null);
  const pointLightRef = useRef<THREE.PointLight>(null);

  const bootTexture = useMemo(() => createBootTexture(), []);
  const idleTexture = useMemo(() => createIdleTexture(), []);

  const [screenPhase, setScreenPhase] = useState<ScreenPhase>("boot");
  const [thumbnailTexture, setThumbnailTexture] = useState<THREE.Texture | null>(null);

  const rawVideo = selectedProject?.video ?? selectedProject?.videoUrl;
  const videoPath = rawVideo ? (rawVideo.startsWith("http") ? rawVideo : asset(rawVideo)) : undefined;
  const videoTexture = useVideoTexture(
    isCartridgeInserted && selectedProject && videoPath ? videoPath : undefined
  );

  // Boot sequence: flash REGINE OS v2.13 for 2s before becoming interactable
  useEffect(() => {
    const t = setTimeout(() => setScreenPhase("idle"), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const thumb = selectedProject?.thumbnail;
    if (selectedProject && isCartridgeInserted && thumb) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const tex = new THREE.CanvasTexture(img);
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        setThumbnailTexture(tex);
      };
      img.onerror = () => setThumbnailTexture(null);
      img.src = thumb.startsWith("http") ? thumb : asset(thumb);
    } else {
      setThumbnailTexture(null);
    }
  }, [selectedProject, isCartridgeInserted]);

  // Pulsing PointLight when cartridge inserted - Framer Motion drives intensity
  const lightIntensity = useMotionValue(0);
  useEffect(() => {
    if (isCartridgeInserted) {
      // Power-up: 0 -> 1.2 over 400ms (after insert animation)
      const powerUp = animate(0, 1.2, {
        duration: 0.4,
        ease: "easeOut",
        onUpdate: (v: number) => lightIntensity.set(v),
      });
      // Then pulse slowly between 0.6 and 1.2
      const pulse = () => {
        animate(lightIntensity, [0.6, 1.2], {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        });
      };
      powerUp.then(pulse);
    } else {
      lightIntensity.set(0);
    }
  }, [isCartridgeInserted, lightIntensity]);

  useFrame(() => {
    if (pointLightRef.current) {
      pointLightRef.current.intensity = lightIntensity.get();
    }
  });

  const displayTexture =
    screenPhase === "boot"
      ? bootTexture
      : isCartridgeInserted && (videoTexture || thumbnailTexture)
        ? (videoTexture ?? thumbnailTexture)!
        : idleTexture;

  return (
    <group ref={groupRef}>
      {/* Main console body - handheld shape */}
      <group position={[0, 0, 0]}>
        {/* Body - MeshPhysicalMaterial with transmission, subtle tint */}
        <RoundedBox
          args={[2.4, 1.2, 0.5]}
          radius={0.08}
          smoothness={4}
          position={[0, 0, 0]}
        >
          <meshPhysicalMaterial
            color="#e8d5e8"
            transmission={0.7}
            roughness={0.2}
            thickness={1}
            ior={1.5}
          />
        </RoundedBox>

        {/* Screen bezel */}
        <RoundedBox
          args={[1.6, 0.9, 0.02]}
          radius={0.02}
          smoothness={2}
          position={[0, 0.15, 0.26]}
        >
          <meshStandardMaterial color="#0d0d14" roughness={0.9} />
        </RoundedBox>

        {/* Screen - displays boot / idle / project thumbnail */}
        <mesh position={[0, 0.15, 0.27]}>
          <planeGeometry args={[1.5, 0.85]} />
          <meshBasicMaterial
            map={displayTexture}
            toneMapped={false}
            transparent
            opacity={1}
          />
        </mesh>

        {/* Pulsing PointLight inside screen when cartridge inserted */}
        {isCartridgeInserted && (
          <pointLight
            ref={pointLightRef}
            position={[0, 0.15, 0.35]}
            color="#6a9aff"
            intensity={0}
            distance={1.5}
            decay={2}
          />
        )}

        {/* Cartridge slot (top) - recessed area */}
        <RoundedBox
          args={[0.5, 0.15, 0.1]}
          radius={0.02}
          smoothness={2}
          position={[0, 0.65, 0.26]}
        >
          <meshStandardMaterial color="#0a0a12" roughness={0.9} />
        </RoundedBox>

        {/* D-pad - polished gold */}
        <RoundedBox
          args={[0.25, 0.25, 0.05]}
          radius={0.03}
          smoothness={2}
          position={[-0.55, -0.2, 0.26]}
        >
          <meshStandardMaterial
            color="#d4af37"
            metalness={1}
            roughness={0.1}
            envMapIntensity={1}
          />
        </RoundedBox>

        {/* Action buttons - polished gold */}
        <group position={[0.55, -0.2, 0.26]}>
          <RoundedBox
            args={[0.12, 0.12, 0.05]}
            radius={0.02}
            smoothness={2}
            position={[-0.08, 0, 0]}
          >
            <meshStandardMaterial
              color="#d4af37"
              metalness={1}
              roughness={0.1}
              envMapIntensity={1}
            />
          </RoundedBox>
          <RoundedBox
            args={[0.12, 0.12, 0.05]}
            radius={0.02}
            smoothness={2}
            position={[0.08, 0, 0]}
          >
            <meshStandardMaterial
              color="#d4af37"
              metalness={1}
              roughness={0.1}
              envMapIntensity={1}
            />
          </RoundedBox>
        </group>

        {/* Shoulder buttons - polished gold */}
        <RoundedBox
          args={[0.4, 0.08, 0.06]}
          radius={0.02}
          smoothness={2}
          position={[-0.5, 0.55, 0.28]}
        >
          <meshStandardMaterial
            color="#d4af37"
            metalness={1}
            roughness={0.1}
            envMapIntensity={1}
          />
        </RoundedBox>
        <RoundedBox
          args={[0.4, 0.08, 0.06]}
          radius={0.02}
          smoothness={2}
          position={[0.5, 0.55, 0.28]}
        >
          <meshStandardMaterial
            color="#d4af37"
            metalness={1}
            roughness={0.1}
            envMapIntensity={1}
          />
        </RoundedBox>
      </group>
    </group>
  );
}
