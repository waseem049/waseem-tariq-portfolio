import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { ScrollAnimate } from "@/components/scroll-animate";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Waseem Tariq about software engineering roles, research, and collaborations.",
};

export default function ContactPage() {
  const hasLinks = Boolean(profile.email || profile.github || profile.linkedin);

  return (
    <div className="inner-page contact-page">
      <ScrollAnimate direction="up">
        <PageHeading
          eyebrow="Contact / 04"
          title="Let's build something useful."
          description="I'm interested in thoughtful engineering conversations, software development opportunities, and research collaborations around applied AI."
        />
      </ScrollAnimate>

      <div className="contact-layout">
        <ScrollAnimate direction="left" delay={100} className="contact-card-main">
          <div>
            <span className="contact-card-index">Open Conversation / 001</span>
            <h2>Have a role, a research question, or a project in mind?</h2>
            <p>
              Send a note with a little context about what you&apos;re working on.
              I value clear problems, practical ideas, and honest technical discussions.
            </p>
            {profile.email ? (
              <a className="btn-panel" href={`mailto:${profile.email}`}>
                Email Waseem <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <div className="setup-reminder">
                <strong>Contact details to configure</strong>
                <span>
                  Add your professional email in{" "}
                  <code>src/data/profile.ts</code> before publishing this site.
                </span>
              </div>
            )}
          </div>
        </ScrollAnimate>

        <aside className="contact-options">
          <ScrollAnimate direction="right" delay={120}>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Find Me Online
            </span>
          </ScrollAnimate>

          {profile.email ? (
            <ScrollAnimate direction="right" delay={160}>
              <a className="contact-option" href={`mailto:${profile.email}`}>
                <span>
                  <small>Email</small>
                  <strong>{profile.email}</strong>
                </span>
                <b>↗</b>
              </a>
            </ScrollAnimate>
          ) : null}

          {profile.github ? (
            <ScrollAnimate direction="right" delay={200}>
              <a className="contact-option" href={profile.github} target="_blank" rel="noreferrer">
                <span>
                  <small>Code</small>
                  <strong>GitHub — waseem049</strong>
                </span>
                <b>↗</b>
              </a>
            </ScrollAnimate>
          ) : null}

          {profile.linkedin ? (
            <ScrollAnimate direction="right" delay={240}>
              <a className="contact-option" href={profile.linkedin} target="_blank" rel="noreferrer">
                <span>
                  <small>Professional</small>
                  <strong>LinkedIn — waseem049</strong>
                </span>
                <b>↗</b>
              </a>
            </ScrollAnimate>
          ) : null}

          {!hasLinks ? (
            <p className="muted-note">
              GitHub and LinkedIn links have been configured. Add your email in the
              profile config to complete the setup.
            </p>
          ) : null}

          <ScrollAnimate direction="right" delay={280}>
            <Link className="contact-option" href="/projects">
              <span>
                <small>Portfolio</small>
                <strong>Browse selected work</strong>
              </span>
              <b>↗</b>
            </Link>
          </ScrollAnimate>
        </aside>
      </div>
    </div>
  );
}
