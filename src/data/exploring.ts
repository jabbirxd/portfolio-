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
    category: "Web Development",
    summary: "Built a complete Laravel e-commerce app for my university field work.",
    description:
      "Built Techif Store solo in 2025: product catalog, cart and wishlist with Livewire, checkout, order history, and an admin panel with role-based access. Eloquent models, migrations, and Blade views throughout.",
    currentThemes: [
      "PHP & Laravel",
      "Eloquent & Migrations",
      "MVC Fundamentals",
    ],
    statusTag: "BUILT 2025",
    accent: "system",
    linkUrl: "/work/techif-laravel-app",
    linkLabel: "View Techif Store",
  },
  {
    id: "exp-comp-bio",
    order: "03",
    title: "CADD Research",
    category: "Research Interest",
    summary: "Computer-Aided Drug Discovery research alongside my degree.",
    description:
      "Co-first author on a CADD manuscript under review: designed 9 flavonoid derivatives, ran docking (AutoDock Vina), 100 ns MD simulations, and MM/GBSA calculations.",
    currentThemes: [
      "Molecular Docking",
      "Molecular Dynamics",
      "MM/GBSA",
    ],
    statusTag: "UNDER REVIEW",
    accent: "research",
    linkUrl: "/research",
    linkLabel: "View Research Interests",
  },
];
