import { SkillCategory } from "@/types";

export const skillsCategories: SkillCategory[] = [
  {
    id: "dev",
    name: "Development",
    iconName: "Code2",
    description: "Full-stack software engineering, modular backend architectures, and mobile client utilities.",
    skills: [
      {
        name: "PHP",
        discipline: "Backend Engineering",
        description: "Modern PHP 8.3 features, strict typing, and server-side performance optimization.",
        relatedProject: {
          projectTitle: "Full-Stack Laravel Architecture",
          projectSlug: "laravel-fullstack-platform",
          url: "/work/laravel-fullstack-platform",
        },
      },
      {
        name: "Laravel",
        discipline: "Framework Architecture",
        description: "Modular MVC separation, Eloquent query optimization, queues, and REST API design.",
        relatedProject: {
          projectTitle: "Full-Stack Laravel Architecture",
          projectSlug: "laravel-fullstack-platform",
          url: "/work/laravel-fullstack-platform",
        },
      },
      {
        name: "Web Development",
        discipline: "Modern Web Platforms",
        description: "Next.js App Router, TypeScript, responsive layouts, and SSR performance tuning.",
        relatedProject: {
          projectTitle: "Full-Stack Laravel & Next.js Platform",
          projectSlug: "laravel-fullstack-platform",
          url: "/work/laravel-fullstack-platform",
        },
      },
      {
        name: "App Development",
        discipline: "Client-Side Engineering",
        description: "Offline-first mobile client architecture, local SQLite state synchronization, and 60 FPS motion.",
        relatedProject: {
          projectTitle: "Modern Cross-Platform Client Application",
          projectSlug: "cross-platform-utility-app",
          url: "/work/cross-platform-utility-app",
        },
      },
    ],
  },
  {
    id: "design",
    name: "Design",
    iconName: "Palette",
    description: "User-centric interface architecture, accessibility compliance, and design token hierarchies.",
    skills: [
      {
        name: "UI/UX",
        discipline: "Interaction Architecture",
        description: "High-contrast dark mode interfaces, usability heuristics, and user journey mapping.",
        relatedProject: {
          projectTitle: "High-Contrast UI/UX Design System",
          projectSlug: "design-system-interface-spec",
          url: "/work/design-system-interface-spec",
        },
      },
      {
        name: "Interface Design",
        discipline: "Visual Hierarchy",
        description: "Design token systems in Figma, WCAG AAA contrast verification, and 4px baseline typography scales.",
        relatedProject: {
          projectTitle: "High-Contrast UI/UX Design System",
          projectSlug: "design-system-interface-spec",
          url: "/work/design-system-interface-spec",
        },
      },
      {
        name: "Prototyping",
        discipline: "High-Fidelity Flows",
        description: "Interactive component states, micro-interactions, and responsive layout prototypes.",
        relatedProject: {
          projectTitle: "High-Contrast UI/UX Design System",
          projectSlug: "design-system-interface-spec",
          url: "/work/design-system-interface-spec",
        },
      },
    ],
  },
  {
    id: "automation",
    name: "Automation & Data",
    iconName: "Cpu",
    description: "Self-hosted workflow engines, automated web scraping, and local LLM pipelines.",
    skills: [
      {
        name: "Web Scraping",
        discipline: "Data Harvesting",
        description: "Playwright and Python automation scripts with proxy rotation and resilient DOM extraction.",
        relatedProject: {
          projectTitle: "Zero-Budget AI Workflow Automation Stack",
          projectSlug: "ai-workflow-automation-stack",
          url: "/work/ai-workflow-automation-stack",
        },
      },
      {
        name: "Data Extraction",
        discipline: "ETL & Sanitization",
        description: "Parsing unstructured web records into validated, structured JSON sinks.",
        relatedProject: {
          projectTitle: "Zero-Budget AI Workflow Automation Stack",
          projectSlug: "ai-workflow-automation-stack",
          url: "/work/ai-workflow-automation-stack",
        },
      },
      {
        name: "Automation",
        discipline: "Pipeline Orchestration",
        description: "Dockerized n8n workflow configurations paired with self-hosted Ollama local LLM nodes.",
        relatedProject: {
          projectTitle: "Zero-Budget AI Workflow Automation Stack",
          projectSlug: "ai-workflow-automation-stack",
          url: "/work/ai-workflow-automation-stack",
        },
      },
    ],
  },
  {
    id: "creative",
    name: "Creative",
    iconName: "Film",
    description: "Video post-production, kinetic typography, acoustic sound design, and narrative pacing.",
    skills: [
      {
        name: "Video Editing",
        discipline: "Post-Production",
        description: "Multi-track timeline assembly in Premiere Pro and DaVinci Resolve with precise rhythmic pacing.",
        relatedProject: {
          projectTitle: "Creative Video Post-Production & Motion Suite",
          projectSlug: "creative-video-motion-production",
          url: "/work/creative-video-motion-production",
        },
      },
      {
        name: "Visual Production",
        discipline: "Motion & Sound",
        description: "Procedural kinetic typography, Rec.709 color grading, and acoustic dialogue mastering.",
        relatedProject: {
          projectTitle: "Creative Video Post-Production & Motion Suite",
          projectSlug: "creative-video-motion-production",
          url: "/work/creative-video-motion-production",
        },
      },
    ],
  },
  {
    id: "research",
    name: "Research",
    iconName: "FlaskConical",
    description: "In silico computational biology, structural oncology, and biological literature synthesis.",
    skills: [
      {
        name: "Cancer Biology",
        discipline: "Molecular Oncology",
        description: "Investigating mechanisms of oncogenesis, apoptosis evasion, and cellular survival pathways.",
        relatedProject: {
          projectTitle: "Targeting Anti-Apoptotic Bcl-2 Family Proteins in Cancer",
          projectSlug: "targeting-bcl2-family-proteins-cancer",
          url: "/research/targeting-bcl2-family-proteins-cancer",
        },
      },
      {
        name: "Molecular Biology",
        discipline: "Cellular Pathways",
        description: "Examining macromolecular interactions, protein-protein interfaces, and biochemical networks.",
        relatedProject: {
          projectTitle: "Targeting Anti-Apoptotic Bcl-2 Family Proteins in Cancer",
          projectSlug: "targeting-bcl2-family-proteins-cancer",
          url: "/research/targeting-bcl2-family-proteins-cancer",
        },
      },
      {
        name: "Apoptosis",
        discipline: "Cell Death Checkpoints",
        description: "Studying intrinsic mitochondrial apoptotic checkpoints and pro- vs. anti-apoptotic balance.",
        relatedProject: {
          projectTitle: "Targeting Anti-Apoptotic Bcl-2 Family Proteins in Cancer",
          projectSlug: "targeting-bcl2-family-proteins-cancer",
          url: "/research/targeting-bcl2-family-proteins-cancer",
        },
      },
      {
        name: "Computational Biology",
        discipline: "In Silico Workflows",
        description: "Protein coordinate curation, molecular docking simulations, and binding affinity comparisons.",
        relatedProject: {
          projectTitle: "Targeting Anti-Apoptotic Bcl-2 Family Proteins in Cancer",
          projectSlug: "targeting-bcl2-family-proteins-cancer",
          url: "/research/targeting-bcl2-family-proteins-cancer",
        },
      },
    ],
  },
];
