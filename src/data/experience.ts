export interface ExperienceEntry {
  id: string;
  role: string;
  org: string;
  location?: string;
  period: string;
  blurb: string;
  bullets?: string[];
  tags?: string[];
  link?: string;
}

export const experience: ExperienceEntry[] = [
  {
    id: "cmu-auditory",
    role: "Research Assistant — Auditory Lab",
    org: "Carnegie Mellon University · Prof. Laurie Heller",
    location: "Pittsburgh, PA",
    period: "Jan 2026 — present",
    blurb:
      "Game research and Unreal development inside Prof. Laurie Heller's Auditory Lab — working on Terratopia, a VR climate game built around echolocation and audio-first storytelling.",
    bullets: [
      "Game-test and contribute to ongoing development cycles across tutorial, gameplay, and ending sequences.",
      "Work in Unreal Engine, extending existing Blueprints — including implementing a runtime restart button used by the team during playtests.",
      "Collaborate with Portuguese students on the European Portuguese (PT-PT) localization of tutorial, narrative, and ending video.",
      "Support Prof. Heller's broader climate-games research with audio-first design feedback and structured player testing.",
    ],
    tags: ["Research", "Games", "Unreal", "VR", "Audio", "Climate"],
  },
  {
    id: "cmu-games",
    role: "Research Assistant — Game Researcher",
    org: "Carnegie Mellon University",
    location: "Pittsburgh, PA",
    period: "Jan 2026 — present",
    blurb:
      "Leading an independent study on transformational games — measuring whether play can rewire how students relate to failure and iteration.",
    bullets: [
      "Direct the end-to-end research lifecycle: study design, IRB approval, qualitative and quantitative analysis.",
      "Design research instruments in partnership with production and prototyping teams.",
      "Facilitate workshops translating research findings into game design decisions.",
    ],
    tags: ["Research", "Games", "Education"],
  },
  {
    id: "cmu-dig",
    role: "Research Assistant — GenAI for Radiology",
    org: "CMU Data Interaction Group (DIG)",
    location: "Pittsburgh, PA",
    period: "Dec 2025 — present",
    blurb:
      "Building human-centered GenAI tooling for radiology training as part of the MedSyn project.",
    bullets: [
      "Engineered Python pipelines to map and preprocess real radiology data for model evaluation.",
      "Tested an open-source GenAI radiology viewer, integrating synthetic outputs into clinical and educational workflows.",
    ],
    tags: ["GenAI", "Medical Imaging", "Python"],
  },
  {
    id: "mbg360",
    role: "Front-End Development Intern",
    org: "MBG360",
    location: "New York, NY",
    period: "Apr 2025 — Aug 2025",
    blurb:
      "Designed and shipped responsive web pages for B2B product launches across HTML/CSS/JS, Figma, Kajabi, and Squarespace.",
    bullets: [
      "Built custom front-end components and high-fidelity prototypes from scratch.",
      "Iterated directly with finance and marketing stakeholders.",
      "Optimized performance and accessibility, improving page load on B2B landing pages.",
    ],
    tags: ["Front-End", "B2B", "Figma"],
  },
  {
    id: "nsfp",
    role: "Web Developer",
    org: "New School Free Press",
    location: "New York, NY",
    period: "Sep 2024 — Jun 2025",
    blurb:
      "Revamped the student newspaper's site and designed bespoke thematic sections for individual issues.",
    bullets: [
      "Rebuilt layout and navigation around editorial readability.",
      "Coded thematic micro-sites for individual stories with responsive, visually-driven layouts.",
      "Produced digital graphics and promo content to grow online readership.",
    ],
    tags: ["Editorial", "Web", "Design"],
  },
  {
    id: "whitney",
    role: "Digital Content Intern",
    org: "Whitney Museum of American Art",
    location: "New York, NY",
    period: "Sep 2024 — Dec 2024",
    blurb:
      "Produced short-form video and digital assets for the Whitney's web and social channels.",
    bullets: [
      "Contributed to strategic planning for upcoming exhibitions.",
      "Conducted archival research for documentary-style video projects.",
      "Supported live-streaming, transcription, and digital asset management.",
    ],
    tags: ["Video", "Editorial", "Museum"],
  },
  {
    id: "met",
    role: "Digital Intern",
    org: "The Metropolitan Museum of Art",
    location: "New York, NY",
    period: "Sep 2023 — Dec 2023",
    blurb:
      "Worked across CMS migration, video archival, and live exhibition support — including the Jacolby Satterwhite Great Hall installation.",
    bullets: [
      "Orchestrated content migration to a new CMS for accessibility and editorial efficiency.",
      "Ran QA on a high-volume video backlog and archived the Connections series.",
      "Edited and mixed broadcast/film audio for digital publication.",
      "Contributed to the Jacolby Satterwhite Great Hall exhibition with interaction-design thinking.",
    ],
    tags: ["Museum", "CMS", "Video", "Interaction"],
  },
];

export interface Affiliation {
  org: string;
  detail?: string;
}

export const previouslyWith: Affiliation[] = [
  { org: "Carnegie Mellon University", detail: "MHCI · DIG · ScottyLabs" },
  { org: "The Metropolitan Museum of Art" },
  { org: "Whitney Museum of American Art" },
  { org: "MBG360" },
  { org: "New School Free Press" },
  { org: "Parsons School of Design", detail: "BBA + Communication Design minor" },
];

export interface Education {
  school: string;
  degree: string;
  period: string;
  notes?: string[];
}

export const education: Education[] = [
  {
    school: "Carnegie Mellon University",
    degree: "M.S., Human-Computer Interaction",
    period: "Aug 2025 — Aug 2026",
    notes: ["ScottyLabs Designer", "TartanHacks Organizer & Judge", "Dean's List"],
  },
  {
    school: "Parsons School of Design",
    degree: "B.B.A., Business Administration",
    period: "Aug 2021 — May 2025",
    notes: ["Minor: Creative Coding & Communication Design", "Dean's List 2021–2025"],
  },
];

export const skills = {
  design: ["Figma", "Adobe CS", "Interaction Design", "Prototyping", "Brand Strategy", "Wireframing"],
  code: ["React", "TypeScript", "Next.js", "Python", "Java", "C/C++", "iOS/Swift", "HTML/CSS/JS"],
  game: ["Unreal Engine", "Blueprints", "VR (Quest)", "Game Testing", "Audio Design"],
  research: ["IRB Studies", "Contextual Inquiry", "Mixed Methods", "Data Analysis", "Jupyter", "R"],
  systems: ["Firebase", "BigQuery", "Heroku", "Bootstrap", "Product Management"],
};
