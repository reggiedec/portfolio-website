export interface ExperienceEntry {
  /** kebab-case slug used in `/experience/:slug` */
  slug: string;
  role: string;
  org: string;
  location?: string;
  period: string;
  blurb: string;
  bullets?: string[];
  tags?: string[];
  link?: string;
}

export function findExperience(slug: string): ExperienceEntry | undefined {
  return experience.find((e) => e.slug === slug);
}

export const experience: ExperienceEntry[] = [
  {
    slug: "cmu-auditory-lab",
    role: "Research Assistant · Auditory Lab",
    org: "Carnegie Mellon University · Prof. Laurie Heller",
    location: "Pittsburgh, PA",
    period: "Jan 2026 → present",
    blurb:
      "Game research and Unreal development inside Prof. Heller's Auditory Lab · working on Terratopia, a VR climate game built around echolocation and audio-first storytelling.",
    bullets: [
      "Game-test and contribute to ongoing development cycles across tutorial, gameplay, and ending sequences.",
      "Work in Unreal Engine, extending existing Blueprints · including implementing a runtime restart button used by the team during playtests.",
      "Collaborate with Portuguese students on the European Portuguese (PT-PT) localization of tutorial, narrative, and ending video.",
      "Support Prof. Heller's broader climate-games research with audio-first design feedback and structured player testing.",
    ],
    tags: ["Research", "Games", "Unreal", "VR", "Audio", "Climate"],
  },
  {
    slug: "cmu-games",
    role: "Research Assistant · Game Researcher",
    org: "Carnegie Mellon University",
    location: "Pittsburgh, PA",
    period: "Jan 2026 → present",
    blurb:
      "Leading an independent study on transformational games · measuring whether play can rewire how students relate to failure and iteration.",
    bullets: [
      "Direct the end-to-end research lifecycle: study design, IRB approval, qualitative and quantitative analysis.",
      "Design research instruments in partnership with production and prototyping teams.",
      "Facilitate workshops translating research findings into game design decisions.",
      "Submitted research findings and game presentation to CHI and CHI PLAY.",
    ],
    tags: ["Research", "Games", "Education", "CHI"],
  },
  {
    slug: "cmu-dig",
    role: "Research Assistant · GenAI for Radiology",
    org: "CMU Data Interaction Group (DIG)",
    location: "Pittsburgh, PA",
    period: "Dec 2025 → present",
    blurb:
      "Building human-centered GenAI tooling for radiology training as part of the MedSyn project.",
    bullets: [
      "Engineered Python pipelines to map and preprocess real radiology data for model evaluation.",
      "Tested an open-source GenAI radiology viewer, integrating synthetic outputs into clinical and educational workflows.",
    ],
    tags: ["GenAI", "Medical Imaging", "Python"],
  },
  {
    slug: "mbg360",
    role: "Front-End Development Intern",
    org: "MBG360",
    location: "New York, NY",
    period: "Apr 2025 → Aug 2025",
    blurb:
      "Designed and shipped responsive web pages for B2B product launches across HTML/CSS/JS, Kajabi, and Squarespace.",
    bullets: [
      "Built custom front-end components and high-fidelity prototypes from scratch.",
      "Iterated directly with finance and marketing stakeholders.",
      "Optimized performance and accessibility, improving page load on B2B landing pages.",
    ],
    tags: ["Front-End", "B2B", "HTML/CSS/JS"],
  },
  {
    slug: "new-school-free-press",
    role: "Web Developer",
    org: "New School Free Press",
    location: "New York, NY",
    period: "Sep 2024 → Jun 2025",
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
    slug: "whitney",
    role: "Digital Content Intern",
    org: "Whitney Museum of American Art",
    location: "New York, NY",
    period: "Sep 2024 → Dec 2024",
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
    slug: "met",
    role: "Digital Intern",
    org: "The Metropolitan Museum of Art",
    location: "New York, NY",
    period: "Sep 2023 → Dec 2023",
    blurb:
      "Digital intern on the Met's content team · contributed to Jacolby Satterwhite's Great Hall commission, Connections, and Perspectives.",
    bullets: [
      "Contributed digital production support for Jacolby Satterwhite's Great Hall video commission · including audio edits and asset prep.",
      "Worked on Connections · the editorial series surfacing unexpected ties between works across the collection.",
      "Edited and mixed broadcast and film audio for pieces published through the Perspectives platform.",
      "Supported end-to-end content distribution workflows across video, audio, and editorial assets.",
    ],
    tags: ["Editorial", "Museum", "Audio", "Digital Content"],
  },
];

export interface Affiliation {
  org: string;
  detail?: string;
}

export const previouslyWith: Affiliation[] = [
  { org: "Carnegie Mellon University", detail: "MHCI · DIG · Auditory Lab · ScottyLabs" },
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
    period: "Aug 2025 → Aug 2026",
    notes: ["ScottyLabs Designer", "TartanHacks Organizer & Judge", "Dean's List"],
  },
  {
    school: "Parsons School of Design",
    degree: "B.B.A., Business Administration · Minor: Creative Coding & Communication Design",
    period: "Aug 2021 → May 2025",
    notes: ["Dean's List 2021–2025"],
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "3D, Game Dev & Hardware",
    items: [
      "Unity",
      "Unreal Engine",
      "Three.js",
      "C#",
      "ROS / ROS2",
      "Arduino",
      "Raspberry Pico",
      "PCB Design",
      "Physical Computing",
    ],
  },
  {
    label: "Design & Prototyping",
    items: [
      "UI / UX Design",
      "Interaction Design",
      "Wireframing",
      "Prototyping",
      "Product Design",
      "AI Tools",
    ],
  },
  {
    label: "Front-End / Web",
    items: ["HTML / CSS", "JavaScript", "React", "Next.js", "Bootstrap", "jQuery"],
  },
  {
    label: "Data, AI & Analysis",
    items: [
      "Python",
      "R",
      "BigQuery",
      "Jupyter",
      "Generative AI",
      "Claude / Claude Code",
      "Data Analysis",
    ],
  },
  {
    label: "Programming",
    items: ["Java", "C / C++", "iOS / Swift"],
  },
];
