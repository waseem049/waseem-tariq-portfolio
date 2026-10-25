import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { ScrollAnimate } from "@/components/scroll-animate";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Waseem Tariq, a software developer interested in full-stack engineering and applied AI research.",
};

export default function AboutPage() {
  return (
    <div className="inner-page container">
      <ScrollAnimate direction="up">
        <PageHeading
          eyebrow="About / 03"
          title="An engineer in progress."
          description="I'm building my career around software engineering, learning how reliable systems fit together, and exploring research questions where technology can solve practical problems."
        />
      </ScrollAnimate>

      <div className="about-layout">
        <ScrollAnimate direction="left" delay={100} className="about-main-copy">
          <div>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              A Little Context
            </span>
            <h2>
              Build with care.<br />
              <em>Keep learning.</em>
            </h2>
            <p>
              I work across frontend development and application engineering, with
              projects spanning healthcare discovery, education, fitness, and a small
              digital venture. I enjoy understanding how the pieces fit together—from
              a user&apos;s first interaction to APIs, data, and deployment.
            </p>
            <p>
              My professional background includes software development and government
              service, giving me experience with both hands-on technical work and
              structured, process-oriented environments. Alongside engineering, I&apos;m
              completing an online Bachelor of Computer Applications and developing a
              research direction around semantic retrieval and deterministic constraint
              validation for healthcare service discovery.
            </p>
            <p>
              I&apos;m interested in opportunities that let me deepen my software
              engineering skills while preparing for further study in computer science
              and applied AI.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/projects">
                See selected work <span aria-hidden="true">↗</span>
              </Link>
              {profile.resumePath ? (
                <a className="btn btn-secondary" href={profile.resumePath} download>
                  Download résumé <span aria-hidden="true">↓</span>
                </a>
              ) : null}
            </div>
          </div>
        </ScrollAnimate>

        <aside className="about-sidebar">
          <ScrollAnimate direction="right" delay={140}>
            <div className="sidebar-card">
              <span className="sidebar-label">Education</span>
              <h3>{profile.education[0].degree}</h3>
              <p>{profile.education[0].institution}</p>
              <span className="status status-progress">
                <i />{profile.education[0].status}
              </span>
              <div className="sidebar-divider" />
              <span className="sidebar-label">Expected Completion</span>
              <strong>{profile.education[0].period}</strong>
            </div>
          </ScrollAnimate>

          <ScrollAnimate direction="right" delay={220}>
            <div className="sidebar-card">
              <span className="sidebar-label">Areas I&apos;m Exploring</span>
              <ul className="interest-list">
                <li>Frontend &amp; full-stack engineering</li>
                <li>Backend systems and APIs</li>
                <li>Semantic retrieval and applied AI</li>
                <li>Reliable healthcare technology</li>
              </ul>
            </div>
          </ScrollAnimate>
        </aside>
      </div>

      <ScrollAnimate direction="up" delay={260}>
        <div className="honesty-note">
          <span className="note-mark">i</span>
          <p>
            This page intentionally avoids listing employer names, exact employment
            dates, grades, certifications, or quantified achievements that have not yet
            been verified for public use. Those can be added once the details and wording
            are confirmed.
          </p>
        </div>
      </ScrollAnimate>
    </div>
  );
}

