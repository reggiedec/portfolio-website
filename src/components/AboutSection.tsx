import { SectionHeader } from "./WorkSection";
import { PixelIcon } from "./PixelIcon";

export function AboutSection() {
  return (
    <section id="about" className="section section-about">
      <SectionHeader
        eyebrow="LV.03 / About"
        title="Who"
        titleItalic="this is"
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
            Simply put, I love building <em>stories</em>, making <em>games</em>,
            and creating products that have a real, tangible impact on people.
            I'm currently completing my <em>Master's in Human-Computer
            Interaction</em> at Carnegie Mellon. My work lives at the
            intersection of human-centered design and emerging technology.
          </p>
          <p>
            Whether I'm engineering data pipelines for a{" "}
            <span className="highlight">generative AI radiology platform</span>,
            designing interactive 3D environments in{" "}
            <span className="highlight">Unity</span>, or wiring up{" "}
            <span className="highlight">Arduino</span> sensors for physical
            computing projects, I thrive on getting scrappy and prototyping
            directly in code. I'm incredibly hungry to keep learning, tackle
            complex problems, and build intuitive experiences that{" "}
            <em>actually matter</em>.
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
              Open to <span className="highlight">design technologist</span>,{" "}
              <span className="highlight">UX engineer</span>, and{" "}
              <span className="highlight">AI interaction</span> roles starting{" "}
              <em>August 2026</em>.
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
        <a
          href="#/about"
          target="_blank"
          rel="noopener noreferrer"
          className="section-cta"
        >
          <PixelIcon name="arrow" size={11} />
          <span>Full bio · the longer version</span>
          <span className="section-cta-key">↗</span>
        </a>
      </div>
    </section>
  );
}
