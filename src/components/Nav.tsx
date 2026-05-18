import { useEffect, useState } from "react";

const sections = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
];

export function Nav() {
  const [time, setTime] = useState<string>("");

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

  return (
    <header className="nav">
      <a href="#top" className="nav-mark">
        <span className="nav-mark-name">Regine Decossard</span>
        <span className="nav-mark-meta">
          <span className="nav-pulse" /> Technical Designer · Creative Technologist
        </span>
      </a>
      <nav className="nav-links">
        {sections.map((s, i) => (
          <a key={s.id} href={`#${s.id}`} className="nav-link">
            <span className="nav-link-num">LV.{String(i + 1).padStart(2, "0")}</span>
            <span>{s.label}</span>
          </a>
        ))}
        <a href="mailto:reggiedecossard@gmail.com" className="nav-link nav-link-cta">
          <span className="nav-link-num">↵</span>
          <span>Say hi</span>
        </a>
      </nav>
      <div className="nav-time">{time}</div>
    </header>
  );
}
