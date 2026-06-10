import { asset } from "../utils/asset";

const links = [
  { label: "reggiedecossard@gmail.com", url: "mailto:reggiedecossard@gmail.com" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/regine-decossard/" },
  { label: "GitHub", url: "https://github.com/reggiedec" },
  { label: "Résumé (PDF)", url: asset("/Regine_DeCossard_Resume.pdf") },
];

export function ContactFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="contact" id="contact">
      <div className="contact-inner">
        <p className="contact-eyebrow">· Like what you see?</p>
        <h2 className="contact-title">
          Drop me a <em>line.</em>
        </h2>
        <ul className="contact-links">
          {links.map((l) => (
            <li key={l.url}>
              <a
                href={l.url}
                target={l.url.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-link-label">{l.label}</span>
                <span className="contact-link-arrow" aria-hidden>
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="contact-bottom">
        <span>
          Designed &amp; coded by Regine DeCossard. © {year}. All rights
          reserved.
        </span>
        <span className="contact-bottom-meta">
          Built with React, TypeScript, and a lot of coffee.
        </span>
      </div>
    </footer>
  );
}
