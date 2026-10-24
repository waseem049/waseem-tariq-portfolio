import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Waseem Tariq about software engineering roles, research, and collaborations.",
};

export default function ContactPage() {
  const hasLinks = Boolean(profile.email || profile.github || profile.linkedin);

  return (
    <div className="inner-page container contact-page">
      <PageHeading
        eyebrow="Contact / 04"
        title="Let's build something useful."
        description="I'm interested in thoughtful engineering conversations, software development opportunities, and research collaborations around applied AI."
      />

      <div className="contact-layout">
        <div className="contact-card-main">
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

        <aside className="contact-options">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Find Me Online
          </span>

          {profile.email ? (
            <a className="contact-option" href={`mailto:${profile.email}`}>
              <span>
                <small>Email</small>
                <strong>{profile.email}</strong>
              </span>
              <b>↗</b>
            </a>
          ) : null}

          {profile.github ? (
            <a className="contact-option" href={profile.github} target="_blank" rel="noreferrer">
              <span>
                <small>Code</small>
                <strong>GitHub — waseem049</strong>
              </span>
              <b>↗</b>
            </a>
          ) : null}

          {profile.linkedin ? (
            <a className="contact-option" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span>
                <small>Professional</small>
                <strong>LinkedIn — waseem049</strong>
              </span>
              <b>↗</b>
            </a>
          ) : null}

          {!hasLinks ? (
            <p className="muted-note">
              GitHub and LinkedIn links have been configured. Add your email in the
              profile config to complete the setup.
            </p>
          ) : null}

          <Link className="contact-option" href="/projects">
            <span>
              <small>Portfolio</small>
              <strong>Browse selected work</strong>
            </span>
            <b>↗</b>
          </Link>
        </aside>
      </div>
    </div>
  );
}
