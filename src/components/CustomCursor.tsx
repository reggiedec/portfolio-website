import { useState, useEffect } from "react";

interface CustomCursorProps {
  hoverColor: string | null;
}

export function CustomCursor({ hoverColor }: CustomCursorProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.body.addEventListener("mouseleave", handleLeave);
    document.body.addEventListener("mouseenter", handleEnter);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.removeEventListener("mouseleave", handleLeave);
      document.body.removeEventListener("mouseenter", handleEnter);
    };
  }, [visible]);

  if (!visible) return null;

  const color = hoverColor ?? "#8e7dbe";

  return (
    <div
      className="custom-cursor"
      style={{
        left: pos.x,
        top: pos.y,
        borderColor: color,
        boxShadow: hoverColor ? `0 0 12px ${hoverColor}40` : "none",
      }}
      aria-hidden
    />
  );
}
