import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { ScrollAnimate } from "@/components/scroll-animate";
import { ProjectsExplorer } from "@/components/projects-explorer";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Waseem Tariq",
  description: "A production Spring Boot microservices platform, a healthcare-discovery research prototype, and the products I'm building now.",
};

export default function ProjectsPage() {
  return (
    <div className="inner-page container">
      <ScrollAnimate direction="up">
        <PageHeading
          eyebrow="Projects"
          title="Projects & product work."
          description="Products I've built and shipped, the engineering behind them, and what I'm working on now."
        />
      </ScrollAnimate>

      <ScrollAnimate direction="up" delay={80}>
        <ProjectsExplorer projects={projects} />
      </ScrollAnimate>
    </div>
  );
}
