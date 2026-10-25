import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { ScrollAnimate } from "@/components/scroll-animate";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Experience | Waseem Tariq",
  description: "Full Stack Java Engineer with production-deployed microservices, Spring Boot backend architecture, and modern web frontends.",
};

export default function ExperiencePage() {
  return (
    <div className="inner-page">
      <ScrollAnimate direction="up">
        <PageHeading
          eyebrow="Professional Background"
          title="Experience & education."
          description="Software engineering through NexGenDevelopers, public-sector professional experience, and formal study in computer applications."
        />
      </ScrollAnimate>

      {/* ── WORK EXPERIENCE ── */}
      <ScrollAnimate direction="up" delay={80} className="section">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" />Work Experience</span>
            <h2>Engineering & professional roles</h2>
          </div>
        </div>
        <div className="space-y-[48px]">
          {profile.experience.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="detail-card">
                <div className="flex justify-between items-start gap-16 mb-[12px] flex-wrap">
                  <div>
                    <h3 className="text-[18px] font-[700] leading-none">{exp.role}</h3>
                    <p className="text-[13px] text-[var(--color-ink-3)] mb-[0] mt-[4px]">{exp.organization}</p>
                  </div>
                  <span className="chip chip-neutral">
                    {exp.duration || exp.engagement}
                  </span>
                </div>
                <p className="text-[14px] leading-[1.7] text-[var(--color-ink-2)] mb-[16px]">{exp.summary}</p>
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="list-disc pl-[22px] text-[14px] leading-[1.7] text-[var(--color-ink-2)] space-y-[6px] mb-[20px]">
                    {exp.highlights.map((h, hi) => (
                      <li key={hi}>{h}</li>
                    ))}
                  </ul>
                )}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-[8px]">
                    {exp.technologies.map((t, ti) => (
                      <span key={ti} className="chip chip-neutral">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollAnimate>

      {/* ── EDUCATION ── */}
      <ScrollAnimate direction="up" delay={160} className="section section-border-top">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" />Education</span>
            <h2>Formal study</h2>
          </div>
        </div>
        <div className="space-y-[24px]">
          {profile.education.map((edu, idx) => (
            <div key={idx} className="detail-card">
              <div className="flex justify-between items-start gap-16 mb-[12px] flex-wrap">
                <div>
                  <h3 className="text-[18px] font-[700] leading-none">{edu.degree}</h3>
                  <p className="text-[13px] text-[var(--color-ink-3)] mb-[0] mt-[4px]">{edu.institution}</p>
                </div>
                <span className={`chip ${edu.status === 'In progress' ? 'chip-progress' : 'chip-neutral'}`}>
                  {edu.status}
                </span>
              </div>
              <p className="text-[13px] text-[var(--color-ink-3)] mb-[6px]">{edu.period}</p>
              <p className="text-[14px] leading-[1.7] text-[var(--color-ink-2)] mb-[12px]">{edu.detail}</p>
              {edu.note && (
                <p className="text-[13px] text-[var(--color-ink-4)] mb-[0]">{edu.note}</p>
              )}
            </div>
          ))}
        </div>
      </ScrollAnimate>

      {/* ── SKILLS ── */}
      <ScrollAnimate direction="up" delay={200} className="section section-border-top">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" />Technical Skills</span>
            <h2>What I build with</h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {[
            { area: 'Backend', skills: ['Java', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'JWT', 'REST APIs'] },
            { area: 'Frontend', skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
            { area: 'Infrastructure', skills: ['Docker', 'Docker Compose', 'Nginx', 'Linux VPS', 'HTTPS', 'Hostinger'] },
            { area: 'Databases', skills: ['PostgreSQL', 'Neon Postgres', 'MongoDB', 'MySQL'] },
            { area: 'Architecture', skills: ['Microservices', 'Spring Cloud Gateway', 'Eureka', 'API Design'] },
            { area: 'Research', skills: ['Semantic Retrieval', 'Constraint Validation', 'Applied AI', 'NLP Fundamentals'] },
          ].map((group) => (
            <div key={group.area} className="detail-card" style={{ padding: '20px' }}>
              <span className="eyebrow" style={{ marginBottom: '12px', display: 'block' }}>
                <span className="eyebrow-dot" />{group.area}
              </span>
              <div className="flex flex-wrap gap-[6px]">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip chip-neutral">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollAnimate>

      {/* ── CTA ── */}
      <ScrollAnimate direction="up" delay={240}>
        <div className="cta-band bg-[var(--color-surface-2)] border border-[var(--color-line)]">
          <h2>Have a role or a project in mind?</h2>
          <p>Open to software engineering opportunities, technical collaborations, and conversations about building reliable systems.</p>
          <Link className="btn btn-primary" href="/contact">
            Get in touch <span aria-hidden="true">→</span>
          </Link>
        </div>
      </ScrollAnimate>
    </div>
  );
}