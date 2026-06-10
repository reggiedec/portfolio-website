import { useEffect } from "react";
import { projects } from "../data/projects";
import { experience } from "../data/experience";
import { PixelIcon } from "./PixelIcon";

interface OverlayProps {
  open: boolean;
  onClose: () => void;
}

/**
 * The actual tile grids · used both by the overlay and the embedded section
 * on the homepage. `onTileClick` lets the overlay close itself on click.
 */
export function LevelSelectGrids({ onTileClick }: { onTileClick?: () => void }) {
  return (
    <>
      <section className="level-select-section">
        <p className="meta-label">
          <PixelIcon name="controller" size={10} /> Projects · {projects.length} files
        </p>
        <ul className="level-select-grid">
          {projects.map((p) => (
            <li key={p.slug}>
              <a
                href={`#/work/${p.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="level-tile"
                onClick={onTileClick}
              >
                <div className="level-tile-head">
                  <span className="level-tile-index">{p.index}</span>
                  {p.icon && (
                    <span className="level-tile-icon">
                      <PixelIcon name={p.icon} size={14} />
                    </span>
                  )}
                </div>
                <p className="level-tile-title">{p.title}</p>
                {p.subtitle && <p className="level-tile-sub">{p.subtitle}</p>}
                <p className="level-tile-year">{p.year}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="level-select-section">
        <p className="meta-label">
          <PixelIcon name="floppy" size={10} /> Roles · {experience.length} files
        </p>
        <ul className="level-select-grid">
          {experience.map((e, i) => (
            <li key={e.slug}>
              <a
                href={`#/experience/${e.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="level-tile"
                onClick={onTileClick}
              >
                <div className="level-tile-head">
                  <span className="level-tile-index">
                    R{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="level-tile-icon">
                    <PixelIcon name="floppy" size={14} />
                  </span>
                </div>
                <p className="level-tile-title">{e.role}</p>
                <p className="level-tile-sub">{e.org}</p>
                <p className="level-tile-year">{e.period}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

/**
 * Full-screen "level select" overlay. Opened from the nav's MAP button
 * or the [M] keyboard shortcut.
 */
export function LevelSelectOverlay({ open, onClose }: OverlayProps) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handler);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="level-select" role="dialog" aria-modal="true" aria-label="Level select">
      <div className="level-select-inner">
        <header className="level-select-header">
          <div>
            <p className="meta-label">
              <PixelIcon name="diamond" size={10} /> Press [M] · Level select
            </p>
            <h2 className="level-select-title">
              Pick a <em>cartridge.</em>
            </h2>
          </div>
          <button
            type="button"
            className="level-select-close"
            onClick={onClose}
            aria-label="Close level select"
          >
            <span aria-hidden>×</span>
            <span className="level-select-close-key">ESC</span>
          </button>
        </header>
        <LevelSelectGrids onTileClick={onClose} />
      </div>
    </div>
  );
}
