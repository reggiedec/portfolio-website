import { SectionHeader } from "./WorkSection";

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
            I'm a <em>technical designer</em> and{" "}
            <em>creative technologist</em> trained at Parsons and now in the
            Master's of Human-Computer Interaction program at Carnegie Mellon.
            I work where design specs meet runtime — the part of the project
            where a wireframe has to compile, talk to a database, and survive
            being held by someone wearing gloves.
          </p>
          <p>
            I came up in strategic design, which taught me to treat "design" as
            a method instead of an aesthetic. So whether I'm modeling a
            handheld in Onshape, writing offline-first payload specs for
            ruggedized Android scanners, building synthetic-data pipelines for
            radiology training, or mapping a Digital Product Passport for a
            textile company, I'm asking the same questions:{" "}
            <em>where does this break, who feels it first, and what do we owe
            them?</em>
          </p>
          <p>
            Outside of school I keep a backlog of half-built side projects, run
            research nobody asked me to run, and read more film theory than is
            reasonable.
          </p>
        </div>

        <aside className="about-side">
          <div className="about-stat">
            <span className="about-stat-k">▸ Class</span>
            <span className="about-stat-v">
              Technical Designer · Creative Technologist · HCI Researcher.
            </span>
          </div>
          <div className="about-stat">
            <span className="about-stat-k">▸ Now</span>
            <span className="about-stat-v">
              Pittsburgh — capstone delivery, research dissemination, and
              shipping the things I said I'd ship.
            </span>
          </div>
          <div className="about-stat">
            <span className="about-stat-k">▸ Next</span>
            <span className="about-stat-v">
              Open to product design, HCI research, and human-AI roles starting
              August 2026.
            </span>
          </div>
          <div className="about-stat">
            <span className="about-stat-k">▸ Off the clock</span>
            <span className="about-stat-v">
              Reading film theory, looking up fashion trends, and losing —
              but still playing — video games.
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}
