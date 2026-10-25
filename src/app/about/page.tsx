import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { ScrollAnimate } from "@/components/scroll-animate";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Waseem Tariq — Full Stack Java Engineer building production software with Spring Boot, microservices, Next.js, and cloud deployment.",
};

export default function AboutPage() {
  return (
    <div className="inner-page">
      <ScrollAnimate direction="up">
        <PageHeading
          eyebrow="About"
          title="Engineer. Builder. Researcher."
          description="I build production software across the full stack — Java/Spring Boot backends, Next.js frontends, and cloud deployments. I'm also pursuing applied AI research in healthcare service discovery."
        />
      </ScrollAnimate>

      <div className="about-layout">
        <ScrollAnimate direction="left" delay={100} className="about-main-copy">
          <div>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              What I Do
            </span>
            <h2>
              Build with craft.<br />
              <em>Ship to production.</em>
            </h2>
            <p>
              I work across the full software stack — designing microservices
              architectures, building APIs and backend systems, and connecting
              them to polished React/Next.js frontends. My recent work includes
              shipping a live platform for an educational institute with Spring
              Boot microservices, Docker, Nginx, and a production VPS deployment.
            </p>
            <p>
              Alongside engineering, I&apos;m completing a Bachelor of Computer
              Applications at Lovely Professional University and researching
              reliable AI-assisted healthcare service discovery — exploring how
              semantic retrieval and constraint validation can improve how people
              find the right medical services.
            </p>
            <p>
              I&apos;m interested in opportunities where I can deepen my engineering
              skills, contribute to real products, and work with teams that care
              about quality and thoughtful systems.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/projects">
                See my work <span aria-hidden="true">↗</span>
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
              <span className="sidebar-label">Currently Studying</span>
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
              <span className="sidebar-label">Core Focus Areas</span>
              <ul className="interest-list">
                <li>Java, Spring Boot & Microservices</li>
                <li>Next.js & React frontend engineering</li>
                <li>APIs, databases & cloud deployment</li>
                <li>Applied AI & semantic retrieval</li>
                <li>Healthcare technology research</li>
              </ul>
            </div>
          </ScrollAnimate>

          <ScrollAnimate direction="right" delay={300}>
            <div className="sidebar-card">
              <span className="sidebar-label">Location</span>
              <strong>India</strong>
              <div className="sidebar-divider" />
              <span className="sidebar-label">Open to</span>
              <p style={{ margin: '4px 0 0', fontSize: '13px' }}>
                Remote engineering roles, research collaborations, and technical conversations.
              </p>
            </div>
          </ScrollAnimate>
        </aside>
      </div>
    </div>
  );
}
