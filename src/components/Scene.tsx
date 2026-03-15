import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { HandheldConsole } from "./HandheldConsole";
import { ProjectCartridge } from "./ProjectCartridge";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";

interface SceneProps {
  selectedProject: Project | null;
  onSelectProject: (project: Project | null) => void;
  onCartridgeHover?: (project: Project | null) => void;
}

function getShadowColor(selectedProject: Project | null): string {
  if (selectedProject) return selectedProject.color;
  const colors = projects.map((p) => p.color);
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
      : [0, 0, 0];
  };
  const rgbs = colors.map(hexToRgb);
  const r = Math.round(rgbs.reduce((a, c) => a + c[0], 0) / rgbs.length);
  const g = Math.round(rgbs.reduce((a, c) => a + c[1], 0) / rgbs.length);
  const b = Math.round(rgbs.reduce((a, c) => a + c[2], 0) / rgbs.length);
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

const CONSOLE_SCALE = 0.35;

export function Scene({ selectedProject, onSelectProject, onCartridgeHover }: SceneProps) {
  const isCartridgeInserted = selectedProject !== null;
  const shadowColor = getShadowColor(selectedProject);

  return (
    <div className="scene-container">
      <Canvas
        camera={{ position: [0, -0.2, 2.2], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        shadows
      >
        <color attach="background" args={["#fdf5ff"]} />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-camera-far={20}
          shadow-camera-left={-6}
          shadow-camera-right={6}
          shadow-camera-top={6}
          shadow-camera-bottom={-6}
        />
        <directionalLight position={[-4, 4, -2]} intensity={0.4} />
        <pointLight position={[2, 2, 2]} intensity={0.6} color="#4a6a9a" />
        <pointLight position={[-2, 1, 0]} intensity={0.3} color="#6a4a9a" />

        <Suspense fallback={null}>
          <Environment preset="night" />
        </Suspense>

        <Suspense
          fallback={
            <mesh position={[0, -0.3, 0]} scale={0.01}>
              <boxGeometry args={[1, 1, 1]} />
              <meshBasicMaterial color="#2a2a4a" transparent opacity={0.3} />
            </mesh>
          }
        >
          <ContactShadows
            position={[0, -1.02, 0]}
            opacity={0.5}
            scale={15}
            blur={2.5}
            far={3}
            color={shadowColor}
          />

          {/* Background wall - bubblegum lavender */}
          <mesh position={[0, 0, -3]} rotation={[0, Math.PI, 0]} receiveShadow>
            <planeGeometry args={[20, 12]} />
            <meshStandardMaterial color="#f8f0ff" roughness={0.95} side={2} />
          </mesh>

          {/* Desk surface - soft cream */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
            <planeGeometry args={[12, 8]} />
            <meshStandardMaterial color="#fff5f8" roughness={0.3} metalness={0.05} />
          </mesh>

          {/* HandheldConsole at origin */}
          <group position={[0, 0, 0]} scale={CONSOLE_SCALE}>
            <HandheldConsole
              selectedProject={selectedProject}
              isCartridgeInserted={isCartridgeInserted}
            />
          </group>

          {/* Cartridges in foreground - same scale as console group */}
          <group scale={CONSOLE_SCALE}>
            {projects.map((project, index) => (
              <ProjectCartridge
                key={project.id}
                project={project}
                index={index}
                isInserted={selectedProject?.id === project.id}
                isSelected={selectedProject?.id === project.id}
                onSelect={() =>
                  onSelectProject(
                    selectedProject?.id === project.id ? null : project
                  )
                }
                onHover={onCartridgeHover}
              />
            ))}
          </group>
        </Suspense>

        <OrbitControls
          enablePan={true}
          minDistance={1.2}
          maxDistance={12}
          maxPolarAngle={Math.PI / 2 + 0.15}
          minPolarAngle={Math.PI / 2 - 0.9}
          target={[0, -0.3, 0.5]}
        />
      </Canvas>
    </div>
  );
}
