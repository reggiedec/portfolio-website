import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

const WALL_COLOR = "#1a1a2e";
const FLOOR_COLOR = "#12121a";
const DESK_COLOR = "#252538";

export function Room() {
  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[16, 16]} />
        <meshStandardMaterial color={FLOOR_COLOR} roughness={0.9} metalness={0} />
      </mesh>

      {/* Back wall - faces into room (camera at z>0) */}
      <mesh position={[0, 0, -4]} rotation={[0, Math.PI, 0]} receiveShadow>
        <planeGeometry args={[16, 8]} />
        <meshStandardMaterial color={WALL_COLOR} roughness={0.95} side={THREE.DoubleSide} />
      </mesh>

      {/* Left wall */}
      <mesh position={[-8, 0, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color={WALL_COLOR} roughness={0.95} side={THREE.DoubleSide} />
      </mesh>

      {/* Right wall */}
      <mesh position={[8, 0, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color={WALL_COLOR} roughness={0.95} side={THREE.DoubleSide} />
      </mesh>

      {/* Desk - main surface */}
      <RoundedBox
        args={[4, 0.08, 2]}
        radius={0.02}
        smoothness={2}
        position={[0, -1.2, -1.5]}
        receiveShadow
      >
        <meshStandardMaterial color={DESK_COLOR} roughness={0.7} metalness={0.1} />
      </RoundedBox>

      {/* Desk leg support (simplified) */}
      <mesh position={[0, -1.6, -1.5]}>
        <boxGeometry args={[3.8, 0.08, 1.8]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.8} />
      </mesh>

      {/* Desk lamp - warm accent */}
      <group position={[-1.2, -0.9, -1.5]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.08, 0.1, 0.4, 16]} />
          <meshStandardMaterial color="#2a2a3a" roughness={0.6} />
        </mesh>
        <mesh position={[0, 0.25, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.05, 16]} />
          <meshStandardMaterial color="#3a3a4a" roughness={0.5} emissive="#4a3a2a" emissiveIntensity={0.2} />
        </mesh>
        <pointLight position={[0, 0.3, 0]} color="#ffeedd" intensity={0.8} distance={3} decay={2} />
      </group>
    </group>
  );
}
