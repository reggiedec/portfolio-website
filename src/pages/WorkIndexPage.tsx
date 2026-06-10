import { useEffect } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { asset } from "../utils/asset";
import { PixelIcon } from "../components/PixelIcon";
import { HUD } from "../components/HUD";
import { LoopedVideo } from "../components/WorkSection";
import "../App.css";

/** Dedicated page listing every project. Reachable from the nav or a CTA. */
export function WorkIndexPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Work · Regine DeCossard";
    return () => {
      document.title = "Regine DeCossard · HCI, design, research";
    };
  }, []);

  return (
    <div className="page page-detail">
      <header className="detail-nav">
        <Link to="/" className="detail-back">
          <span className="detail-back-arrow">←</span>
          <span>portfolio index</span>
        </Link>
        <span className="detail-nav-meta">
          <PixelIcon name="controller" size={10} /> All work · {projects.length} files
        </span>
      </header>

      <main className="detail-main">
        <section className="detail-hero">
          <p className="detail-eyebrow">
            <PixelIcon name="controller" size={12} /> LV.01 · Work
          </p>
          <h1 className="detail-title">
            Every <em>cartridge.</em>
          </h1>
          <p className="detail-sub">
            <em>
              All {projects.length} projects, in order. Click any tile to open
              the file.
            </em>
          </p>
        </section>

        <section className="index-grid">
          {projects.map((p) => {
            const isVideo = p.video || (p.image && /\.(mov|mp4|webm)$/i.test(p.image));
            return (
              <Link key={p.slug} to={`/work/${p.slug}`} className="index-card">
                <div className="index-card-media">
                  {p.video ? (
                    <LoopedVideo
                      src={asset(p.video)}
                      endAt={p.videoEnd}
                      className="index-card-thumb"
                    />
                  ) : p.image && !isVideo ? (
                    <img
                      src={asset(p.image)}
                      alt={p.title}
                      className="index-card-thumb"
                      loading="lazy"
                    />
                  ) : (
                    <div className="index-card-placeholder">
                      <PixelIcon name={p.icon ?? "diamond"} size={36} />
                    </div>
                  )}
                </div>
                <div className="index-card-body">
                  <div className="index-card-head">
                    <span className="index-card-index">{p.index}</span>
                    <span className="index-card-year">{p.year}</span>
                  </div>
                  <h3 className="index-card-title">{p.title}</h3>
                  {p.subtitle && (
                    <p className="index-card-sub">{p.subtitle}</p>
                  )}
                  {p.highlightTags && (
                    <div className="index-card-tags">
                      {p.highlightTags.map((t) => (
                        <span key={t} className="index-card-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </section>
      </main>

      <HUD />
    </div>
  );
}
