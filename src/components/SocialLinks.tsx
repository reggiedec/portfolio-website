import { motion } from "framer-motion";

const socials = [
  { name: "RESUME", url: "/Regine_Decossard_Resume.pdf", color: "#8e7dbe", external: true },
  { name: "LINKEDIN", url: "https://www.linkedin.com/in/regine-decossard/", color: "#2ec0f9", external: true },
  { name: "GITHUB", url: "https://github.com/reggiedec", color: "#8e7dbe", external: true },
  { name: "EMAIL", url: "mailto:rdecossa@andrew.cmu.edu", color: "#ff0035", external: false },
];

interface SocialLinksProps {
  onAboutClick?: () => void;
  onSayHelloClick?: () => void;
}

export function SocialLinks({ onAboutClick, onSayHelloClick }: SocialLinksProps) {
  return (
    <div className="social-links-overlay">
      <div className="social-links-top">
        {socials.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target={link.external ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <span className="social-link-text">{link.name}</span>
            <span
              className="social-link-underline"
              style={{ backgroundColor: link.color }}
            />
            <span className="social-link-glitch" />
          </motion.a>
        ))}
        {onAboutClick && (
          <motion.button
            type="button"
            className="social-link social-link-btn"
            onClick={onAboutClick}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <span className="social-link-text">ABOUT ME</span>
            <span className="social-link-underline" style={{ backgroundColor: "#63d471" }} />
            <span className="social-link-glitch" />
          </motion.button>
        )}
        {onSayHelloClick && (
          <motion.button
            type="button"
            className="social-link social-link-btn"
            onClick={onSayHelloClick}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <span className="social-link-text">SAY HELLO</span>
            <span className="social-link-underline" style={{ backgroundColor: "#ff0035" }} />
            <span className="social-link-glitch" />
          </motion.button>
        )}
      </div>

      <div className="social-links-bottom">
        <div className="system-status">SYSTEM STATUS: ACTIVE</div>
        <div className="system-name">
          <span className="system-pulse" />
          <h1 className="system-title">
            REGINE <span className="system-title-light">DECOSSARD</span>
          </h1>
        </div>
        <p className="system-subtitle">MHCI @ CMU // STRATEGIC DESIGN</p>
        <p className="social-tagline">
          I design human-centered intelligent systems that bridge physical environments, AI-driven
          interfaces, and complex technological ecosystems.
        </p>
      </div>
    </div>
  );
}
