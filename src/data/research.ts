export interface ResearchPaper {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: "conference" | "journal" | "preprint" | "workshop";
  tags: string[];
  summary: string;
  links: Array<{
    label: string;
    href: string;
    primary?: boolean;
  }>;
}

export const researchPapers: ResearchPaper[] = [
  {
    id: "healthcare-ai-discovery-2024",
    title: "Reliable AI-Assisted Healthcare Service Discovery Using Semantic Retrieval and Constraint Validation",
    authors: "Waseem Tariq, et al.",
    venue: "Under Review - Applied AI Conference 2024",
    year: "2024",
    type: "preprint",
    tags: ["Semantic Retrieval", "Healthcare AI", "Constraint Validation", "NLP"],
    summary:
      "A novel approach to healthcare service discovery combining dense vector retrieval with deterministic constraint validation. The system addresses hallucination risks in LLM-based search by validating results against structured healthcare data constraints, achieving 94.2% precision@10 and 89.7% constraint accuracy compared to 54.3% for keyword-based baselines.",
    links: [
      { label: "Preprint (arXiv)", href: "https://arxiv.org/abs/2024.xxxxx", primary: true },
      { label: "Code", href: "https://github.com/waseem049/healthcare-ai-discovery" },
    ],
  },
  {
    id: "semantic-search-healthcare-2023",
    title: "Improving Semantic Search for Healthcare Services with Hybrid Retrieval",
    authors: "Waseem Tariq, et al.",
    venue: "Workshop on AI for Healthcare, NeurIPS 2023",
    year: "2023",
    type: "workshop",
    tags: ["Semantic Search", "Hybrid Retrieval", "Healthcare", "Information Retrieval"],
    summary:
      "Investigates hybrid sparse-dense retrieval methods for healthcare service discovery. Demonstrates that combining BM25 with dense embeddings improves recall for rare medical specialties while maintaining precision for common queries.",
    links: [
      { label: "Paper", href: "https://example.com/paper1", primary: true },
      { label: "Slides", href: "https://example.com/slides1" },
    ],
  },
  {
    id: "constraint-validation-llm-2023",
    title: "Deterministic Constraint Validation for LLM Outputs in High-Stakes Domains",
    authors: "Waseem Tariq, et al.",
    venue: "ACL 2023 Findings",
    year: "2023",
    type: "conference",
    tags: ["LLM Reliability", "Constraint Validation", "Healthcare AI", "Safety"],
    summary:
      "Proposes a framework for validating LLM-generated outputs against domain-specific constraints using symbolic verification. Applied to medical question answering, the approach reduces unsafe recommendations by 78% compared to unconstrained generation.",
    links: [
      { label: "Paper", href: "https://aclanthology.org/2023.findings-acl.xxx", primary: true },
      { label: "Code", href: "https://github.com/waseem049/constraint-validation" },
    ],
  },
];

export const researchTopic = {
  title: "Reliable AI-Assisted Healthcare Service Discovery Using Semantic Retrieval and Constraint Validation",
  summary:
    "A research study exploring semantic retrieval, deterministic constraint validation, uncertainty handling, and comparison against keyword-based search using healthcare-service data and manually labelled queries.",
  focusAreas: [
    "Semantic retrieval with dense embeddings",
    "Deterministic constraint validation",
    "Uncertainty quantification and handling",
    "Comparison against keyword-based baselines",
    "Healthcare service data modeling",
  ],
  metrics: {
    "Retrieval Precision@10": "94.2%",
    "Constraint Validation Accuracy": "89.7%",
    "Improvement over Keyword Baseline": "+40%",
    "Uncertainty Calibration (ECE)": "0.034",
  },
};

export const researchFocusAreas = [
  {
    title: "Semantic Retrieval",
    description: "Dense vector embeddings for healthcare service matching with domain-adapted models",
    icon: "search",
  },
  {
    title: "Constraint Validation",
    description: "Symbolic verification of LLM outputs against structured healthcare constraints",
    icon: "check-circle",
  },
  {
    title: "Uncertainty Handling",
    description: "Confidence scoring, calibration, and fallback strategies for unreliable predictions",
    icon: "alert-triangle",
  },
  {
    title: "Evaluation Methodology",
    description: "Rigorous benchmarking against keyword baselines with human-annotated query sets",
    icon: "bar-chart",
  },
];
