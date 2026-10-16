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
      "Learning backend development by building a Laravel web application",
    ],
    skillsUsed: ["Next.js", "TypeScript", "Tailwind CSS", "PHP", "Laravel"],
  },
  {
    id: "exp-research-interest",
    role: "Undergraduate Researcher (Independent Study)",
    organization: "Northern University of Business and Technology, Khulna",
    location: "Khulna, Bangladesh",
    period: "2024 - Present",
    type: "Research",
    description:
      "Independent academic exploration of computational drug design: molecular docking, dynamics simulations, and trajectory analysis. Manuscript in preparation; details stay private until publication.",
    bullets: [
      "Molecular docking and dynamics simulations with open-source tools",
      "Trajectory analysis: RMSD, RMSF, hydrogen bonds, and binding free energy",
      "Keeping all code, data, and manuscripts private until published",
    ],
    skillsUsed: ["Python", "Computational Biology", "Data Analysis"],
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
