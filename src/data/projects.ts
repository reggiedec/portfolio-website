export interface ProjectLink {
  label: string;
  url: string;
}

export type ProjectIcon =
  | "wrench"
  | "cross"
  | "vr"
  | "bag"
  | "brain"
  | "leaf"
  | "controller";

export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  year: string;
  type: string;
  role?: string;
  status?: "ongoing" | "shipped" | "research" | "archived";
  description: string;
  challenge?: string;
  intervention?: string;
  impact?: string;
  notes?: string[];
  thumbnail?: string;
  video?: string;
  tags: string[];
  links?: ProjectLink[];
  featured?: boolean;
  icon?: ProjectIcon;
}

export const projects: Project[] = [
  {
    id: "asa-erp",
    index: "01",
    title: "aSa — Data Distribution Bridge",
    subtitle: "A contextual, event-driven mobile extension for a desktop ERP that runs the steel yard",
    year: "Jan 2026 — present",
    type: "MHCI Capstone · Applied Systems Associates",
    role: "Technical Designer",
    status: "ongoing",
    description:
      "Pitched, scoped, and designed a mobile system that doesn't try to be the desktop ERP — it bridges the desktop to the people, scanners, and forklifts that operate in its blind spots.",
    challenge:
      "aSa runs the back-office for industrial steel — every cut, every stack, every weight ticket. But the yard runs on radios, paper, and shadow spreadsheets. A 1:1 mobile port would just move the friction. The real problem is the dead zones — physical Wi-Fi dead zones and digital ones, where software state and shop-floor reality stop talking to each other.",
    intervention:
      "Shifted the product strategy from feature-replication to a contextual, event-driven Data Distribution Bridge. Specified offline-first data queues and REST API payload structures so ruggedized Zebra Android scanners keep working in severe Wi-Fi dead zones. Translated generative field research into technical requirements, mapping the exact breakdowns between digital state and physical \"information dead ends\" into targeted, role-specific interfaces. Validated future-state flows through bodystorming and rapid prototyping with foremen, yard operators, and engineering stakeholders.",
    impact:
      "Secured immediate stakeholder buy-in with a 97% evaluation score on a two-way communication loop that intercepts user errors at the edge and protects backend WIP data integrity. Demonstrated how the mobile system eliminates manual radio chatter and shadow spreadsheets without disrupting the legacy data model.",
    notes: [
      "Generative field research at active steel yards and fabrication floors",
      "Strategy shift: 1:1 feature replication → event-driven Data Distribution Bridge",
      "Offline-first data queues + REST payload spec for ruggedized Zebra scanners",
      "Bodystormed and rapid-prototyped future-state flows with foremen and yard ops",
      "Two-way error-intercept loop protecting backend WIP integrity (97% stakeholder eval)",
      "Role-specific UI primitives mapped to physical \"information dead ends\"",
    ],
    tags: [
      "Technical Design",
      "Enterprise ERP",
      "Offline-First",
      "Field Research",
      "Bodystorming",
      "REST APIs",
    ],
    featured: true,
    icon: "wrench",
  },
  {
    id: "medsyn",
    index: "02",
    title: "MedSyn",
    subtitle: "Generative AI for radiology training",
    year: "2024 — ongoing",
    type: "Research · CMU Data Interaction Group",
    role: "Research assistant",
    status: "research",
    description:
      "A human-centered generative AI platform for text-to-3D CT scan synthesis, built to give radiology trainees safe access to rare and edge-case anatomy.",
    challenge:
      "Radiology training is bottlenecked by case availability. The interesting pathologies — the ones a resident has to recognize on call at 3am — are exactly the ones they rarely see.",
    intervention:
      "Engineered preprocessing pipelines in Python to organize real radiology data for model evaluation. Ran interface testing on an open-source GenAI radiology viewer, integrating synthetic CT outputs into existing diagnostic workflows so the tool meets clinicians where they already work.",
    impact:
      "Synthetic scans now feed into prototype educational workflows. Contributing to a publication track on responsible synthetic data in clinical education.",
    tags: ["Generative AI", "Medical Imaging", "Research", "Python"],
    featured: true,
    icon: "cross",
  },
  {
    id: "transformational-games",
    index: "03",
    title: "Failure & Iteration in Transformational Games",
    subtitle: "Independent study, CMU",
    year: "Jan 2026 — present",
    type: "Research · Independent Study",
    role: "Game researcher",
    status: "research",
    description:
      "A multidisciplinary independent study evaluating whether well-designed games can change how students relate to failure.",
    challenge:
      "Students learn to avoid failure long before they learn to use it. The hypothesis: structured play might be one of the few places where iteration feels like progress instead of punishment.",
    intervention:
      "Designed the full research lifecycle — IRB approval, study design, mixed-methods analysis. Ran workshops with production and prototyping teams to translate findings back into the game's design.",
    impact:
      "Cleaned datasets and analysis reports feeding both academic dissemination and the next prototype cycle.",
    tags: ["Games Research", "IRB", "Mixed Methods", "Education"],
    icon: "controller",
  },
  {
    id: "terratopia",
    index: "04",
    title: "Terratopia",
    subtitle: "A VR climate game where you play as a dolphin",
    year: "Jan 2026 — present",
    type: "Research · CMU Auditory Lab",
    role: "Game researcher & Unreal developer",
    status: "ongoing",
    description:
      "Game research and Unreal development on Terratopia, a single-player VR experience built inside Prof. Laurie Heller's Auditory Lab — players swim as a dolphin, hunt with echolocation, and watch a coastal ecosystem collapse under climate change.",
    challenge:
      "Climate communication keeps trying to scale 'awareness' from a textbook. Terratopia takes the opposite bet: drop a player inside a dolphin's body, give them echolocation, and quietly destroy their habitat with a red tide. The hard problem is making the system legible enough to feel like a game and honest enough to feel like climate science.",
    intervention:
      "Game-tested across every stage of development. Collaborated with Portuguese students on the PT-PT localization of the tutorial, narrative, and ending video. Worked in Unreal Engine — extended the existing Blueprints to implement a runtime restart button so playtesters could replay specific scenes without rebooting the entire VR session.",
    impact:
      "Tightened playtest cycles for the lab team. The PT-PT build now plays end-to-end with full European Portuguese narration across the mangrove → red tide → restoration arc.",
    notes: [
      "Unreal Engine — extended existing Blueprints with a runtime restart button used in playtests",
      "Game testing across tutorial, mangrove, red tide, and ending sequences",
      "PT-PT (European Portuguese) localization in collaboration with Portuguese students",
      "Audio-first design: head-tracked navigation + echolocation hunting on Quest",
      "Climate narrative scaffolding — mangroves, harmful algae blooms, restoration",
    ],
    tags: [
      "Game Research",
      "Unreal Blueprints",
      "VR",
      "Audio Design",
      "Localization",
      "Climate",
    ],
    featured: true,
    icon: "vr",
  },
  {
    id: "aisleguide",
    index: "05",
    title: "Aisle Guide",
    subtitle: "Handheld navigation for big-box retail",
    year: "2026",
    type: "MHCI · Physical Computing",
    video: "/videos/aisleguide.mov",
    description:
      "An intelligent handheld assistant for navigating stores like Target without ever pulling out your phone.",
    challenge:
      "Big-box retail is cognitively expensive. Shoppers default to their phones, which pulls them out of the physical store and disproportionately fails older or visually impaired customers.",
    intervention:
      "Ergonomic handheld device with tactile buttons and a directional, peripheral-vision interface. Modeled in Onshape, prototyped in foam and PLA, paired with a deliberately minimal screen.",
    impact:
      "Reduced wayfinding friction in user testing, particularly for shoppers who find smartphone-first navigation hostile.",
    tags: ["Physical Computing", "Industrial Design", "Accessibility", "CAD"],
    links: [
      { label: "Figma presentation", url: "https://www.figma.com/deck/Iy0nH1S7dC43sURfmqtpCY" },
      {
        label: "Onshape CAD model",
        url: "https://cad.onshape.com/documents/61f14173942e163245599c3f/w/83ab97071730047b05943b41/e/cfdb70002d466332a8de8ab9",
      },
    ],
    featured: true,
    icon: "bag",
  },
  {
    id: "cognitive-load",
    index: "06",
    title: "Cognitive Load Playground",
    subtitle: "Interfaces that adapt to your mental state",
    year: "2026",
    type: "MHCI · Human-AI",
    video: "/videos/humanaifinal.mov",
    description:
      "An experimental testbed for interfaces that read the room — adjusting density, contrast, and pacing to the user's cognitive state in real time.",
    challenge:
      "Static UIs assume a static user. Decision fatigue, anxiety, and time pressure all bend the same interface in different ways, but the interface never bends back.",
    intervention:
      "Built a web-based playground that takes signals about user state and dynamically modulates visual complexity, information density, and affordance prominence.",
    impact:
      "A working framework for designing AI-driven adaptive interfaces, and a pile of evidence that 'one UI for all moods' was always a fiction.",
    tags: ["Human-AI", "React", "Adaptive UI", "Research"],
    links: [{ label: "GitHub", url: "https://github.com/reggiedec" }],
    featured: true,
    icon: "brain",
  },
  {
    id: "chilewich",
    index: "07",
    title: "Chilewich Traceability",
    subtitle: "Digital Product Passports for textiles",
    year: "2025",
    type: "Parsons Capstone",
    role: "Strategic designer",
    status: "shipped",
    description:
      "A Digital Product Passport (DPP) framework for Chilewich's high-durability hospitality textiles — making material identity legible from loom to landfill.",
    challenge:
      "Once a textile leaves the factory, it disappears from view. Without a way to track material lifecycles, circular recovery and recycling stay theoretical.",
    intervention:
      "Mapped a Digital Material Identity framework using QR and RFID. Designed the strategic playbook for how a brand commits to material transparency without overstating it.",
    impact:
      "A blueprint for supply chain transparency in hospitality textiles, presented as a final Parsons capstone.",
    tags: ["Strategic Design", "Sustainability", "Systems", "Supply Chain"],
    links: [
      { label: "Capstone microsite", url: "https://philm755.wixsite.com/chilewichcapstone" },
    ],
    featured: true,
    icon: "leaf",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
