import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { experience, findExperience } from "../data/experience";
import { PixelIcon } from "../components/PixelIcon";
import { HUD } from "../components/HUD";
import "../App.css";

export function ExperienceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? findExperience(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (entry) document.title = `${entry.role} · Regine DeCossard`;
    return () => {
      document.title = "Regine DeCossard · HCI, design, research";
    };
  }, [entry]);

  if (!entry) {
    return (
      <div className="page page-detail">
        <div className="detail-empty">
          <p className="meta-label">404 / role not found</p>
          <h1 className="detail-title">Wrong save file.</h1>
          <Link to="/" className="detail-back">← back to portfolio</Link>
        </div>
      </div>
    );
  }

  const idx = experience.findIndex((e) => e.slug === entry.slug);
  const next = experience[(idx + 1) % experience.length];
  const prev = experience[(idx - 1 + experience.length) % experience.length];

  return (
    <div className="page page-detail">
      <header className="detail-nav">
        <Link to="/#experience" className="detail-back">
          <span className="detail-back-arrow">←</span>
          <span>portfolio index</span>
        </Link>
        <span className="detail-nav-meta">
          <PixelIcon name="floppy" size={10} /> Role file
        </span>
      </header>

      <main className="detail-main">
        <section className="detail-hero">
          <p className="detail-eyebrow">
            <PixelIcon name="floppy" size={12} /> Experience · role file
          </p>
          <h1 className="detail-title">{entry.role}</h1>
          <p className="detail-sub">
            <em>{entry.org}</em>
            {entry.location && <> · {entry.location}</>}
          </p>

          <dl className="detail-stats">
            <Stat k="Lifespan" v={entry.period} />
            <Stat k="Org" v={entry.org} />
            {entry.location && <Stat k="Location" v={entry.location} />}
          </dl>
        </section>

        <section className="detail-body">
          <p className="detail-lede">{entry.blurb}</p>

          {entry.bullets && entry.bullets.length > 0 && (
            <div className="detail-notes">
              <p className="meta-label">What I did</p>
              <ul className="detail-notes-list">
                {entry.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="detail-meta">
            {entry.tags && (
              <div className="detail-meta-block">
                <p className="meta-label">Tags</p>
                <div className="detail-tags">
                  {entry.tags.map((t) => (
                    <span key={t} className="detail-tag">{t}</span>
                  ))}
                </div>
              </div>
            )}
            {entry.link && (
              <div className="detail-meta-block">
                <p className="meta-label">Link</p>
                <ul className="detail-links">
                  <li>
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="detail-link"
                    >
                      Visit {entry.org} <span aria-hidden>↗</span>
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </section>

        <footer className="detail-footer">
          <Link to={`/experience/${prev.slug}`} className="detail-jump">
            <span className="meta-label">Previous role</span>
            <span className="detail-jump-title">← {prev.org}</span>
          </Link>
          <Link to="/" className="detail-jump detail-jump-center">
            <span className="meta-label">Back</span>
            <span className="detail-jump-title">⌂ portfolio index</span>
          </Link>
          <Link
            to={`/experience/${next.slug}`}
            className="detail-jump detail-jump-right"
          >
            <span className="meta-label">Next role</span>
            <span className="detail-jump-title">{next.org} →</span>
          </Link>
        </footer>
      </main>

      <HUD />
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="detail-stat">
      <dt>{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}
