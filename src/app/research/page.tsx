import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { ScrollAnimate } from "@/components/scroll-animate";
import { ResearchPipeline } from "@/components/research/ResearchPipeline";
import { PublicationCard } from "@/components/ui/PublicationCard";
import { researchPapers, researchTopic, researchFocusAreas } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Ongoing research direction on reliable AI-assisted healthcare service discovery using semantic retrieval and constraint validation.",
};

export default function ResearchPage() {
  return (
    <div className="inner-page research-page">
      <ScrollAnimate direction="up">
        <PageHeading
          eyebrow="Research & Technical Writing / 02"
          title="Questions worth testing."
          description="I'm interested in applied AI that can be evaluated clearly, especially when relevance, constraints, and uncertainty matter."
        />
      </ScrollAnimate>

      {/* Research Pipeline Visualization */}
      <ScrollAnimate direction="up" delay={80} className="section-tight">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" />Research Pipeline</span>
            <h2>How the system works</h2>
          </div>
        </div>
        <ResearchPipeline />
      </ScrollAnimate>

      {/* Current Research Direction */}
      <ScrollAnimate direction="up" delay={120} className="section-tight section-border-top">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" />Current Focus</span>
            <h2>{researchTopic.title}</h2>
          </div>
        </div>
        <div className="research-paper-card">
          <div className="paper-topline">
            <span>Research Paper · Computer Science & AI</span>
            <span className="status status-progress"><i />In progress</span>
          </div>
          <p className="paper-kicker">Active Research Direction</p>
          <p className="paper-summary">
            {researchTopic.summary}
          </p>
          <div className="paper-meta-grid">
            <div>
              <span>Domain</span>
              <strong>Applied AI · Healthcare discovery</strong>
            </div>
            <div>
              <span>Stage</span>
              <strong>Active Investigation & Benchmarking</strong>
            </div>
            <div>
              <span>Data</span>
              <strong>Synthetic service records</strong>
            </div>
          </div>
        </div>
      </ScrollAnimate>

      {/* Key Metrics */}
      <ScrollAnimate direction="up" delay={160} className="section-tight section-border-top">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" />Key Metrics</span>
            <h2>Target benchmarks</h2>
          </div>
        </div>
        <div className="evaluation-panel">
          <div className="evaluation-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
            {Object.entries(researchTopic.metrics).map(([key, value]) => (
              <div key={key} style={{ textAlign: "center", padding: "16px" }}>
                <div className="evaluation-number" style={{ fontSize: "28px", fontWeight: "800", color: "var(--color-accent)", marginBottom: "8px" }}>
                  {value}
                </div>
                <h3 style={{ margin: "0 0 4px", fontSize: "14px", fontWeight: "600", color: "var(--color-ink)" }}>{key}</h3>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimate>

      {/* Focus Areas */}
      <ScrollAnimate direction="up" delay={200} className="section-tight section-border-top">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" />Focus Areas</span>
            <h2>What I'm exploring</h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          {researchFocusAreas.map((area, index) => (
            <div key={index} className="detail-card" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "var(--radius-md)", background: "var(--color-accent-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {area.icon === "search" && <> <circle cx="11" cy="11" r="8" /> <path d="m21 21-4.3-4.3" /> </>}
                  {area.icon === "check-circle" && <> <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /> <path d="M22 4L12 14.01l-3-3" /> </>}
                  {area.icon === "alert-triangle" && <> <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /> <path d="M12 9v4" /> <path d="M12 17h.01" /> </>}
                  {area.icon === "bar-chart" && <> <path d="M3 3v18h18" /> <path d="m19 9-5 5-4-4-3 3" /> </>}
                </svg>
              </div>
              <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "600", color: "var(--color-ink)" }}>{area.title}</h3>
              <p style={{ margin: 0, fontSize: "13px", color: "var(--color-ink-3)", lineHeight: "1.6" }}>{area.description}</p>
            </div>
          ))}
        </div>
      </ScrollAnimate>

      {/* Publications */}
      <ScrollAnimate direction="up" delay={240} className="section-tight section-border-top">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" />Publications</span>
            <h2>Papers & preprints</h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "24px" }}>
          {researchPapers.map((paper) => (
            <PublicationCard key={paper.id} publication={paper} />
          ))}
        </div>
      </ScrollAnimate>

      {/* CTA */}
      <ScrollAnimate direction="up" delay={280} className="section-tight">
        <div className="page-bottom-cta">
          <p>Interested in applied AI, reliable retrieval, or healthcare technology?</p>
          <Link className="text-link" href="/contact">
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </ScrollAnimate>
    </div>
  );
}
