import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { ProjectDetailPage } from "./pages/ProjectDetailPage.tsx";
import { ExperienceDetailPage } from "./pages/ExperienceDetailPage.tsx";
import { WorkIndexPage } from "./pages/WorkIndexPage.tsx";
import { ExperienceIndexPage } from "./pages/ExperienceIndexPage.tsx";
import { AboutPage } from "./pages/AboutPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/work" element={<WorkIndexPage />} />
        <Route path="/work/:slug" element={<ProjectDetailPage />} />
        <Route path="/experience" element={<ExperienceIndexPage />} />
        <Route path="/experience/:slug" element={<ExperienceDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
