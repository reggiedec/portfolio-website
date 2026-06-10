import { useEffect, useState } from "react";
import { PixelIcon } from "./PixelIcon";
import { VisitCounter } from "./VisitCounter";

const statusFrames = [
  "building",
  "prototyping",
  "shipping",
  "iterating",
  "researching",
];

interface TimeState {
  hp: number; // 1..5
  label: string;
}

/**
 * HP cycles through the day, like a Sims plumbob crossed with a circadian rhythm.
 *  6am-12pm  full charge (5/5)
 * 12pm-5pm   recharging (4/5)
 *  5pm-10pm  focused    (3/5)
 * 10pm-2am   crunch     (2/5)
 *  2am-6am   on fumes   (1/5)
 */
function getTimeState(hour: number): TimeState {
  if (hour >= 6 && hour < 12) return { hp: 5, label: "FULL CHARGE" };
  if (hour >= 12 && hour < 17) return { hp: 4, label: "RECHARGING" };
  if (hour >= 17 && hour < 22) return { hp: 3, label: "FOCUSED" };
  if (hour >= 22 || hour < 2) return { hp: 2, label: "CRUNCH MODE" };
  return { hp: 1, label: "RUNNING ON FUMES" };
}

export function HUD() {
  const [hidden, setHidden] = useState(false);
  const [frame, setFrame] = useState(0);
  const [hour, setHour] = useState<number>(() => new Date().getHours());

  useEffect(() => {
    const statusId = setInterval(() => {
      setFrame((f) => (f + 1) % statusFrames.length);
    }, 3200);
    const hourId = setInterval(() => {
      setHour(new Date().getHours());
    }, 60_000);
    return () => {
      clearInterval(statusId);
      clearInterval(hourId);
    };
  }, []);

  if (hidden) return null;

  const { hp, label: hpLabel } = getTimeState(hour);
  const maxHp = 5;

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
        <span className="hud-hearts" title={hpLabel}>
          {Array.from({ length: maxHp }).map((_, i) => (
            <PixelIcon
              key={i}
              name="heart"
              size={9}
              className={`hud-heart ${i < hp ? "hud-heart-full" : "hud-heart-empty"}`}
            />
          ))}
        </span>
        <span className="hud-hp-label">{hpLabel}</span>
      </div>
      <VisitCounter />
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
