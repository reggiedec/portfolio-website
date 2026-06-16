import { Link } from "react-router-dom";
import { SectionHeader } from "./WorkSection";
import { PixelIcon } from "./PixelIcon";

export function AboutSection() {
  return (
    <section id="about" className="section section-about">
      <SectionHeader
        eyebrow="LV.03 / About"
        title="Who"
        titleItalic="I am"
        icon="speech"
      />

      <div className="about-grid">
        <div className="about-prose">
          <p className="about-lede">
            Hi, I'm <em>Regine DeCossard</em>. I'm a{" "}
            <span className="highlight">design technologist</span> /{" "}
            <span className="highlight">UX engineer</span>,{" "}
            <span className="highlight">creative technologist</span>, and{" "}
            <span className="highlight">AI interaction prototyper</span>, and I{" "}
            <em>bring ideas to life</em>.
          </p>
          <p>
            I'm finishing my <em>MHCI at Carnegie Mellon</em> — capstone delivery,
            Auditory Lab research, and prototyping in code — and open to{" "}
            <em>design technologist</em>, <em>UX engineer</em>, and{" "}
            <em>AI interaction</em> roles starting <em>August 2026</em>.
          </p>
        </div>

        <aside className="about-side">
          <div className="about-stat">
            <span className="about-stat-k">▸ Class</span>
            <span className="about-stat-v">
              Design Technologist / UX Engineer · Creative Technologist · AI Interaction Prototyper.
            </span>
          </div>
          <div className="about-stat">
            <span className="about-stat-k">▸ Now</span>
            <span className="about-stat-v">
              Pittsburgh · capstone delivery, lab work, and shipping the
              things I said I'd ship.
            </span>
          </div>
          <div className="about-stat">
            <span className="about-stat-k">▸ Next</span>
            <span className="about-stat-v">
              Open to design technologist, UX engineer, and AI interaction roles
              starting <em>August 2026</em>.
            </span>
          </div>
          <div className="about-stat">
            <span className="about-stat-k">▸ Off the clock</span>
            <span className="about-stat-v">
              Reading film theory, looking up fashion trends, and losing · but
              still playing · video games.
            </span>
          </div>
        </aside>
      </div>

      <div className="section-cta-row">
        <Link to="/about" className="section-cta">
          <PixelIcon name="arrow" size={11} />
          <span>Full bio · projects, origin story, contact</span>
          <span className="section-cta-key">→</span>
        </Link>
      </div>
    </section>
  );
}
