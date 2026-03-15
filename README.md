# Portfolio · CMU HCI

A portfolio website featuring a 3D modular gaming handheld. Built with React Three Fiber, Three.js, and Framer Motion.

## Features

- **3D Handheld Console** – A portable gaming device at the center of the experience
- **Orbit Controls** – Drag to rotate and explore the device from any angle
- **Project Cartridges** – Click a floating cartridge to animate it into the console slot
- **Live Screen** – When a cartridge is inserted, the 3D screen displays the project thumbnail
- **Spring Physics** – Smooth Framer Motion animations for the project detail panel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Resume & Social Links

Add your resume PDF to `public/Regine_Decossard_Resume.pdf` for the RESUME link. Update URLs in `src/components/SocialLinks.tsx` for LinkedIn, GitHub, and email.

## Customizing Projects

Edit `src/data/projects.ts` to add your own projects:

```ts
{
  id: "my-project",
  title: "Project Name",
  description: "Brief description...",
  thumbnail: "https://example.com/image.jpg",
  tags: ["HCI", "UX", "Research"],
  link: "https://...",
  year: "2025",
}
```

## Tech Stack

- **React** + **TypeScript** + **Vite**
- **React Three Fiber** – React renderer for Three.js
- **@react-three/drei** – Useful R3F helpers (OrbitControls, RoundedBox, Html, Environment)
- **Framer Motion** – Spring animations for the 2D UI
