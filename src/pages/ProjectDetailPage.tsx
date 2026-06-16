import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { findProject, projects } from "../data/projects";
import { asset } from "../utils/asset";
import { PixelIcon } from "../components/PixelIcon";
import { HUD } from "../components/HUD";
import { LoopedVideo } from "../components/WorkSection";
import "../App.css";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? findProject(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) document.title = `${project.title} · Regine DeCossard`;
    return () => {
      document.title = "Regine DeCossard · HCI, design, research";
    };
  }, [project]);

  if (!project) {
    return (
      <div className="page page-detail">
        <div className="detail-empty">
          <p className="meta-label">404 / project not found</p>
          <h1 className="detail-title">Wrong cartridge.</h1>
          <Link to="/" className="detail-back">← back to portfolio</Link>
        </div>
      </div>
    );
  }

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];
  const prev = projects[(idx - 1 + projects.length) % projects.length];

  return (
    <div className="page page-detail">
      <header className="detail-nav">
        <Link to="/" className="detail-back">
          <span className="detail-back-arrow">←</span>
          <span>portfolio index</span>
        </Link>
        <span className="detail-nav-meta">
          <PixelIcon name="diamond" size={10} /> Project file · {project.index}
        </span>
      </header>

      <main className="detail-main">
        <section className="detail-hero">
          <p className="detail-eyebrow">
            {project.icon && <PixelIcon name={project.icon} size={12} />}{" "}
            {project.type}
          </p>
          <h1 className="detail-title">
            {project.title.split("·").map((part, i, arr) => (
              <span key={i}>
                {i > 0 && <em className="detail-title-sep"> · </em>}
                {part.trim()}
                {i < arr.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
          {project.subtitle && (
            <p className="detail-sub"><em>{project.subtitle}</em></p>
          )}

          <dl className="detail-stats">
            <Stat k="Lifespan" v={project.year} />
            {project.role && <Stat k="Role" v={project.role} />}
            {project.status && <Stat k="Status" v={project.status} />}
            <Stat k="Index" v={project.index} />
          </dl>

          {project.video ? (
            <div className="detail-media">
              <LoopedVideo
                src={asset(project.video)}
                endAt={project.videoEnd}
                className="detail-video"
              />
            </div>
          ) : project.image ? (
            <div className="detail-media">
              <img
                src={asset(project.image)}
                alt={project.title}
                className="detail-video"
                loading="lazy"
              />
            </div>
          ) : null}

          {project.poster && (
            <div className="detail-media detail-media-poster">
              <a
                href={asset(project.posterPdf ?? project.poster)}
                className="detail-poster-link"
              >
                <img
                  src={asset(project.poster)}
                  alt={`${project.title} capstone poster`}
                  className="detail-poster"
                  loading="lazy"
                />
              </a>
            </div>
          )}

          {project.images && project.images.length > 1 && (
            <div className="detail-gallery">
              {project.images.slice(1).map((src) => {
                const isVideo = /\.(mov|mp4|webm)$/i.test(src);
                return isVideo ? (
                  <video
                    key={src}
                    src={asset(src)}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="detail-gallery-img"
                  />
                ) : (
                  <img
                    key={src}
                    src={asset(src)}
                    alt={project.title}
                    className="detail-gallery-img"
                    loading="lazy"
                  />
                );
              })}
            </div>
          )}
        </section>

        <section className="detail-body">
          <p className="detail-lede">{project.description}</p>

          <div className="detail-blocks">
            {project.challenge && (
              <DetailBlock label="Problem" body={project.challenge} />
            )}
            {project.intervention && (
              <DetailBlock label="What I did" body={project.intervention} />
            )}
            {project.impact && (
              <DetailBlock label="Outcome" body={project.impact} />
            )}
          </div>

          {project.notes && project.notes.length > 0 && (
            <div className="detail-notes">
              <p className="meta-label">Process notes</p>
              <ul className="detail-notes-list">
                {project.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="detail-meta">
            <div className="detail-meta-block">
              <p className="meta-label">Tags</p>
              <div className="detail-tags">
                {project.tags.map((t) => (
                  <span key={t} className="detail-tag">{t}</span>
                ))}
              </div>
            </div>
            {project.links && project.links.length > 0 && (
              <div className="detail-meta-block">
                <p className="meta-label">Links</p>
                <ul className="detail-links">
                  {project.links.map((l) => {
                    const href =
                      l.url.startsWith("http://") || l.url.startsWith("https://")
                        ? l.url
                        : asset(l.url);
                    return (
                    <li key={l.url}>
                      <a href={href} className="detail-link">
                        {l.label} <span aria-hidden>→</span>
                      </a>
                    </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </section>

        <footer className="detail-footer">
          <Link to={`/work/${prev.slug}`} className="detail-jump">
            <span className="meta-label">Previous</span>
            <span className="detail-jump-title">← {prev.title}</span>
          </Link>
          <Link to="/" className="detail-jump detail-jump-center">
            <span className="meta-label">Back</span>
            <span className="detail-jump-title">⌂ portfolio index</span>
          </Link>
          <Link to={`/work/${next.slug}`} className="detail-jump detail-jump-right">
            <span className="meta-label">Next</span>
            <span className="detail-jump-title">{next.title} →</span>
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

function DetailBlock({ label, body }: { label: string; body: string }) {
  return (
    <div className="detail-block">
      <p className="meta-label">{label}</p>
      <p className="detail-block-body">{body}</p>
    </div>
  );
}
