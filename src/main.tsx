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

/**
 * Cloudflare Web Analytics · cookie-free, privacy-friendly page-view tracking.
 * Set VITE_CF_BEACON_TOKEN in .env.local (locally) or as a GitHub Actions
 * secret (production) to enable. If unset, no beacon is loaded.
 *
 *   token → dash.cloudflare.com → Web Analytics → your site → JS snippet
 */
const cfToken = import.meta.env.VITE_CF_BEACON_TOKEN;
if (cfToken && typeof window !== "undefined") {
  const s = document.createElement("script");
  s.defer = true;
  s.src = "https://static.cloudflareinsights.com/beacon.min.js";
  s.setAttribute("data-cf-beacon", JSON.stringify({ token: cfToken }));
  document.head.appendChild(s);
}

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
