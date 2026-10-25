"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { TechPill } from "@/components/tech-pill";
import { ProjectCaseCard } from "@/components/project-case-card";
import { ScrollAnimate } from "@/components/scroll-animate";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function HomePage() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY * 0.15;
      el.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section relative overflow-hidden border-b border-[var(--line)] bg-[var(--bg)]">
        {/* Ambient gradient orb */}
        <div className="absolute top-[-200px] right-[-150px] w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(79,70,229,0.08)_0%_,_transparent_65%)] pointer-events-none animate-[orb-float_8s_ease-in-out_infinite]" />

        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(var(--line)_1px_,transparent_1px)_,linear-gradient(90deg_,var(--line)_1px_,transparent_1px)] bg-[48px_48px] opacity-45 mask-[radial-gradient(ellipse_80%_60%_at_80%_40%_,_black_0%_,_transparent_70%)] pointer-events-none" />

        <div className="container hero-grid grid-cols-[1fr_1fr] items-start gap-[clamp(40px,7vw,100px)] min-h-[700px] px-0 py-[100px]_96px">
          {/* Left: copy */}
          <div className="hero-copy">
            <div className="hero-badge inline-flex items-center gap-6 px-[12px] py-[4px] border-l-[2px] border-[var(--amber)] text-[11px] font-[600] text-[var(--ink-2)] uppercase tracking-[0.1em] animate-[badge-in_.6s_ease-out_both]">
              FULL STACK JAVA ENGINEER
            </div>

            <h1 className="mt-[24px] mb-[20px] text-[clamp(42px,6vw,64px)] font-[800] tracking-[-0.04em] leading-[1.05] text-[var(--ink)] animate-[hero-title-in_.7s_.15s_ease-out_both]">
              Building reliable software,{" "}
              <br />
              from frontend to production.
            </h1>

            <p className="hero-desc max-w-[480px] mb-0 text-[15px] text-[var(--ink-2)] leading-[1.75] animate-[hero-title-in_.7s_.28s_ease-out_both]">
              I build practical web products and backend systems with Java, Spring Boot,
              modern web technologies, and cloud deployment. I&apos;m also exploring
              reliable AI-assisted healthcare discovery.
            </p>

            <div className="hero-actions flex flex-wrap gap-10 mt-[32px] animate-[hero-title-in_.7s_.4s_ease-out_both]">
              <Link
                className="btn btn-primary inline-flex items-center gap-6 h-[44px] px-[24px] rounded-full bg-[var(--ink)] text-[var(--bg)] font-[600] text-[13px] shadow-sm hover:-translate-y-[1px] transition-all duration-150 ease-spring"
                href="/projects"
              >
                Explore Projects <span aria-hidden="true">→</span>
              </Link>
              {profile.resumePath ? (
                <a
                  className="btn btn-ghost inline-flex items-center gap-6 h-[44px] px-[24px] rounded-full border border-[var(--line-2)] text-[var(--ink-2)] bg-transparent font-[600] text-[13px] hover:bg-[var(--surface-2)] hover:text-[var(--ink)] transition-all duration-150 ease-in-out"
                  href={profile.resumePath}
                  download
                >
                  Download Résumé <span aria-hidden="true">↓</span>
                </a>
              ) : null}
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-6 mt-[40px] animate-[hero-title-in_.7s_.52s_ease-out_both]">
              <TechPill label="Java" />
              <TechPill label="Spring Boot" />
              <TechPill label="Next.js" />
              <TechPill label="PostgreSQL" />
              <TechPill label="Docker" />
              <TechPill label="Nginx" />
            </div>
          </div>

          {/* Right: hero image with parallax */}
          <div className="hero-visual-wrap relative flex-shrink-0">
            <div ref={parallaxRef} className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden border border-[var(--line)] bg-[var(--surface)] parallax-img">
              {/* Placeholder for hero image - replace with <img src="/hero.png" ... /> when asset provided */}
              <div className="absolute inset-0 grid place-items-center text-[var(--ink-3)] text-sm">
                Hero image placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section py-[80px] bg-[var(--bg)]">
        <div className="container grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-[48px] items-start">
          <div>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              About
            </span>
            <h2 className="mt-[12px] text-[32px] font-[700] tracking-[-0.03em] text-[var(--ink)]">
              Full Stack Java Engineer
            </h2>
            <p className="mt-[16px] text-[15px] text-[var(--ink-2)] leading-[1.75] max-w-[640px]">
              I build practical web products and backend systems with Java, Spring Boot, modern web technologies, and cloud deployment. I&apos;m also exploring reliable AI-assisted healthcare discovery.
            </p>
          </div>
          <div>
            <div className="p-[20px] rounded-[12px] border border-[var(--line)] bg-[var(--surface)]">
              <div className="text-[11px] font-[600] uppercase tracking-[0.1em] text-[var(--ink-4)] mb-[12px]">Skills</div>
              <div className="flex flex-wrap gap-[8px]">
                {["Java","Spring Boot","Next.js","TypeScript","PostgreSQL","Docker","Nginx","React"].map(skill => (
                  <span key={skill} className="text-[12px] font-[500] text-[var(--ink-3)] border border-[var(--line-2)] rounded-[6px] px-[10px] py-[6px] bg-[var(--surface-2)]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* Placeholder for about photo */}
            <div className="mt-[16px] aspect-[4/5] rounded-[12px] border border-[var(--line)] bg-[var(--surface)] grid place-items-center text-[var(--ink-3)] text-sm">
              About photo placeholder
            </div>
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <section className="section section-border-bottom py-[96px] bg-[var(--bg)]">
        <div className="container">
          <ScrollAnimate direction="up">
            <div className="flex items-center justify-between mb-[48px]">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  Selected Work
                </span>
              </div>
              <Link className="text-link" href="/projects">
                View All Projects <span aria-hidden="true">→</span>
              </Link>
            </div>
          </ScrollAnimate>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
            <ScrollAnimate key="academy" delay={60} direction="up">
              <ProjectCaseCard
                image="Academy building"
                name="Exceptional IAS Academy"
                status="Live"
                subtitle="A live institute platform backed by a containerized Spring Boot microservices architecture."
                description="Live education platform for UPSC/JKAS coaching with containerized Spring Boot backend, deployed on VPS with Docker, Nginx, and PostgreSQL."
                techs={["Next.js", "API Gateway", "Services", "PostgreSQL"]}
                viewUrl="https://www.exceptionaliasacademy.com/"
              />
            </ScrollAnimate>
            <ScrollAnimate key="uhi" delay={140} direction="up">
              <ProjectCaseCard
                image="Healthcare interface"
                name="Unified Healthcare Interface"
                status="In development"
                subtitle="A healthcare-service discovery prototype and application context for ongoing retrieval research."
                description="Healthcare-service discovery prototype using Next.js, TypeScript, React Query, and MSW. Backend context for semantic retrieval research."
                techs={["Next.js", "TypeScript", "React Query", "MSW"]}
                viewUrl="#"
              />
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* ── MORE PROJECTS ── */}
      <section className="section py-[80px] bg-[var(--bg)]">
        <div className="container">
          <ScrollAnimate direction="up">
            <div className="flex items-center justify-between mb-[40px]">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  More Projects
                </span>
              </div>
            </div>
          </ScrollAnimate>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px]">
            {[...projects].slice(2).map((project, idx) => (
              <ScrollAnimate key={project.slug} delay={idx * 40} direction="up">
                <div className="p-[16px] rounded-[10px] border border-[var(--line)] bg-[var(--surface)] flex flex-col gap-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-[500] text-[var(--ink-4)]">{project.number}</span>
                  </div>
                  <span className="text-[13px] font-[600] text-[var(--ink)] leading-tight">
                    {project.name}
                  </span>
                  <span className="text-[10px] font-[500] text-[var(--ink-3)] inline-flex items-center gap-1">
                    <span className="w-[5px] h-[5px] rounded-full border border-[var(--ink-4)]" />
                    In development
                  </span>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGINEERING EXPERIENCE ── */}
      <section className="section section-border-top section-border-bottom py-[96px] bg-[var(--bg)]">
        <div className="container">
          <ScrollAnimate direction="up">
            <div className="flex items-center justify-between mb-[48px]">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  Engineering Experience
                </span>
              </div>
            </div>
          </ScrollAnimate>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
            {profile.experience.map((exp, idx) => (
              <ScrollAnimate key={exp.role} delay={idx * 80} direction="up">
                <div className="p-[24px] rounded-[12px] border border-[var(--line)] bg-[var(--surface)] flex flex-col gap-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-[10px] h-[10px] rounded-full bg-[var(--accent)] flex-shrink-0" />
                    <span className="text-[11px] font-[500] text-[var(--ink-4)]">{exp.role}</span>
                  </div>
                  <span className="text-[10px] font-[700] tracking-[0.1em] uppercase text-[var(--ink-4)]">
                    {exp.organization}
                  </span>
                  <p className="text-[13px] text-[var(--ink-2)] leading-[1.75] mb-2">
                    {exp.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies?.slice(0, 4).map((t) => (
                      <span key={t} className="text-[9px] font-[500] text-[var(--ink-3)] border border-[var(--line-2)] rounded-[4px] px-2 py-1 bg-[var(--surface-2)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH ── */}
      <section className="section py-[80px] bg-[var(--bg)]">
        <div className="container">
          <ScrollAnimate direction="up">
            <div className="flex items-center justify-between mb-[40px]">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  Research
                </span>
              </div>
            </div>
          </ScrollAnimate>

          <div className="p-[24px] rounded-[12px] border border-[var(--line)] bg-[var(--surface)] max-w-[900px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-[10px] h-[10px] rounded-full bg-[var(--amber)] flex-shrink-0" />
              <span className="text-[10px] font-[500] text-[var(--ink-4)]">Reliable AI-Assisted Healthcare Service Discovery</span>
            </div>
            <p className="text-[13px] text-[var(--ink-2)] leading-[1.75] mb-4">
              Exploring semantic retrieval with deterministic constraint validation,
              compared with keyword-based search using synthetic service data and
              manually labelled queries.
            </p>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--amber)] bg-[var(--amber-bg)] text-[9px] font-[600] text-[var(--amber)]">
              <span className="w-[5px] h-[5px] rounded-full bg-current" />
              Research in progress · No results claimed yet
            </span>
          </div>
        </div>
      </section>

      {/* ── HOW I WORK ── */}
      <section className="section py-[96px] bg-[var(--bg)]">
        <div className="container">
          <ScrollAnimate direction="up">
            <div className="flex items-center justify-between mb-[48px]">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  How I Work
                </span>
              </div>
            </div>
          </ScrollAnimate>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            <ScrollAnimate key="build" delay={40} direction="up">
              <div className="p-[24px] rounded-[12px] border border-[var(--line)] bg-[var(--surface)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[10px] h-[10px] rounded-full bg-[var(--accent)] flex-shrink-0" />
                  <span className="text-[11px] font-[500] text-[var(--ink-4)]">Build the product</span>
                </div>
                <span className="text-[13px] font-[500] text-[var(--ink-2)] leading-[1.75]">
                  Turn ideas into working, maintainable software.
                </span>
              </div>
            </ScrollAnimate>
            <ScrollAnimate key="system" delay={100} direction="up">
              <div className="p-[24px] rounded-[12px] border border-[var(--line)] bg-[var(--surface)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[10px] h-[10px] rounded-full bg-[var(--accent)] flex-shrink-0" />
                  <span className="text-[11px] font-[500] text-[var(--ink-4)]">Understand the system</span>
                </div>
                <span className="text-[13px] font-[500] text-[var(--ink-2)] leading-[1.75]">
                  Focus on clean architecture and real-world constraints.
                </span>
              </div>
            </ScrollAnimate>
            <ScrollAnimate key="measure" delay={160} direction="up">
              <div className="p-[24px] rounded-[12px] border border-[var(--line)] bg-[var(--surface)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[10px] h-[10px] rounded-full bg-[var(--accent)] flex-shrink-0" />
                  <span className="text-[11px] font-[500] text-[var(--ink-4)]">Measure the outcome</span>
                </div>
                <span className="text-[13px] font-[500] text-[var(--ink-2)] leading-[1.75]">
                  Build, test, and improve based on real usage and feedback.
                </span>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="section py-[80px] bg-[var(--bg)]">
        <div className="container">
          <ScrollAnimate direction="up">
            <div className="p-[32px] rounded-[20px] border border-[var(--line)] bg-[var(--surface)] flex flex-col lg:flex-row items-center justify-between gap-[32px] max-w-[1000px]">
              <div>
                <h2 className="text-[26px] font-[700] tracking-[-0.03em] leading-[1.15] text-[var(--ink)] mb-[8px]">
                  Have a useful problem to solve?
                </h2>
                <p className="text-[13px] text-[var(--ink-2)] leading-[1.7]">
                  I&apos;m open to full-time opportunities, collaborations, and interesting
                  projects.
                </p>
              </div>
              <div className="flex items-center gap-[16px]">
                <Link
                  className="btn btn-primary inline-flex items-center gap-6 h-[44px] px-[24px] rounded-full bg-[var(--ink)] text-[var(--bg)] font-[600] text-[13px] shadow-sm hover:-translate-y-[1px] transition-all duration-150 ease-spring"
                  href="/contact"
                >
                  Get in Touch <span aria-hidden="true">→</span>
                </Link>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 h-[44px] px-[24px] rounded-full border border-[var(--line-2)] text-[var(--ink-2)] font-[600] text-[13px] hover:bg-[var(--surface-2)] transition-all duration-150 ease-in-out"
                >
                  GitHub <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>
    </>
  );
}
