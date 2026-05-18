import { useEffect, useState } from "react";
import { PixelIcon } from "./PixelIcon";

const statusFrames = [
  "building",
  "prototyping",
  "shipping",
  "iterating",
  "researching",
];

export function HUD() {
  const [hidden, setHidden] = useState(false);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setFrame((f) => (f + 1) % statusFrames.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  if (hidden) return null;

  return (
    <aside className="hud" aria-hidden="true">
      <div className="hud-bar">
        <span className="hud-dot" />
        <span className="hud-label">CLASS</span>
        <PixelIcon name="diamond" size={9} className="hud-sprite" />
        <span className="hud-value hud-value-strong">technical designer</span>
      </div>
      <div className="hud-bar">
        <span className="hud-label">STATUS</span>
        <span className="hud-value">{statusFrames[frame]}</span>
        <span className="hud-caret">▮</span>
      </div>
      <div className="hud-bar hud-bar-thin">
        <span className="hud-label">LOC</span>
        <span className="hud-value">PGH ↔ NYC</span>
      </div>
      <div className="hud-bar hud-bar-thin hud-hp">
        <span className="hud-label">HP</span>
        <span className="hud-hearts">
          <PixelIcon name="heart" size={9} className="hud-heart hud-heart-full" />
          <PixelIcon name="heart" size={9} className="hud-heart hud-heart-full" />
          <PixelIcon name="heart" size={9} className="hud-heart hud-heart-full" />
          <PixelIcon name="heart" size={9} className="hud-heart hud-heart-empty" />
        </span>
      </div>
      <button
        type="button"
        className="hud-close"
        onClick={() => setHidden(true)}
        aria-label="Hide HUD"
      >
        ×
      </button>
    </aside>
  );
}
