export type ProjectStatus = "In development" | "Complete & live" | "Ongoing brand work";

export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  description: string;
  status: ProjectStatus;
  technologies: string[];
  contribution: string;
  highlight: string;
  visual: "uhi" | "academy" | "fitness" | "studio";
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "unified-healthcare-interface",
    number: "01",
    name: "Unified Healthcare Interface (UHI)",
    category: "Healthcare technology · Web platform · Applied AI research",
    description:
      "A healthcare-service discovery platform in development, intended to make it easier for people to discover relevant healthcare providers and services through a unified digital experience. The current implementation focuses on frontend workflows, structured healthcare-service data, mock-backed API interactions, and the foundations for more intelligent discovery. It is also the application context for my planned research into reliable AI-assisted healthcare search.",
    status: "In development",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack React Query",
      "Mock Service Worker (MSW)",
      "Mock API",
      "JSON test data",
      "Role-aware routing",
    ],
    contribution:
      "Built the Next.js frontend and the initial mock data/API layer, including structured records in mockData.json and a MockDB loader in lib/mocks/loader.ts. Used React Query for data-fetching workflows and MSW/mock responses during frontend development. Worked on mock authentication, role-aware application routes, and dashboard workflows. The current prototype should be presented as frontend and mock-backed application work; a production backend and integrated AI retrieval system are still separate implementation stages.",
    highlight:
      "Research topic: “Reliable AI-Assisted Healthcare Service Discovery Using Semantic Retrieval and Constraint Validation.” The proposed study will compare semantic retrieval with keyword-based search, apply deterministic validation for hard constraints, and handle uncertain or incomplete requests. Evaluation is planned using synthetic healthcare-service data and manually labelled queries, measuring retrieval accuracy/ranking and constraint violations. No experimental results should be claimed until the evaluation has been run.",
    visual: "uhi",
  },
  {
    slug: "exceptional-ias-academy",
    number: "02",
    name: "Exceptional IAS Academy",
    category: "Education technology · Full-stack platform · Production deployment",
    description:
      "A completed and live website and digital platform for an IAS/JKAS coaching institute. The public website presents the institute, UPSC and JKAS programmes, course details, results, counselling and enquiry journeys, and contact information. Alongside the public-facing Next.js website, the project includes a containerized Spring Boot microservices backend deployed to a Hostinger VPS.",
    status: "Complete & live",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Java",
      "Spring Boot microservices",
      "Spring Cloud Gateway",
      "Netflix Eureka service discovery",
      "Spring Security / JWT-based authentication",
      "Role-based access control",
      "PostgreSQL",
      "Neon Postgres",
      "Docker",
      "Docker Compose",
      "Nginx reverse proxy",
      "Linux VPS deployment",
      "Hostinger VPS",
      "GoDaddy domain / DNS",
      "HTTPS",
    ],
    contribution:
      "Built and deployed the public-facing website, then integrated it into a separate frontend/backend deployment architecture. The deployed service stack includes authentication, content, and learning services, supported by a Spring Cloud Gateway for API routing and a Eureka server for service discovery. Used PostgreSQL with Neon for relational persistence, Docker and Docker Compose to run the application containers, and Nginx as the public reverse proxy on the Hostinger VPS. The domain is managed through GoDaddy and the site is available over HTTPS. The application architecture includes JWT-based authentication and role-aware access for institute user types. Fast2SMS OTP delivery was selected for a future authentication-flow integration; it should not be described as live until implementation and testing are complete.",
    highlight:
      "Live production website: https://www.exceptionaliasacademy.com/. This project demonstrates a real deployment across a Next.js frontend, Spring Boot microservices, API Gateway, service discovery, PostgreSQL/Neon, Docker Compose, Nginx, DNS configuration, and HTTPS. The public website is complete and live; any new authentication integrations or additional modules should be described separately according to their current implementation status.",
    visual: "academy",
    liveUrl: "https://www.exceptionaliasacademy.com/",
  },
  {
    slug: "cloudify",
    number: "03",
    name: "Cloudify",
    category: "Cloud storage · Web application · Account access",
    description:
      "A cloud-drive application concept designed around an account-based experience for reaching personal files and storage. The deployed entry point presents an email-and-password sign-in screen, a password-recovery link, and an account-creation path, with a return route after sign-in. The authenticated file-management workflows should be described in more depth once they have been verified through a test account or source-code review.",
    status: "In development",
    technologies: [
      "Web application",
      "Account authentication flows",
      "Cloud-storage user experience",
      "Vercel deployment",
    ],
    contribution:
      "Created and deployed the Cloudify application entry point, including the sign-in experience and navigation to password recovery and account creation. The public demo confirms the entry/authentication interface; it does not by itself confirm file upload/download, sharing, storage persistence, or access-control behaviour. Those capabilities should only be added to the portfolio after end-to-end verification. The exact frontend framework, backend, database, and storage provider can be named once confirmed from the project repository.",
    highlight:
      "Live demo: https://cloudify-gray.vercel.app/login?from=%2F. A cloud-storage project case study can be strengthened with verified details about the storage provider, upload/download flow, sharing permissions, data model, and how user files are protected.",
    visual: "studio",
    liveUrl: "https://cloudify-gray.vercel.app/login?from=%2F",
  },
  {
    slug: "doclified",
    number: "04",
    name: "Doclified",
    category: "Document workflows · PDF tools · Electronic signatures",
    description:
      "A document-management and PDF-signing application whose public experience is branded DocSign. Its product interface presents a workflow for uploading a PDF, adding signature and text/date fields, requesting signatures from other people, downloading signed documents, and keeping an audit history. The live page currently reports a disconnected MongoDB database, so the end-to-end persistence and signing workflow needs verification before the project can be presented as production-ready.",
    status: "In development",
    technologies: [
      "Web application",
      "PDF document workflows",
      "Electronic-signature UX",
      "MongoDB",
      "Environment-based database configuration",
      "Vercel deployment",
    ],
    contribution:
      "Built and deployed the public Doclified/DocSign product experience. The documented workflow covers PDF upload, placing signature or text/date/initial fields, requesting signatures, and reviewing an audit trail. The deployment currently shows a database-disconnected warning pointing to the MongoDB URI configuration, so authenticated persistence and complete signing flows should be tested after the database connection is restored. Security, legal-compliance, and encryption claims should be made only for controls that are actually implemented and verified.",
    highlight:
      "Live demo: https://doclified.vercel.app/. The core product direction is digital document workflows and electronic signatures. The next validation step is to restore the MongoDB connection and test the full journey—from upload and field placement through signature request, persistence, audit history, and download.",
    visual: "studio",
    liveUrl: "https://doclified.vercel.app/",
  },
  {
    slug: "fitspacegym",
    number: "05",
    name: "FitSpaceGym",
    category: "Fitness technology · Web application · Backend development",
    description:
      "A gym and fitness web application with a separate backend development track. The project has moved away from an earlier Next.js/Prisma/PostgreSQL direction toward a Node.js and Express API with MongoDB, separating the user-facing application from server-side domain logic and persistent data.",
    status: "In development",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API design",
      "Environment-based configuration",
      "Seed scripts",
    ],
    contribution:
      "Worked on the frontend and the backend migration path, setting up the Express/MongoDB direction and running the database seed workflow successfully. The intended architecture gives the application a dedicated API and persistent data layer rather than keeping business logic inside the frontend or the earlier Prisma/PostgreSQL setup. API contracts, request validation, authentication, and the main user journeys should be documented as complete only after they have been exercised end to end. Deployment configuration also needs a successful production start check before the backend is described as live.",
    highlight:
      "A practical full-stack case study for API structure, database modelling, seed data, environment configuration, and frontend/backend integration. The portfolio can be expanded with verified screenshots, API examples, schema diagrams, and tested user workflows as the implementation progresses.",
    visual: "fitness",
  },
  {
    slug: "shoeshub",
    number: "06",
    name: "ShoesHub",
    category: "E-commerce · Full-stack web application · API development",
    description:
      "A shoe-shopping web application structured as a separate frontend and backend. The frontend uses Next.js and React, while a NestJS API and MongoDB provide a foundation for server-side application logic and data persistence. The project is being developed as a full-stack application rather than a frontend-only storefront.",
    status: "In development",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "Node.js",
      "MongoDB",
      "REST API",
    ],
    contribution:
      "Worked across the Next.js frontend and NestJS backend structure, with MongoDB as the intended data store. This separation gives product presentation, API logic, and persistence their own clear responsibilities. Specific capabilities such as product catalogue management, filtering, cart, checkout, payments, inventory, order processing, and administration should be listed as delivered features only after each is verified in the application.",
    highlight:
      "Demonstrates a TypeScript full-stack approach using Next.js for the web experience and NestJS for a structured Node.js API. Add the live demo, repository link, and a verified feature list when those are available.",
    visual: "studio",
  },
  {
    slug: "nexgendevelopers",
    number: "07",
    name: "NexGenDevelopers",
    category: "Entrepreneurship · Web development studio · Brand website",
    description:
      "The website and digital identity for NexGenDevelopers, a web-development venture focused on building websites and digital applications. The brand direction is minimal and professional, using black and gold as its preferred visual palette. This project represents the product-delivery and business side of the work as well as the technical implementation of a company presence.",
    status: "Ongoing brand work",
    technologies: [
      "Company website",
      "Responsive web design",
      "Frontend engineering",
      "Brand identity",
      "Website development",
      "Digital product delivery",
    ],
    contribution:
      "Developing the studio's digital presence and brand around web-development services and product work. The portfolio should link the website to specific client or product deliverables only where that work is complete and shareable. Individual technology choices and service capabilities should be listed after confirming them against the current company website and repository.",
    highlight:
      "Shows initiative beyond individual coding projects: building a professional studio identity, presenting digital services, and connecting engineering work with real-world delivery. Add verified case studies, client outcomes, and measurable results as they become available.",
    visual: "studio",
  },
];
