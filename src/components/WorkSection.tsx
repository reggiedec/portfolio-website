import { useState } from "react";
import { projects, type Project } from "../data/projects";
import { asset } from "../utils/asset";
import { PixelIcon, type IconName } from "./PixelIcon";

export function WorkSection() {
  return (
    <section id="work" className="section">
      <SectionHeader
        eyebrow="LV.01 / Selected Work"
        title="Selected"
        titleItalic="Work"
        icon="controller"
        note="Seven projects across technical design, HCI research, physical computing, game research, and strategic design. The capstone is live and still moving — expect this list to keep changing."
      />

      <ol className="work-list">
        {projects.map((p, i) => (
          <WorkRow key={p.id} project={p} rowIndex={i} />
        ))}
      </ol>

      <p className="section-foot">
        Full case studies and process docs available on request →{" "}
        <a href="mailto:reggiedecossard@gmail.com" className="inline-link">
          reggiedecossard@gmail.com
        </a>
      </p>
    </section>
  );
}

function WorkRow({ project, rowIndex }: { project: Project; rowIndex: number }) {
  const [open, setOpen] = useState(rowIndex === 0);

  return (
    <li className={`work-row ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="work-row-head"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="work-row-index">
          {project.icon && (
            <PixelIcon name={project.icon} size={14} className="work-row-glyph" />
          )}
          <span>{project.index}</span>
        </span>
        <span className="work-row-titlewrap">
          <span className="work-row-title">{project.title}</span>
          {project.subtitle && (
            <span className="work-row-sub">{project.subtitle}</span>
          )}
        </span>
        <span className="work-row-type">{project.type}</span>
        <span className="work-row-year">{project.year}</span>
        <span className="work-row-toggle" aria-hidden>
          {open ? "[ close ]" : "[ open ]"}
        </span>
      </button>

      {open && (
        <div className="work-row-body">
          <div className="work-row-media">
            {project.video ? (
              <video
                src={asset(project.video)}
                muted
                loop
                playsInline
                autoPlay
                className="work-row-video"
              />
            ) : (
              <div className="work-row-placeholder">
                <span className="placeholder-mark">{project.index}</span>
                <span className="placeholder-title">{project.title}</span>
              </div>
            )}
          </div>

          <div className="work-row-copy">
            <p className="work-row-lede">{project.description}</p>

            {project.challenge && (
              <Block label="Problem" body={project.challenge} />
            )}
            {project.intervention && (
              <Block label="What I did" body={project.intervention} />
            )}
            {project.impact && <Block label="Outcome" body={project.impact} />}

            {project.notes && project.notes.length > 0 && (
              <div className="work-block">
                <p className="work-block-label">Process</p>
                <ul className="work-block-list">
                  {project.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="work-row-meta">
              {project.role && (
                <div className="meta-pair">
                  <span className="meta-pair-k">Role</span>
                  <span className="meta-pair-v">{project.role}</span>
                </div>
              )}
              {project.status && (
                <div className="meta-pair">
                  <span className="meta-pair-k">Status</span>
                  <span className="meta-pair-v">{project.status}</span>
                </div>
              )}
              <div className="meta-pair">
                <span className="meta-pair-k">Stack</span>
                <span className="meta-pair-v">{project.tags.join(" · ")}</span>
              </div>
            </div>

            {project.links && project.links.length > 0 && (
              <div className="work-row-links">
                {project.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-link"
                  >
                    {l.label} <span aria-hidden>↗</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </li>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div className="work-block">
      <p className="work-block-label">{label}</p>
      <p className="work-block-body">{body}</p>
    </div>
  );
}

interface HeaderProps {
  eyebrow: string;
  title: string;
  titleItalic?: string;
  note?: string;
  icon?: IconName;
}

export function SectionHeader({ eyebrow, title, titleItalic, note, icon }: HeaderProps) {
  return (
    <header className="section-head">
      <p className="section-eyebrow">
        {icon && <PixelIcon name={icon} size={12} className="section-eyebrow-icon" />}
        {eyebrow}
      </p>
      <h2 className="section-title">
        {title}
        {titleItalic && (
          <>
            {" "}
            <em>{titleItalic}</em>
          </>
        )}
      </h2>
      {note && <p className="section-note">{note}</p>}
    </header>
  );
}
