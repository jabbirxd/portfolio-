import { ExperienceItem, EducationItem } from "@/types";

export const experiencesData: ExperienceItem[] = [
  {
    id: "exp-work",
    role: "[Placeholder] Software Engineer & Web Developer",
    organization: "[Placeholder] Organization / Company / Team",
    location: "Location / Remote",
    period: "[Dates: e.g. 2024 - Present]",
    type: "Industry",
    description:
      "Engineering modular full-stack web applications, RESTful APIs in PHP/Laravel, and interactive frontend platforms with Next.js and TypeScript.",
    bullets: [
      "[Placeholder] Architected modular MVC services and relational database indexing strategies",
      "[Placeholder] Developed responsive, accessible client interfaces with strict TypeScript types",
      "[Placeholder] Offloaded long-running jobs to asynchronous queue workers and caching layers",
    ],
    skillsUsed: ["PHP", "Laravel", "Next.js", "TypeScript", "MySQL", "Redis"],
  },
  {
    id: "exp-freelance",
    role: "[Placeholder] Automation & Freelance Systems Developer",
    organization: "[Placeholder] Independent Client Engagements",
    location: "Remote",
    period: "[Dates: e.g. 2023 - Present]",
    type: "Freelance",
    description:
      "Designing zero-budget workflow automations, custom web scrapers, and local LLM pipelines for freelance clients to streamline repetitive data operations.",
    bullets: [
      "[Placeholder] Deployed self-hosted n8n workflows paired with local Ollama model instances",
      "[Placeholder] Built resilient Python and Playwright web extraction scripts with structured JSON output sinks",
      "[Placeholder] Eliminated recurring cloud SaaS costs by running local containerized automation infrastructure",
    ],
    skillsUsed: ["n8n", "Ollama", "Python", "Playwright", "Docker", "Webhooks"],
  },
  {
    id: "exp-research",
    role: "[Placeholder] Computational Biology & Research Investigator",
    organization: "[Placeholder] Academic Thesis / Research Laboratory",
    location: "Academic / Laboratory",
    period: "[Dates: e.g. 2024 - Present]",
    type: "Research",
    description:
      "Investigating anti-apoptotic Bcl-2 family proteins through in silico structural preparation, molecular docking simulations, and binding affinity comparisons.",
    bullets: [
      "[Placeholder] Conducted multi-conformation docking simulations evaluating binding pocket energy (ΔG)",
      "[Placeholder] Automated batch ligand preparation and structural coordinate curation in Python",
      "[Placeholder] Documented scientific methodologies following reproducible FAIR data standards",
    ],
    skillsUsed: ["Computational Biology", "In Silico Docking", "Python", "Molecular Modeling"],
  },
  {
    id: "exp-creative",
    role: "[Placeholder] Creative Media & UI/UX Designer",
    organization: "[Placeholder] Creative Projects & Media Production",
    location: "Remote",
    period: "[Dates: e.g. 2023 - Present]",
    type: "Freelance",
    description:
      "Crafting high-contrast design systems in Figma and producing cinematic video content with kinetic motion graphics and mastered sound design.",
    bullets: [
      "[Placeholder] Established token-based design systems with WCAG AAA contrast compliance",
      "[Placeholder] Edited multi-track video timelines with rhythmic narrative pacing and color grading",
    ],
    skillsUsed: ["UI/UX Design", "Figma", "Premiere Pro", "DaVinci Resolve", "After Effects"],
  },
];

export const educationData: EducationItem[] = [
  {
    id: "edu-current",
    degree: "[Placeholder] Bachelor / Degree Program",
    field: "[Placeholder Department: e.g. Computer Science / Biomedical Sciences / Life Sciences]",
    institution: "[Placeholder] University / College Name",
    location: "[Placeholder City, Country]",
    period: "[Dates: e.g. 2021 - Present]",
    honorsOrNotes: "[Placeholder: Academic concentrations, ongoing thesis, or notable coursework]",
    relevantCoursework: [
      "[Placeholder Coursework 1: Software Architecture]",
      "[Placeholder Coursework 2: Database Systems]",
      "[Placeholder Coursework 3: Molecular Biology / Biochemistry]",
      "[Placeholder Coursework 4: Computational Methods & Algorithms]",
    ],
  },
  {
    id: "edu-previous",
    degree: "[Placeholder] Higher Secondary / Secondary Education",
    field: "[Placeholder Field: e.g. Science / Pre-Engineering / Biology]",
    institution: "[Placeholder] College / School Name",
    location: "[Placeholder City, Country]",
    period: "[Dates: e.g. 2019 - 2021]",
    honorsOrNotes: "[Placeholder: Academic background & foundational sciences]",
  },
];
