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
  headline: "Building production software. Engineering end-to-end systems.",
  introduction:
    "Full Stack Java Engineer building real-world products with Java/Spring Boot microservices, Next.js frontends, and cloud deployment. I engineer systems with NexGenDevelopers on end-to-end software delivery, while completing a BCA at Lovely Professional University and pursuing applied-AI research in healthcare discovery.",
  careerStory:
    "My path into software engineering is grounded in practical delivery and continuous technical advancement. I design and build backend systems with Java and Spring Boot, deploy them to Linux VPS infrastructure with Docker and Nginx, and connect them to modern React frontends. Alongside engineering work, I am completing my BCA at Lovely Professional University and developing research in applied AI for healthcare service discovery.",
  experience: [
    {
      role: "Full Stack Java Engineer",
      organization: "NexGenDevelopers",
      engagement: "Software engineering collaboration",
      summary:
        "Collaborating with NexGenDevelopers on full-stack product development, with a strong focus on Java/Spring Boot backend engineering and system architecture. Designed, implemented, and delivered a production microservices-based application connected to a modern web frontend and live cloud deployment setup.",
      highlights: [
        "Spring Boot microservices, Spring Cloud Gateway, and Eureka service discovery",
        "PostgreSQL / Neon, Docker and Docker Compose",
        "Nginx reverse proxy and deployment on a Linux VPS",
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
      engagement: "Public sector professional",
      duration: "5 years · Current",
      summary:
        "Five years of experience in a structured public-sector role, developing strong professional discipline, process awareness, and accountability. This background runs alongside my engineering work and sharpens how I approach complex, high-reliability systems.",
      highlights: [
        "Professional discipline in formal, high-accountability environments",
        "Systems thinking shaped by structured processes and real-world operational constraints",
      ],
    },
  ] as ExperienceItem[],
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Lovely Professional University (LPU)",
      period: "In progress · Expected January 2027",
      status: "In progress",
      detail:
        "Pursuing formal computer-applications education alongside active software engineering projects and applied AI research.",
      note: "CGPA: 7.42",
    },
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "GCET Ganderbal · Cluster University Srinagar",
      period: "2019–2022",
      status: "Engineering Studies",
      detail:
        "Completed four semesters of rigorous Computer Science & Engineering coursework, establishing a strong foundation in data structures, algorithms, discrete mathematics, and systems architecture.",
    },
  ] as EducationItem[],
  researchTopic:
    "Reliable AI-Assisted Healthcare Service Discovery Using Semantic Retrieval and Constraint Validation",
  researchSummary:
    "A research study exploring semantic retrieval, deterministic constraint validation, uncertainty handling, and comparison against keyword-based search using healthcare-service data and manually labelled queries.",
  focusAreas: [
    "Full-stack software engineering",
    "Java, Spring Boot, and microservices",
    "APIs, databases, and production deployment",
    "Semantic retrieval and applied AI",
    "Reliable healthcare technology",
  ],
  email: "wprofessional49@gmail.com",
  github: "https://github.com/waseem049",
  linkedin: "https://linkedin.com/in/waseem049",
  resumePath: undefined,
};
