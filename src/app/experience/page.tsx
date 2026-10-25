import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { ScrollAnimate } from "@/components/scroll-animate";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Waseem Tariq's professional experience — Full Stack Java Engineering, government service, and computer-applications education.",
};

export default function ExperiencePage() {
  return (
    <div className="inner-page container experience-page">
      <ScrollAnimate direction="up">
        <PageHeading
          eyebrow="Experience / 02"
          title="Professional background."
          description="A transparent look at my career path — software engineering collaboration, public-sector service, and ongoing computer-applications education."
        />
      </ScrollAnimate>

      {/* ── CAREER & EXPERIENCE ── */}
      <section className="career-section">
        <div className="career-section-heading">
          <div>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Professional Experience
            </span>
            <h2>
              Engineering &amp; service.<br />
              <em>Two distinct paths.</em>
            </h2>
          </div>
        </div>

        <div className="experience-list">
          {profile.experience.map((item, idx) => (
            <ScrollAnimate
              key={item.role}
              delay={idx * 80}
              direction="up"
              className="experience-item"
            >
              <div className="experience-index">{idx + 1}</div>
              <div className="experience-main">
                <div className="experience-title-row">
                  <h3>{item.role}</h3>
                  <span className="experience-org">{item.organization}</span>
                </div>
                <div className="experience-meta">
                  {item.engagement && (
                    <span className="experience-engagement">
                      {item.engagement}
                    </span>
                  )}
                  {item.duration && (
                    <span className="experience-duration">{item.duration}</span>
                  )}
                </div>
                <p className="experience-summary">{item.summary}</p>
                {item.highlights.length > 0 && (
                  <ul className="experience-highlights">
                    {item.highlights.map((h, hi) => (
                      <li key={hi}>{h}</li>
                    ))}
                  </ul>
                )}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="tag-row mt-[6px]">
                    {item.technologies.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="education-section">
        <div className="career-section-heading">
          <div>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Education
            </span>
            <h2>
              Formal study.<br />
              <em>In progress.</em>
            </h2>
          </div>
        </div>

        <div className="education-list">
          {profile.education.map((edu, idx) => (
            <ScrollAnimate
              key={edu.degree}
              delay={160 + idx * 80}
              direction="up"
              className={`education-item ${
                edu.status === "In progress" ? "education-item-current" : ""
              }`}
            >
              <span className="education-marker">
                {edu.status === "In progress" ? "Current" : "Past"}
              </span>
              <div className="education-copy">
                <div className="education-heading-row">
                  <h3>{edu.degree}</h3>
                </div>
                <span className="education-institution">{edu.institution}</span>
                <span className="education-period">{edu.period}</span>
                <p className="education-detail">{edu.detail}</p>
                {edu.note && (
                  <div className="education-cgpa mt-[16px]">
                    {edu.note}
                  </div>
                )}
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </section>

      {/* ── HONESTY NOTE ── */}
      <ScrollAnimate direction="up" delay={320}>
        <div className="honesty-note mt-[32px]">
          <span className="note-mark">i</span>
          <p>
            This page intentionally avoids listing employer names, exact employment
            dates, grades, certifications, or quantified achievements that have not yet
            been verified for public use. Those can be added once the details and wording
            are confirmed.
          </p>
        </div>
      </ScrollAnimate>

      {/* ── CTA ── */}
      <ScrollAnimate direction="up" delay={380}>
        <div className="contact-layout">
          <div className="contact-card-main">
            <span className="contact-card-index">Open Conversation / 001</span>
            <h2>Have a role or a project in mind?</h2>
            <p>
              Send a note with a little context about what you're working on. I value
              clear problems, practical ideas, and honest technical discussions.
            </p>
            {profile.email ? (
              <Link className="btn-panel mt-[8px]" href={`mailto:${profile.email}`}>
                Email Waseem <span aria-hidden="true">↗</span>
              </Link>
            ) : null}
          </div>
        </div>
      </ScrollAnimate>
    </div>
  );
}
