import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ScrollAnimate } from "@/components/scroll-animate";
import { ProjectArt } from "@/components/project-art";
import { projects } from "@/content";

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

  const isLive = project.status === "Complete & live" || project.status === "Live";
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <div className="case-study-page">
      {/* ── CASE STUDY HERO ── */}
      <section className="case-hero">
        <div className="container">
          <ScrollAnimate direction="up">
            <div className="case-hero-inner">
              <div className="case-hero-meta">
                <Link href="/projects" className="case-back-link">
                  <span aria-hidden="true">←</span> All Projects
                </Link>
                <div className="case-hero-badges">
                  <span className="case-number-badge">{project.number}</span>
                  <span className={`status ${isLive ? "status-live" : "status-progress"}`}>
                    <i />{project.status}
                  </span>
                  {project.liveUrl && (
                    <span className="live-pill">
                      <span className="live-dot" /> Live
                    </span>
                  )}
                </div>
              </div>

              <div className="case-hero-content">
                <div className="case-hero-copy">
                  <span className="case-category">{project.category}</span>
                  <h1 className="case-title">{project.name}</h1>
                  <p className="case-lead">{project.description}</p>

                  <div className="case-hero-actions">
                    {project.liveUrl && (
                      <a
                        className="btn btn-primary"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit live site <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    {project.slug === "unified-healthcare-interface" && (
                      <Link className="btn btn-secondary" href="/research">
                        Research outline <span aria-hidden="true">↗</span>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="case-hero-art">
                  <ProjectArt visual={project.visual} />
                </div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* ── TECH STACK STRIP ── */}
      <section className="case-stack-strip">
        <div className="container">
          <ScrollAnimate direction="up" delay={60}>
            <div className="case-stack-inner">
              <span className="case-stack-label">Tech Stack</span>
              <div className="case-stack-tags">
                {project.technologies.map((tech) => (
                  <span className="tag" key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* ── CASE STUDY BODY ── */}
      <div className="container case-body">

        {/* Contribution */}
        <ScrollAnimate direction="up" delay={80}>
          <section className="case-section">
            <div className="case-section-label">
              <span className="case-section-icon">⌘</span>
              <span>My Scope & Contribution</span>
            </div>
            <div className="case-section-content">
              <p className="case-body-text">{project.contribution}</p>
            </div>
          </section>
        </ScrollAnimate>

        {/* Engineering highlight */}
        <ScrollAnimate direction="up" delay={120}>
          <section className="case-section case-section-highlight">
            <div className="case-section-label">
              <span className="case-section-icon">⚡</span>
              <span>Engineering Highlight</span>
            </div>
            <div className="case-section-content">
              <p className="case-body-text">{project.highlight}</p>
              {project.liveUrl && (
                <a
                  className="text-link case-live-link"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open live project <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </section>
        </ScrollAnimate>

        {/* Project Details Grid */}
        <ScrollAnimate direction="up" delay={160}>
          <section className="case-details-grid">
            <div className="case-detail-card">
              <span className="case-detail-label">Category</span>
              <strong className="case-detail-value">{project.category}</strong>
            </div>
            <div className="case-detail-card">
              <span className="case-detail-label">Status</span>
              <strong className="case-detail-value">{project.status}</strong>
            </div>
            {project.liveUrl && (
              <div className="case-detail-card">
                <span className="case-detail-label">Live URL</span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="case-detail-link"
                >
                  {project.liveUrl.replace(/^https?:\/\//, '')}
                </a>
              </div>
            )}
            <div className="case-detail-card">
              <span className="case-detail-label">Stack</span>
              <strong className="case-detail-value">{project.technologies.slice(0, 3).join(', ')}{project.technologies.length > 3 ? ` +${project.technologies.length - 3}` : ''}</strong>
            </div>
          </section>
        </ScrollAnimate>
      </div>

      {/* ── PROJECT NAVIGATION ── */}
      <section className="case-nav-section">
        <div className="container">
          <ScrollAnimate direction="up" delay={80}>
            <div className="case-nav-inner">
              {prevProject ? (
                <Link href={`/projects/${prevProject.slug}`} className="case-nav-card case-nav-prev">
                  <span className="case-nav-dir">← Previous</span>
                  <span className="case-nav-name">{prevProject.name}</span>
                  <span className="case-nav-cat">{prevProject.category}</span>
                </Link>
              ) : <div />}

              <Link href="/projects" className="case-nav-all">
                All Projects
              </Link>

              {nextProject ? (
                <Link href={`/projects/${nextProject.slug}`} className="case-nav-card case-nav-next">
                  <span className="case-nav-dir">Next →</span>
                  <span className="case-nav-name">{nextProject.name}</span>
                  <span className="case-nav-cat">{nextProject.category}</span>
                </Link>
              ) : <div />}
            </div>
          </ScrollAnimate>
        </div>
      </section>
    </div>
  );
}