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
  | "controller"
  | "robot"
  | "diamond";

export interface Project {
  /** kebab-case slug used in the URL `/work/:slug` */
  slug: string;
  /** legacy id, kept the same as slug */
  id: string;
  /** two-digit index displayed in the UI ("01", "02"…) */
  index: string;
  title: string;
  subtitle?: string;
  /** year range, used as a "lifespan" stat on detail pages */
  year: string;
  type: string;
  role?: string;
  status?: "ongoing" | "shipped" | "research" | "archived";
  /** the one-liner that appears on the home card · keep it tight */
  blurb: string;
  /** longer description used on the detail page */
  description: string;
  challenge?: string;
  intervention?: string;
  impact?: string;
  notes?: string[];
  thumbnail?: string;
  video?: string;
  /** if set, the video loops back to 0 after this many seconds (for long clips) */
  videoEnd?: number;
  /** primary still image (used when there's no video) */
  image?: string;
  /** optional gallery of additional stills shown on the detail page */
  images?: string[];
  tags: string[];
  /** key tags to highlight on the home card (max 3) */
  highlightTags?: string[];
  links?: ProjectLink[];
  /** if true, shows up on the homepage */
  featured?: boolean;
  icon?: ProjectIcon;
}

export const projects: Project[] = [
  {
    slug: "asa-erp",
    id: "asa-erp",
    index: "01",
    title: "aSa · Data Distribution Bridge",
    subtitle:
      "A contextual, event-driven mobile extension for a desktop ERP that runs the steel yard",
    year: "Jan 2026 → present",
    type: "MHCI Capstone · Applied Systems Associates",
    role: "Technical Designer",
    status: "ongoing",
    blurb:
      "Team capstone designing the **mobile + portal experience** for an industrial ERP. Drove research, divergent prototyping, and the IA decisions behind a **tile-based, drill-down dashboard**.",
    description:
      "A five-person CMU MHCI capstone with Applied Systems Associates (aSa) · exploring how mobile and desktop experiences could support operational workflows for General Managers, Plant Superintendents, consultants, and customers. (Specific client data is protected; this page describes the design + research approach.)",
    challenge:
      "aSa's existing platform is desktop-first and information-dense. The team had to figure out which features actually belong on a mobile screen, which ones are noise, and how customer-facing access should work without breaking competitive boundaries between fabricators. Lots of competing user models. Lots of constraints.",
    intervention:
      "Ran a multi-round divergent prototyping process: feature card sorts with consultants and clients, role-playing scenarios to test phone vs. tablet preferences, storyboard A/B tests for customer-portal access models, parallel prototype comparison to find the right information density, and information-drilling co-creation sessions to define dashboard hierarchy. Probed technical feasibility along the way · API structure, push-notification scheduling, and authentication models.",
    impact:
      "Converged on a tile-based mobile dashboard with drill-down navigation, a unified customer-portal model with a fabricator-issued connection key, and clear answers on what belongs on a phone vs. a tablet. Findings rolled directly into the team's spring delivery and the client's roadmap conversation.",
    notes: [
      "Open card sorts with consultants and clients to validate feature grouping",
      "Role-playing scenarios on phone vs. tablet preference under realistic ops contexts",
      "Storyboard A/B test on per-fabricator vs. unified customer-portal access",
      "Parallel prototype comparison across six dashboard density tiers",
      "Information-drilling co-creation to define dashboard hierarchy",
      "Technical feasibility probes: API structure, push-notification time-boxing",
    ],
    tags: [
      "Capstone",
      "Enterprise UX",
      "Field Research",
      "Card Sort",
      "Storyboard",
      "Parallel Prototyping",
      "Information Architecture",
    ],
    highlightTags: ["Capstone", "Field Research", "Information Architecture"],
    featured: true,
    icon: "wrench",
  },
  {
    slug: "terratopia",
    id: "terratopia",
    index: "02",
    title: "Terratopia",
    subtitle: "A VR climate game where you play as a dolphin",
    year: "Jan 2026 → present",
    type: "Research · CMU Auditory Lab",
    role: "Game researcher & Unreal developer",
    status: "ongoing",
    blurb:
      "Game research + Unreal Blueprint development on a **VR climate sim** · echolocation hunts, red tide, and a fully localized Portuguese build.",
    description:
      "Game research and Unreal development on Terratopia, a single-player VR experience built inside Prof. Laurie Heller's Auditory Lab · players swim as a dolphin, hunt with echolocation, and watch a coastal ecosystem collapse under climate change.",
    challenge:
      "Climate communication keeps trying to scale 'awareness' from a textbook. Terratopia takes the opposite bet: drop a player inside a dolphin's body, give them echolocation, and quietly destroy their habitat with a red tide. The hard problem is making the system legible enough to feel like a game and honest enough to feel like climate science.",
    intervention:
      "Game-tested across every stage of development. Collaborated with Portuguese students on the PT-PT localization of the tutorial, narrative, and ending video. Worked in Unreal Engine · extended the existing Blueprints to implement a runtime restart button so playtesters could replay specific scenes without rebooting the entire VR session.",
    impact:
      "Tightened playtest cycles for the lab team. The PT-PT build now plays end-to-end with full European Portuguese narration across the mangrove → red tide → restoration arc.",
    notes: [
      "Unreal Engine · extended existing Blueprints with a runtime restart button used in playtests",
      "Game testing across tutorial, mangrove, red tide, and ending sequences",
      "PT-PT (European Portuguese) localization in collaboration with Portuguese students",
      "Audio-first design: head-tracked navigation + echolocation hunting on Quest",
      "Climate narrative scaffolding · mangroves, harmful algae blooms, restoration",
    ],
    tags: [
      "Game Research",
      "Unreal Blueprints",
      "VR",
      "Audio Design",
      "Localization",
      "Climate",
    ],
    highlightTags: ["VR", "Unreal Blueprints", "Game Research"],
    video: "/videos/terratopia.mp4",
    videoEnd: 30,
    featured: true,
    icon: "vr",
  },
  {
    slug: "f1tenth-approximpc",
    id: "f1tenth-approximpc",
    index: "03",
    title: "ApproxiMPC",
    subtitle: "Distilling Model Predictive Control into an LSTM, on a 1/10-scale autonomous racecar",
    year: "Spring 2026",
    type: "CMU F1Tenth · Autonomous Racing",
    role: "ML + ROS2 contributor (team of 4)",
    status: "research",
    blurb:
      "Team project for CMU's F1Tenth class. Trained an **LSTM** to mimic a **Model Predictive Control** policy on a 1/10-scale racecar, so an embedded **Jetson** can lap an MPC-quality trajectory at a fraction of the compute.",
    description:
      "Final project for CMU's F1Tenth autonomous racing class. With three teammates I helped build ApproxiMPC: a distillation pipeline that trains an LSTM to imitate a Spatial-Temporal MPC racing policy, so an embedded Jetson can run a near-MPC trajectory in a fraction of the compute.",
    challenge:
      "Model Predictive Control is the gold standard for autonomous racing because it can optimize lap time while enforcing vehicle and friction constraints. The problem: solving a fresh optimization every 10 ms is too expensive for the resource-constrained Jetsons that ship on F1Tenth cars.",
    intervention:
      "Collected ~10 million transitions across 25 maps in Gym-Khana, using the included STMPC controller as the expert teacher policy. Logged state, expert action, executed action, LiDAR scans, and curvature lookahead at 1 / 2 / 3 / 5 / 8 m ahead of the car. Trained two LSTM architectures, then exported to ONNX and deployed inside ROS2 alongside a matched MPC baseline for an apples-to-apples computational comparison.",
    impact:
      "The deployed LSTM hit a mean callback latency of 0.74 ms vs. 1.38 ms for the MPC, with ONNX inference roughly 10× faster than the MPC solver, while staying within the 100 Hz timing budget for safe racing. The V2 model cleared 13 of 15 validation runs across IMS, Drift 2, BrandsHatch, Spielberg, and Mexico City.",
    notes: [
      "Gym-Khana data collection: 10.13M transitions, 25 maps, both directions",
      "DAgger-style steering perturbations to teach recovery from off-center states",
      "LSTM architecture sweep: 64D / 96D / 128D / 196D / 512D",
      "Curvature lookahead (1, 2, 3, 5, 8 m) as additional input features",
      "ONNX export, ROS2 deployment, matched MPC baseline for latency comparison",
      "Final report submitted in Spring 2026",
    ],
    tags: [
      "Autonomous Racing",
      "F1Tenth",
      "ROS2",
      "LSTM",
      "MPC",
      "Jetson",
      "ONNX",
      "Python",
    ],
    highlightTags: ["F1Tenth", "ROS2", "LSTM"],
    video: "/videos/IMG_3615.MOV",
    images: [
      "/videos/IMG_3615.MOV",
      "/videos/IMG_3414.MOV",
      "/videos/IMG_3367.MOV",
    ],
    links: [
      {
        label: "GitHub · F1Tenth ApproxiMPC",
        url: "https://github.com/henry-feldhaus/F1Tenth_ApproxiMPC",
      },
    ],
    featured: true,
    icon: "robot",
  },

  // · non-featured projects below · still get detail pages, accessible via /work/:slug ·

  {
    slug: "medsyn",
    id: "medsyn",
    index: "04",
    title: "MedSyn",
    subtitle: "An embedding-based viewport for auditing generative CT models",
    year: "Dec 2025 → present",
    type: "Independent Study · 12 credits · CMU DIG",
    role: "Researcher + interaction designer",
    status: "research",
    blurb:
      "12-credit independent study building a **semantic map** for GenAI CT scans. **UMAP + BioViL embeddings** let radiologists explore, cluster, and catch model **hallucinations** in one viewport.",
    description:
      "An independent study extending an existing GenAI radiology training platform. Builds a semantic exploration layer so researchers and trainees can cluster generated CT scans by what's actually in them, not just by metadata, and quickly find where the model is hallucinating.",
    challenge:
      "Generative CT models are evaluated today by manually generating prompts in an IDE and then opening each output in a separate viewer like ITK. There's no way to ask, at scale: does the model reliably generate pleural effusions? What concepts does it never get right? What does an outlier even look like? The disjoint tooling hides exactly the failure modes that matter for clinical training.",
    intervention:
      "Designed a single interface that combines a 2D semantic map, a cluster preview filmstrip, and a paired CT viewport. Swapped generic CLIP for BioViL / PubMedCLIP so the embeddings reflect radiological concepts, not brightness or contrast. Used UMAP with a fixed seed so clusters stay stable across reloads. Layered semantic zoom on top of the map: cluster labels far out, colored severity dots in the middle, actual CT thumbnails up close. Added a Weirdness Filter (outlier detection) to surface likely hallucinations directly in the UI.",
    impact:
      "Validated the move from global accuracy metrics toward interactive auditing, drawing on MEDebiaser, Vipera, TensorBoard Projector, Nomic Atlas, Apple Embedding Atlas, and Voxel51 FiftyOne. Final deliverable: a four-page report on the developed features, design challenges, and how the workflow supports model developers and clinical researchers.",
    notes: [
      "Domain-specific embeddings: BioViL / PubMedCLIP over generic CLIP",
      "UMAP with fixed seed for stable, trust-building cluster layouts",
      "Semantic zoom: cluster labels → colored dots → CT thumbnails",
      "Weirdness Filter (Isolation-Forest outliers) for hallucination triage",
      "Structured tooltips parsing prompts into checkable abnormality tags",
      "Cross-filter + search inspired by Apple Embedding Atlas + FiftyOne",
      "12-credit CMU independent study with the Data Interaction Group",
    ],
    tags: [
      "Generative AI",
      "Medical Imaging",
      "Embeddings",
      "UMAP",
      "BioViL",
      "Interaction Design",
      "Python",
      "React",
    ],
    highlightTags: ["Generative AI", "Embeddings", "Interaction Design"],
    video: "/videos/medsyn.mov",
    images: [
      "/videos/medsyn.mov",
      "/images/medsyn-2.png",
      "/images/medsyn-1.png",
      "/images/medsyn-3.png",
    ],
    icon: "cross",
  },
  {
    slug: "interactive-3d",
    id: "interactive-3d",
    index: "05",
    title: "Interactive 3D Media & Game Dev",
    subtitle: "Two games and a stack of rapid 3D prototypes",
    year: "Dec 2025 → Feb 2026",
    type: "Independent",
    role: "Designer / developer",
    status: "shipped",
    blurb:
      "Built two playable games · **Baby Head Space Racer** and a supermarket sim · using **Unity**, **Unreal**, and **Three.js**, leaning into AI-assisted rapid prototyping.",
    description:
      "Engineered 3D interactive experiences focused on core mechanics and casual gameplay. The pair functions as a creative-tech sandbox · a small place to try movement, feel, and humor inside a 3D engine.",
    challenge:
      "Most 'rapid prototyping' for games stalls at the asset wall. The goal here was to keep iteration fast enough that the prototype actually evolves · not just builds.",
    intervention:
      "Built Baby Head Space Racer and a supermarket simulation game with Unity, Unreal, and Three.js. Used C# + Python and leaned heavily on AI-assisted rapid prototyping workflows (Claude, Cursor) to compress the loop between idea and playable build.",
    impact:
      "Two finished prototypes. Better intuition for where engine choice matters and where it doesn't.",
    notes: [
      "Unity (C#) · Baby Head Space Racer",
      "Unreal Engine + Three.js · supermarket sim",
      "AI-assisted rapid prototyping workflows (Claude, Cursor)",
    ],
    tags: ["Unity", "Unreal", "Three.js", "C#", "Game Dev", "Rapid Prototyping"],
    highlightTags: ["Unity", "Unreal", "Three.js"],
    icon: "controller",
  },
  {
    slug: "failing-successfully",
    id: "transformational-games",
    index: "06",
    title: "Failing Successfully",
    subtitle: "Two transformational games designed to reduce academic perfectionism",
    year: "Jan 2026 → present",
    type: "Research · CHI PLAY '26 submission",
    role: "Game researcher & designer",
    status: "research",
    blurb:
      "Designed two analog games · **Drawn to the Crown** and **Museum of Mistakes** · to teach grad design students to fail on purpose. Paper submitted to **CHI PLAY '26**.",
    description:
      "Independent study evaluating whether transformational games can reduce maladaptive perfectionism in graduate design education. Two analog games, five design principles, and a counterbalanced field study designed to deploy across an MHCI capstone cohort.",
    challenge:
      "Graduate design students arrive trained to chase certainty · high test scores, polished outputs, no visible failure. That mindset breaks the iterative design process: students over-polish early prototypes, hide work from teammates, and freeze when problems get ambiguous. The hypothesis: games can re-frame failure as a low-stakes, expected step toward mastery.",
    intervention:
      "Co-designed two transformational games. *Drawn to the Crown* (DttC) is a small-group rapid-iteration drawing game with arbitrary judging criteria, forcing players to keep building on their first ugly marks. *Museum of Mistakes* (MoM) is a semester-long pervasive game where players anonymously contribute artifacts representing personal failures to a shared studio gallery. Both were iterated through four play-test rounds and built around five shared design principles: tangible creation, use of space, low barrier to entry, peer-led decentralized evaluation, and structured reflection.",
    impact:
      "Submitted *Failing Successfully: Reducing Academic Perfectionism with Transformational Games* to CHI PLAY '26. Designed a counterbalanced field study (~70 grad HCI students + 1–5 instructors) to evaluate which game mechanics most reduce perfectionism and increase willingness to take creative risks.",
    notes: [
      "Two analog transformational games: Drawn to the Crown + Museum of Mistakes",
      "Five shared design principles grounded in the Transformational Framework",
      "Four play-test iteration rounds per game",
      "Counterbalanced, within-subjects field study (Solomon four-group inspired)",
      "IRB ethics approval, mixed-methods analysis, instructor interviews",
      "Paper submitted to CHI PLAY '26",
    ],
    tags: [
      "Games Research",
      "Transformational Games",
      "CHI PLAY",
      "IRB",
      "Mixed Methods",
      "Education",
    ],
    highlightTags: ["CHI PLAY", "Games Research", "Education"],
    icon: "controller",
  },
  {
    slug: "aisleguide",
    id: "aisleguide",
    index: "07",
    title: "Aisle Guide",
    subtitle: "Handheld navigation for big-box retail",
    year: "2026",
    type: "MHCI · Physical Computing",
    video: "/videos/aisleguide.mov",
    blurb:
      "Ergonomic **handheld device** for navigating big-box retail without your phone. CAD'd in Onshape, foam + PLA prototyped.",
    description:
      "An intelligent handheld assistant for navigating stores like Target without ever pulling out your phone.",
    challenge:
      "Big-box retail is cognitively expensive. Shoppers default to their phones, which pulls them out of the physical store and disproportionately fails older or visually impaired customers.",
    intervention:
      "Ergonomic handheld device with tactile buttons and a directional, peripheral-vision interface. Modeled in Onshape, prototyped in foam and PLA, paired with a deliberately minimal screen.",
    impact:
      "Reduced wayfinding friction in user testing, particularly for shoppers who find smartphone-first navigation hostile.",
    notes: [
      "Onshape CAD modeling",
      "Foam + PLA tactile prototyping",
      "Peripheral-vision directional interface",
    ],
    tags: ["Physical Computing", "Industrial Design", "Accessibility", "CAD"],
    highlightTags: ["Physical Computing", "CAD"],
    links: [
      { label: "Figma presentation", url: "https://www.figma.com/deck/Iy0nH1S7dC43sURfmqtpCY" },
      {
        label: "Onshape CAD model",
        url: "https://cad.onshape.com/documents/61f14173942e163245599c3f/w/83ab97071730047b05943b41/e/cfdb70002d466332a8de8ab9",
      },
    ],
    icon: "bag",
  },
  {
    slug: "cognitive-load",
    id: "cognitive-load",
    index: "08",
    title: "Cognitive Load Playground",
    subtitle: "Interfaces that adapt to your mental state",
    year: "2026",
    type: "MHCI · Human-AI",
    video: "/videos/humanaifinal.mov",
    blurb:
      "An experimental playground for **adaptive UIs** · interfaces that read the room and modulate density, contrast, and pacing in real time.",
    description:
      "An experimental testbed for interfaces that read the room · adjusting density, contrast, and pacing to the user's cognitive state in real time.",
    challenge:
      "Static UIs assume a static user. Decision fatigue, anxiety, and time pressure all bend the same interface in different ways, but the interface never bends back.",
    intervention:
      "Built a web-based playground that takes signals about user state and dynamically modulates visual complexity, information density, and affordance prominence.",
    impact:
      "A working framework for designing AI-driven adaptive interfaces, and a pile of evidence that 'one UI for all moods' was always a fiction.",
    tags: ["Human-AI", "React", "Adaptive UI", "Research"],
    highlightTags: ["Human-AI", "React"],
    links: [{ label: "GitHub", url: "https://github.com/reggiedec" }],
    icon: "brain",
  },
  {
    slug: "chilewich",
    id: "chilewich",
    index: "09",
    title: "Chilewich Traceability",
    subtitle: "Digital Product Passports for textiles",
    year: "2025",
    type: "Parsons Capstone",
    role: "Strategic designer",
    status: "shipped",
    blurb:
      "Strategic blueprint for a **Digital Product Passport** system on high-durability textiles · material identity from loom to landfill.",
    description:
      "A Digital Product Passport (DPP) framework for Chilewich's high-durability hospitality textiles · making material identity legible from loom to landfill.",
    challenge:
      "Once a textile leaves the factory, it disappears from view. Without a way to track material lifecycles, circular recovery and recycling stay theoretical.",
    intervention:
      "Mapped a Digital Material Identity framework using QR and RFID. Designed the strategic playbook for how a brand commits to material transparency without overstating it.",
    impact:
      "A blueprint for supply chain transparency in hospitality textiles, presented as a final Parsons capstone.",
    tags: ["Strategic Design", "Sustainability", "Systems", "Supply Chain"],
    highlightTags: ["Strategic Design", "Sustainability"],
    links: [
      { label: "Capstone microsite", url: "https://philm755.wixsite.com/chilewichcapstone" },
    ],
    icon: "leaf",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function findProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
