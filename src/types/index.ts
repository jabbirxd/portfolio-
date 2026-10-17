export type ProjectCategory =
  | "development"
  | "app"
  | "ui-ux"
  | "automation"
  | "creative"
  | "research";

export type ProjectFilter =
  | "ALL"
  | "DEVELOPMENT"
  | "UI/UX"
  | "AUTOMATION"
  | "CREATIVE"
  | "RESEARCH";

export interface CaseStudyProcessStep {
  phase: string;
  title: string;
  description: string;
  highlights?: string[];
}

export interface CaseStudyImplementationSection {
  title: string;
  description: string;
  technicalDetails?: string[];
  codeSnippet?: {
    language: string;
    code: string;
    caption?: string;
  };
}

export interface CaseStudyResult {
  metric?: string;
  label: string;
  text: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  filterCategory: "DEVELOPMENT" | "UI/UX" | "AUTOMATION" | "CREATIVE" | "RESEARCH";
  displaySize?: "large" | "medium" | "wide" | "compact";
  disciplines: string[];
  techStack: string[];
  role: string;
  timeline: string;
  isFeatured?: boolean;
  visualType?: "code-terminal" | "server-terminal" | "task-list";
  previewAccent?: "studio" | "research" | "system" | "creative";
  // Optional real screenshot (public/projects/<slug>.png). When set,
  // the card shows the image instead of the illustrated visual.
  // Never fabricate: leave empty until a real screenshot exists.
  screenshot?: string;
  
  // Case Study Sections
  problem?: string;
  approach?: string;
  process?: CaseStudyProcessStep[];
  implementation?: CaseStudyImplementationSection[];
  results?: CaseStudyResult[];
  whatILearned?: string[];
  
  // External Links (strictly rendered only if defined)
  liveUrl?: string;
  repoUrl?: string;
  prototypeUrl?: string;
  demoUrl?: string;
  
  metrics?: { label: string; value: string }[];
  highlights?: string[];
  architectureOverview?: string;
}

export type ResearchStatus = "ongoing" | "completed" | "publication-pending" | "inquiry";

export interface ResearchTarget {
  symbol: string;
  name: string;
  role: string;
  significance: string;
}

export interface PathwayNode {
  order: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ResearchMethodologyPhase {
  phase: string;
  title: string;
  description: string;
  domainFocus?: string;
}

export interface ResearchAnalysisSection {
  title: string;
  description: string;
  parametersEvaluated?: string[];
}

export interface ResearchResultFinding {
  label: string;
  finding: string;
  statusTag?: string;
}

export interface ResearchReference {
  citation: string;
  doiOrUrl?: string;
}

export interface ResearchItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  abstract: string;
  domain: "Biomedical Research" | "Computational Biology" | "Bioinformatics" | "Translational Oncology";
  status: ResearchStatus;
  methods: string[];
  keywords: string[];
  role: string;
  timeline: string;
  isFeatured?: boolean;
  
  // Complete Academic & Scientific Case Study Sections
  background?: string;
  researchQuestion?: string;
  hypothesis?: string;
  targets?: ResearchTarget[];
  pathwayNodes?: PathwayNode[];
  methodology?: ResearchMethodologyPhase[];
  analysis?: ResearchAnalysisSection[];
  results?: ResearchResultFinding[];
  discussion?: string;
  futureWork?: string[];
  references?: ResearchReference[];
  
  paperUrl?: string;
  datasetUrl?: string;
  findingsSummary?: string[];
  futureDirections?: string;
}

export interface ResearchInterest {
  id: string;
  title: string;
  subtitle: string;
  category: "Molecular Oncology" | "Structural Biology" | "Computational Informatics";
  description: string;
  keyConcepts: string[];
  iconType: "cancer" | "apoptosis" | "bcl2" | "comp-bio" | "drug-discovery" | "mol-bio";
}

export interface SkillEvidenceLink {
  projectTitle: string;
  projectSlug: string;
  url: string;
}

export interface SkillItem {
  name: string;
  discipline: string;
  description?: string;
  relatedProject?: SkillEvidenceLink;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Industry" | "Research" | "Freelance" | "Academic";
  description: string;
  bullets: string[];
  skillsUsed: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  honorsOrNotes?: string;
  relevantCoursework?: string[];
}

export interface NavItem {
  title: string;
  href: string;
  badge?: string;
}
