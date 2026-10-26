import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { ScrollAnimate } from "@/components/scroll-animate";
import { Timeline } from "@/components/ui/Timeline";

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

      {/* WORK EXPERIENCE */}
      <ScrollAnimate direction="up" delay={80} className="section-tight">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" />Work Experience</span>
            <h2>Engineering & professional roles</h2>
          </div>
        </div>
        <Timeline />
      </ScrollAnimate>

      {/* EDUCATION */}
      <ScrollAnimate direction="up" delay={160} className="section-tight section-border-top">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" />Education</span>
            <h2>Formal study</h2>
          </div>
        </div>
        <div className="space-y-[24px]">
          {[
            {
              degree: "Bachelor of Computer Applications (BCA)",
              institution: "Lovely Professional University (LPU)",
              period: "In progress · Expected January 2027",
              status: "In progress",
              detail: "Pursuing formal computer-applications education alongside active software engineering projects and applied AI research.",
              note: "CGPA: 7.42",
            },
            {
              degree: "B.Tech in Computer Science & Engineering",
              institution: "GCET Ganderbal · Cluster University Srinagar",
              period: "2019–2022",
              status: "Engineering Studies",
              detail: "Completed four semesters of rigorous Computer Science & Engineering coursework, establishing a strong foundation in data structures, algorithms, discrete mathematics, and systems architecture.",
            },
          ].map((edu, idx) => (
            <div key={idx} className="detail-card">
              <div className="flex justify-between items-start gap-16 mb-[12px] flex-wrap">
                <div>
                  <h3 className="text-[18px] font-[700] leading-none">{edu.degree}</h3>
                  <p className="text-[13px] text-[var(--color-ink-3)] mb-[0] mt-[4px]">{edu.institution}</p>
                </div>
                <span className={`chip ${edu.status === "In progress" ? "chip-progress" : "chip-neutral"}`}>
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

      {/* TECHNICAL SKILLS */}
      <ScrollAnimate direction="up" delay={200} className="section-tight section-border-top">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" />Technical Skills</span>
            <h2>What I build with</h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
          {[
            { area: "Backend", skills: ["Java", "Spring Boot", "Spring Cloud", "Spring Security", "JWT", "REST APIs"] },
            { area: "Frontend", skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
            { area: "Infrastructure", skills: ["Docker", "Docker Compose", "Nginx", "Linux VPS", "HTTPS", "Hostinger"] },
            { area: "Databases", skills: ["PostgreSQL", "Neon Postgres", "MongoDB", "MySQL"] },
            { area: "Architecture", skills: ["Microservices", "Spring Cloud Gateway", "Eureka", "API Design"] },
            { area: "Research", skills: ["Semantic Retrieval", "Constraint Validation", "Applied AI", "NLP Fundamentals"] },
          ].map((group) => (
            <div key={group.area} className="detail-card" style={{ padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--color-accent)", boxShadow: "0 0 6px var(--color-accent-glow)", flexShrink: 0 }} />
                <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-ink-3)" }}>{group.area}</span>
              </div>
              <div className="flex flex-wrap gap-[6px]">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip chip-neutral">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollAnimate>

      {/* CTA */}
      <ScrollAnimate direction="up" delay={240} className="section-tight">
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
