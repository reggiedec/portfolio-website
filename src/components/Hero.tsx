import { previouslyWith } from "../data/experience";
import { PixelIcon, type IconName } from "./PixelIcon";

const roles = [
  "technical designer",
  "creative technologist",
  "prototype builder",
  "HCI researcher",
  "systems thinker",
  "interaction designer",
];

const metaIcons: Record<"now" | "prev" | "status", IconName> = {
  now: "diamond",
  prev: "floppy",
  status: "heart",
};

export function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero-eyebrow">
        <span className="dot" /> Now playing — Regine Decossard / 2026
        <span className="hero-eyebrow-caret">▮</span>
      </p>

      <h1 className="hero-display">
        <span className="hero-line">builds tools for the</span>
        <span className="hero-line italic">messy seam between</span>
        <span className="hero-line">
          hardware, <em>software,</em>
        </span>
        <span className="hero-line italic">and the people stuck</span>
        <span className="hero-line">using&nbsp;both.</span>
      </h1>

      <Marquee items={roles} />

      <div className="hero-meta">
        <div className="hero-meta-block">
          <p className="meta-label">
            <PixelIcon name={metaIcons.now} size={10} className="meta-label-icon" /> Currently
          </p>
          <p className="meta-body">
            M.S. Human-Computer Interaction at Carnegie Mellon. Leading
            technical design on a steel-yard ERP capstone (aSa). Researching
            generative AI for radiology training at DIG. Game research on
            Terratopia inside Prof. Laurie Heller's Auditory Lab.
          </p>
        </div>
        <div className="hero-meta-block">
          <p className="meta-label">
            <PixelIcon name={metaIcons.prev} size={10} className="meta-label-icon" /> Previously
          </p>
          <ul className="prev-list">
            {previouslyWith.map((p) => (
              <li key={p.org}>
                <span className="prev-org">{p.org}</span>
                {p.detail && <span className="prev-detail">— {p.detail}</span>}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-meta-block">
          <p className="meta-label">
            <PixelIcon name={metaIcons.status} size={10} className="meta-label-icon" /> Status
          </p>
          <p className="meta-body">
            Pittsburgh + NYC. Building, prototyping, breaking things on purpose.
            <br />
            Available for full-time HCI / product / creative-tech roles starting
            August 2026.
          </p>
        </div>
      </div>
    </section>
  );
}

function Marquee({ items }: { items: string[] }) {
  const track = [...items, ...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-word italic">{item}</span>
            <span className="marquee-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
