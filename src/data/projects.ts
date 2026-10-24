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
    name: "Unified Healthcare Interface",
    category: "Healthcare · Web platform · Applied AI",
    description:
      "A healthcare-service discovery project intended to make it easier for people to find relevant providers and services through a clearer digital experience.",
    status: "In development",
    technologies: ["Next.js", "React", "TypeScript", "Mock API / data"],
    contribution:
      "Developing the frontend and application flows around a mock API/data layer. The broader backend and AI-assisted discovery component remain in development; they should not be presented as completed features yet.",
    highlight:
      "Research direction: compare semantic retrieval with keyword-based search, then apply deterministic constraint validation and uncertainty handling. Planned evaluation uses synthetic healthcare-service data and manually labelled queries.",
    visual: "uhi",
  },
  {
    slug: "exceptional-ias-academy",
    number: "02",
    name: "Exceptional IAS Academy",
    category: "Education · Production website",
    description:
      "A completed, live public website for Exceptional IAS Academy, presenting the institute and its educational services to prospective students.",
    status: "Complete & live",
    technologies: ["Next.js", "React", "TypeScript", "Web deployment"],
    contribution:
      "Completed and deployed the public-facing institute website. Related platform work has included frontend/backend deployment and supporting services; describe individual service capabilities separately only where they have been verified.",
    highlight:
      "Live production website: https://www.exceptionaliasacademy.com/. This is a completed website delivery; add screenshots, repository links, and verified technical details to expand the case study.",
    visual: "academy",
    liveUrl: "https://www.exceptionaliasacademy.com/",
  },
  {
    slug: "cloudify",
    number: "03",
    name: "Cloudify",
    category: "Cloud storage · Web application",
    description:
      "A cloud-drive web application whose current public entry point provides sign-in and account-creation options for accessing files and storage.",
    status: "In development",
    technologies: ["Cloud storage", "Authentication flow", "File management"],
    contribution:
      "Developed the Cloudify project and its account-access interface. The public deployment currently exposes the login screen, so the authenticated workspace and file-storage operations have not been independently verified from the public page.",
    highlight:
      "Live demo: add verified details about upload, download, sharing, storage limits, and security after testing those flows end to end.",
    visual: "studio",
    liveUrl: "https://cloudify-gray.vercel.app/login?from=%2F",
  },
  {
    slug: "doclified",
    number: "04",
    name: "Doclified",
    category: "Documents · PDF workflows · Digital signing",
    description:
      "A document workflow web application whose public page presents PDF upload, electronic-signature fields, signing requests, and document audit history.",
    status: "In development",
    technologies: ["MongoDB", "PDF workflows", "Document signing"],
    contribution:
      "Developed the Doclified project and public product interface. The current deployment reports a MongoDB connection problem, so database-backed actions and authenticated signing workflows should be retested before being described as production-ready.",
    highlight:
      "The public product page describes PDF upload, field editing, signing requests, and audit history. Treat these as advertised capabilities until each workflow has been validated end to end.",
    visual: "studio",
    liveUrl: "https://doclified.vercel.app/",
  },
  {
    slug: "fitspacegym",
    number: "05",
    name: "FitSpaceGym",
    category: "Fitness · Web application",
    description:
      "A fitness-focused web application with frontend work underway and a standalone backend/data layer being developed.",
    status: "In development",
    technologies: ["Next.js", "React", "Node.js", "Express", "MongoDB"],
    contribution:
      "Working toward a dedicated Node.js/Express API backed by MongoDB, including data seeding and frontend/backend integration. Core workflows and production readiness still need to be verified before the project is presented as complete.",
    highlight:
      "The current backend direction provides a place to document REST API design, data modelling, validation, authentication, and deployment as each part is implemented and tested.",
    visual: "fitness",
  },
  {
    slug: "nexgendevelopers",
    number: "06",
    name: "NexGenDevelopers",
    category: "Entrepreneurship · Digital studio",
    description:
      "A personal digital-studio venture focused on presenting web-development services, product work, and a professional brand.",
    status: "Ongoing brand work",
    technologies: ["Web development", "Frontend engineering", "Digital products"],
    contribution:
      "Building the studio's brand and digital presence. The portfolio can be expanded with specific client deliverables and outcomes where the work is complete and can be shared publicly.",
    highlight:
      "Shows the product and business side of software development alongside hands-on engineering. Specific client results and metrics should be added only when documented.",
    visual: "studio",
  },
];
