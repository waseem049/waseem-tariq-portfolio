import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ScrollAnimate } from "@/components/scroll-animate";
import { ProjectArt } from "@/components/project-art";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.name} | Waseem Tariq`,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const isLive = project.status === "Complete & live";

  return (
    <div className="inner-page container">
      <ScrollAnimate direction="up">
        <div className="page-heading">
          <span className="eyebrow"><i />{project.category}</span>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
      </ScrollAnimate>

      <div className="project-detail">
        <ScrollAnimate direction="up" delay={80}>
          <div className="project-detail-card">
            {/* Card Header Strip */}
            <div className="card-topline">
              <div className="topline-left">
                <span className="card-number">{project.number}</span>
                <span className="card-category-divider">/</span>
                <span className="project-category">{project.category}</span>
              </div>
              <div className="topline-right">
                <span className={`status ${isLive ? "status-live" : "status-progress"}`}>
                  <i />{project.status}
                </span>
                {project.liveUrl ? (
                  <span className="live-pill">
                    <span className="live-dot" /> Live System
                  </span>
                ) : null}
              </div>
            </div>

            {/* Visual Art */}
            <div className="card-art-col">
              <div className="project-detail-art">
                <ProjectArt visual={project.visual} />
              </div>
              <div className="art-meta-label">
                <span>Figure {project.number}</span>
                <span>{project.slug}</span>
              </div>
            </div>

            {/* Information & Engineering */}
            <div className="card-body-col">
              <p className="project-main-desc">{project.description}</p>

              {/* Scope & Contribution */}
              <div className="detail-spec-box">
                <div className="spec-heading">
                  <span className="spec-icon">⌘</span>
                  <span className="detail-label">My Scope & Contribution</span>
                </div>
                <p>{project.contribution}</p>
              </div>

              {/* Architecture / Engineering Note */}
              <div className="detail-spec-box highlight-box">
                <div className="spec-heading">
                  <span className="spec-icon">⚡</span>
                  <span className="detail-label">Engineering / Architecture Note</span>
                </div>
                <p>{project.highlight}</p>
              </div>

              {/* Technology Stack */}
              <div className="tech-section">
                <span className="detail-label tech-label">Technology Stack</span>
                <div className="tag-row">
                  {project.technologies.map((tech) => (
                    <span className="tag" key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="card-action-row">
                {project.liveUrl ? (
                  <a
                    className="btn btn-primary btn-sm"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit live website <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
                {project.slug === "unified-healthcare-interface" ? (
                  <Link className="btn btn-secondary btn-sm" href="/research">
                    Research outline <span aria-hidden="true">↗</span>
                  </Link>
                ) : null}
                <a
                  className="text-link card-anchor-link"
                  href={`#${project.slug}`}
                  title="Copy permalink"
                >
                  Permalink #
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimate>

        {/* Back to projects link */}
        <ScrollAnimate direction="up" delay={160}>
          <Link className="text-link" href="/projects">
            ← Back to all projects
          </Link>
        </ScrollAnimate>
      </div>
    </div>
  );
}