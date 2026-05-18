import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { WorkSection } from "./components/WorkSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { AboutSection } from "./components/AboutSection";
import { ContactFooter } from "./components/ContactFooter";
import { HUD } from "./components/HUD";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Nav />
      <main className="page-main">
        <Hero />
        <Divider label="Selected Work" />
        <WorkSection />
        <Divider label="Experience" />
        <ExperienceSection />
        <Divider label="About" />
        <AboutSection />
      </main>
      <ContactFooter />
      <HUD />
    </div>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div className="divider" role="separator">
      <span className="divider-rule" />
      <span className="divider-label">§ {label}</span>
      <span className="divider-rule" />
    </div>
  );
}

export default App;
