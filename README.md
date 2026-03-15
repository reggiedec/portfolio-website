# Regine Decossard · Portfolio

Portfolio website for **Regine Decossard** — designer and researcher in the Master of Human-Computer Interaction program at Carnegie Mellon University.

Built with a 3D "Regine-Station" handheld console, project cartridges, and a bubblegum-inspired design system.

**Live site:** [reggiedec.github.io/portfolio-website](https://reggiedec.github.io/portfolio-website)

## Features

- **3D Regine-Station Console** – Handheld device with boot sequence, idle state, and live project video on the screen
- **Project Cartridges** – Five cartridges (Aisle Guide, Cognitive Load, aSa ERP, MedSyn, Chilewich) that snap into the console
- **Project Footer** – Video player and system links (Figma, Onshape, GitHub, Wix) when a cartridge with video is inserted
- **About Me & Say Hello** – HUD panels with bio and contact links
- **Framer Motion** – Spring animations, flash effect on cartridge insert, slide-up footer

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/data/projects.ts` – Project data, links, videos
- `src/components/Scene.tsx` – 3D scene (console, cartridges, desk)
- `src/components/HandheldConsole.tsx` – Console mesh and screen texture
- `src/components/ProjectFooter.tsx` – Video player and system links
- `src/components/ProjectDetailPanel.tsx` – Project spec and metadata

## Tech Stack

- **React** + **TypeScript** + **Vite**
- **React Three Fiber** + **Three.js** – 3D rendering
- **@react-three/drei** – OrbitControls, RoundedBox, Environment
- **Framer Motion** – UI animations

## Deployment

Deploys to GitHub Pages via GitHub Actions on push to `main`. See [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
