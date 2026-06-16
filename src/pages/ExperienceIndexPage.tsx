import { useEffect } from "react";
import { Link } from "react-router-dom";
import { experience, education } from "../data/experience";
import { PixelIcon } from "../components/PixelIcon";
import { SkillsList } from "../components/SkillsList";
import { HUD } from "../components/HUD";
import "../App.css";

/** Dedicated /experience page. Lists every role + education + skills. */
export function ExperienceIndexPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Experience · Regine DeCossard";
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
          <PixelIcon name="floppy" size={10} /> All roles · {experience.length} files
        </span>
      </header>

      <main className="detail-main">
        <section className="detail-hero">
          <p className="detail-eyebrow">
            <PixelIcon name="floppy" size={12} /> LV.02 · Experience
          </p>
          <h1 className="detail-title">
            The <em>full receipts.</em>
          </h1>
          <p className="detail-sub">
            <em>
              Every role, every research lab, every museum. Click in for the
              full save file.
            </em>
          </p>
        </section>

        <ol className="exp-list">
          {experience.map((e) => (
            <li key={e.slug} className="exp-item">
              <div className="exp-period">{e.period}</div>
              <Link
                to={`/experience/${e.slug}`}
                className="exp-body exp-body-link"
                aria-label={`Open: ${e.role} at ${e.org}`}
              >
                <h3 className="exp-role">
                  {e.role} <span className="exp-at">·</span>{" "}
                  <span className="exp-org">{e.org}</span>
                </h3>
                {e.location && <p className="exp-location">{e.location}</p>}
                <p className="exp-blurb">{e.blurb}</p>
                {e.tags && (
                  <div className="exp-tags">
                    {e.tags.map((t) => (
                      <span key={t} className="exp-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <span className="exp-cta">
                  <PixelIcon name="arrow" size={10} /> Open file
                  <span className="exp-cta-key">A</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <div className="exp-grid">
          <div className="exp-card">
            <p className="meta-label">Education</p>
            <ul className="edu-list">
              {education.map((ed) => (
                <li key={ed.school} className="edu-item">
                  <p className="edu-school">{ed.school}</p>
                  <p className="edu-degree"><em>{ed.degree}</em></p>
                  <p className="edu-period">{ed.period}</p>
                  {ed.notes && (
                    <ul className="edu-notes">
                      {ed.notes.map((n) => (
                        <li key={n}>· {n}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="exp-card">
            <p className="meta-label">Tooling</p>
            <SkillsList />
          </div>
        </div>
      </main>

      <HUD />
    </div>
  );
}
