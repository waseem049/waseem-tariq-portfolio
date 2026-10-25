import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectsExplorer } from "@/components/projects";

export const metadata: Metadata = {
  title: "Projects | Waseem Tariq",
  description: "A production Spring Boot microservices platform, a healthcare-discovery research prototype, and the products I'm building now.",
};

export default function ProjectsPage() {
  return (
    <div className="inner-page container">
      <ScrollReveal direction="up">
        <PageHeading
          eyebrow="Projects"
          title="Projects & product work."
          description="Products I've built and shipped, the engineering behind them, and what I'm working on now."
        />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={80}>
        <ProjectsExplorer />
      </ScrollReveal>
    </div>
  );
}
