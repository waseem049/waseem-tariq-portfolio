export type ExperienceItem = {
  role: string;
  organization: string;
  engagement: string;
  duration?: string;
  summary: string;
  highlights: string[];
  technologies?: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  status: string;
  detail: string;
  note?: string;
};

export const profile = {
  name: "Waseem Tariq",
  role: "Full Stack Java Engineer · Software Developer",
  location: "India",
  headline: "Building useful software. Learning from a non-linear path.",
  introduction:
    "I combine five years in non-technical government service with hands-on full-stack engineering through NexGenDevelopers. I work across Java/Spring Boot backend architecture and modern web applications, while completing an online BCA and developing an applied-AI healthcare research direction.",
  careerStory:
    "My route into software engineering has not been linear. I began a B.Tech in Computer Science & Engineering in 2019, completed four semesters, and discontinued the programme in 2022. I do not present that as a completed degree. I have continued my education through an online BCA at Lovely Professional University, expected to finish in January 2027, while working in government service and building software through an engineering collaboration with NexGenDevelopers.",
  experience: [
    {
      role: "Full Stack Java Engineer",
      organization: "NexGenDevelopers",
      engagement: "Software engineering collaboration",
      summary:
        "I collaborate with NexGenDevelopers on full-stack product development, with a strong focus on Java/Spring Boot backend engineering and system architecture. My work includes designing and implementing a microservices-based application architecture and connecting it to a modern web frontend and production deployment setup.",
      highlights: [
        "Spring Boot microservices, Spring Cloud Gateway, and Eureka service discovery",
        "PostgreSQL / Neon, Docker and Docker Compose",
        "Nginx reverse proxy and deployment on a Hostinger VPS",
        "Next.js / React frontend integration, domain configuration, and HTTPS",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "Spring Cloud Gateway",
        "Eureka",
        "PostgreSQL",
        "Docker",
        "Nginx",
        "Next.js",
      ],
    },
    {
      role: "Government Service",
      organization: "Government sector",
      engagement: "Non-technical public-sector role",
      duration: "5 years · Current",
      summary:
        "I have spent the past five years in a non-technical government role. This is a distinct part of my professional background—not software employment—and sits alongside my continued technical learning and engineering collaboration.",
      highlights: [
        "Experience in a formal, process-driven working environment",
        "A perspective shaped by public service, accountability, and structured responsibilities",
      ],
    },
  ] as ExperienceItem[],
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA), Online",
      institution: "Lovely Professional University (LPU)",
      period: "In progress · Expected January 2027",
      status: "In progress",
      detail:
        "Continuing formal computer-applications education while developing practical software projects and a research direction in applied AI.",
      note: "Current reported CGPA: 7.42",
    },
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "GCET Ganderbal · Cluster University Srinagar",
      period: "2019–2022",
      status: "Discontinued",
      detail:
        "Completed four semesters of the B.Tech programme before discontinuing in 2022. The degree was not completed, and it is not represented as an awarded qualification.",
    },
  ] as EducationItem[],
  researchTopic:
    "Reliable AI-Assisted Healthcare Service Discovery Using Semantic Retrieval and Constraint Validation",
  researchSummary:
    "A term-paper research direction exploring semantic retrieval, deterministic constraint validation, uncertainty handling, and comparison against keyword-based search using synthetic healthcare-service data and manually labelled queries. Evaluation is planned; no results are claimed before experiments are run.",
  focusAreas: [
    "Full-stack software engineering",
    "Java, Spring Boot, and microservices",
    "APIs, databases, and production deployment",
    "Semantic retrieval and applied AI",
    "Reliable healthcare technology",
  ],
  // Add verified public links before launch. Leave blank if you do not want to publish one.
  email: "wprofessional49@gmail.com",
  github: "https://github.com/waseem049",
  linkedin: "https://linkedin.com/in/waseem049",
  resumePath: "", // e.g. "/resume.pdf" after adding your PDF to public/
};
