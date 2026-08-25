import { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "proj-web-dev",
    slug: "laravel-fullstack-platform",
    title: "[Placeholder] Full-Stack Laravel & Next.js Architecture",
    tagline: "High-throughput API backend with reactive frontends, modular queues, and database optimizations",
    summary:
      "A modular web application architecture engineered with PHP/Laravel and Next.js, featuring optimized relational schema, asynchronous background queues, and token-based API authentication.",
    description:
      "This case study represents full-stack web architecture work. It focuses on modular MVC separation, automated database migrations, Redis caching layers, RESTful API contract design, and reactive frontend integration.",
    category: "development",
    filterCategory: "DEVELOPMENT",
    displaySize: "large",
    visualType: "code-terminal",
    previewAccent: "studio",
    disciplines: ["Backend Architecture", "Full-Stack Development", "Database Indexing"],
    techStack: ["PHP", "Laravel", "Next.js", "TypeScript", "MySQL", "Redis", "Tailwind CSS"],
    role: "Lead Full-Stack Developer",
    timeline: "2024 - 2025",
    isFeatured: true,
    // Links left undefined until actual verified production URLs are supplied
    metrics: [
      { label: "Architecture", value: "Modular MVC" },
      { label: "Queue Worker", value: "Redis-Backed" },
      { label: "Data Layer", value: "Indexed Relational" },
    ],
    highlights: [
      "Custom authentication and multi-tenant authorization layer",
      "Asynchronous background worker orchestration for heavy jobs",
      "Optimized query performance with strict database indexing",
    ],
    architectureOverview:
      "Engineered with Laravel and Next.js App Router, using clean Repository patterns and Redis for session/cache acceleration.",

    // Case Study Structure
    problem:
      "Monolithic application structures often struggle with response latency spikes under high concurrent traffic, unindexed database queries, and tightly coupled frontend-backend code that makes independent scaling cumbersome.",
    approach:
      "Deconstruct the system into a decoupled architecture: an optimized PHP/Laravel REST API for business logic and data persistence, paired with a Next.js App Router frontend for static rendering and client-side speed.",
    process: [
      {
        phase: "01. Architectural Design",
        title: "Domain & Schema Modeling",
        description:
          "Mapped normalized relational entities in MySQL, defined database foreign key constraints, and planned indexing strategies for high-frequency search and filter queries.",
      },
      {
        phase: "02. API Contract & Logic",
        title: "Laravel Controller & Service Layer",
        description:
          "Implemented Repository and Service classes to isolate business logic from HTTP handlers, using Laravel Form Requests for strict validation.",
      },
      {
        phase: "03. Frontend & Performance",
        title: "Next.js SSR & Cache Integration",
        description:
          "Integrated token-based authentication, Redis caching for frequent endpoints, and Server-Side Rendering for snappy navigation.",
      },
    ],
    implementation: [
      {
        title: "Asynchronous Queue Workers",
        description:
          "Heavy background tasks such as invoice generation, email notifications, and report batching were offloaded to Redis-backed queue workers.",
        technicalDetails: [
          "Configured supervisor daemon processes for guaranteed queue liveness",
          "Automated failed job retry logic with exponential backoff",
        ],
      },
      {
        title: "Relational Query Indexing",
        description:
          "Eliminated N+1 query overhead by using eager loading with Eloquent and composite indices on frequently filtered database columns.",
      },
    ],
    results: [
      {
        metric: "Low Latency",
        label: "API Efficiency",
        text: "Maintained efficient, predictable response times across primary API endpoints under test conditions.",
      },
      {
        metric: "Decoupled",
        label: "Independent Deployments",
        text: "Frontend updates deploy independently on Vercel without requiring backend restarts.",
      },
    ],
    whatILearned: [
      "Strict separation of concern between controllers, services, and repositories prevents codebase rot as applications scale.",
      "Early index planning and query profiling are far more effective than adding extra server compute.",
      "TypeScript contracts shared across API responses ensure frontend type safety and prevent runtime regressions.",
    ],
  },
  {
    id: "proj-app-dev",
    slug: "cross-platform-utility-app",
    title: "[Placeholder] Modern Cross-Platform Client Application",
    tagline: "Offline-first mobile utility with synchronized local state and fluid micro-interactions",
    summary:
      "A cross-platform mobile utility engineered for offline persistence, local database synchronization, and responsive 60fps gesture handling.",
    description:
      "Demonstrating client-side architecture with local SQLite storage, optimistic UI updates, biometric authentication, and polished tactile interfaces.",
    category: "app",
    filterCategory: "DEVELOPMENT",
    displaySize: "medium",
    visualType: "mobile-ui",
    previewAccent: "system",
    disciplines: ["Mobile Development", "Client Architecture", "UI/UX Engineering"],
    techStack: ["React Native / Flutter", "TypeScript", "SQLite", "Tailwind"],
    role: "Mobile App Developer",
    timeline: "2024",
    isFeatured: true,
    metrics: [
      { label: "Interaction Rate", value: "60 FPS" },
      { label: "Sync Engine", value: "Offline-First" },
    ],
    highlights: [
      "Optimistic updates with background reconciliation",
      "Native device API integrations and secure local storage",
    ],

    // Case Study Structure
    problem:
      "Users frequently work in environments with intermittent connectivity, where traditional online-only mobile apps fail, lose unsaved data, or present frustrating loading spinners.",
    approach:
      "Design an offline-first architecture where the local SQLite database acts as the single source of truth for the UI, with an asynchronous sync queue reconciling state with remote servers in the background.",
    process: [
      {
        phase: "01. Architecture",
        title: "Local State & Persistence",
        description:
          "Structured local relational SQLite schemas and reactive listeners to trigger UI updates without network dependencies.",
      },
      {
        phase: "02. Sync Protocol",
        title: "Reconciliation & Conflict Handling",
        description:
          "Engineered a timestamped delta-sync engine that batches pending mutations and resolves conflicts deterministically.",
      },
      {
        phase: "03. Fluid Polish",
        title: "Gesture Handlers & Native Motion",
        description:
          "Implemented 60fps gesture-driven navigation, haptic feedback triggers, and smooth page transitions.",
      },
    ],
    implementation: [
      {
        title: "Optimistic Mutation Pipeline",
        description:
          "When a user performs an action, the UI updates instantly while the mutation is pushed to an encrypted persistence queue.",
      },
    ],
    results: [
      {
        metric: "100% Retained",
        label: "Offline Reliability",
        text: "Ensured local data retention even during abrupt network disconnects.",
      },
      {
        metric: "60 FPS",
        label: "Interaction Rate",
        text: "Maintained smooth frame rates during list scrolling and modal transitions.",
      },
    ],
    whatILearned: [
      "Offline-first isn't just a networking feature; it fundamentally transforms how state and UI components are decoupled.",
      "Optimistic UI updates with graceful error rollback provide a noticeably superior tactile feel.",
    ],
  },
  {
    id: "proj-ui-ux",
    slug: "design-system-interface-spec",
    title: "[Placeholder] High-Contrast UI/UX Design System",
    tagline: "Component hierarchy, typography tokens, and accessible interaction patterns",
    summary:
      "A comprehensive design system and interface specification crafted for technical platforms, emphasizing high contrast, generous whitespace, and rigorous accessibility.",
    description:
      "Covers design token architectures, interactive component states, keyboard navigation hierarchies, and high-fidelity prototype flows in Figma.",
    category: "ui-ux",
    filterCategory: "UI/UX",
    displaySize: "medium",
    visualType: "design-system",
    previewAccent: "studio",
    disciplines: ["UI/UX Design", "Design Systems", "Prototyping"],
    techStack: ["Figma", "Design Tokens", "Accessibility (WCAG)", "CSS Architecture"],
    role: "UI/UX Designer & Architect",
    timeline: "2024",
    isFeatured: true,
    highlights: [
      "Modular design token pipeline bridging design and code",
      "Full dark-mode color system with high readability ratios",
    ],

    // Case Study Structure
    problem:
      "Complex developer and scientific tools often suffer from inconsistent typography scales, low contrast ratios in dark mode, and poor keyboard accessibility.",
    approach:
      "Construct a modular, token-based design system in Figma paired with strict WCAG AAA color contrast constraints and scalable 4px baseline typography scales.",
    process: [
      {
        phase: "01. Research & Audit",
        title: "Interface & Accessibility Audit",
        description:
          "Analyzed technical dashboards to identify friction points, dense layouts, and contrast failures across varying lighting conditions.",
      },
      {
        phase: "02. Token Definition",
        title: "Color, Radii, & Typography System",
        description:
          "Established semantic token tiers (primitive, semantic, component-level) to ensure design-to-code synchronicity.",
      },
      {
        phase: "03. Prototyping",
        title: "Interactive Components & User Flows",
        description:
          "Built high-fidelity interactive component libraries in Figma with variants for hover, active, focus-visible, and disabled states.",
      },
    ],
    implementation: [
      {
        title: "Accessible Focus Ring Architecture",
        description:
          "Designed high-visibility focus indicator tokens that work uniformly across mouse and keyboard tab sequences.",
      },
    ],
    results: [
      {
        metric: "WCAG AAA",
        label: "Contrast Compliance",
        text: "Exceeded WCAG AAA standards for all primary text and critical interactive controls.",
      },
      {
        metric: "Unified",
        label: "Token Architecture",
        text: "Unified all views under a single CSS custom property token dictionary.",
      },
    ],
    whatILearned: [
      "Establishing strict semantic design tokens early prevents visual debt and speeds up frontend engineering tenfold.",
      "High contrast doesn't mean harsh aesthetics; paired with generous whitespace and subtle borders, it feels extremely premium.",
    ],
  },
  {
    id: "proj-ai-automation",
    slug: "ai-workflow-automation-stack",
    title: "[Placeholder] Zero-Budget AI Workflow Automation Stack",
    tagline: "Self-hosted local LLM orchestration and data extraction pipelines built with n8n + Ollama",
    summary:
      "A zero-budget, private automation architecture built using n8n workflows and self-hosted Ollama local LLMs, engineered to automate complex data tasks for freelance clients.",
    description:
      "This project maps directly to an automated workflow pipeline designed to eliminate recurring SaaS costs for freelance clients. Combines self-hosted n8n orchestrations, local Ollama model instances, structured JSON data extraction, and web scraping scripts.",
    category: "automation",
    filterCategory: "AUTOMATION",
    displaySize: "wide",
    visualType: "automation-workflow",
    previewAccent: "system",
    disciplines: ["Workflow Automation", "Local LLM Orchestration", "Data Extraction"],
    techStack: ["n8n", "Ollama", "Python", "Playwright", "Docker", "REST Webhooks"],
    role: "Automation & Systems Engineer",
    timeline: "2024 - 2025",
    isFeatured: true,
    metrics: [
      { label: "Infrastructure Cost", value: "$0 Recurring" },
      { label: "Model Runtime", value: "Local Ollama" },
      { label: "Orchestrator", value: "Self-Hosted n8n" },
    ],
    highlights: [
      "Self-hosted privacy-first pipeline running on local hardware without recurring API fees",
      "Automated extraction, sanitization, and structured JSON parsing from unstructured inputs",
      "Custom webhook triggers and automated multi-channel delivery for client deliverables",
    ],
    architectureOverview:
      "Dockerized deployment combining n8n workflow triggers with local Ollama inference nodes and Python scraping workers.",

    // Case Study Structure
    problem:
      "Freelance clients frequently struggle with repetitive manual data entry, lead enrichment, and document processing, yet commercial AI workflows (e.g. cloud API subscriptions) create high recurring monthly overhead and data privacy concerns.",
    approach:
      "Engineer an entirely self-hosted, zero-budget automation stack by pairing a Dockerized n8n workflow engine with local Ollama model instances and Python/Playwright scraping scripts running on client-controlled infrastructure.",
    process: [
      {
        phase: "01. Architecture",
        title: "Dockerized Node Deployment",
        description:
          "Configured containerized n8n and Ollama services communicating over an internal Docker network, ensuring zero external data leakage.",
      },
      {
        phase: "02. Pipeline Design",
        title: "Ingestion, Scraping & Prompt Chaining",
        description:
          "Created modular workflow nodes that trigger on webhooks/crons, scrape target sources with Playwright, and feed formatted prompts to local LLMs.",
      },
      {
        phase: "03. Validation",
        title: "Structured JSON Output Sinks",
        description:
          "Implemented JSON schema enforcement and automated error-handling branches that re-query or alert on formatting anomalies.",
      },
    ],
    implementation: [
      {
        title: "Local LLM Schema Formatting",
        description:
          "Utilized structured system prompts and deterministic temperature settings on local Ollama models to produce reliable, typed JSON datasets.",
      },
      {
        title: "Headless Web Scraper Integration",
        description:
          "Integrated Python/Playwright scrapers with user-agent rotation and anti-bot handling to feed fresh web records into the n8n pipeline.",
      },
    ],
    results: [
      {
        metric: "$0 / Month",
        label: "Recurring API Bill",
        text: "Completely eliminated cloud API costs by leveraging local compute for routine extraction and summarization.",
      },
      {
        metric: "100% Private",
        label: "Data Sovereignty",
        text: "Client proprietary data never leaves the local environment, satisfying stringent privacy requirements.",
      },
    ],
    whatILearned: [
      "Local open-source models with prompt constraints can match commercial APIs for structured extraction at zero variable cost.",
      "n8n's visual debugging coupled with custom JavaScript/Python code nodes provides the ideal balance of speed and extensibility.",
    ],
  },
  {
    id: "proj-video-creative",
    slug: "creative-video-motion-production",
    title: "[Placeholder] Creative Video Post-Production & Motion Suite",
    tagline: "Cinematic narrative editing, kinetic typography, and acoustic sound engineering",
    summary:
      "Showcasing multidisciplinary post-production workflows across pacing, color grading, motion graphics, and audio synthesis for digital media.",
    description:
      "A creative suite highlighting video editing, narrative structure, acoustic sound design, and custom motion graphics packages.",
    category: "creative",
    filterCategory: "CREATIVE",
    displaySize: "compact",
    visualType: "media-timeline",
    previewAccent: "creative",
    disciplines: ["Video Editing", "Motion Graphics", "Sound Design"],
    techStack: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Audition"],
    role: "Creative Director & Editor",
    timeline: "2023 - Present",
    isFeatured: true,
    highlights: [
      "Dynamic kinetic typography and branded title sequences",
      "Precise multi-track sound design and color grading",
    ],

    // Case Study Structure
    problem:
      "Technical concepts and complex products often fail to engage audiences when presented through dry slides or unpolished screen captures.",
    approach:
      "Apply high-impact post-production techniques — cinematic pacing, kinetic typography, acoustic sound design, and color grading — to translate technical concepts into compelling visual narratives.",
    process: [
      {
        phase: "01. Storyboarding & Pacing",
        title: "Narrative Arc & Rough Cuts",
        description:
          "Mapped rhythm and key visual moments to keep viewer attention anchored throughout the runtime.",
      },
      {
        phase: "02. Motion Graphics",
        title: "Kinetic Typography & Lower Thirds",
        description:
          "Designed procedural text animations, vector callouts, and technical annotations in After Effects.",
      },
      {
        phase: "03. Color & Audio Mastering",
        title: "DaVinci Color Grade & Sound Stage",
        description:
          "Performed balanced Rec.709 color grading and multi-track audio mastering with custom sound effects and clean dialogue normalization.",
      },
    ],
    implementation: [
      {
        title: "Multi-Track Acoustic Design",
        description:
          "Layered foley sound effects, riser swells, and parametric EQ mastering to create a tactile audiovisual experience.",
      },
    ],
    results: [
      {
        metric: "Pacing",
        label: "Visual Rhythm",
        text: "Structured rhythmic cuts and kinetic motion cues to sustain viewer attention.",
      },
    ],
    whatILearned: [
      "Audio design accounts for over 50% of perceived video quality; precise sound cues make motion feel tangible.",
      "Editing is subtraction: removing milliseconds between thoughts creates effortless narrative velocity.",
    ],
  },
  {
    id: "proj-biomedical-thesis",
    slug: "computational-drug-design-thesis",
    title: "[Placeholder] Computational Drug-Design & Molecular Docking Study",
    tagline: "In silico binding affinity analysis and target biomolecule screening for therapeutic discovery",
    summary:
      "An investigative thesis utilizing computational drug design, in silico structural modeling, and target biomolecule evaluation for candidate screening.",
    description:
      "This case study maps to computational drug-design research. It utilizes in silico macromolecular modeling, binding pocket evaluation, ligand-receptor docking scores, and reproducible analytical pipelines.",
    category: "research",
    filterCategory: "RESEARCH",
    displaySize: "compact",
    visualType: "molecular-graph",
    previewAccent: "research",
    disciplines: ["Computational Drug Design", "Biomedical Research", "Molecular Modeling"],
    techStack: ["Python", "In Silico Modeling", "Docking Tools", "Biological Databases"],
    role: "Investigator / Researcher",
    timeline: "2024 - Present",
    isFeatured: true,
    metrics: [
      { label: "Domain", value: "Computational Drug Design" },
      { label: "Methodology", value: "In Silico Docking" },
    ],
    highlights: [
      "Evaluation of macromolecular binding affinities and conformational stability",
      "Standardized data extraction pipelines for candidate molecule screening",
    ],

    // Case Study Structure
    problem:
      "Traditional wet-lab candidate screening for novel pharmacological targets is resource-intensive and time-consuming. High-throughput in silico computational pipelines are necessary to narrow candidate libraries to viable leads.",
    approach:
      "Establish a reproducible computational biology pipeline combining structural database curation, binding pocket energy minimization, molecular docking simulations, and statistical confidence scoring.",
    process: [
      {
        phase: "01. Target Preparation",
        title: "Macromolecular Coordinate Curation",
        description:
          "Extracted and validated 3D target coordinates from structural databases, performing hydrogen addition, charge assignment, and energy minimization.",
      },
      {
        phase: "02. In Silico Docking",
        title: "Ligand Binding Affinity Screening",
        description:
          "Executed multi-conformation docking simulations to calculate Gibbs free energy of binding (ΔG) and analyze key residue contact networks.",
      },
      {
        phase: "03. Data Analysis",
        title: "Statistical Evaluation & Filtering",
        description:
          "Compiled binding scores and root-mean-square deviation (RMSD) clustering to identify stable lead candidates.",
      },
    ],
    implementation: [
      {
        title: "Reproducible Python Pipeline",
        description:
          "Automated batch ligand preparation, parameter configuration, and docking log extraction using standardized Python scripts.",
      },
    ],
    results: [
      {
        metric: "Calculated ΔG",
        label: "Binding Affinity",
        text: "Identified candidate molecules with favorable interaction profiles across target binding pockets in silico.",
      },
      {
        metric: "FAIR Compliant",
        label: "Pipeline Reproducibility",
        text: "Documented complete computational environment and scripts for reproducible secondary analysis.",
      },
    ],
    whatILearned: [
      "Computational screening provides valuable prior probabilities that dramatically reduce downstream experimental search spaces.",
      "Careful validation of structural resolution and protonation states is critical before running molecular docking algorithms.",
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}
