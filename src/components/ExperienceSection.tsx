import { experience, education, skills } from "../data/experience";
import { SectionHeader } from "./WorkSection";

export function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <SectionHeader
        eyebrow="LV.02 / The receipts"
        title="Where"
        titleItalic="I've worked"
        icon="floppy"
        note="Every role that's shaped how I think about technical design, prototyping, and research — labs, startups, and a few museums."
      />

      <ol className="exp-list">
        {experience.map((e) => (
          <li key={e.id} className="exp-item">
            <div className="exp-period">{e.period}</div>
            <div className="exp-body">
              <h3 className="exp-role">
                {e.role} <span className="exp-at">·</span>{" "}
                <span className="exp-org">{e.org}</span>
              </h3>
              {e.location && <p className="exp-location">{e.location}</p>}
              <p className="exp-blurb">{e.blurb}</p>
              {e.bullets && (
                <ul className="exp-bullets">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {e.tags && (
                <div className="exp-tags">
                  {e.tags.map((t) => (
                    <span key={t} className="exp-tag">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
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
                <p className="edu-degree">{ed.degree}</p>
                <p className="edu-period">{ed.period}</p>
                {ed.notes && (
                  <ul className="edu-notes">
                    {ed.notes.map((n) => (
                      <li key={n}>— {n}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="exp-card">
          <p className="meta-label">Tooling</p>
          <dl className="skills">
            {Object.entries(skills).map(([k, v]) => (
              <div key={k} className="skills-row">
                <dt className="skills-key">{k}</dt>
                <dd className="skills-val">{v.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
