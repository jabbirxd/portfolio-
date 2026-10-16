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
        description: "Learning modern PHP by building real backend features, not just tutorials.",
        relatedProject: {
          projectTitle: "Techif — Laravel Web Application",
          projectSlug: "techif-laravel-app",
          url: "/work/techif-laravel-app",
        },
      },
      {
        name: "Laravel",
        discipline: "Backend Framework",
        description: "Routing, controllers, Eloquent models, migrations, and Blade templates.",
        relatedProject: {
          projectTitle: "Techif — Laravel Web Application",
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
    id: "interests",
    name: "Also Interested In",
    iconName: "FlaskConical",
    description: "Areas I explore outside of coursework and keep learning about.",
    skills: [
      {
        name: "Computational Biology",
        discipline: "Research Interest",
        description: "How computation helps explore biological questions. An interest, not a credential.",
      },
      {
        name: "UI Design",
        discipline: "Design Basics",
        description: "Learning what makes interfaces readable and calm by studying real sites, not just building them.",
      },
    ],
  },
];
