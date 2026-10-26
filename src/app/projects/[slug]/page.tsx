import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectArt } from "@/components/project-art";
import { projects } from "@/content";
import styles from "./page.module.css";

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
    <div className={styles.casePage}>
      {/* ── CASE STUDY HERO ── */}
      <section className={styles.caseHero}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.breadcrumbRow}>
              <Link href="/projects" className={styles.backLink}>
                <span aria-hidden="true">←</span> Back to All Projects
              </Link>
              <div className={styles.badgesRow}>
                <span className={styles.projectNumBadge}>Project {project.number}</span>
                <span className={`chip ${isLive ? "chip-live" : "chip-progress"}`}>
                  <span className="status-dot" style={{ background: isLive ? "var(--color-green)" : "var(--color-amber)" }} />
                  {project.status}
                </span>
                {project.liveUrl && (
                  <span className="live-pill">
                    <span className="live-dot" /> Live
                  </span>
                )}
              </div>
            </div>

            <div className={styles.heroContentGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.categoryTag}>{project.category}</span>
                <h1 className={styles.caseTitle}>{project.name}</h1>
                <p className={styles.caseLead}>{project.description}</p>

                <div className={styles.heroActions}>
                  {project.liveUrl && (
                    <a
                      className="btn btn-primary"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Live Production Site <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.slug === "unified-healthcare-interface" && (
                    <Link className="btn btn-primary" href="/research">
                      Read Research Methodology <span aria-hidden="true">→</span>
                    </Link>
                  )}
                  <Link className="btn btn-secondary" href="/projects">
                    All Case Studies
                  </Link>
                </div>
              </div>

              <div className={styles.heroArtWrap}>
                <ProjectArt visual={project.visual} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TECH STACK STRIP ── */}
      <section className={styles.stackStrip}>
        <div className="container">
          <ScrollReveal direction="up" delay={60}>
            <div className={styles.stackStripInner}>
              <span className={styles.stackLabel}>Architecture &amp; Technologies</span>
              <div className={styles.stackChips}>
                {project.technologies.map((tech) => (
                  <span className={styles.stackChip} key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CASE STUDY BODY ── */}
      <div className={`container ${styles.caseBody}`}>
        <div className={styles.caseLayoutGrid}>
          {/* Main Column: Scope, Highlights & Architecture */}
          <div className={styles.mainColumn}>
            {/* Scope & Contribution */}
            <ScrollReveal direction="up" delay={80}>
              <article className={styles.caseCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>⌘</span>
                  <h2 className={styles.cardHeading}>Engineering Scope &amp; Contribution</h2>
                </div>
                <p className={styles.cardText}>{project.contribution}</p>
              </article>
            </ScrollReveal>

            {/* Engineering Highlights */}
            <ScrollReveal direction="up" delay={120}>
              <article className={`${styles.caseCard} ${styles.highlightCard}`}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon} style={{ background: 'var(--color-accent-subtle)', color: 'var(--color-accent)' }}>⚡</span>
                  <h2 className={styles.cardHeading}>Key Milestones &amp; Production Highlights</h2>
                </div>
                <p className={styles.cardText}>{project.highlight}</p>
                {project.liveUrl && (
                  <a
                    className={styles.highlightLiveLink}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open live platform: {project.liveUrl} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </article>
            </ScrollReveal>
          </div>

          {/* Sidebar Column: Specifications Matrix */}
          <aside className={styles.sidebarMatrix}>
            <ScrollReveal direction="up" delay={140}>
              <div className={styles.matrixCard}>
                <h3 className={styles.matrixTitle}>System Specifications</h3>
                <div className={styles.matrixList}>
                  <div className={styles.matrixItem}>
                    <span className={styles.matrixLabel}>Category</span>
                    <span className={styles.matrixValue}>{project.category}</span>
                  </div>

                  <div className={styles.matrixItem}>
                    <span className={styles.matrixLabel}>Current Status</span>
                    <span className={styles.matrixValue}>{project.status}</span>
                  </div>

                  {project.liveUrl && (
                    <div className={styles.matrixItem}>
                      <span className={styles.matrixLabel}>Production Endpoint</span>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.matrixLink}
                      >
                        {project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')} ↗
                      </a>
                    </div>
                  )}

                  <div className={styles.matrixItem}>
                    <span className={styles.matrixLabel}>Stack Summary</span>
                    <span className={styles.matrixValue}>
                      {project.technologies.slice(0, 4).join(', ')}
                      {project.technologies.length > 4 ? ` +${project.technologies.length - 4} more` : ''}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </aside>
        </div>

        {/* ── PROJECT NAVIGATION ── */}
        <section className={styles.navSection}>
          <ScrollReveal direction="up" delay={60}>
            <div className={styles.navGrid}>
              {prevProject ? (
                <Link href={`/projects/${prevProject.slug}`} className={styles.navCard}>
                  <span className={styles.navDir}>← Previous Case Study</span>
                  <span className={styles.navName}>{prevProject.name}</span>
                  <span className={styles.navCat}>{prevProject.category}</span>
                </Link>
              ) : (
                <div />
              )}

              <Link href="/projects" className={styles.allProjectsBtn}>
                All Projects
              </Link>

              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className={`${styles.navCard} ${styles.navCardNext}`}
                >
                  <span className={styles.navDir}>Next Case Study →</span>
                  <span className={styles.navName}>{nextProject.name}</span>
                  <span className={styles.navCat}>{nextProject.category}</span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}