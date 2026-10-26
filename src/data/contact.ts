export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  location: string;
  availability: "open" | "busy" | "closed";
  availabilityLabel: string;
  responseTime: string;
  preferredContact: string;
}

export const contactInfo: ContactInfo = {
  email: "wprofessional49@gmail.com",
  github: "https://github.com/waseem049",
  linkedin: "https://linkedin.com/in/waseem049",
  location: "India",
  availability: "open",
  availabilityLabel: "Open to opportunities",
  responseTime: "Usually within 24 hours",
  preferredContact: "Email for detailed discussions, LinkedIn for quick questions",
};

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const contactSubjects = [
  { value: "job-opportunity", label: "Job Opportunity" },
  { value: "freelance-project", label: "Freelance Project" },
  { value: "technical-collaboration", label: "Technical Collaboration" },
  { value: "research-collaboration", label: "Research Collaboration" },
  { value: "speaking-engagement", label: "Speaking Engagement" },
  { value: "other", label: "Other" },
];
