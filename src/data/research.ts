import { ResearchItem, ResearchInterest } from "@/types";

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

export const researchData: ResearchItem[] = [
  {
    id: "res-bcl2-cancer",
    slug: "targeting-bcl2-family-proteins-cancer",
    title: "[Placeholder] Targeting Anti-Apoptotic Bcl-2 Family Proteins in Cancer",
    tagline: "In silico evaluation of binding pocket dynamics, BH3-domain interactions, and small-molecule candidate screening",
    abstract:
      "Evasion of programmed cell death (apoptosis) is a hallmark of oncogenesis, frequently mediated by the overexpression of anti-apoptotic Bcl-2 family members (Bcl-2, Bcl-xL, Mcl-1). This investigative research outlines an in silico structural workflow assessing macromolecular binding groove conformations, ligand docking orientations, and calculated binding affinities across targeted anti-apoptotic proteins to understand molecular mechanisms of selective inhibition.",
    domain: "Translational Oncology",
    status: "ongoing",
    methods: [
      "Protein Coordinate Preparation",
      "In Silico Molecular Docking",
      "Binding Affinity Comparison",
      "Conformational Energy Analysis",
      "Structural Pocket Mapping",
    ],
    keywords: [
      "Apoptosis",
      "Bcl-2 Family",
      "Mcl-1",
      "Bcl-xL",
      "In Silico Docking",
      "Cancer Biology",
      "Molecular Modeling",
    ],
    role: "Lead Investigator",
    timeline: "2024 - Present",
    isFeatured: true,

    // Case Study Pathway Visualization
    pathwayNodes: [
      {
        order: "01",
        title: "Cancer Pathogenesis",
        subtitle: "Uncontrolled Proliferation",
        description: "Malignant transformation drives cellular stress and accumulation of oncogenic mutations.",
      },
      {
        order: "02",
        title: "Dysregulated Apoptosis",
        subtitle: "Evasion of Cell Death",
        description: "Suppression of intrinsic apoptotic cues allows defective cells to bypass programmed death checkpoints.",
      },
      {
        order: "03",
        title: "Anti-Apoptotic Up-regulation",
        subtitle: "Protein Overexpression",
        description: "Heightened cellular abundance of anti-apoptotic sentinels sequesters pro-apoptotic BH3 activators.",
      },
      {
        order: "04",
        title: "Bcl-2 / Bcl-xL / Mcl-1",
        subtitle: "Target Biomolecules",
        description: "Key survival proteins exhibiting conserved hydrophobic surface grooves (BH1–BH4 domains).",
      },
      {
        order: "05",
        title: "Therapeutic Targeting",
        subtitle: "In Silico Candidate Screening",
        description: "Selective small-molecule BH3 mimetics designed to disrupt survival complexes and re-sensitize malignant cells.",
      },
    ],

    // Targeted Biomolecules
    targets: [
      {
        symbol: "Bcl-2",
        name: "B-cell lymphoma 2",
        role: "Primary anti-apoptotic regulator",
        significance: "Crucial survival factor in hematopoietic and lymphoid malignancies.",
      },
      {
        symbol: "Bcl-xL",
        name: "B-cell lymphoma-extra large",
        role: "Mitochondrial membrane protector",
        significance: "Frequently implicated in solid tumor chemoresistance and platelet regulation.",
      },
      {
        symbol: "Mcl-1",
        name: "Myeloid cell leukemia 1",
        role: "Labile survival protein",
        significance: "Key driver of acquired resistance to selective Bcl-2 inhibitors.",
      },
    ],

    // Academic Research Structure
    background:
      "Programmed cell death via the intrinsic mitochondrial apoptosis pathway is strictly governed by protein-protein interactions within the Bcl-2 family. Malignant cells routinely subvert this checkpoint by up-regulating anti-apoptotic sentinels (Bcl-2, Bcl-xL, and Mcl-1), neutralizing pro-apoptotic BH3-only proteins and resisting apoptotic stimuli. Understanding the structural topology and conformational plasticity of the hydrophobic binding grooves in these proteins is essential for designing targeted therapeutic strategies.",
    researchQuestion:
      "How do structural variations across the hydrophobic binding grooves of Bcl-2, Bcl-xL, and Mcl-1 govern ligand binding affinity and selectivity in computational docking evaluations?",
    hypothesis:
      "Systematic in silico structural preparation and multi-conformation molecular docking will reveal distinct energetic profiles and contact residue networks that differentiate selective binding modes across Bcl-2, Bcl-xL, and Mcl-1.",
    methodology: [
      {
        phase: "Phase 1: Target Protein Preparation",
        title: "Macromolecular Coordinate Curation",
        description:
          "Curation and preparation of high-resolution 3D crystal structures from structural databases. Removal of crystallographic waters, assignment of physiological protonation states, hydrogen addition, and local energy minimization of receptor coordinates.",
        domainFocus: "Structure Hygiene & Energy Minimization",
      },
      {
        phase: "Phase 2: Binding Site & Grid Definition",
        title: "Hydrophobic Groove Mapping",
        description:
          "Spatial mapping of the canonical BH3-binding groove encompassing the hydrophobic sub-pockets (P1–P4). Definition of active site grid coordinates and calculation of electrostatic and desolvation potential maps.",
        domainFocus: "Grid Parameterization",
      },
      {
        phase: "Phase 3: Molecular Docking Simulations",
        title: "Flexible-Ligand Conformational Sampling",
        description:
          "Executing computational docking simulations employing genetic search algorithms. Sampling ligand conformational freedom within defined active-site constraints and calculating semi-empirical binding free energies (ΔG).",
        domainFocus: "In Silico Docking",
      },
      {
        phase: "Phase 4: Binding Affinity Comparison",
        title: "Energetic Scoring & Cluster Analysis",
        description:
          "Comparative evaluation of computed binding affinities, electrostatic contacts, hydrogen bonding networks, and root-mean-square deviation (RMSD) clustering across target conformations.",
        domainFocus: "Statistical Comparison",
      },
    ],
    analysis: [
      {
        title: "Active-Site Contact Residue Interaction Mapping",
        description:
          "Analysis of specific amino acid residue contacts (e.g. conserved arginine and aspartate residues) contributing to favorable electrostatic and hydrophobic interaction energies.",
        parametersEvaluated: [
          "Hydrogen bond distance & angle geometry",
          "Hydrophobic surface area burial",
          "Electrostatic interaction potentials",
        ],
      },
      {
        title: "Comparative Selectivity Profiling",
        description:
          "Cross-comparison of computed binding affinity values (ΔG in kcal/mol) across Bcl-2, Bcl-xL, and Mcl-1 to identify structural determinants of selectivity.",
        parametersEvaluated: [
          "Calculated binding free energy differentials",
          "Conformational RMSD clustering stability",
        ],
      },
    ],
    results: [
      {
        label: "Binding Pocket Concordance",
        finding:
          "In silico structural analysis demonstrated consistent coordinate convergence across key sub-pocket regions of target anti-apoptotic models.",
        statusTag: "SIMULATION_VALIDATED",
      },
      {
        label: "Affinity Score Distribution",
        finding:
          "Identified differentiated binding energy patterns between Bcl-2 and Mcl-1 pockets, highlighting key residue variations that dictate target discrimination.",
        statusTag: "IN_SILICO_ANALYZED",
      },
      {
        label: "Reproducible Analytical Pipeline",
        finding:
          "Standardized scripted workflow for automated coordinate cleaning, parameterization, and multi-compound docking score compilation.",
        statusTag: "FAIR_COMPLIANT",
      },
    ],
    discussion:
      "The computational evaluation demonstrates that subtle spatial and electrostatic variations within the P2 and P4 sub-pockets play a pivotal role in governing ligand selectivity between Bcl-2 and Mcl-1. These in silico observations provide structural rationale for designing dual- or selective-targeting scaffolds while highlighting the necessity of conformational flexibility sampling during docking calculations.",
    futureWork: [
      "Incorporate molecular dynamics (MD) trajectory simulations to evaluate binding pocket stability under explicit solvent conditions.",
      "Expand candidate screening libraries using high-throughput virtual screening pipelines.",
      "Correlate computational binding scores with prospective experimental biological assay datasets.",
    ],
    references: [
      {
        citation:
          "Czabotar, P. E., Lessene, G., Strasser, A., & Adams, J. M. (2014). Control of apoptosis by the BCL-2 protein family: implications for physiology and therapy. Nature Reviews Molecular Cell Biology, 15(1), 49-63.",
        doiOrUrl: "https://doi.org/10.1038/nrm3722",
      },
      {
        citation:
          "Ashkenazi, A., Fairbrother, W. J., Leverson, J. D., & Souers, A. J. (2017). From basic apoptosis discoveries to advanced selective BCL-2 family inhibitors. Nature Reviews Drug Discovery, 16(4), 273-284.",
        doiOrUrl: "https://doi.org/10.1038/nrd.2016.253",
      },
    ],
  },
  {
    id: "res-biomed-pipeline",
    slug: "biomedical-data-processing-pipeline",
    title: "[Placeholder] Automated Processing Pipelines for Biomedical Datasets",
    tagline: "Standardized extraction, harmonization, and statistical modeling for clinical and biological registries",
    abstract:
      "A systematic investigation into data hygiene, schema harmonization, and statistical modeling of biomedical datasets to identify latent correlations while adhering to FAIR (Findable, Accessible, Interoperable, Reusable) scientific principles.",
    domain: "Biomedical Research",
    status: "ongoing",
    methods: [
      "Data Harmonization",
      "Statistical Pipeline Design",
      "Python / R Environments",
      "Biological Database Schemas",
    ],
    keywords: ["Biomedical Informatics", "Data Pipelines", "FAIR Principles", "Reproducibility"],
    role: "Investigator",
    timeline: "2024 - Present",
    isFeatured: true,
    background:
      "Biomedical registries and clinical research datasets frequently suffer from disparate schema naming conventions, missing values, and inconsistent formatting that impede reproducible cross-study meta-analyses.",
    researchQuestion:
      "How can standardized, scripted extraction and data hygiene pipelines improve statistical reproducibility across heterogeneous biological registries?",
    hypothesis:
      "Automated extraction and ontology-aligned transformation pipelines will reduce data preparation overhead while improving downstream statistical consistency.",
    methodology: [
      {
        phase: "01. Data Hygiene",
        title: "Sanitization & Missing Value Imputation",
        description: "Automated detection of outliers and systematic missing value assessment.",
      },
      {
        phase: "02. Schema Alignment",
        title: "Standardized Ontology Mapping",
        description: "Transforming tabular clinical records to conform with standard biomedical ontologies.",
      },
    ],
    results: [
      {
        label: "Extraction Efficiency",
        finding: "Streamlined data preprocessing protocols across test datasets with zero data loss.",
        statusTag: "VALIDATED",
      },
    ],
    futureWork: [
      "Integrate automated schema validation against international biomedical standards.",
      "Deploy open-access pipeline wrappers for cross-institutional research teams.",
    ],
  },
];

export function getResearchBySlug(slug: string): ResearchItem | undefined {
  return researchData.find((r) => r.slug === slug);
}

export function getAllResearchSlugs(): string[] {
  return researchData.map((r) => r.slug);
}
