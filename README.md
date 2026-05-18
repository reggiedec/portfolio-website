# Regine Decossard — Portfolio

Editorial single-page portfolio for **Regine Decossard** — designer and researcher in the M.S. Human-Computer Interaction program at Carnegie Mellon University.

**Live site:** [reggiedec.github.io/portfolio-website](https://reggiedec.github.io/portfolio-website)

## Stack

- React 19 + TypeScript + Vite
- Pure CSS (no framework) — `Instrument Serif` / `Inter` / `JetBrains Mono`
- Deploys to GitHub Pages via Actions on push to `main`

## Editing content

All content lives in `src/data/`:

| File | What it controls |
|---|---|
| `src/data/projects.ts` | Selected work (case studies, links, video paths) |
| `src/data/experience.ts` | Roles, education, "previously with", skills |
| `src/data/writing.ts` | Writing / editorial / essays list |

Hero copy lives in `src/components/Hero.tsx`. About prose lives in `src/components/AboutSection.tsx`.

## Local dev

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```
