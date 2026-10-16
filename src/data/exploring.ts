export interface ExploringItem {
  id: string;
  order: string;
  title: string;
  category: "Web Development" | "Backend Learning" | "Research Interest";
  summary: string;
  description: string;
  currentThemes: string[];
  statusTag: string;
  accent: "research" | "studio" | "system";
  linkUrl?: string;
  linkLabel?: string;
}

export const currentlyExploringData: ExploringItem[] = [
  {
    id: "exp-nextjs",
    order: "01",
    title: "Modern Frontend",
    category: "Web Development",
    summary: "Shipping responsive interfaces with Next.js and TypeScript.",
    description:
      "Building real projects with the Next.js App Router: routing, server and client components, API integration, and deploying to Vercel.",
    currentThemes: [
      "Next.js App Router",
      "TypeScript",
      "Responsive Design",
    ],
    statusTag: "ACTIVE_BUILD",
    accent: "studio",
    linkUrl: "/work",
    linkLabel: "View My Work",
  },
  {
    id: "exp-laravel",
    order: "02",
    title: "Backend with Laravel",
    category: "Backend Learning",
    summary: "Learning how the server side works with PHP and Laravel.",
    description:
      "Tracing requests from routes to controllers to Blade views. Working through Eloquent models, migrations, and form validation by building.",
    currentThemes: [
      "PHP & Laravel",
      "Eloquent & Migrations",
      "MVC Fundamentals",
    ],
    statusTag: "LEARNING",
    accent: "system",
    linkUrl: "/work/techif-laravel-app",
    linkLabel: "View Laravel Project",
  },
  {
    id: "exp-comp-bio",
    order: "03",
    title: "Computational Biology",
    category: "Research Interest",
    summary: "Independent study alongside my degree.",
    description:
      "Exploring how computation helps investigate biological questions. Details stay private until published, but the curiosity is public.",
    currentThemes: [
      "Molecular Docking Concepts",
      "Python for Science",
      "Reading Papers",
    ],
    statusTag: "ACTIVE_INQUIRY",
    accent: "research",
    linkUrl: "/research",
    linkLabel: "View Research Interests",
  },
];
