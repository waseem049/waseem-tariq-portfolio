import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { ScrollAnimate } from "@/components/scroll-animate";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Experience | Waseem Tariq",
  description: "Full stack Java engineering with NexGen Developers, public-sector service, and a BCA in progress.",
};

export default function ExperiencePage() {
  return (
    <div className="inner-page container">
      <ScrollAnimate direction="up">
        <PageHeading
          eyebrow="Professional background"
          title="Professional background."
          description="Software engineering through NexGen Developers, public-sector service, and ongoing formal study."
        />
      </ScrollAnimate>

      <section className="mt-[48px]">
        <h2 className="text-[20px] font-[700] mb-[24px]">Work</h2>
        <div className="space-y-[32px]">
          {profile.experience.map((exp, idx) => (
            <div
              key={idx}
              className="border border-[var(--line)] rounded-[12px] p-[24px] bg-[var(--surface)]"
            >
              <div className="flex justify-between items-start gap-16 mb-[8px]">
                <div>
                  <h3 className="text-[18px] font-[700]">{exp.role}</h3>
                  <p className="text-[13px] text-[var(--ink-3)] mb-[8px]">{exp.organization}</p>
                </div>
                <p className="text-[13px] text-[var(--ink-3)]">{exp.duration || exp.engagement}</p>
              </div>
              <p className="text-[14px] leading-[1.7] text-[var(--ink-2)] mb-[12px]">{exp.summary}</p>
              <ul className="list-disc pl-[20px] text-[14px] leading-[1.7] text-[var(--ink-2)] space-y-[6px]">
                {exp.highlights.map((h, hi) => (
                  <li key={hi}>{h}</li>
                ))}
              </ul>
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="mt-[12px] flex flex-wrap gap-[6px]">
                  {exp.technologies.map((t, ti) => (
                    <span
                      key={ti}
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] border border-[var(--line-2)] bg-[var(--surface-2)] text-[11px] font-[500] text-[var(--ink-3)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-[64px]">
        <h2 className="text-[20px] font-[700] mb-[24px]">Education</h2>
        <div className="space-y-[24px]">
          {profile.education.map((edu, idx) => (
            <div key={idx} className="border border-[var(--line)] rounded-[12px] p-[24px] bg-[var(--surface)]">
              <h3 className="font-[600]">{edu.degree}</h3>
              <p className="text-[13px] text-[var(--ink-3)] mb-[8px]">{edu.institution}</p>
              <p className="text-[13px] text-[var(--ink-3)] mb-[8px]">{edu.period}</p>
              <p className="text-[13px] text-[var(--ink-3)] mb-[8px]">{edu.status}</p>
              <p className="text-[14px] text-[var(--ink-2)] mt-[8px]">{edu.detail}</p>
              {edu.note && (
                <p className="text-[13px] text-[var(--ink-3)] mt-[4px]">{edu.note}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="mt-[64px] border border-[var(--line)] rounded-[12px] p-[24px] bg-[var(--surface)]">
        <h2 className="text-[20px] font-[700] mb-[12px]">Have a role or a project in mind?</h2>
        <p className="text-[14px] leading-[1.7] text-[var(--ink-2)] mb-[16px]">Send a note with a little context about what you're working on. I value clear problems, practical ideas, and honest technical discussions.</p>
        <Link className="inline-flex items-center gap-[8px] px-[16px] py-[10px] rounded-[20px] bg-[var(--ink)] text-[var(--bg)] font-[600] text-[13px]" href="mailto:wprofessional49@gmail.com">Email Waseem ↗</Link>
      </div>
    </div>
  );
}
