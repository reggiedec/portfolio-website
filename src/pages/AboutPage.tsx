import { useEffect } from "react";
import { Link } from "react-router-dom";
import { previouslyWith } from "../data/experience";
import { PixelIcon } from "../components/PixelIcon";
import { HUD } from "../components/HUD";
import { asset } from "../utils/asset";
import "../App.css";

/** Dedicated /about page · the long-form version of who Regine is. */
export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About · Regine DeCossard";
    return () => {
      document.title = "Regine DeCossard · HCI, design, research";
    };
  }, []);

  return (
    <div className="page page-detail">
      <header className="detail-nav">
        <Link to="/" className="detail-back">
          <span className="detail-back-arrow">←</span>
          <span>portfolio index</span>
        </Link>
        <span className="detail-nav-meta">
          <PixelIcon name="speech" size={10} /> About · long form
        </span>
      </header>

      <main className="detail-main">
        <section className="detail-hero">
          <p className="detail-eyebrow">
            <PixelIcon name="speech" size={12} /> LV.03 · About
          </p>
          <h1 className="detail-title">
            Hi, I'm <em>Regine.</em>
          </h1>
          <p className="detail-sub">
            <em>Product designer · creative technologist · bringing ideas to life.</em>
          </p>
        </section>

        <section className="detail-body">
          <p className="detail-lede">
            I'm a <strong>product designer</strong> and{" "}
            <strong>creative technologist</strong>. Simply put, I love building
            stories, making games, and creating products that have a real,
            tangible impact on people.
          </p>
          <p className="detail-lede">
            I'm currently completing my Master's in{" "}
            <strong>Human-Computer Interaction</strong> at Carnegie Mellon
            University. My work lives at the intersection of{" "}
            <em>human-centered design</em> and <em>emerging technology</em>.
          </p>
          <p className="detail-lede">
            Whether I'm engineering data pipelines for a generative AI
            radiology platform, designing interactive 3D environments in Unity,
            or wiring up Arduino sensors for physical computing projects, I
            thrive on getting scrappy and prototyping directly in code. I'm
            incredibly hungry to keep learning, tackle complex problems, and
            build intuitive experiences that <em>actually matter</em>.
          </p>

          <div className="detail-blocks">
            <div className="detail-block">
              <p className="meta-label">Origin</p>
              <p className="detail-block-body">
                BBA from <strong>Parsons</strong> with a minor in Creative
                Coding + Communication Design. Started at the seam between
                business and design, kept drifting toward the runtime side of
                that seam.
              </p>
            </div>
            <div className="detail-block">
              <p className="meta-label">Now</p>
              <p className="detail-block-body">
                Finishing an <strong>MHCI</strong> at Carnegie Mellon.
                Capstone with aSa on industrial-ERP mobile experiences, game
                research in the Auditory Lab on Terratopia, a CHI PLAY '26
                paper on transformational games, F1Tenth autonomous-racing work
                with ApproxiMPC, and an embedding-based viewport for auditing
                generative CT models with the Data Interaction Group.
              </p>
            </div>
            <div className="detail-block">
              <p className="meta-label">Tools I lean on</p>
              <p className="detail-block-body">
                Unity, Unreal Engine, ROS2, React, Python, Figma, Three.js,
                Arduino, Raspberry Pico, custom PCBs, and a bias toward
                shipping the rough thing first and arguing about it after.
              </p>
            </div>
            <div className="detail-block">
              <p className="meta-label">Off the clock</p>
              <p className="detail-block-body">
                Reading film theory, looking up fashion trends, and losing (but
                still playing) video games.
              </p>
            </div>
          </div>

          <div className="detail-notes">
            <p className="meta-label">Previously with</p>
            <ul className="detail-notes-list">
              {previouslyWith.map((p) => (
                <li key={p.org}>
                  <strong>{p.org}</strong>
                  {p.detail && <> · {p.detail}</>}
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-meta">
            <div className="detail-meta-block">
              <p className="meta-label">Reach me</p>
              <ul className="detail-links">
                <li>
                  <a
                    href="mailto:reggiedecossard@gmail.com"
                    className="detail-link"
                  >
                    reggiedecossard@gmail.com <span aria-hidden>↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={asset("/Regine_DeCossard_Resume.pdf")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-link"
                  >
                    Résumé (PDF) <span aria-hidden>↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/reginedecossard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-link"
                  >
                    LinkedIn <span aria-hidden>↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <HUD />
    </div>
  );
}
