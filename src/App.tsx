import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scene } from "./components/Scene";
import { SocialLinks } from "./components/SocialLinks";
import { BackgroundMusic } from "./components/BackgroundMusic";
import { CustomCursor } from "./components/CustomCursor";
import { ProjectDetailPanel } from "./components/ProjectDetailPanel";
import { ProjectFooter } from "./components/ProjectFooter";
import type { Project } from "./data/projects";
import "./App.css";

const DEFAULT_ACCENT = "#2ec0f9";

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [pendingProject, setPendingProject] = useState<Project | null>(null);
  const [hoveredCartridge, setHoveredCartridge] = useState<Project | null>(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [showProjectFooter, setShowProjectFooter] = useState(false);

  const accentColor = selectedProject?.color ?? DEFAULT_ACCENT;

  useEffect(() => {
    if (selectedProject) {
      setShowFlash(true);
      if (selectedProject.video || selectedProject.videoUrl) {
        setShowProjectFooter(true);
      }
      const t = setTimeout(() => setShowFlash(false), 400);
      return () => clearTimeout(t);
    }
  }, [selectedProject?.id]);

  useEffect(() => {
    const prefersPointer = window.matchMedia("(pointer: fine)").matches;
    if (prefersPointer) {
      document.body.classList.add("custom-cursor-active");
    }
    return () => document.body.classList.remove("custom-cursor-active");
  }, []);

  const handleSelectProject = useCallback((project: Project | null) => {
    if (project === null) {
      setSelectedProject(null);
      setPendingProject(null);
      setShowProjectFooter(false);
      return;
    }
    if (selectedProject?.id === project.id) {
      setSelectedProject(null);
      setPendingProject(null);
      return;
    }
    if (selectedProject) {
      setPendingProject(project);
      setSelectedProject(null);
    } else {
      setSelectedProject(project);
      setPendingProject(null);
    }
  }, [selectedProject]);

  useEffect(() => {
    if (pendingProject && !selectedProject) {
      const t = setTimeout(() => {
        setSelectedProject(pendingProject);
        setPendingProject(null);
      }, 600);
      return () => clearTimeout(t);
    }
  }, [pendingProject, selectedProject]);

  const activePanel = showAbout ? "about" : showContact ? "contact" : selectedProject ? "project" : null;

  return (
    <div className="app">
      <CustomCursor hoverColor={hoveredCartridge?.color ?? null} />
      <BackgroundMusic selectedProject={selectedProject} />
      <SocialLinks
        onAboutClick={() => {
          setSelectedProject(null);
          setPendingProject(null);
          setShowContact(false);
          setShowAbout(true);
        }}
        onSayHelloClick={() => {
          setSelectedProject(null);
          setPendingProject(null);
          setShowAbout(false);
          setShowContact(true);
        }}
      />
      <header className="header-overlay">
        <motion.h1
          className="name"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          ~ My Work ~
        </motion.h1>
        <motion.p
          className="nav-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Use left/right click and mouse wheel to explore · Touch with one or two fingers on mobile
        </motion.p>
      </header>

      <main className="main room-layout">
        <div className="scene-wrapper room-scene" style={{ position: "relative" }}>
          <motion.div
            className="scene-flash"
            animate={{ opacity: showFlash ? 1 : 0 }}
            transition={{ duration: 0.15 }}
            style={{ position: "absolute", inset: 0, borderRadius: "inherit" }}
          />
          <Scene
            selectedProject={selectedProject}
            onSelectProject={handleSelectProject}
            onCartridgeHover={setHoveredCartridge}
          />
        </div>

        <AnimatePresence mode="wait">
          {activePanel === "project" && selectedProject ? (
            <ProjectDetailPanel
              project={selectedProject}
              accentColor={accentColor}
              onEject={() => handleSelectProject(null)}
            />
          ) : activePanel === "about" ? (
            <motion.div
              key="about"
              className="about-panel hud-panel overlay-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <h2>~ About Me ~</h2>
              <p className="about-bio">
                I am a designer and researcher currently in the{" "}
                <strong>Master of Human-Computer Interaction program at Carnegie Mellon</strong>. My
                work lives at the intersection of complex technological systems and human behavior.
              </p>
              <p className="about-bio">
                Coming from a background in <strong>Strategic Design at Parsons</strong>, I view
                "design" not just as an aesthetic choice, but as a method for tracing data and
                intent through physical and digital environments. Whether I'm engineering a handheld
                retail assistant in <strong>CAD</strong>, mapping a sustainable supply chain for{" "}
                <strong>Chilewich</strong>, or building an adaptive AI playground, my goal is the
                same: <strong>to make complex systems legible, ethical, and human-centered.</strong>
              </p>
              <p className="about-credits">
                Portfolio inspired by{" "}
                <a href="https://www.sooahs-room-folio.com/" target="_blank" rel="noopener noreferrer">
                  Soo-ah's Room Folio
                </a>{" "}
                and Bruno Simon's three.js work.
              </p>
              <button className="close-btn" onClick={() => setShowAbout(false)}>
                Close
              </button>
            </motion.div>
          ) : activePanel === "contact" ? (
            <motion.div
              key="contact"
              className="contact-panel hud-panel overlay-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <h2>~ Say Hello ~</h2>
              <p className="contact-intro">
                If you like HCI, design, and building things that matter—let's connect!
              </p>
              <div className="contact-links">
                <a href="mailto:rdecossa@andrew.cmu.edu" className="contact-link">
                  Email
                </a>
                <a href="https://github.com/reggiedec" target="_blank" rel="noopener noreferrer" className="contact-link">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/regine-decossard/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  LinkedIn
                </a>
              </div>
              <button className="close-btn" onClick={() => setShowContact(false)}>
                Close
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="instructions"
              className="instructions hud-panel overlay-panel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p>Click a project cartridge on the desk to insert it into the console</p>
              <p className="hint">Click "About Me" or "Say Hello" on the wall to learn more</p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedProject && showProjectFooter && (selectedProject.video || selectedProject.videoUrl) && (
            <ProjectFooter
              project={selectedProject}
              accentColor={accentColor}
              onClose={() => setShowProjectFooter(false)}
            />
          )}
        </AnimatePresence>
      </main>

      <footer className="footer-overlay">
        <p>Master's in HCI · Carnegie Mellon University</p>
      </footer>
    </div>
  );
}

export default App;
