"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/content";
import { profile } from "@/content";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section relative overflow-hidden border-b border-[var(--line)] bg-[var(--bg)]">
        <div className="container hero-grid items-center gap-[clamp(40px,7vw,100px)] min-h-[580px] py-[80px]">

          {/* Left: copy */}
          <div className="hero-copy">
            <ScrollReveal direction="up">
              <Badge>
                <span className="hero-badge-dot inline-block w-[6px] h-[6px] rounded-full bg-[var(--green)] animate-pulse" />
                FULL STACK JAVA ENGINEER
              </Badge>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <h1 className="mt-[24px] mb-[20px] text-[clamp(40px,6.5vw,76px)] font-[800] tracking-[-0.04em] leading-[1.05] text-[var(--ink)]">
                Building production<br />
                software,{" "}
                <em className="italic text-[var(--accent)] not-italic" style={{ fontStyle: 'italic' }}>end to end.</em>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <p className="hero-desc max-w-[520px] mb-0 text-[17px] text-[var(--ink-2)] leading-[1.7]">
                Java · Spring Boot · Microservices · Next.js · Docker · VPS
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={280}>
              <p className="mt-[12px] max-w-[520px] text-[15px] text-[var(--ink-3)] leading-[1.8]">
                I design and ship full-stack systems — from Spring Boot microservices and PostgreSQL backends to polished Next.js frontends, deployed to production on Linux VPS with Docker and Nginx.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={360}>
              <div className="hero-actions flex flex-wrap gap-10 mt-[28px]">
                <Link
                  className="btn btn-primary inline-flex items-center gap-8"
                  href="/projects"
                >
                  View My Projects <span aria-hidden="true">→</span>
                </Link>
                <Link
                  className="btn btn-secondary inline-flex items-center gap-8"
                  href="/contact"
                >
                  Get in Touch <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={440}>
              <div className="hero-meta flex items-center gap-8 mt-[36px] text-[11px] text-[var(--ink-4)]">
                <span className="hero-meta-line w-[24px] h-[1px] bg-[var(--line-2)]" />
                Production-grade microservices & web engineering · Available for roles & collaborations
              </div>
            </ScrollReveal>
          </div>

          {/* Right: visual stats panel */}
          <div className="hero-visual-wrap relative">
            <div className="hero-visual-label flex justify-between items-center mb-[10px] text-[9px] font-[600] tracking-[0.1em] uppercase text-[var(--ink-4)]">
              <span>Stack Overview</span>
              <span>Fig. 01</span>
            </div>

            <div className="hero-visual relative overflow-hidden border border-[var(--line)] rounded-[14px] bg-[var(--surface)] shadow-md">
              <div className="absolute inset-0 bg-[linear-gradient(var(--line)_1px_,transparent_1px),linear-gradient(90deg,var(--line)_1px_,transparent_1px)] bg-[32px_32px] opacity-[0.25]" />
              <div className="relative z-10 p-[28px] flex flex-col gap-[16px]">

                {/* Stack rows */}
                {[
                  { label: 'Backend', value: 'Java · Spring Boot · Microservices', icon: '◈', color: 'var(--accent)' },
                  { label: 'Frontend', value: 'Next.js · React · TypeScript', icon: '◉', color: '#6366f1' },
                  { label: 'Database', value: 'PostgreSQL · Neon · MongoDB', icon: '▣', color: '#10b981' },
                  { label: 'DevOps', value: 'Docker · Nginx · Linux VPS', icon: '◆', color: '#f59e0b' },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-[12px] p-[12px] rounded-[10px] bg-[var(--surface-2)] border border-[var(--line)] group hover:border-[var(--accent)] transition-colors duration-150">
                    <span style={{ color: row.color, fontSize: '18px', flexShrink: 0 }}>{row.icon}</span>
                    <div>
                      <div className="text-[10px] font-[700] uppercase tracking-[0.08em] text-[var(--ink-4)] mb-[2px]">{row.label}</div>
                      <div className="text-[12px] text-[var(--ink-2)] font-[500]">{row.value}</div>
                    </div>
                  </div>
                ))}

                {/* Live badge */}
                <div className="flex items-center justify-between p-[12px] rounded-[10px] bg-[var(--green-bg)] border border-transparent mt-[4px]">
                  <div>
                    <div className="text-[10px] font-[700] uppercase tracking-[0.08em] text-[var(--green)] mb-[2px]">Live in Production</div>
                    <div className="text-[12px] text-[var(--green)] font-[500]">exceptionaliasacademy.com</div>
                  </div>
                  <span className="live-pill">
                    <span className="live-dot" /> Live
                  </span>
                </div>
              </div>
            </div>

            <div className="hero-visual-caption flex justify-between mt-[10px] text-[9px] font-[600] tracking-[0.08em] uppercase text-[var(--ink-4)]">
              <span>Design</span>
              <span>Build</span>
              <span>Deploy</span>
            </div>
          </div>

        </div>

        <div className="hero-rule border-t border-[var(--line)] bg-[var(--surface-2)]">
          <div className="container hero-rule-inner flex justify-between items-center px-[12px] text-[9px] font-[600] tracking-[0.1em] uppercase text-[var(--ink-4)]">
            <span>Selected work & research</span>
            <span>Scroll to explore ↓</span>
          </div>
        </div>
      </section>

      {/* ── SPECIALTIES BAR ── */}
      <section className="border-y border-[var(--line)] bg-[var(--surface)] py-[14px]">
        <div className="container flex flex-wrap items-center justify-center gap-x-[32px] gap-y-[8px] text-[12px] font-[500] text-[var(--ink-3)]">
          <span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"/>Java / Spring Boot</span>
          <span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"/>Next.js / React</span>
          <span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"/>PostgreSQL / Docker</span>
          <span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"/>Linux VPS / Nginx</span>
          <span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"/>Applied AI Research</span>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="section section-border-bottom py-[112px]" id="work">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-head">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  01 — Selected Work
                </span>
                <h2>
                  Projects shipped,<br />
                  <em>problems solved.</em>
                </h2>
              </div>
              <div className="section-head-aside">
                <p>
                  Production deployments, full-stack platforms, applied AI prototypes, and web tools — each built from architecture through to deployment.
                </p>
                <Link className="text-link" href="/projects">
                  All projects <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <div className="projects-grid">
            {projects.slice(0, 3).map((project, idx) => (
              <ScrollReveal key={project.slug} delay={idx * 70} direction="up">
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH ── */}
      <section className="research-section">
        <div className="container research-grid">
          <ScrollReveal direction="left">
            <div className="research-copy">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                02 — Research Direction
              </span>
              <span className="research-index">Research Note / 001</span>
              <h2>
                Can AI help people find the right healthcare service—
                <em>reliably?</em>
              </h2>
              <p>
                Exploring semantic retrieval alongside deterministic constraint
                validation — comparing against keyword-search baselines, evaluated
                on synthetic service data and manually labelled queries.
              </p>
              <div className="research-status">
                <span className="status status-progress">
                  <i />Term paper in progress
                </span>
                <span className="research-status-note">Applied AI · Healthcare Discovery</span>
              </div>
              <Link className="btn-panel" href="/research">
                Read the research outline <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <div className="research-diagram" aria-label="Illustration of the proposed research workflow">
              <div className="diagram-heading">
                <span>Proposed Workflow</span>
                <span>01—04</span>
              </div>
              <div className="diagram-step">
                <span className="diagram-number">01</span>
                <div>
                  <strong>Query understanding</strong>
                  <small>Identify intent and needs</small>
                </div>
                <span className="diagram-symbol">⌕</span>
              </div>
              <div className="diagram-line" />
              <div className="diagram-step">
                <span className="diagram-number">02</span>
                <div>
                  <strong>Semantic retrieval</strong>
                  <small>Find relevant candidates</small>
                </div>
                <span className="diagram-symbol">◎</span>
              </div>
              <div className="diagram-line" />
              <div className="diagram-step">
                <span className="diagram-number">03</span>
                <div>
                  <strong>Constraint validation</strong>
                  <small>Apply explicit requirements</small>
                </div>
                <span className="diagram-symbol">✓</span>
              </div>
              <div className="diagram-line" />
              <div className="diagram-step diagram-step-final">
                <span className="diagram-number">04</span>
                <div>
                  <strong>Evaluate results</strong>
                  <small>Ranking · relevance · violations</small>
                </div>
                <span className="diagram-symbol">↗</span>
              </div>
              <div className="diagram-foot">
                <span>Applied AI Design</span>
                <span>Academic Research Study</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── HOW I WORK ── */}
      <section className="section section-border-top section-border-bottom">
        <div className="container approach-grid">
          <ScrollReveal direction="left">
            <div>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                03 — How I Work
              </span>
              <h2>
                Architecture-first.<br />
                <em>Delivery-focused.</em>
              </h2>
            </div>
          </ScrollReveal>

          <div className="approach-list">
            <ScrollReveal direction="up" delay={0}>
              <div className="approach-item">
                <span className="approach-num">01</span>
                <div>
                  <h3>Design the architecture</h3>
                  <p>Think through APIs, data models, service boundaries, and deployment before writing a line of production code.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <div className="approach-item">
                <span className="approach-num">02</span>
                <div>
                  <h3>Build and integrate</h3>
                  <p>Implement across the full stack — backend services, frontend interfaces, database schema, and infrastructure together.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <div className="approach-item">
                <span className="approach-num">03</span>
                <div>
                  <h3>Ship to production</h3>
                  <p>Deploy to real infrastructure with proper configuration, monitoring, and domain/HTTPS setup — not just local demos.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CONTACT BAND ── */}
      <section className="contact-band">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="contact-band-inner">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  Let&apos;s Connect
                </span>
                <h2>Good work starts<br />with a good conversation.</h2>
                <p>
                  Open to software engineering opportunities, technical collaborations,
                  and research conversations.
                </p>
              </div>
              <Link className="btn btn-primary" href="/contact">
                Get in touch <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}