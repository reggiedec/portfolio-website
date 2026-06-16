import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  featuredProjects,
  projects,
  type Project,
} from "../data/projects";
import { asset } from "../utils/asset";
import { PixelIcon, type IconName } from "./PixelIcon";

export function WorkSection() {
  const navigate = useNavigate();
  const hoveredSlug = useRef<string | null>(null);
  const moreCount = projects.length - featuredProjects.length;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isTyping =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);
      if (isTyping || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key !== "a" && e.key !== "A") return;

      const slug = hoveredSlug.current ?? featuredProjects[0]?.slug;
      if (!slug) return;

      e.preventDefault();
      navigate(`/work/${slug}`);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [navigate]);

  return (
    <section id="work" className="section section-work">
      <SectionHeader
        eyebrow="LV.01 / Selected Work"
        title="The"
        titleItalic="3 I'd open first"
        icon="controller"
        note={
          <>
            A capstone, a VR climate game, and an autonomous-racing rig.
            <br />
            Click in for the long version.
          </>
        }
      />

      <ul className="work-grid">
        {featuredProjects.map((p) => (
          <WorkCard
            key={p.slug}
            project={p}
            onHover={(slug) => {
              hoveredSlug.current = slug;
            }}
          />
        ))}
      </ul>

      <div className="section-cta-row">
        <Link to="/work" className="section-cta">
          <PixelIcon name="arrow" size={11} />
          <span>
            See all <strong>{projects.length}</strong> projects ·{" "}
            {moreCount} more inside
          </span>
          <span className="section-cta-key">→</span>
        </Link>
      </div>
    </section>
  );
}

function WorkCard({
  project,
  onHover,
}: {
  project: Project;
  onHover: (slug: string | null) => void;
}) {
  return (
    <li
      className="work-card"
      onMouseEnter={() => onHover(project.slug)}
      onMouseLeave={() => onHover(null)}
      onFocusCapture={() => onHover(project.slug)}
      onBlurCapture={() => onHover(null)}
    >
      <Link to={`/work/${project.slug}`} className="work-card-link">
        <span className="work-card-press" aria-hidden>
          <span className="work-card-press-key">A</span>
          <span className="work-card-press-label">Press to open</span>
        </span>
        <span className="work-card-frame" aria-hidden />
        <header className="work-card-head">
          <span className="work-card-index">
            {project.icon && (
              <PixelIcon name={project.icon} size={14} className="work-card-glyph" />
            )}
            <span>{project.index}</span>
          </span>
          <span className="work-card-lifespan">
            <PixelIcon name="heart" size={9} className="lifespan-icon" /> {project.year}
          </span>
        </header>

        {project.video ? (
          <div className="work-card-media">
            <LoopedVideo
              src={asset(project.video)}
              endAt={project.videoEnd}
              className="work-card-video"
            />
          </div>
        ) : project.image ? (
          <div className="work-card-media">
            <img
              src={asset(project.image)}
              alt={project.title}
              className="work-card-video"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="work-card-media work-card-placeholder">
            <PixelIcon
              name={project.icon ?? "diamond"}
              size={48}
              className="work-card-bigglyph"
            />
          </div>
        )}

        <div className="work-card-body">
          <h3 className="work-card-title">{project.title}</h3>
          {project.subtitle && (
            <p className="work-card-sub"><em>{project.subtitle}</em></p>
          )}
          <p className="work-card-blurb">
            <BoldStars text={project.blurb} />
          </p>

          {project.highlightTags && (
            <div className="work-card-tags">
              {project.highlightTags.map((t) => (
                <span key={t} className="work-card-tag">{t}</span>
              ))}
            </div>
          )}

          <span className="work-card-cta">
            <span>Open project</span>
            <span className="work-card-cta-arrow" aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </li>
  );
}

/**
 * Renders inline **bold** spans as <strong className="highlight">…</strong>
 * so we can bake highlights right into the data layer.
 */
function BoldStars({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="highlight">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

/**
 * Auto-playing muted video that loops back to 0 once `endAt` is reached.
 * Lets us drop in long source clips (like a 4-minute trailer) and preview
 * only the first N seconds without re-encoding the file.
 */
export function LoopedVideo({
  src,
  endAt,
  className,
}: {
  src: string;
  endAt?: number;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!endAt) return;
    const el = ref.current;
    if (!el) return;
    const onTime = () => {
      if (el.currentTime >= endAt) {
        el.currentTime = 0;
        el.play().catch(() => {});
      }
    };
    el.addEventListener("timeupdate", onTime);
    return () => el.removeEventListener("timeupdate", onTime);
  }, [endAt]);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop={!endAt}
      playsInline
      autoPlay
      preload="metadata"
      className={className}
    />
  );
}

interface HeaderProps {
  eyebrow: string;
  title: string;
  titleItalic?: string;
  note?: React.ReactNode;
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
