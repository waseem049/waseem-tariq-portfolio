"use client";

import { useEffect, useRef, useState } from "react";

interface PipelineStage {
  id: number;
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const stages: PipelineStage[] = [
  {
    id: 1,
    label: "Query\nUnderstanding",
    description: "Parse and normalize healthcare service queries",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    color: "var(--color-sky)",
  },
  {
    id: 2,
    label: "Semantic\nRetrieval",
    description: "Vector search with dense embeddings for candidate services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: "var(--color-accent)",
  },
  {
    id: 3,
    label: "Constraint\nValidation",
    description: "Deterministic filtering by location, specialty, insurance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    color: "var(--color-green)",
  },
  {
    id: 4,
    label: "Uncertainty\nHandling",
    description: "Confidence scoring and fallback strategies",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    color: "var(--color-amber)",
  },
  {
    id: 5,
    label: "Ranked\nResults",
    description: "Validated, ranked healthcare services with explanations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17h18" />
        <path d="M3 11h18" />
        <path d="M3 5h18" />
        <path d="M9 17v-6" />
        <path d="M14 17v-12" />
      </svg>
    ),
    color: "var(--color-purple)",
  },
];

export function ResearchPipeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="research-pipeline" role="img" aria-label="Research pipeline stages">
      <svg viewBox="0 0 800 280" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "auto", maxHeight: "320px" }}>
        <defs>
          {/* Gradient definitions for each stage */}
          {stages.map((stage) => (
            <linearGradient key={stage.id} id={`grad-${stage.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={stage.color} stopOpacity="0.2" />
              <stop offset="100%" stopColor={stage.color} stopOpacity="0.05" />
            </linearGradient>
          ))}
          {/* Connector line gradient */}
          <linearGradient id="connector-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-line)" />
            <stop offset="100%" stopColor="var(--color-line)" />
          </linearGradient>
          {/* Arrow marker */}
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="var(--color-line)" />
          </marker>
        </defs>

        {/* Connector line */}
        <path
          d="M80 140 Q 160 140 160 140 L 640 140"
          stroke="url(#connector-gradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 4"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.8s ease-out 0.3s",
          }}
        />

        {/* Arrow at end */}
        <path
          d="M640 140 L 720 140"
          stroke="var(--color-line)"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead)"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.8s ease-out 0.5s",
          }}
        />

        {/* Stages */}
        {stages.map((stage, index) => {
          const x = 80 + index * 160;
          const delay = index * 0.15;

          return (
            <g key={stage.id} style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.6s ease-out ${delay + 0.3}s, transform 0.6s ease-out ${delay + 0.3}s`,
            }}>
              {/* Stage circle background */}
              <circle
                cx={x}
                cy={140}
                r={48}
                fill={`url(#grad-${stage.id})`}
                stroke={stage.color}
                strokeWidth={2}
                style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.1))" }}
              />

              {/* Stage number */}
              <text
                x={x}
                y={128}
                textAnchor="middle"
                fontSize="14"
                fontWeight="700"
                fill={stage.color}
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                {stage.id}
              </text>

              {/* Icon */}
              <g transform={`translate(${x - 16}, ${140 - 16})`} style={{ color: stage.color }}>
                {stage.icon}
              </g>

              {/* Stage label */}
              <text
                x={x}
                y={215}
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                fill="var(--color-ink)"
                fontFamily="system-ui, -apple-system, sans-serif"
                letterSpacing="0.02em"
              >
                <tspan x={x} dy="0">{stage.label.split("\n")[0]}</tspan>
                <tspan x={x} dy="1.2em">{stage.label.split("\n")[1]}</tspan>
              </text>

              {/* Description tooltip area (for hover) */}
              <title>{stage.description}</title>
            </g>
          );
        })}

        {/* Legend / Key metrics */}
        <g transform="translate(80, 250)" style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.6s ease-out 1s" }}>
          <text x="0" y="0" fontSize="10" fontWeight="600" fill="var(--color-ink-3)" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.08em" style={{ textTransform: "uppercase" }}>
            Key Metrics
          </text>
          <text x="0" y="16" fontSize="12" fontWeight="700" fill="var(--color-ink)" fontFamily="system-ui, -apple-system, sans-serif">
            94.2%
          </text>
          <text x="80" y="16" fontSize="10" fill="var(--color-ink-3)" fontFamily="system-ui, -apple-system, sans-serif">
            Retrieval Precision@10
          </text>
          <text x="280" y="16" fontSize="12" fontWeight="700" fill="var(--color-ink)" fontFamily="system-ui, -apple-system, sans-serif">
            89.7%
          </text>
          <text x="360" y="16" fontSize="10" fill="var(--color-ink-3)" fontFamily="system-ui, -apple-system, sans-serif">
            Constraint Accuracy
          </text>
          <text x="520" y="16" fontSize="12" fontWeight="700" fill="var(--color-ink)" fontFamily="system-ui, -apple-system, sans-serif">
            40%
          </text>
          <text x="570" y="16" fontSize="10" fill="var(--color-ink-3)" fontFamily="system-ui, -apple-system, sans-serif">
            vs Keyword Baseline
          </text>
        </g>
      </svg>

      {/* Stage descriptions below */}
      <div className="pipeline-descriptions" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px", marginTop: "24px", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
        {stages.map((stage, index) => (
          <div key={stage.id} className="pipeline-stage-desc" style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(10px)",
            transition: `opacity 0.5s ease-out ${index * 0.1 + 0.6}s, transform 0.5s ease-out ${index * 0.1 + 0.6}s`,
            textAlign: "center",
            padding: "0 8px",
          }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: stage.color, display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "8px", color: "white", fontSize: "14px", fontWeight: "700" }}>
              {stage.id}
            </div>
            <h4 style={{ margin: "0 0 6px", fontSize: "13px", fontWeight: "600", color: "var(--color-ink)" }}>
              {stage.label.replace("\n", " ")}
            </h4>
            <p style={{ margin: 0, fontSize: "11px", color: "var(--color-ink-3)", lineHeight: "1.5" }}>
              {stage.description}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .research-pipeline {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        @media (max-width: 640px) {
          .pipeline-descriptions {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}
