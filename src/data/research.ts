import { ResearchInterest } from "@/types";

export const researchInterestsData: ResearchInterest[] = [
  {
    id: "int-cancer-bio",
    title: "Cancer Biology",
    subtitle: "Oncogenic Signaling & Cell Survival",
    category: "Molecular Oncology",
    description:
      "Reading about how cancer cells avoid dying, reshape their surroundings, and keep dividing. Still connecting the pieces.",
    keyConcepts: ["Tumor Heterogeneity", "Oncogenic Pathways", "Survival Signaling"],
    iconType: "cancer",
  },
  {
    id: "int-apoptosis",
    title: "Apoptosis",
    subtitle: "Programmed Cell Death Pathways",
    category: "Molecular Oncology",
    description:
      "Learning the two main ways cells are programmed to die, and how cancer cells block those pathways to survive treatment.",
    keyConcepts: ["Mitochondrial Outer Membrane Permeabilization", "Caspase Activation", "Cell Death Checkpoints"],
    iconType: "apoptosis",
  },
  {
    id: "int-bcl2",
    title: "Bcl-2 Family Proteins",
    subtitle: "Pro- & Anti-Apoptotic Regulators",
    category: "Structural Biology",
    description:
      "Trying to understand how Bcl-2 family proteins like Mcl-1 bind their targets.",
    keyConcepts: ["Bcl-2 / Bcl-xL / Mcl-1", "BH3-Mimetic Selectivity", "Hydrophobic Pocket Dynamics"],
    iconType: "bcl2",
  },
  {
    id: "int-comp-bio",
    title: "Computational Biology",
    subtitle: "In Silico Workflows & Biomolecular Modeling",
    category: "Computational Informatics",
    description:
      "Learning the basic tools: aligning protein structures, minimizing energy, and working with biological sequences.",
    keyConcepts: ["Structural Bioinformatics", "Data Pipelines", "Macromolecular Modeling"],
    iconType: "comp-bio",
  },
  {
    id: "int-drug-discovery",
    title: "Drug Discovery",
    subtitle: "Target-Based Screening & Docking",
    category: "Structural Biology",
    description:
      "Reading about how docking software predicts binding strength, and what makes a protein a good drug target.",
    keyConcepts: ["Molecular Docking", "Binding Free Energy (ΔG)", "Ligand-Receptor Networks"],
    iconType: "drug-discovery",
  },
  {
    id: "int-mol-bio",
    title: "Molecular Biology",
    subtitle: "Gene Expression & Biochemical Networks",
    category: "Molecular Biology",
    description:
      "Going back to basics: how proteins interact with each other, and how cells control which genes are turned on.",
    keyConcepts: ["Protein-Protein Interfaces", "Biochemical Assays", "Gene Regulation"],
    iconType: "mol-bio",
  },
];

