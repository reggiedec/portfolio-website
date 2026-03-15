import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import { asset } from "../utils/asset";
import { TraceabilityDiagram } from "./TraceabilityDiagram";
import { MedSynDiagram } from "./MedSynDiagram";

interface ProjectDetailPanelProps {
  project: Project;
  accentColor: string;
  onEject: () => void;
}

export function ProjectDetailPanel({
  project,
  accentColor,
  onEject,
}: ProjectDetailPanelProps) {
  const hasSystemDiagram = project.hasSystemDiagram ?? false;
  const hasMedSynArchitecture = project.hasMedSynArchitecture ?? false;

  return (
    <motion.div
      key="project-detail"
      className="project-detail hud-panel overlay-panel"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        borderColor: accentColor,
        transition: {
          opacity: { type: "spring", stiffness: 300, damping: 25 },
          y: { type: "spring", stiffness: 300, damping: 25 },
          scale: { type: "spring", stiffness: 300, damping: 25 },
          borderColor: { duration: 0.5, ease: "easeInOut" },
        },
      }}
      exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } }}
      style={
        {
          ["--accent"]: accentColor,
          ["--accent-dim"]: `${accentColor}99`,
        } as React.CSSProperties
      }
    >
      <div className="project-detail-grid">
        {/* Column 1: Metadata */}
        <div className="project-meta">
          <dl>
            <dt>Year</dt>
            <dd>{project.year}</dd>
            {project.type && (
              <>
                <dt>Type</dt>
                <dd>{project.type}</dd>
              </>
            )}
          </dl>
        </div>

        {/* Column 2: The Hook */}
        <div className="project-hook">
          <motion.h2
            className="project-title"
            animate={{ color: accentColor }}
            transition={{ duration: 0.4 }}
          >
            {project.title}
          </motion.h2>
          <p className="project-summary">{project.description}</p>
          <div className="project-three-point-spec">
            <p><strong>THE CHALLENGE:</strong> {project.challenge}</p>
            <p><strong>THE INTERVENTION:</strong> {project.intervention}</p>
            <p><strong>THE IMPACT:</strong> {project.impact}</p>
            {project.hciAngle && (
              <p className="project-hci-angle"><strong>THE HCI ANGLE:</strong> {project.hciAngle}</p>
            )}
          </div>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              style={{ color: accentColor }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Full Project →
            </motion.a>
          )}
        </div>

        {/* Column 3: The System */}
        <div className="project-system">
          {hasMedSynArchitecture ? (
            <MedSynDiagram accentColor={accentColor} />
          ) : hasSystemDiagram ? (
            <TraceabilityDiagram accentColor={accentColor} />
          ) : project.thumbnail ? (
            <div className="project-system-default">
              <img
                src={project.thumbnail.startsWith("http") ? project.thumbnail : asset(project.thumbnail)}
                alt={project.title}
                className="project-thumbnail"
              />
              <p className="project-system-hint">System map or data spec</p>
            </div>
          ) : (
            <div className="project-system-default">
              <p className="project-system-hint">{project.type}</p>
            </div>
          )}
        </div>
      </div>

      <motion.button
        className="eject-btn"
        onClick={onEject}
        animate={{
          color: accentColor,
          borderColor: accentColor,
          backgroundColor: `${accentColor}15`,
        }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.05, backgroundColor: `${accentColor}25` }}
        whileTap={{ scale: 0.95 }}
      >
        Eject Cartridge
      </motion.button>
    </motion.div>
  );
}
