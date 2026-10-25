import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { ScrollAnimate } from "@/components/scroll-animate";

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
          <div className="border border-[var(--line)] rounded-[12px] p-[24px] bg-[var(--surface)]">
            <h3 className="text-[18px] font-[700]">Founder & Lead Engineer — NexGen Developers</h3>
            <p className="text-[13px] text-[var(--ink-3)] mb-[12px]">[Year] – Present</p>
            <p className="text-[14px] leading-[1.7] text-[var(--ink-2)] mb-[12px]">I run a web development studio and lead its engineering work, with a focus on Java and Spring Boot backends.</p>
            <ul className="list-disc pl-[20px] text-[14px] leading-[1.7] text-[var(--ink-2)] space-y-[6px]">
              <li>Designed and implemented a Spring Boot microservices architecture (Spring Cloud Gateway, Eureka service discovery) for the Exceptional IAS Academy platform.</li>
              <li>Deployed it with Docker Compose and an Nginx reverse proxy on a Hostinger VPS, backed by PostgreSQL on Neon, with domain, DNS and HTTPS configured.</li>
              <li>Integrated a Next.js/React frontend with JWT-secured backend services.</li>
            </ul>
          </div>

          <div className="border border-[var(--line)] rounded-[12px] p-[24px] bg-[var(--surface)]">
            <h3 className="text-[18px] font-[700]">Government Service — [Government of Jammu & Kashmir / department name]</h3>
            <p className="text-[13px] text-[var(--ink-3)] mb-[12px]">[Year] – Present · 5 years</p>
            <p className="text-[14px] leading-[1.7] text-[var(--ink-2)] mb-[12px]">Five years of administrative and data work in a formal, process-driven public-sector environment.</p>
            <ul className="list-disc pl-[20px] text-[14px] leading-[1.7] text-[var(--ink-2)] space-y-[6px]">
              <li>Document generation, data analysis and official correspondence under strict procedure and accountability.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-[64px]">
        <h2 className="text-[20px] font-[700] mb-[24px]">Education</h2>
        <div className="space-y-[24px]">
          <div className="border border-[var(--line)] rounded-[12px] p-[20px] bg-[var(--surface)]">
            <h3 className="font-[600]">Bachelor of Computer Applications (BCA), Online — Lovely Professional University</h3>
            <p className="text-[13px] text-[var(--ink-3)]">In progress · Expected January 2027</p>
            <p className="text-[14px] text-[var(--ink-2)] mt-[8px]">CGPA 7.42 after five terms.</p>
          </div>
          <div className="border border-[var(--line)] rounded-[12px] p-[20px] bg-[var(--surface)]">
            <h3 className="font-[600]">B.Tech in Computer Science & Engineering — GCET Ganderbal, Cluster University Srinagar</h3>
            <p className="text-[13px] text-[var(--ink-3)]">2019 – 2022</p>
            <p className="text-[14px] text-[var(--ink-2)] mt-[8px]">Completed four semesters before leaving in 2022 to start full-time work.</p>
          </div>
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
