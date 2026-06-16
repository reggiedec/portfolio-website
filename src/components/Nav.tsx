import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LevelSelectOverlay } from "./LevelSelectOverlay";
import { PixelIcon } from "./PixelIcon";

const sections = [
  { path: "/work", label: "Work" },
  { path: "/experience", label: "Experience" },
  { path: "/about", label: "About" },
];

export function Nav() {
  const [time, setTime] = useState<string>("");
  const [open, setOpen] = useState(true);
  const [mapOpen, setMapOpen] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const opts: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/New_York",
      };
      setTime(now.toLocaleTimeString("en-US", opts) + " ET");
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isTyping =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);
      if (isTyping || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        setMapOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const NavBody = (
    <header className="nav">
      <Link to="/" className="nav-mark">
        <span className="nav-mark-name">Regine DeCossard</span>
        <span className="nav-mark-meta">
          <span className="nav-pulse" /> Design Technologist · Creative Technologist · AI Prototyper
        </span>
      </Link>
      <nav className="nav-links">
        {sections.map((s, i) => (
          <Link key={s.path} to={s.path} className="nav-link">
            <span className="nav-link-num">LV.{String(i + 1).padStart(2, "0")}</span>
            <span>{s.label}</span>
          </Link>
        ))}
        <button
          type="button"
          className="nav-link nav-link-map"
          onClick={() => setMapOpen(true)}
          aria-label="Open level select map"
        >
          <span className="nav-link-num" aria-hidden>
            <PixelIcon name="diamond" size={10} />
          </span>
          <span>Map</span>
          <span className="nav-link-key" aria-hidden>M</span>
        </button>
        <a href="mailto:reggiedecossard@gmail.com" className="nav-link nav-link-cta">
          <span className="nav-link-num">↵</span>
          <span>Say hi</span>
        </a>
      </nav>
      <div className="nav-right">
        <span className="nav-time">{time}</span>
        <button
          type="button"
          className="nav-close"
          onClick={() => setOpen(false)}
          aria-label="Close navigation"
        >
          ×
        </button>
      </div>
    </header>
  );

  return (
    <>
      {!open ? (
        <button
          type="button"
          className="nav-handle"
          onClick={() => setOpen(true)}
          aria-label="Show navigation"
        >
          <span className="nav-pulse" /> menu
        </button>
      ) : (
        NavBody
      )}
      <LevelSelectOverlay open={mapOpen} onClose={() => setMapOpen(false)} />
    </>
  );
}
