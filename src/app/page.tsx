import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { ScrollAnimate } from "@/components/scroll-animate";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="container hero-grid">
          {/* Left: copy */}
          <div className="hero-copy">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Software Development · Applied AI
            </div>

            <h1>
              Building useful software.<br />
              <em>Exploring intelligent systems.</em>
            </h1>

            <p className="hero-desc">
              I&apos;m {profile.name}, a software developer focused on practical web
              products, dependable backend systems, and AI that helps people find
              the right information.
            </p>

            <div className="hero-actions">
              <Link className="btn btn-primary" href="/projects">
                Explore my work <span aria-hidden="true">↗</span>
              </Link>
              <Link className="btn btn-secondary" href="/research">
                Research direction <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="hero-meta">
              <span className="hero-meta-line" />
              Building at the intersection of software and AI.
            </div>
          </div>

          {/* Right: visual */}
          <div className="hero-visual-wrap">
            <div className="hero-visual-label">
              <span>Selected System Study</span>
              <span>Fig. 01</span>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-visual-grid" />
              <div className="hero-visual-inner">
                <div className="hero-stat-card">
                  <div className="hero-stat-label">Current focus</div>
                  <div className="hero-stat-value">6</div>
                  <div className="hero-stat-sub">Projects in active development</div>
                </div>

                <div className="hero-visual-flow">
                  <div className="flow-item">
                    <span className="flow-item-num">01</span>
                    Understand the problem
                  </div>
                  <div className="flow-arrow" />
                  <div className="flow-item">
                    <span className="flow-item-num">02</span>
                    Design the system
                  </div>
                  <div className="flow-arrow" />
                  <div className="flow-item">
                    <span className="flow-item-num">03</span>
                    Test the outcome
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-visual-caption">
              <span>Engineering with intent</span>
              <span>Research in progress ↗</span>
            </div>
          </div>
        </div>

        <div className="hero-rule">
          <div className="container hero-rule-inner">
            <span>Selected work &amp; research</span>
            <span>Scroll to explore ↓</span>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="section section-border-bottom" id="work">
        <div className="container">
          <ScrollAnimate direction="up">
            <div className="section-head">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  01 — Selected Work
                </span>
                <h2>
                  Projects built around<br />
                  <em>real problems.</em>
                </h2>
              </div>
              <div className="section-head-aside">
                <p>
                  A selection of product and engineering work. Each case study
                  distinguishes what exists today from what is still being developed.
                </p>
                <Link className="text-link" href="/projects">
                  All projects <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </ScrollAnimate>

          <div className="projects-grid">
            {projects.map((project, idx) => (
              <ScrollAnimate key={project.slug} delay={idx * 70} direction="up">
                <ProjectCard project={project} />
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH ── */}
      <section className="research-section">
        <div className="container research-grid">
          <ScrollAnimate direction="left">
            <div className="research-copy">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                02 — Research Direction
              </span>
              <span className="research-index">Research Note / 001</span>
              <h2>
                Can AI help people find the right healthcare service—
                <em>reliably?</em>
              </h2>
              <p>
                My current term-paper direction explores semantic retrieval alongside
                deterministic constraint validation, with a keyword-search baseline and
                evaluation on synthetic service data and manually labelled queries.
              </p>
              <div className="research-status">
                <span className="status status-progress">
                  <i />Term paper in progress
                </span>
                <span className="research-status-note">No results claimed before evaluation.</span>
              </div>
              <Link className="btn-panel" href="/research">
                Read the research outline <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </ScrollAnimate>

          <ScrollAnimate direction="right" delay={100}>
            <div className="research-diagram" aria-label="Illustration of the proposed research workflow">
              <div className="diagram-heading">
                <span>Proposed Workflow</span>
                <span>01—04</span>
              </div>
              <div className="diagram-step">
                <span className="diagram-number">01</span>
                <div>
                  <strong>Query understanding</strong>
                  <small>Identify intent and needs</small>
                </div>
                <span className="diagram-symbol">⌕</span>
              </div>
              <div className="diagram-line" />
              <div className="diagram-step">
                <span className="diagram-number">02</span>
                <div>
                  <strong>Semantic retrieval</strong>
                  <small>Find relevant candidates</small>
                </div>
                <span className="diagram-symbol">◎</span>
              </div>
              <div className="diagram-line" />
              <div className="diagram-step">
                <span className="diagram-number">03</span>
                <div>
                  <strong>Constraint validation</strong>
                  <small>Apply explicit requirements</small>
                </div>
                <span className="diagram-symbol">✓</span>
              </div>
              <div className="diagram-line" />
              <div className="diagram-step diagram-step-final">
                <span className="diagram-number">04</span>
                <div>
                  <strong>Evaluate results</strong>
                  <small>Ranking · relevance · violations</small>
                </div>
                <span className="diagram-symbol">↗</span>
              </div>
              <div className="diagram-foot">
                <span>Conceptual Design</span>
                <span>Not a Clinical System</span>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* ── HOW I WORK ── */}
      <section className="section section-border-top section-border-bottom">
        <div className="container approach-grid">
          <ScrollAnimate direction="left">
            <div>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                03 — How I Work
              </span>
              <h2>
                Curious by nature.<br />
                <em>Practical by design.</em>
              </h2>
            </div>
          </ScrollAnimate>

          <div className="approach-list">
            <ScrollAnimate direction="up" delay={0}>
              <div className="approach-item">
                <span className="approach-num">01</span>
                <div>
                  <h3>Build the thing</h3>
                  <p>Turn requirements into usable interfaces, application flows, and working software.</p>
                </div>
              </div>
            </ScrollAnimate>
            <ScrollAnimate direction="up" delay={100}>
              <div className="approach-item">
                <span className="approach-num">02</span>
                <div>
                  <h3>Understand the system</h3>
                  <p>Think through APIs, data models, service boundaries, and deployment—not just the UI.</p>
                </div>
              </div>
            </ScrollAnimate>
            <ScrollAnimate direction="up" delay={200}>
              <div className="approach-item">
                <span className="approach-num">03</span>
                <div>
                  <h3>Test the assumption</h3>
                  <p>Use clear baselines and defined metrics when exploring AI-assisted approaches.</p>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* ── CONTACT BAND ── */}
      <section className="contact-band">
        <div className="container">
          <ScrollAnimate direction="up">
            <div className="contact-band-inner">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  Let&apos;s Connect
                </span>
                <h2>Good work starts<br />with a good conversation.</h2>
                <p>
                  Open to software engineering opportunities, research conversations,
                  and thoughtful collaborations.
                </p>
              </div>
              <Link className="btn btn-primary" href="/contact">
                Get in touch <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </ScrollAnimate>
        </div>
      </section>
    </>
  );
}
