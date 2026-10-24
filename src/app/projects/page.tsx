import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { ScrollAnimate } from "@/components/scroll-animate";
import { ProjectsExplorer } from "@/components/projects-explorer";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected software development and product projects by Waseem Tariq.",
};

export default function ProjectsPage() {
  return (
    <div className="inner-page container">
      <ScrollAnimate direction="up">
        <PageHeading
          eyebrow="Selected Work / 01"
          title="Projects & product work."
          description="A transparent look at the products I'm building, the engineering problems behind them, and where each project stands today."
        />
      </ScrollAnimate>

      <ProjectsExplorer projects={projects} />

      <ScrollAnimate direction="up" delay={200}>
        <div className="honesty-note">
          <span className="note-mark">i</span>
          <p>
            <strong>About project status:</strong> statuses describe the current known
            state, not a claim of production readiness. Live links, repositories,
            screenshots, and measurable outcomes should be added only after verifying each one.
          </p>
        </div>
      </ScrollAnimate>
    </div>
  );
}
