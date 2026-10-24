import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectArt } from "@/components/project-art";

export function ProjectCard({ project }: { project: Project }) {
  const isLive = project.status === "Complete & live";

  return (
    <article className="project-card">
      <Link
        className="project-art-link"
        href={`/projects#${project.slug}`}
        aria-label={`Read about ${project.name}`}
      >
        <ProjectArt visual={project.visual} />
      </Link>

      <div className="project-card-body">
        <div className="project-meta-row">
          <span className="project-category">{project.category}</span>
          <span className={`status ${isLive ? "status-live" : "status-progress"}`}>
            <i />{project.status}
          </span>
        </div>

        <h3>
          <Link href={`/projects#${project.slug}`}>{project.name}</Link>
        </h3>

        <p>{project.description}</p>

        <div className="tag-row">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>

        <div className="project-card-links">
          <Link className="text-link" href={`/projects#${project.slug}`}>
            Explore project <span aria-hidden="true">↗</span>
          </Link>
          {project.liveUrl ? (
            <a
              className="text-link"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              View live <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
