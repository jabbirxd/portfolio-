export interface ExploringItem {
  id: string;
  order: string;
  title: string;
  category: "Computational Informatics" | "Molecular Oncology" | "Systems Engineering";
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
    id: "exp-comp-bio",
    order: "01",
    title: "Computational Biology",
    category: "Computational Informatics",
    summary: "Exploring computational approaches to biological problems.",
    description:
      "Investigating structural modeling workflows, in silico macromolecular binding groove analysis, and reproducible computational pipelines to reduce experimental search spaces.",
    currentThemes: [
      "In Silico Molecular Docking",
      "Binding Free Energy (ΔG)",
      "Structural Database Pipelines",
    ],
    statusTag: "ACTIVE_INQUIRY",
    accent: "research",
    linkUrl: "/research/targeting-bcl2-family-proteins-cancer",
    linkLabel: "View Related Research",
  },
  {
    id: "exp-cancer-res",
    order: "02",
    title: "Cancer Research",
    category: "Molecular Oncology",
    summary: "Investigating apoptosis and anti-apoptotic mechanisms.",
    description:
      "Studying intrinsic mitochondrial programmed cell death evasion and the structural dynamics of anti-apoptotic Bcl-2 family regulators (Bcl-2, Bcl-xL, Mcl-1).",
    currentThemes: [
      "Apoptosis Evasion Checkpoints",
      "Bcl-2 / Bcl-xL / Mcl-1 Grooves",
      "BH3 Mimetic Selectivity",
    ],
    statusTag: "ACTIVE_INQUIRY",
    accent: "research",
    linkUrl: "/research",
    linkLabel: "Explore Research Index",
  },
  {
    id: "exp-ai-automation",
    order: "03",
    title: "AI Workflow Automation",
    category: "Systems Engineering",
    summary: "Building practical automation systems using local/open-source AI tooling.",
    description:
      "Developing privacy-preserving, zero-budget automation stacks leveraging self-hosted n8n orchestrations, local Ollama LLM inference nodes, and resilient web scraping sinks.",
    currentThemes: [
      "Local LLM Orchestration",
      "n8n Workflow Engines",
      "Private Self-Hosted Stacks",
    ],
    statusTag: "ACTIVE_BUILD",
    accent: "system",
    linkUrl: "/work/ai-workflow-automation-stack",
    linkLabel: "View Automation Case Study",
  },
];
