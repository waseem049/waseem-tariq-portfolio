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
        {/* Ambient gradient orb */}
        <div className="absolute top-[-200px] right-[-150px] w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(79,70,229,0.08)_0%_,_transparent_65%)] pointer-events-none animate-[orb-float_8s_ease-in-out_infinite]" />

        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(var(--line)_1px_,transparent_1px)_,linear-gradient(90deg_,var(--line)_1px_,transparent_1px)] bg-[48px_48px] opacity-45 mask-[radial-gradient(ellipse_80%_60%_at_80%_40%_,_black_0%_,_transparent_70%)] pointer-events-none" />

        <div className="container hero-grid grid-cols-[1fr_1fr] items-center gap-[clamp(40px,7vw,100px)] min-h-[600px] px-0 py-[80px]_88px">

          {/* Left: copy */}
          <div className="hero-copy">
            <ScrollReveal direction="up">
              <Badge>
                <span className="hero-badge-dot inline-block w-[6px] h-[6px] rounded-full bg-[var(--green)] animate-pulse" />
                FULL STACK JAVA ENGINEER
              </Badge>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <h1 className="mt-[24px] mb-[20px] text-[clamp(48px,7vw,80px)] font-[800] tracking-[-0.04em] leading-[1.05] text-[var(--ink)]">
                Building reliable software,{" "}
                <br />
                from frontend to production.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <p className="hero-desc max-w-[560px] mb-0 text-[18px] text-[var(--ink-2)] leading-[1.7]">
                Full Stack Java Engineer · Software Developer
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <p className="mt-[12px] max-w-[560px] text-[15px] text-[var(--ink-3)] leading-[1.75]">
                I build practical web products and backend systems with Java, Spring Boot, modern web technologies, and cloud deployment. I'm also exploring reliable AI-assisted healthcare discovery.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <div className="hero-actions flex flex-wrap gap-10 mt-[28px]">
                <Link
                  className="btn btn-primary inline-flex items-center gap-8 h-[42px] px-[20px] rounded-[20px] bg-[var(--ink)] text-[var(--bg)] font-[600] text-[13px] shadow-sm hover:-translate-y-[2px] transition-all duration-150 ease-spring"
                  href="/projects"
                >
                  View My Projects <span aria-hidden="true">→</span>
                </Link>
                {profile.resumePath ? (
                  <a
                    className="btn btn-ghost inline-flex items-center gap-8 h-[42px] px-[20px] rounded-[20px] border border-[var(--line-2)] text-[var(--ink-2)] bg-transparent font-[600] text-[13px] hover:bg-[var(--surface-2)] hover:text-[var(--ink)] transition-all duration-150 ease-in-out"
                    href={profile.resumePath}
                    download
                  >
                    Download Resume <span aria-hidden="true">↓</span>
                  </a>
                ) : null}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={500}>
              <div className="hero-meta flex items-center gap-8 mt-[36px] text-[11px] text-[var(--ink-4)]">
                <span className="hero-meta-line w-[24px] h-[1px] bg-[var(--line-2)]" />
                Building at the intersection of software and AI.
              </div>
            </ScrollReveal>
          </div>

          {/* Right: visual */}
          <div className="hero-visual-wrap relative">
            <div className="hero-visual-label flex justify-between items-center mb-[10px] text-[9px] font-[600] tracking-[0.1em] uppercase text-[var(--ink-4)]">
              <span>Code</span>
              <span>Fig. 01</span>
            </div>

            <div
              className="hero-visual relative overflow-hidden border border-[var(--line)] rounded-[14px] bg-[var(--surface)] aspect-[4/3] max-h-[400px] shadow-md"
            >
              <div className="absolute inset-0 bg-[linear-gradient(var(--line)_1px_,transparent_1px)_,linear-gradient(90deg_,var(--line)_1px_,transparent_1px)] bg-[32px_32px] opacity-30" />
              <div className="relative z-10 h-full flex items-center justify-center p-[28px]">
                <div
                  className="relative rounded-[28px] overflow-hidden aspect-square bg-[var(--surface-2)] border border-[var(--line)] shadow-md grid place-items-center text-center"
                >
                  <div className="flex flex-col items-center gap-4">
                    <span className="text-[48px]">💻</span>
                    <span className="text-[11px] font-[600] uppercase tracking-[0.1em] text-[var(--ink-4)]">
                      Portfolio placeholder
                    </span>
                    <span className="text-[10px] text-[var(--ink-3)]">
                      Add /public/profile.jpg for a portrait
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-visual-caption flex justify-between mt-[10px] text-[9px] font-[600] tracking-[0.08em] uppercase text-[var(--ink-4)]">
              <span>Build</span>
              <span>Improve</span>
            </div>
          </div>

        </div>

        <div className="hero-rule border-t border-[var(--line)] bg-[var(--surface-2)]">
          <div className="container hero-rule-inner flex justify-between items-center px-[12px] text-[9px] font-[600] tracking-[0.1em] uppercase text-[var(--ink-4)]">
            <span>Selected work &amp; research</span>
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
          <span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"/>Cloud Deployment</span>
          <span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"/>Applied AI Research</span>
        </div>
      </section>

      {/* ── SKILL BANDS ── */}
      <section className="skill-bands section border-b border-[var(--line)] py-[96px] bg-[var(--bg)]">
        <div className="container">
          <div className="skill-grid grid-cols-[repeat(4,minmax(0,1fr))] gap-[24px]">
            <div className="skill-card p-[20px] rounded-[14px] border border-[var(--line)] bg-[var(--surface)] shadow-sm hover:shadow-md hover:border-[var(--line-2)] transition-all duration-250 ease-in-out group">
              <div className="skill-icon inline-flex items-center justify-center w-[10px] h-[10px] rounded-full bg-[var(--accent)] text-white mb-[4px] group-hover:shadow-[0_0_8px_var(--accent-glow)] transition-shadow duration-250">
                <span className="text-[8px]">•</span>
              </div>
              <div className="skill-label text-[11px] font-[700] tracking-[0.12em] uppercase text-[var(--ink-4)] mb-[2px]">
                Full Stack Development
              </div>
              <div className="skill-value text-[11px] text-[var(--ink-3)] leading-[1.6]">
                Java • Spring Boot • React • Next.js
              </div>
            </div>

            <div className="skill-card p-[20px] rounded-[14px] border border-[var(--line)] bg-[var(--surface)] shadow-sm hover:shadow-md hover:border-[var(--line-2)] transition-all duration-250 ease-in-out group">
              <div className="skill-icon inline-flex items-center justify-center w-[10px] h-[10px] rounded-full bg-[var(--accent)] text-white mb-[4px] group-hover:shadow-[0_0_8px_var(--accent-glow)] transition-shadow duration-250">
                <span className="text-[8px]">•</span>
              </div>
              <div className="skill-label text-[11px] font-[700] tracking-[0.12em] uppercase text-[var(--ink-4)] mb-[2px]">
                Cloud &amp; DevOps
              </div>
              <div className="skill-value text-[11px] text-[var(--ink-3)] leading-[1.6]">
                Docker • Nginx • VPS Deployment
              </div>
            </div>

            <div className="skill-card p-[20px] rounded-[14px] border border-[var(--line)] bg-[var(--surface)] shadow-sm hover:shadow-md hover:border-[var(--line-2)] transition-all duration-250 ease-in-out group">
              <div className="skill-icon inline-flex items-center justify-center w-[10px] h-[10px] rounded-full bg-[var(--accent)] text-white mb-[4px] group-hover:shadow-[0_0_8px_var(--accent-glow)] transition-shadow duration-250">
                <span className="text-[8px]">•</span>
              </div>
              <div className="skill-label text-[11px] font-[700] tracking-[0.12em] uppercase text-[var(--ink-4)] mb-[2px]">
                Database
              </div>
              <div className="skill-value text-[11px] text-[var(--ink-3)] leading-[1.6]">
                PostgreSQL • MySQL
              </div>
            </div>

            <div className="skill-card p-[20px] rounded-[14px] border border-[var(--line)] bg-[var(--surface)] shadow-sm hover:shadow-md hover:border-[var(--line-2)] transition-all duration-250 ease-in-out group">
              <div className="skill-icon inline-flex items-center justify-center w-[10px] h-[10px] rounded-full bg-[var(--accent)] text-white mb-[4px] group-hover:shadow-[0_0_8px_var(--accent-glow)] transition-shadow duration-250">
                <span className="text-[8px]">•</span>
              </div>
              <div className="skill-label text-[11px] font-[700] tracking-[0.12em] uppercase text-[var(--ink-4)] mb-[2px]">
                Applied AI Research
              </div>
              <div className="skill-value text-[11px] text-[var(--ink-3)] leading-[1.6]">
                ML • NLP • Real-world Impact
              </div>
            </div>
          </div>
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
                  Projects built around<br />
                  <em>real problems.</em>
                </h2>
              </div>
              <div className="section-head-aside">
                <p>
                  A selection of product and engineering work. Each case study
                  distinguishes what exists today from what is still being developed.
                </p>
                <Link className="text-link" href="/projects">
                  All projects <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <div className="projects-grid">
            {projects.map((project, idx) => (
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
                My current term-paper direction explores semantic retrieval alongside
                deterministic constraint validation, with a keyword-search baseline and
                evaluation on synthetic service data and manually labelled queries.
              </p>
              <div className="research-status">
                <span className="status status-progress">
                  <i />Term paper in progress
                </span>
                <span className="research-status-note">No results claimed before evaluation.</span>
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
                <span>Conceptual Design</span>
                <span>Not a Clinical System</span>
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
                Curious by nature.<br />
                <em>Practical by design.</em>
              </h2>
            </div>
          </ScrollReveal>

          <div className="approach-list">
            <ScrollReveal direction="up" delay={0}>
              <div className="approach-item">
                <span className="approach-num">01</span>
                <div>
                  <h3>Build the thing</h3>
                  <p>Turn requirements into usable interfaces, application flows, and working software.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <div className="approach-item">
                <span className="approach-num">02</span>
                <div>
                  <h3>Understand the system</h3>
                  <p>Think through APIs, data models, service boundaries, and deployment—not just the UI.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <div className="approach-item">
                <span className="approach-num">03</span>
                <div>
                  <h3>Test the assumption</h3>
                  <p>Use clear baselines and defined metrics when exploring AI-assisted approaches.</p>
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
                  Open to software engineering opportunities, research conversations,
                  and thoughtful collaborations.
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