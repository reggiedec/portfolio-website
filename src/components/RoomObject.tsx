import { RoundedBox, Html } from "@react-three/drei";
import { useState } from "react";

interface RoomObjectProps {
  position: [number, number, number];
  label: string;
  onClick: () => void;
  color?: string;
}

export function RoomObject({
  position,
  label,
  onClick,
  color = "#6a8aff",
}: RoomObjectProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position}>
      <RoundedBox
        args={[0.8, 0.6, 0.05]}
        radius={0.02}
        smoothness={2}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "default";
        }}
      >
        <meshStandardMaterial
          color={hovered ? "#3a3a5a" : "#2a2a4a"}
          emissive={color}
          emissiveIntensity={hovered ? 0.15 : 0.05}
          roughness={0.6}
          metalness={0.2}
        />
      </RoundedBox>
      <Html
        position={[0, 0, 0.04]}
        center
        transform
        style={{
          pointerEvents: "none",
          fontSize: "10px",
          color: "#e8e8f0",
          fontFamily: "'Archivo', system-ui, sans-serif",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </Html>
    </group>
  );
}
