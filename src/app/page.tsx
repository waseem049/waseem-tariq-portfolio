"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/content";
import { profile } from "@/content";
import styles from "./page.module.css";

export default function HomePage() {
  const flagship = projects[0];
  const secondaryProjects = projects.slice(1, 3);

  return (
    <div className={styles.pageWrap}>
      {/* ── 1. HERO SECTION ── */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            {/* Left: Headline & Engineering Narrative */}
            <div className={styles.heroCopy}>
              <ScrollReveal direction="up">
                <div className={styles.statusPill}>
                  <span className={styles.statusDot} />
                  <span>Full Stack Java Engineer · Open to Roles</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={80}>
                <h1 className={styles.heroTitle}>
                  Building production<br />
                  software, <em>end to end.</em>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={140}>
                <div className={styles.heroSubtitle}>
                  Java 17 · Spring Boot 3 · Microservices · Next.js · Docker · Linux VPS
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <p className={styles.heroDesc}>
                  I architect and deliver production-grade software — from distributed
                  Spring Boot microservices and PostgreSQL backends to polished Next.js
                  interfaces, containerized with Docker Compose and deployed to live Linux VPS infrastructure.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={260}>
                <div className={styles.heroMetrics}>
                  <div className={styles.metricItem}>
                    <span className={styles.metricVal}>1 <span>Live</span></span>
                    <span className={styles.metricLabel}>Production System</span>
                  </div>
                  <div style={{ width: 1, background: 'var(--color-line)' }} />
                  <div className={styles.metricItem}>
                    <span className={styles.metricVal}>7+</span>
                    <span className={styles.metricLabel}>Projects Shipped</span>
                  </div>
                  <div style={{ width: 1, background: 'var(--color-line)' }} />
                  <div className={styles.metricItem}>
                    <span className={styles.metricVal}>5 Yrs</span>
                    <span className={styles.metricLabel}>Public Sector Discipline</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={320}>
                <div className={styles.heroActions}>
                  <Link className="btn btn-primary" href="/projects">
                    Explore Featured Work <span aria-hidden="true">→</span>
                  </Link>
                  <Link className="btn btn-secondary" href="/contact">
                    Get in Touch <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Technical Blueprint & Live Architecture Console */}
            <div className={styles.consoleWrapper}>
              <ScrollReveal direction="up" delay={120}>
                <div className={styles.consoleHeader}>
                  <div className={styles.windowButtons}>
                    <span className={`${styles.windowDot} ${styles.windowDotRed}`} />
                    <span className={`${styles.windowDot} ${styles.windowDotYellow}`} />
                    <span className={`${styles.windowDot} ${styles.windowDotGreen}`} />
                  </div>
                  <span className={styles.consoleTitle}>architecture.topology.v1</span>
                  <span className={styles.consoleBadge}>200 OK</span>
                </div>

                <div className={styles.consoleBody}>
                  {/* Layer 1: Gateway & Discovery */}
                  <div className={styles.archRow}>
                    <span className={styles.archIcon} style={{ color: 'var(--color-accent)' }}>⬡</span>
                    <div className={styles.archContent}>
                      <div className={styles.archLabelRow}>
                        <span className={styles.archLayer}>API Gateway & Discovery</span>
                        <span className={styles.archTech}>Spring Cloud Gateway · Eureka</span>
                      </div>
                      <div className={styles.archDetails}>
                        Route dispatching, central JWT validation, rate limiting & dynamic instance discovery.
                      </div>
                    </div>
                  </div>

                  {/* Layer 2: Core Microservices */}
                  <div className={styles.archRow}>
                    <span className={styles.archIcon} style={{ color: '#6366f1' }}>◈</span>
                    <div className={styles.archContent}>
                      <div className={styles.archLabelRow}>
                        <span className={styles.archLayer}>Microservices Backend</span>
                        <span className={styles.archTech}>Java 17 · Spring Boot 3</span>
                      </div>
                      <div className={styles.archDetails}>
                        Domain-isolated services, REST API contracts & Spring Security RBAC.
                      </div>
                    </div>
                  </div>

                  {/* Layer 3: Persistence */}
                  <div className={styles.archRow}>
                    <span className={styles.archIcon} style={{ color: '#10b981' }}>▣</span>
                    <div className={styles.archContent}>
                      <div className={styles.archLabelRow}>
                        <span className={styles.archLayer}>Database & Storage</span>
                        <span className={styles.archTech}>PostgreSQL · Neon DB</span>
                      </div>
                      <div className={styles.archDetails}>
                        Relational schema design, transactional integrity & serverless connection pools.
                      </div>
                    </div>
                  </div>

                  {/* Layer 4: Infrastructure & Proxy */}
                  <div className={styles.archRow}>
                    <span className={styles.archIcon} style={{ color: '#f59e0b' }}>◆</span>
                    <div className={styles.archContent}>
                      <div className={styles.archLabelRow}>
                        <span className={styles.archLayer}>DevOps & Deployment</span>
                        <span className={styles.archTech}>Docker · Nginx · Linux VPS</span>
                      </div>
                      <div className={styles.archDetails}>
                        Multi-container orchestration, reverse proxy routing, SSL/HTTPS certificates.
                      </div>
                    </div>
                  </div>

                  {/* Live verified production footer */}
                  <div className={styles.liveDeploymentRow}>
                    <div className={styles.liveLeft}>
                      <span className={styles.liveBadgeText}>Live In Production</span>
                      <a
                        href="https://www.exceptionaliasacademy.com"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.liveDomain}
                      >
                        exceptionaliasacademy.com
                      </a>
                    </div>
                    <a
                      href="https://www.exceptionaliasacademy.com"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.liveVisitBtn}
                    >
                      Visit Platform ↗
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SPECIALTIES TICKER ── */}
      <section className={styles.specialtiesSection}>
        <div className="container">
          <div className={styles.specialtiesGrid}>
            <div className={styles.specChip}>
              <span className={styles.specDot} />
              <span>Java 17 & Spring Boot 3</span>
            </div>
            <div className={styles.specChip}>
              <span className={styles.specDot} />
              <span>Next.js 16 & React</span>
            </div>
            <div className={styles.specChip}>
              <span className={styles.specDot} />
              <span>PostgreSQL & Neon</span>
            </div>
            <div className={styles.specChip}>
              <span className={styles.specDot} />
              <span>Docker & Docker Compose</span>
            </div>
            <div className={styles.specChip}>
              <span className={styles.specDot} />
              <span>Linux VPS & Nginx</span>
            </div>
            <div className={styles.specChip}>
              <span className={styles.specDot} />
              <span>Applied AI & Semantic Retrieval</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SELECTED WORK SECTION ── */}
      <section className={styles.sectionBlock} id="work">
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.sectionHeaderRow}>
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  01 — Selected Work
                </span>
                <h2 className={styles.sectionHeading}>
                  Projects shipped,<br />
                  <em>problems solved.</em>
                </h2>
              </div>
              <div className={styles.sectionAside}>
                <p>
                  Production systems, full-stack microservices platforms, and applied AI applications — each built from architecture through to deployment.
                </p>
                <Link className={styles.viewAllLink} href="/projects">
                  View all 7 projects <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Flagship Hero Case Study (Full Width) */}
          <ScrollReveal direction="up" delay={80}>
            <div className={styles.flagshipCard}>
              <div className={styles.flagshipGrid}>
                {/* Left: Project Details & Architecture Highlights */}
                <div>
                  <div className={styles.flagshipBadgeRow}>
                    <span className="chip chip-live">Live in Production</span>
                    <span className={styles.flagshipTag}>{flagship.category}</span>
                  </div>

                  <h3 className={styles.flagshipTitle}>{flagship.name}</h3>

                  <p className={styles.flagshipDesc}>
                    {flagship.description}
                  </p>

                  <div className={styles.flagshipTechGrid}>
                    <div className={styles.flagshipTechBox}>
                      <span className={styles.flagshipTechLabel}>Gateway & Routing</span>
                      <span className={styles.flagshipTechVal}>Spring Cloud Gateway · Eureka</span>
                    </div>
                    <div className={styles.flagshipTechBox}>
                      <span className={styles.flagshipTechLabel}>Backend Stack</span>
                      <span className={styles.flagshipTechVal}>Java · Spring Boot · JWT Auth</span>
                    </div>
                    <div className={styles.flagshipTechBox}>
                      <span className={styles.flagshipTechLabel}>Database Layer</span>
                      <span className={styles.flagshipTechVal}>PostgreSQL on Neon</span>
                    </div>
                    <div className={styles.flagshipTechBox}>
                      <span className={styles.flagshipTechLabel}>Infrastructure</span>
                      <span className={styles.flagshipTechVal}>Docker Compose · Nginx · Hostinger VPS</span>
                    </div>
                  </div>

                  <div className={styles.flagshipActions}>
                    <Link className="btn btn-primary" href={`/projects/${flagship.slug}`}>
                      Read Deep Dive Case Study <span aria-hidden="true">→</span>
                    </Link>
                    {flagship.liveUrl && (
                      <a
                        className="btn btn-secondary"
                        href={flagship.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit Live Site <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Technical Flow Diagram */}
                <div className={styles.flagshipVisualCard}>
                  <div className={styles.flagshipDiagramHeading}>
                    <span>Production Architecture</span>
                    <span>Hostinger VPS</span>
                  </div>

                  <div className={styles.diagramFlowStep}>
                    <span className={styles.flowNum}>01</span>
                    <div className={styles.flowInfo}>
                      <strong>Next.js 16 Client</strong>
                      <small>Tailwind CSS · TypeScript · SSR / SSG</small>
                    </div>
                  </div>

                  <div className={styles.diagramFlowStep}>
                    <span className={styles.flowNum}>02</span>
                    <div className={styles.flowInfo}>
                      <strong>Nginx Reverse Proxy & SSL</strong>
                      <small>Port 80/443 · Let&apos;s Encrypt · Gzip</small>
                    </div>
                  </div>

                  <div className={styles.diagramFlowStep}>
                    <span className={styles.flowNum}>03</span>
                    <div className={styles.flowInfo}>
                      <strong>Spring Cloud Gateway</strong>
                      <small>Auth Token Filter · Service Registry Lookup</small>
                    </div>
                  </div>

                  <div className={styles.diagramFlowStep}>
                    <span className={styles.flowNum}>04</span>
                    <div className={styles.flowInfo}>
                      <strong>Spring Boot Microservices</strong>
                      <small>Core APIs · Neon PostgreSQL · Containerized</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Balanced 2-Column Secondary Projects */}
          <div className={styles.subProjectsGrid}>
            {secondaryProjects.map((project, idx) => (
              <ScrollReveal key={project.slug} delay={140 + idx * 80} direction="up">
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. APPLIED AI RESEARCH SECTION ── */}
      <section className={styles.researchSection}>
        <div className="container">
          <div className={styles.researchGrid}>
            <ScrollReveal direction="left">
              <div className={styles.researchCopy}>
                <span className="eyebrow" style={{ color: 'var(--color-panel-accent)' }}>
                  <span className="eyebrow-dot" style={{ background: 'var(--color-panel-accent)' }} />
                  02 — Applied AI Research
                </span>
                <h2>
                  Can AI help people find the right healthcare service—<em>reliably?</em>
                </h2>
                <p>
                  Exploring semantic retrieval paired with deterministic constraint validation.
                  Evaluating whether vector search can improve intent discovery while hard rules
                  prevent constraint violations across synthetic healthcare records and labelled query sets.
                </p>

                <div className={styles.researchStatusRow}>
                  <span className="chip chip-progress">
                    <span className="status-dot" style={{ background: 'var(--color-panel-accent)' }} />
                    Active Research Study
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--color-panel-ink-3)' }}>
                    Computer Science & AI · Healthcare Retrieval
                  </span>
                </div>

                <Link className="btn btn-primary" href="/research">
                  Read Research Methodology <span aria-hidden="true">→</span>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120}>
              <div className={styles.researchPipelineCard}>
                <div className={styles.pipelineHeader}>
                  <span>Pipeline Architecture</span>
                  <span>Stages 01–04</span>
                </div>

                <div className={styles.pipelineSteps}>
                  <div className={styles.pipelineStep}>
                    <span className={styles.stepNum}>01</span>
                    <div className={styles.stepBody}>
                      <strong>Query Intent Understanding</strong>
                      <small>Extract patient symptoms, location bounds & specialty requirements</small>
                    </div>
                  </div>

                  <div className={styles.pipelineStep}>
                    <span className={styles.stepNum}>02</span>
                    <div className={styles.stepBody}>
                      <strong>Semantic Retrieval Layer</strong>
                      <small>Generate high-recall candidate services using embedding similarity</small>
                    </div>
                  </div>

                  <div className={styles.pipelineStep}>
                    <span className={styles.stepNum}>03</span>
                    <div className={styles.stepBody}>
                      <strong>Deterministic Constraint Validation</strong>
                      <small>Filter candidates against strict hard constraints (availability, radius, insurance)</small>
                    </div>
                  </div>

                  <div className={styles.pipelineStep}>
                    <span className={styles.stepNum}>04</span>
                    <div className={styles.stepBody}>
                      <strong>Evaluation & Benchmark Metrics</strong>
                      <small>Measure Top-K accuracy, recall gain & constraint violation rates</small>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 5. HOW I WORK (ENGINEERING PILLARS) ── */}
      <section className={styles.sectionBlock}>
        <div className="container">
          <ScrollReveal direction="up">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              03 — Engineering Principles
            </span>
            <h2 className={styles.sectionHeading}>
              Architecture-first.<br />
              <em>Delivery-focused.</em>
            </h2>
          </ScrollReveal>

          <div className={styles.pillarsGrid}>
            <ScrollReveal direction="up" delay={80}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>◈</div>
                <div className={styles.pillarIndex}>Pillar 01</div>
                <h3 className={styles.pillarHeading}>Systems Architecture</h3>
                <p className={styles.pillarDesc}>
                  Designing API contracts, microservices boundaries, database schemas, and infrastructure topologies before writing production code.
                </p>
                <span className={styles.pillarFocusTag}>Spring Cloud · ERDs · Eureka</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={140}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>◉</div>
                <div className={styles.pillarIndex}>Pillar 02</div>
                <h3 className={styles.pillarHeading}>Full-Stack Integration</h3>
                <p className={styles.pillarDesc}>
                  Connecting robust Spring Boot backend services to modern Next.js interfaces with type safety, clean state management, and JWT auth.
                </p>
                <span className={styles.pillarFocusTag}>Type-Safe APIs · Next.js · RBAC</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>◆</div>
                <div className={styles.pillarIndex}>Pillar 03</div>
                <h3 className={styles.pillarHeading}>Production Deployment</h3>
                <p className={styles.pillarDesc}>
                  Shipping to live Linux VPS environments with Docker Compose, automated Nginx reverse proxying, SSL/TLS certificates, and systemd services.
                </p>
                <span className={styles.pillarFocusTag}>Docker · Nginx · Linux VPS</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 6. LET'S CONNECT CTA ── */}
      <section className={styles.sectionBlock} style={{ borderBottom: 'none' }}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.ctaWrapper}>
              <div className={styles.ctaContent}>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  Initiate Contact
                </span>
                <h2>Good engineering starts with a good conversation.</h2>
                <p>
                  Available for full-stack software engineering roles, Spring Boot backend systems,
                  and applied AI collaborations. Let&apos;s build something exceptional.
                </p>
                <div className={styles.ctaAvailable}>
                  <span className={styles.statusDot} />
                  <span>Available for Full-Time Roles &amp; Contracts</span>
                </div>
              </div>

              <div className={styles.ctaActions}>
                <Link className="btn btn-primary" href="/contact">
                  Start a Conversation <span aria-hidden="true">→</span>
                </Link>
                <a
                  className="btn btn-secondary"
                  href={`mailto:${profile.email}`}
                >
                  Email Directly ↗
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}