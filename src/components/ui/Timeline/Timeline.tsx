"use client";

import { profile } from "@/data/profile";
import { TimelineItem } from "./TimelineItem";
import styles from "./Timeline.module.css";

interface TechGroup {
  category: string;
  technologies: string[];
  color?: string;
}

/**
 * Maps flat technology array to categorized tech groups with colors
 */
function mapTechnologiesToGroups(technologies?: string[]): TechGroup[] {
  if (!technologies || technologies.length === 0) return [];

  const groups: Record<string, { technologies: string[]; color: string }> = {
    "Java & Spring": {
      technologies: [],
      color: "var(--color-accent)",
    },
    Frontend: {
      technologies: [],
      color: "var(--color-sky)",
    },
    Infrastructure: {
      technologies: [],
      color: "var(--color-green)",
    },
    Databases: {
      technologies: [],
      color: "var(--color-purple)",
    },
    Architecture: {
      technologies: [],
      color: "var(--color-pink)",
    },
    Research: {
      technologies: [],
      color: "var(--color-rose)",
    },
  };

  const categoryMap: Record<string, string> = {
    Java: "Java & Spring",
    "Spring Boot": "Java & Spring",
    "Spring Cloud": "Java & Spring",
    "Spring Cloud Gateway": "Java & Spring",
    Eureka: "Java & Spring",
    "Spring Security": "Java & Spring",
    JWT: "Java & Spring",
    "REST APIs": "Java & Spring",
    Microservices: "Architecture",
    "API Design": "Architecture",
    "Next.js": "Frontend",
    React: "Frontend",
    TypeScript: "Frontend",
    "Tailwind CSS": "Frontend",
    "Framer Motion": "Frontend",
    Docker: "Infrastructure",
    "Docker Compose": "Infrastructure",
    Nginx: "Infrastructure",
    "Linux VPS": "Infrastructure",
    HTTPS: "Infrastructure",
    Hostinger: "Infrastructure",
    PostgreSQL: "Databases",
    "Neon Postgres": "Databases",
    MongoDB: "Databases",
    MySQL: "Databases",
    "Semantic Retrieval": "Research",
    "Constraint Validation": "Research",
    "Applied AI": "Research",
    "NLP Fundamentals": "Research",
  };

  technologies.forEach((tech) => {
    const category = categoryMap[tech] || "Java & Spring";
    if (groups[category]) {
      groups[category].technologies.push(tech);
    }
  });

  return Object.entries(groups)
    .filter(([, value]) => value.technologies.length > 0)
    .map(([category, value]) => ({
      category,
      technologies: value.technologies,
      color: value.color,
    }));
}

export function Timeline() {
  const experienceItems = profile.experience;

  return (
    <div className={styles.timeline} role="list" aria-label="Professional experience timeline">
      {experienceItems.map((exp, index) => (
        <TimelineItem
          key={index}
          role={exp.role}
          organization={exp.organization}
          duration={exp.duration || exp.engagement}
          summary={exp.summary}
          highlights={exp.highlights}
          techGroups={mapTechnologiesToGroups(exp.technologies)}
          isCurrent={index === 0}
        />
      ))}
    </div>
  );
}
