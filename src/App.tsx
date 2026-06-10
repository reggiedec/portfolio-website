import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { WorkSection } from "./components/WorkSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { AboutSection } from "./components/AboutSection";
import { ContactFooter } from "./components/ContactFooter";
import { HUD } from "./components/HUD";
import { PixelIcon } from "./components/PixelIcon";
import "./App.css";

function Sparkle() {
  return (
    <div className="sparkle-row" aria-hidden>
      <span className="sparkle-line" />
      <PixelIcon name="diamond" size={10} className="sparkle-icon" />
      <PixelIcon name="star" size={10} className="sparkle-icon sparkle-icon-soft" />
      <PixelIcon name="diamond" size={10} className="sparkle-icon" />
      <span className="sparkle-line" />
    </div>
  );
}

function App() {
  return (
    <div className="page">
      <Nav />
      <main className="page-main">
        <Hero />
        <Sparkle />
        <WorkSection />
        <Sparkle />
        <ExperienceSection />
        <Sparkle />
        <AboutSection />
      </main>
      <ContactFooter />
      <HUD />
    </div>
  );
}

export default App;
