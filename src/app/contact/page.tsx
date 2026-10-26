import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { ScrollAnimate } from "@/components/scroll-animate";
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";
import { ContactForm } from "@/components/ui/ContactForm";
import { contactInfo, contactSubjects } from "@/data/contact";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Waseem Tariq about software engineering roles, research, and collaborations.",
};

export default function ContactPage() {
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
        {/* Contact Form */}
        <ScrollAnimate direction="left" delay={100} className="contact-card-main">
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
              <span className="contact-card-index">Open Conversation / 001</span>
              <h2>Have a role, a research question, or a project in mind?</h2>
              <p>
                Send a note with a little context about what you're working on.
                I value clear problems, practical ideas, and honest technical discussions.
              </p>
              <AvailabilityBadge status={contactInfo.availability} label={contactInfo.availabilityLabel} />
            </div>
            <ContactForm />
          </div>
        </ScrollAnimate>

        {/* Contact Options Sidebar */}
        <aside className="contact-options">
          <ScrollAnimate direction="right" delay={120}>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Find Me Online
            </span>
          </ScrollAnimate>

          <ScrollAnimate direction="right" delay={160}>
            <a className="contact-option" href={`mailto:${contactInfo.email}`}>
              <span>
                <small>Email</small>
                <strong>{contactInfo.email}</strong>
              </span>
              <b>→</b>
            </a>
          </ScrollAnimate>

          <ScrollAnimate direction="right" delay={200}>
            <a className="contact-option" href={contactInfo.github} target="_blank" rel="noreferrer">
              <span>
                <small>Code</small>
                <strong>GitHub — waseem049</strong>
              </span>
              <b>→</b>
            </a>
          </ScrollAnimate>

          <ScrollAnimate direction="right" delay={240}>
            <a className="contact-option" href={contactInfo.linkedin} target="_blank" rel="noreferrer">
              <span>
                <small>Professional</small>
                <strong>LinkedIn — waseem049</strong>
              </span>
              <b>→</b>
            </a>
          </ScrollAnimate>

          <ScrollAnimate direction="right" delay={280}>
            <Link className="contact-option" href="/projects">
              <span>
                <small>Portfolio</small>
                <strong>Browse selected work</strong>
              </span>
              <b>→</b>
            </Link>
          </ScrollAnimate>

          <ScrollAnimate direction="right" delay={320}>
            <div className="contact-option" style={{ cursor: "default" }}>
              <span>
                <small>Response Time</small>
                <strong>{contactInfo.responseTime}</strong>
              </span>
            </div>
          </ScrollAnimate>
        </aside>
      </div>
    </div>
  );
}
