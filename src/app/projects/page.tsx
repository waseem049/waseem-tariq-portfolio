import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { ProjectArt } from "@/components/project-art";
import { ScrollAnimate } from "@/components/scroll-animate";
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

      <div className="project-detail-list">
        {projects.map((project, idx) => {
          const isLive = project.status === "Complete & live";
          return (
            <ScrollAnimate key={project.slug} delay={idx * 60} direction="up">
              <article className="project-detail" id={project.slug}>
              <div className="project-detail-art">
                <ProjectArt visual={project.visual} />
              </div>

              <div className="project-detail-copy">
                <div className="project-meta-row">
                  <span className="project-category">
                    {project.number} / {project.category}
                  </span>
                  <span className={`status ${isLive ? "status-live" : "status-progress"}`}>
                    <i />{project.status}
                  </span>
                </div>

                <h2>{project.name}</h2>
                <p>{project.description}</p>

                <div className="detail-block">
                  <span className="detail-label">My Work &amp; Current Scope</span>
                  <p>{project.contribution}</p>
                </div>

                <div className="detail-block">
                  <span className="detail-label">Engineering / Product Note</span>
                  <p>{project.highlight}</p>
                </div>

                <div className="tag-row">
                  {project.technologies.map((tech) => (
                    <span className="tag" key={tech}>{tech}</span>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 20px" }}>
                  {project.slug === "unified-healthcare-interface" ? (
                    <Link className="text-link" href="/research">
                      View related research <span aria-hidden="true">↗</span>
                    </Link>
                  ) : null}
                  {project.liveUrl ? (
                    <a
                      className="text-link"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{ marginTop: 8 }}
                    >
                      Visit the live website <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          </ScrollAnimate>
          );
        })}
      </div>

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
