import { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "proj-weather-app",
    slug: "weather-app-ajker-akash",
    screenshot: "/projects/weather-app-ajker-akash.png",
    title: "Ajker Akash — Weather Dashboard",
    tagline: "A weather app whose sky changes with the actual weather",
    summary:
      "Live weather dashboard built with Next.js and the Open-Meteo API. Search any city, see current conditions and a 5-day forecast under a sky gradient that shifts with the real weather and time of day.",
    description:
      "Ajker Akash (meaning 'today's sky') is a weather dashboard that makes the app itself feel like the sky outside. It uses the free Open-Meteo API, so there is no API key to manage, and it works for any city in the world.",
    category: "development",
    filterCategory: "DEVELOPMENT",
    displaySize: "large",
    visualType: "code-terminal",
    previewAccent: "system",
    disciplines: ["Frontend Development", "API Integration", "Responsive UI"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Open-Meteo API"],
    role: "Independent Developer",
    timeline: "2026",
    isFeatured: true,
    liveUrl: "https://weather-app-nine-red-79.vercel.app",
    repoUrl: "https://github.com/jabbirxd/weather-app",
    metrics: [
      { label: "API", value: "Open-Meteo (keyless)" },
      { label: "Forecast", value: "5-day" },
      { label: "Deployed", value: "Vercel" },
    ],
    highlights: [
      "City search with autocomplete",
      "Sky gradient derived from live weather code and time of day",
      "Current conditions plus 5-day forecast",
    ],
    problem:
      "Most weather apps show the same static background no matter what is happening outside. I wanted the app itself to feel like the sky you would see if you looked out the window.",
    approach:
      "Built a Next.js dashboard on the Open-Meteo API with city autocomplete and a 5-day forecast. The background gradient is computed from the actual weather code and the local time, so a rainy evening and a clear noon look completely different.",
    process: [
      {
        phase: "01. Data",
        title: "API shape and city search",
        description:
          "Mapped the Open-Meteo forecast and geocoding responses, then built a debounced autocomplete so typing a city feels instant.",
      },
      {
        phase: "02. Sky system",
        title: "Weather-driven gradients",
        description:
          "Wrote a small module that turns a weather code plus hour of day into a gradient, so the visuals always match the data.",
      },
      {
        phase: "03. Polish",
        title: "Responsive and readable",
        description:
          "Tuned the layout from a 390px phone up to desktop, and made sure text stays readable over every sky state.",
      },
    ],
    whatILearned: [
      "Working with a real third-party API: shaping requests, handling errors, and designing loading states.",
      "Deriving the UI directly from data instead of hardcoding visuals keeps the app honest.",
      "Small details like debounce timing make a search box feel fast.",
    ],
  },
  {
    id: "proj-task-manager",
    slug: "task-manager-app",
    screenshot: "/projects/task-manager-app.png",
    title: "Task Manager",
    tagline: "A clean task manager with priorities, filters, and persistence",
    summary:
      "A focused task manager built with Next.js and TypeScript. Create tasks with priorities, filter by status, and everything persists in localStorage so nothing is lost on refresh.",
    description:
      "A no-frills task manager that covers the fundamentals well: priorities, status filters, and local persistence. Built to practice state management and clean component structure in React.",
    category: "development",
    filterCategory: "DEVELOPMENT",
    displaySize: "medium",
    visualType: "task-list",
    previewAccent: "studio",
    disciplines: ["Frontend Development", "State Management", "UI Design"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "localStorage"],
    role: "Independent Developer",
    timeline: "2026",
    isFeatured: true,
    liveUrl: "https://task-manager-godspeed630.vercel.app",
    repoUrl: "https://github.com/jabbirxd/task-manager",
    metrics: [
      { label: "Storage", value: "localStorage" },
      { label: "Filters", value: "Status + priority" },
      { label: "Deployed", value: "Vercel" },
    ],
    highlights: [
      "Task priorities and status filters",
      "Persists across sessions with localStorage",
      "Clean, distraction-free interface",
    ],
    problem:
      "I needed a project that forced me to think carefully about state: creating, updating, filtering, and deleting items without the UI getting out of sync.",
    approach:
      "Built a single-purpose task app in Next.js with typed state, derived filtered views, and localStorage persistence. Kept the component tree small so every piece of state has one clear owner.",
    whatILearned: [
      "Derived state beats duplicated state: filters computed from one task list stay consistent.",
      "TypeScript catches real bugs in state updates before they reach the browser.",
      "Persistence is a feature: users trust an app that remembers.",
    ],
  },
  {
    id: "proj-techif-laravel",
    slug: "techif-laravel-app",
    screenshot: "/projects/techif-laravel-app.jpg",
    title: "Techif Store — Laravel E-commerce App",
    tagline: "A complete e-commerce app built with Laravel",
    summary:
      "My university field work project at NUBT, built solo in 2025: a Laravel e-commerce app with product catalog, cart, checkout, and an admin panel. Completed and run locally.",
    description:
      "Techif Store was my solo university field work project in 2025: a complete Laravel e-commerce app with a storefront, cart, checkout, and a role-based admin panel. It ran locally and was never deployed.",
    category: "development",
    filterCategory: "DEVELOPMENT",
    displaySize: "medium",
    visualType: "server-terminal",
    previewAccent: "studio",
    disciplines: ["Backend Development", "E-commerce", "Databases"],
    techStack: ["PHP", "Laravel", "Livewire", "Blade", "MySQL"],
    role: "Solo Developer (University Field Work)",
    timeline: "2025",
    isFeatured: true,
    repoUrl: "https://github.com/jabbirxd/techif",
    metrics: [
      { label: "Framework", value: "Laravel 10" },
      { label: "Type", value: "E-commerce" },
      { label: "Status", value: "Completed (local)" },
    ],
    highlights: [
      "Storefront with cart, wishlist and checkout (COD + PayPal)",
      "Admin panel with role-based access for products, orders and users",
      "Eloquent models and migrations for products, orders and variants",
    ],
    problem:
      "My university field work required a complete project, and all my earlier projects were frontend only.",
    approach:
      "Built it the Laravel way: routes to controllers, Eloquent models with migrations, Blade views, and Livewire for the cart and wishlist. Admin panel with role-based access for managing the store.",
    whatILearned: [
      "Building a complete app teaches more than tutorials: checkout flows, order states, admin permissions.",
      "Eloquent relationships keep product, order and variant data consistent.",
      "Role-based access needs to be enforced on the server, not just hidden in the UI.",
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}
