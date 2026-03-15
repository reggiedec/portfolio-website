export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  challenge: string;
  intervention: string;
  impact: string;
  hciAngle?: string;
  type?: string;
  thumbnail?: string;
  video?: string;
  videoUrl?: string;
  bgmUrl?: string;
  tags: string[];
  year: string;
  color: string;
  plumbobColor?: string;
  link?: string;
  links?: ProjectLink[];
  hasSystemDiagram?: boolean;
  hasMedSynArchitecture?: boolean;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "AISLE GUIDE",
    color: "#2ec0f9",
    type: "MHCI // PHYSICAL COMPUTING",
    year: "2026",
    video: "/videos/aisleguide.mov",
    description:
      "An intelligent handheld navigation assistant for complex retail environments like Target.",
    challenge:
      "Shoppers experience cognitive overload in large stores, often relying on phones that interrupt the physical experience.",
    intervention:
      "Designed an ergonomic handheld device with tactile buttons and a focused directional interface using Onshape CAD.",
    impact:
      "Reduced navigation friction and improved accessibility for elderly and visually impaired shoppers.",
    tags: ["Physical Computing", "CAD", "Retail UX"],
    plumbobColor: "#2ec0f9",
    links: [
      { label: "FIGMA PRESENTATION", url: "https://www.figma.com/deck/Iy0nH1S7dC43sURfmqtpCY" },
      {
        label: "ONSHAPE CAD MODEL",
        url: "https://cad.onshape.com/documents/61f14173942e163245599c3f/w/83ab97071730047b05943b41/e/cfdb70002d466332a8de8ab9",
      },
    ],
  },
  {
    id: "02",
    title: "COGNITIVE LOAD PLAYGROUND",
    color: "#63d471",
    type: "MHCI // HUMAN-AI",
    year: "2026",
    video: "/videos/humanaifinal.mov",
    description:
      "An experimental testbed exploring how interfaces can dynamically adapt to a user's mental state.",
    challenge:
      "Static interfaces don't account for decision fatigue, often overwhelming users during high-stress tasks.",
    intervention:
      "Built a GitHub-hosted experimental environment that modifies information density and visual complexity in real-time.",
    impact:
      "Provided a framework for designing AI-driven adaptive interfaces that reduce cognitive ergonomics issues.",
    tags: ["Human-AI", "React", "Research"],
    plumbobColor: "#63d471",
    links: [{ label: "GITHUB", url: "https://github.com/reggiedec" }],
  },
  {
    id: "03",
    title: "aSa ERP MOBILITY",
    color: "#8e7dbe",
    type: "MHCI CAPSTONE",
    year: "2026",
    video: "/videos/asa_demo.mov",
    description:
      "Translating a heavy industrial ERP system into a high-utility mobile framework for field-use.",
    challenge:
      "Construction and steel logistics require speed and durability that desktop-first ERPs cannot provide.",
    intervention:
      "Streamlined complex industrial workflows into a touch-optimized, high-contrast mobile interface.",
    impact:
      "Enabled real-time data synchronization for workers in high-pressure industrial environments.",
    tags: ["Systems Design", "UX Research", "Mobile"],
    plumbobColor: "#8e7dbe",
  },
  {
    id: "04",
    title: "THE DIGITAL LAB // MEDSYN",
    color: "#8e7dbe",
    type: "HCI // CLINICAL SYNTHESIS",
    year: "2024-26",
    video: "/videos/medsyn_demo.mov",
    description:
      "A centralized platform for clinical data synthesis and medical research visualization.",
    challenge:
      "Medical professionals are often siloed, making it difficult to synthesize complex patient data and research in real-time.",
    intervention:
      "Designed a high-density, data-rich interface (MedSyn) that aggregates disparate medical sources into a unified clinical view.",
    impact:
      "Reduced the time required for cross-functional clinical teams to reach a shared understanding of complex patient cases.",
    hciAngle:
      "Applying Strategic Design methodologies to the high-stakes world of clinical medicine—treating data as a material that must be traced, synthesized, and made legible for human decision-making.",
    tags: ["Medical Tech", "Data Visualization", "Clinical Systems"],
    plumbobColor: "#8e7dbe",
    hasMedSynArchitecture: true,
  },
  {
    id: "05",
    title: "CHILEWICH TRACEABILITY",
    color: "#f9a620",
    type: "PARSONS CAPSTONE",
    year: "2025",
    video: "/videos/chilewich_system.mov",
    description:
      "Designing a Digital Product Passport (DPP) system to enable material transparency in textiles.",
    challenge:
      "High-durability textiles lack visibility once they leave the factory, preventing circular recovery and recycling.",
    intervention:
      "Mapped a Digital Material Identity framework using QR/RFID to track material lifecycles.",
    impact:
      "Established a strategic blueprint for supply chain transparency in the hospitality textile sector.",
    tags: ["Strategic Design", "Sustainability", "Systems"],
    plumbobColor: "#f9a620",
    link: "https://philm755.wixsite.com/chilewichcapstone",
    links: [
      { label: "WIX CAPSTONE", url: "https://philm755.wixsite.com/chilewichcapstone" },
    ],
    hasSystemDiagram: true,
  },
];
