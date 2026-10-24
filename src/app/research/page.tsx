import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { ScrollAnimate } from "@/components/scroll-animate";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Ongoing research direction on reliable AI-assisted healthcare service discovery using semantic retrieval and constraint validation.",
};

export default function ResearchPage() {
  return (
    <div className="inner-page container research-page">
      <ScrollAnimate direction="up">
        <PageHeading
          eyebrow="Research & Technical Writing / 02"
          title="Questions worth testing."
          description="I'm interested in applied AI that can be evaluated clearly, especially when relevance, constraints, and uncertainty matter."
        />
      </ScrollAnimate>

      <ScrollAnimate direction="up" delay={80}>
        <article className="research-paper-card">
          <div className="paper-topline">
            <span>Term Paper / LPU BCA</span>
            <span className="status status-progress"><i />In progress</span>
          </div>
          <p className="paper-kicker">Current Research Direction</p>
          <h2>{profile.researchTopic}</h2>
          <p className="paper-summary">
            The work is scoped as a research-and-implementation study for an AI-assisted
            healthcare service-discovery component in a planned UHI-oriented application
            architecture. The aim is to test whether semantic retrieval can improve
            candidate relevance while deterministic checks help enforce explicit user
            constraints.
          </p>
          <div className="paper-meta-grid">
            <div>
              <span>Domain</span>
              <strong>Applied AI · Healthcare discovery</strong>
            </div>
            <div>
              <span>Stage</span>
              <strong>Topic locked; work in progress</strong>
            </div>
            <div>
              <span>Data</span>
              <strong>Synthetic service records</strong>
            </div>
          </div>
        </article>
      </ScrollAnimate>

      <section className="research-content-grid">
        <ScrollAnimate direction="left" delay={120}>
          <div className="research-text-column">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              The Question
            </span>
            <h2>Relevance is not enough.</h2>
            <p>
              A result can sound relevant and still violate an explicit requirement.
              The proposed study separates finding semantically related services from
              validating non-negotiable constraints such as location or service attributes.
            </p>
            <p>
              This is a prototype research direction, not a deployed clinical decision
              system. No clinical outcomes or performance improvements are claimed at
              this stage.
            </p>
          </div>
        </ScrollAnimate>

        <ScrollAnimate direction="right" delay={180}>
          <div className="research-text-column">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Proposed Method
            </span>
            <h2>Compare, validate, measure.</h2>
            <ol className="research-steps">
              <li>
                <span>01</span>
                <div>
                  <strong>Prepare test data</strong>
                  <p>Create synthetic healthcare-service records and a manually labelled query set.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Establish a baseline</strong>
                  <p>Implement a keyword-based retrieval method for comparison.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Evaluate the approach</strong>
                  <p>Compare retrieval/ranking quality and count constraint violations; document limitations.</p>
                </div>
              </li>
              <li>
                <span>04</span>
                <div>
                  <strong>Report the evidence</strong>
                  <p>Publish methods and actual results only after the experiments are completed.</p>
                </div>
              </li>
            </ol>
          </div>
        </ScrollAnimate>
      </section>

      <ScrollAnimate direction="up" delay={200}>
        <section className="evaluation-panel">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Planned Evaluation
          </span>
          <div className="evaluation-grid">
            <div>
              <span className="evaluation-number">01</span>
              <h3>Retrieval quality</h3>
              <p>Assess relevance and ranking against the manually labelled queries.</p>
            </div>
            <div>
              <span className="evaluation-number">02</span>
              <h3>Constraint violations</h3>
              <p>Measure whether returned results break explicit constraints.</p>
            </div>
            <div>
              <span className="evaluation-number">03</span>
              <h3>Limitations &amp; uncertainty</h3>
              <p>Record ambiguous requests, failure cases, and cases that need clarification.</p>
            </div>
          </div>
        </section>
      </ScrollAnimate>

      <ScrollAnimate direction="up" delay={240}>
        <div className="page-bottom-cta">
          <p>Interested in applied AI, reliable retrieval, or healthcare technology?</p>
          <Link className="text-link" href="/contact">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </ScrollAnimate>
    </div>
  );
}
