import { ExperienceItem, EducationItem } from "@/types";

export const experiencesData: ExperienceItem[] = [
  {
    id: "exp-independent",
    role: "Independent Web Developer",
    organization: "Self-directed projects",
    location: "Khulna, Bangladesh",
    period: "2025 - Present",
    type: "Freelance",
    description:
      "Designing and shipping real web applications end to end: planning features, writing code, deploying to Vercel, and iterating based on what I learn.",
    bullets: [
      "Shipped a live weather dashboard with real API integration and a 5-day forecast",
      "Built a task manager with priorities, filters, and localStorage persistence",
      "Built a complete Laravel e-commerce app (Techif Store) as my university field work project",
    ],
    skillsUsed: ["Next.js", "TypeScript", "Tailwind CSS", "PHP", "Laravel"],
  },
  {
    id: "exp-research-interest",
    role: "Undergraduate Researcher (Co-First Author)",
    organization: "Northern University of Business and Technology Khulna, in collaboration with University of Dhaka",
    location: "Khulna, Bangladesh",
    period: "2026 - Present",
    type: "Research",
    description:
      "Computer-aided drug discovery research.",
    bullets: [
      "Designed 9 derivatives of 3 parent flavonoids through 7-position modifications, validated with RDKit.",
      "Molecular docking (AutoDock Vina), 100 ns MD simulations with RMSD, RMSF, Rg, PCA and DCCM analysis, and MM/GBSA binding free energy calculations.",
      "Manuscript submitted to a journal; currently under review.",
    ],
    skillsUsed: ["Molecular Docking", "Molecular Dynamics", "OpenMM", "MM/GBSA", "RDKit", "AutoDock Vina"],
  },
];

export const educationData: EducationItem[] = [
  {
    id: "edu-bsc",
    degree: "B.Sc. in Computer Science and Engineering",
    field: "Computer Science and Engineering",
    institution: "Northern University of Business and Technology, Khulna",
    location: "Khulna, Bangladesh",
    period: "Expected 2026",
    honorsOrNotes: "Final-year undergraduate, focused on web development and building a project portfolio.",
    relevantCoursework: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Web Technologies",
    ],
  },
  {
    id: "edu-hsc",
    degree: "Higher Secondary Certificate (Science)",
    field: "Science",
    institution: "Khulna Government Model School and College",
    location: "Khulna, Bangladesh",
    period: "2020",
    honorsOrNotes: "GPA 4.75 / 5.00 (Jashore Board)",
  },
  {
    id: "edu-ssc",
    degree: "Secondary School Certificate (Science)",
    field: "Science",
    institution: "Khulna Public College",
    location: "Khulna, Bangladesh",
    period: "2018",
    honorsOrNotes: "GPA 4.50 / 5.00 (Jashore Board)",
  },
];
