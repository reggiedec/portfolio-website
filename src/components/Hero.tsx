import { previouslyWith } from "../data/experience";
import { PixelIcon } from "./PixelIcon";
import { asset } from "../utils/asset";

export function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero-eyebrow">
        <span className="dot" /> Portfolio · 2026 edition
        <span className="hero-eyebrow-caret">▮</span>
      </p>

      <PixelName />

      <p className="hero-tagline">
        <em>Product designer and creative technologist, bringing ideas to
        life.</em> I love building <span className="highlight">stories</span>,
        making <span className="highlight">games</span>, and creating products
        that have a real, tangible impact on people. Currently completing my{" "}
        <span className="highlight">MHCI at Carnegie Mellon</span>.
      </p>

      <div className="hero-actions">
        <a
          href={asset("/Regine_DeCossard_Resume.pdf")}
          target="_blank"
          rel="noopener noreferrer"
          className="game-btn game-btn-primary"
        >
          <span className="game-btn-shine" aria-hidden />
          <span className="game-btn-icon" aria-hidden>
            <PixelIcon name="floppy" size={14} />
          </span>
          <span className="game-btn-label">Press start · résumé</span>
          <span className="game-btn-meta" aria-hidden>↵</span>
        </a>
        <a href="#work" className="game-btn">
          <span className="game-btn-shine" aria-hidden />
          <span className="game-btn-icon" aria-hidden>
            <PixelIcon name="controller" size={14} />
          </span>
          <span className="game-btn-label">View work</span>
          <span className="game-btn-meta" aria-hidden>↓</span>
        </a>
        <a href="mailto:reggiedecossard@gmail.com" className="game-btn">
          <span className="game-btn-shine" aria-hidden />
          <span className="game-btn-icon" aria-hidden>
            <PixelIcon name="heart" size={14} />
          </span>
          <span className="game-btn-label">Say hi</span>
          <span className="game-btn-meta" aria-hidden>→</span>
        </a>
      </div>

      <p className="hero-keyhint">
        <span className="keycap">A</span> to enter a project ·{" "}
        <span className="keycap">M</span> for level select
      </p>

      <div className="hero-meta">
        <div className="hero-meta-block">
          <p className="meta-label">
            <PixelIcon name="diamond" size={10} className="meta-label-icon" /> Currently
          </p>
          <p className="meta-body">
            <em>MHCI</em> at Carnegie Mellon. Leading the{" "}
            <span className="highlight">aSa</span> capstone, building{" "}
            <span className="highlight">Terratopia</span> in the Auditory Lab,
            and shipping a <span className="highlight">CHI PLAY '26</span>{" "}
            paper on transformational games for design education.
          </p>
        </div>
        <div className="hero-meta-block">
          <p className="meta-label">
            <PixelIcon name="floppy" size={10} className="meta-label-icon" /> Previously
          </p>
          <ul className="prev-list">
            {previouslyWith.map((p) => (
              <li key={p.org}>
                <span className="prev-org">{p.org}</span>
                {p.detail && <span className="prev-detail">· {p.detail}</span>}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-meta-block">
          <p className="meta-label">
            <PixelIcon name="heart" size={10} className="meta-label-icon" /> Status
          </p>
          <p className="meta-body">
            Pittsburgh + NYC. Building, prototyping,{" "}
            <span className="highlight">breaking things on purpose</span>.
            Available for HCI / product / creative-tech roles starting{" "}
            <em>Aug 2026</em>.
          </p>
        </div>
      </div>
    </section>
  );
}

/**
 * Hero name in a chunky 8-bit display face (Press Start 2P).
 * Each letter drops in on a small stagger so the title still has motion,
 * just enough "gamey" without an animated character buzzing around.
 */
function PixelName() {
  const name = "Regine DeCossard";
  const letters = Array.from(name);
  return (
    <div className="pixel-name" aria-label={name}>
      <div className="pixel-name-row">
        {letters.map((ch, i) => (
          <span
            key={`${ch}-${i}`}
            className={`pn-letter ${ch === " " ? "pn-space" : ""}`}
            style={{ animationDelay: `${i * 0.06}s` }}
            aria-hidden
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </div>
    </div>
  );
}
