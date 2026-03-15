import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import { asset } from "../utils/asset";

const ExternalLinkIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

interface ProjectFooterProps {
  project: Project;
  accentColor: string;
  onClose: () => void;
}

export function ProjectFooter({ project, accentColor, onClose }: ProjectFooterProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const rawVideo = project.video ?? project.videoUrl;
  const videoPath = rawVideo ? (rawVideo.startsWith("http") ? rawVideo : asset(rawVideo)) : undefined;
  const links = project.links ?? (project.link ? [{ label: "VIEW FULL PROJECT", url: project.link }] : []);

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  return (
    <motion.div
      className="project-footer"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      style={
        {
          ["--accent"]: accentColor,
          ["--accent-glow"]: `${accentColor}40`,
        } as React.CSSProperties
      }
    >
      <button
        type="button"
        className="project-footer-close"
        onClick={onClose}
        style={{ color: accentColor }}
        title="Close"
        aria-label="Close"
      >
        ×
      </button>
      <div className="project-footer-inner">
        <div className="project-footer-video">
          <div className="project-footer-video-frame" style={{ borderColor: accentColor }}>
            {videoPath ? (
              <>
                <video
                  ref={videoRef}
                  src={videoPath}
                  loop
                  muted
                  playsInline
                  autoPlay
                  controls
                  className="project-footer-video-el"
                />
                <button
                  type="button"
                  className="project-footer-fullscreen"
                  onClick={toggleFullscreen}
                  style={{ color: accentColor }}
                  title="Full screen"
                >
                  {isFullscreen ? "⊡" : "⊞"}
                </button>
              </>
            ) : (
              <div className="project-footer-video-placeholder">
                <span>No video</span>
              </div>
            )}
          </div>
        </div>

        <div className="project-footer-links">
          <div className="project-footer-links-label">SYSTEM LINKS</div>
          <div className="project-footer-links-list">
            {links.map((item) => (
              <motion.a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-footer-link"
                style={{
                  borderColor: accentColor,
                  color: accentColor,
                }}
                whileHover={{ backgroundColor: `${accentColor}20`, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{item.label}</span>
                <span className="project-footer-link-icon">
                  <ExternalLinkIcon />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
