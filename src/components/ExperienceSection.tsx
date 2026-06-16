import { experience, education } from "../data/experience";
import { Link } from "react-router-dom";
import { SectionHeader } from "./WorkSection";
import { PixelIcon } from "./PixelIcon";
import { SkillsList } from "./SkillsList";

export function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <SectionHeader
        eyebrow="LV.02 / The receipts"
        title="Where"
        titleItalic="I've worked"
        icon="floppy"
        note="Research labs, B2B startups, and a few museums."
      />

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
                <span className="exp-cta-key">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <div className="section-cta-row">
        <Link to="/experience" className="section-cta">
          <PixelIcon name="arrow" size={11} />
          <span>
            See all <strong>{experience.length}</strong> roles + education
          </span>
          <span className="section-cta-key">→</span>
        </Link>
      </div>

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
    </section>
  );
}
