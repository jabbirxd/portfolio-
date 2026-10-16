import { ResearchInterest } from "@/types";

export const researchInterestsData: ResearchInterest[] = [
  {
    id: "int-cancer-bio",
    title: "Cancer Biology",
    subtitle: "Oncogenic Signaling & Cell Survival",
    category: "Molecular Oncology",
    description:
      "Investigating the molecular mechanisms that allow malignant cells to bypass senescence, remodel microenvironments, and sustain uncontrolled proliferation.",
    keyConcepts: ["Tumor Heterogeneity", "Oncogenic Pathways", "Survival Signaling"],
    iconType: "cancer",
  },
  {
    id: "int-apoptosis",
    title: "Apoptosis",
    subtitle: "Programmed Cell Death Pathways",
    category: "Molecular Oncology",
    description:
      "Studying intrinsic mitochondrial and extrinsic death-receptor apoptosis pathways, focusing on how resistance to apoptosis drives therapeutic tolerance in malignancies.",
    keyConcepts: ["Mitochondrial Outer Membrane Permeabilization", "Caspase Activation", "Cell Death Checkpoints"],
    iconType: "apoptosis",
  },
  {
    id: "int-bcl2",
    title: "Bcl-2 Family Proteins",
    subtitle: "Pro- & Anti-Apoptotic Regulators",
    category: "Structural Biology",
    description:
      "Analyzing the structural dynamics and hydrophobic binding grooves of anti-apoptotic proteins (Bcl-2, Bcl-xL, Mcl-1) and their interactions with pro-apoptotic BH3-only sensitizers.",
    keyConcepts: ["Bcl-2 / Bcl-xL / Mcl-1", "BH3-Mimetic Selectivity", "Hydrophobic Pocket Dynamics"],
    iconType: "bcl2",
  },
  {
    id: "int-comp-bio",
    title: "Computational Biology",
    subtitle: "In Silico Workflows & Biomolecular Modeling",
    category: "Computational Informatics",
    description:
      "Developing computational pipelines for structural alignment, conformational energy minimization, and large-scale biological sequence informatics.",
    keyConcepts: ["Structural Bioinformatics", "Data Pipelines", "Macromolecular Modeling"],
    iconType: "comp-bio",
  },
  {
    id: "int-drug-discovery",
    title: "Drug Discovery",
    subtitle: "Target-Based Screening & Docking",
    category: "Structural Biology",
    description:
      "Utilizing in silico molecular docking, binding affinity comparisons, and target druggability evaluations to identify candidate therapeutic scaffolds.",
    keyConcepts: ["Molecular Docking", "Binding Free Energy (ΔG)", "Ligand-Receptor Networks"],
    iconType: "drug-discovery",
  },
  {
    id: "int-mol-bio",
    title: "Molecular Biology",
    subtitle: "Gene Expression & Biochemical Networks",
    category: "Molecular Oncology",
    description:
      "Examining macromolecular interactions, protein-protein interface topologies, and transcriptional regulation of cellular survival genes.",
    keyConcepts: ["Protein-Protein Interfaces", "Biochemical Assays", "Gene Regulation"],
    iconType: "mol-bio",
  },
];

