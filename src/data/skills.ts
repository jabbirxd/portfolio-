import { SkillCategory } from "@/types";

export const skillsCategories: SkillCategory[] = [
  {
    id: "comfortable",
    name: "Comfortable With",
    iconName: "Code2",
    description: "Technologies I have shipped real projects with and can discuss in detail.",
    skills: [
      {
        name: "Next.js",
        discipline: "Frontend Framework",
        description: "App Router, server and client components, routing, and deploying to Vercel.",
        relatedProject: {
          projectTitle: "Ajker Akash — Weather Dashboard",
          projectSlug: "weather-app-ajker-akash",
          url: "/work/weather-app-ajker-akash",
        },
      },
      {
        name: "TypeScript",
        discipline: "Language",
        description: "Typed components, props, and state. I use types to catch bugs before they reach the browser.",
        relatedProject: {
          projectTitle: "Task Manager",
          projectSlug: "task-manager-app",
          url: "/work/task-manager-app",
        },
      },
      {
        name: "Tailwind CSS",
        discipline: "Styling",
        description: "Responsive, mobile-first layouts with utility classes. Every project I ship is responsive.",
        relatedProject: {
          projectTitle: "Ajker Akash — Weather Dashboard",
          projectSlug: "weather-app-ajker-akash",
          url: "/work/weather-app-ajker-akash",
        },
      },
      {
        name: "Git & GitHub",
        discipline: "Version Control",
        description: "Branching, commits, pull requests, and keeping a clean project history.",
        relatedProject: {
          projectTitle: "Task Manager",
          projectSlug: "task-manager-app",
          url: "/work/task-manager-app",
        },
      },
      {
        name: "REST APIs",
        discipline: "Integration",
        description: "Fetching, shaping, and handling real API responses including loading and error states.",
        relatedProject: {
          projectTitle: "Ajker Akash — Weather Dashboard",
          projectSlug: "weather-app-ajker-akash",
          url: "/work/weather-app-ajker-akash",
        },
      },
    ],
  },
  {
    id: "learning",
    name: "Currently Learning",
    iconName: "Cpu",
    description: "Technologies I am actively studying and building with right now.",
    skills: [
      {
        name: "PHP",
        discipline: "Backend Language",
        description: "Used PHP to build a complete Laravel e-commerce app for my field work.",
        relatedProject: {
          projectTitle: "Techif Store — Laravel E-commerce App",
          projectSlug: "techif-laravel-app",
          url: "/work/techif-laravel-app",
        },
      },
      {
        name: "Laravel",
        discipline: "Backend Framework",
        description: "Built a full e-commerce app: routing, Eloquent models, migrations, Blade, Livewire.",
        relatedProject: {
          projectTitle: "Techif Store — Laravel E-commerce App",
          projectSlug: "techif-laravel-app",
          url: "/work/techif-laravel-app",
        },
      },
      {
        name: "Databases",
        discipline: "MySQL & Data Modeling",
        description: "Schema design, migrations, and the basics of querying relational data well.",
      },
    ],
  },
  {
    id: "research",
    name: "CADD Research",
    iconName: "FlaskConical",
    description: "Computer-Aided Drug Discovery methods I used as co-first author on a manuscript under review.",
    skills: [
      {
        name: "CADD",
        discipline: "Computer-Aided Drug Discovery",
        description: "Co-first author on a CADD manuscript under review, in collaboration with University of Dhaka.",
        relatedProject: { projectTitle: "CADD research (under review)", projectSlug: "research", url: "/research" },
      },
      {
        name: "Molecular Docking",
        discipline: "AutoDock Vina",
        description: "Ran molecular docking of the designed derivatives with AutoDock Vina.",
        relatedProject: { projectTitle: "CADD research (under review)", projectSlug: "research", url: "/research" },
      },
      {
        name: "MD Simulations",
        discipline: "OpenMM",
        description: "Ran 100 ns MD simulations in OpenMM with RMSD, RMSF, Rg, PCA and DCCM analysis.",
        relatedProject: { projectTitle: "CADD research (under review)", projectSlug: "research", url: "/research" },
      },
      {
        name: "MM/GBSA",
        discipline: "Binding Free Energy",
        description: "Calculated binding free energies with MM/GBSA.",
        relatedProject: { projectTitle: "CADD research (under review)", projectSlug: "research", url: "/research" },
      },
      {
        name: "RDKit",
        discipline: "Cheminformatics",
        description: "Designed and validated 9 derivatives of 3 parent flavonoids with RDKit.",
        relatedProject: { projectTitle: "CADD research (under review)", projectSlug: "research", url: "/research" },
      },
    ],
  },
  {
    id: "interests",
    name: "Also Interested In",
    iconName: "FlaskConical",
    description: "Areas I explore outside of coursework and keep learning about.",
    skills: [
      {
        name: "UI Design",
        discipline: "Design Basics",
        description: "Learning what makes interfaces readable and calm by studying real sites, not just building them.",
      },
    ],
  },
];
