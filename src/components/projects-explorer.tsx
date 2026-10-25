"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ProjectArt } from "@/components/project-art";
import { ScrollAnimate } from "@/components/scroll-animate";
import type { Project } from "@/data/projects";

type FilterTab = "all" | "live" | "fullstack" | "ai" | "tools";

const FILTER_TABS: { id: FilterTab; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "live", label: "Live Deployments" },
  { id: "fullstack", label: "Full-Stack & Systems" },
  { id: "ai", label: "Applied AI & Research" },
  { id: "tools", label: "Web Apps & Tools" },
];

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Tab filter
      if (activeTab === "live" && !project.liveUrl && project.status !== "Complete & live") {
        return false;
      }
      if (activeTab === "fullstack") {
        const isFullstack =
          project.slug === "exceptional-ias-academy" ||
          project.slug === "fitspacegym" ||
          project.slug === "shoeshub";
        if (!isFullstack) return false;
      }
      if (activeTab === "ai") {
        if (project.slug !== "unified-healthcare-interface") return false;
      }
      if (activeTab === "tools") {
        const isTool =
          project.slug === "cloudify" ||
          project.slug === "doclified" ||
          project.slug === "nexgendevelopers";
        if (!isTool) return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = project.name.toLowerCase().includes(q);
        const matchesCategory = project.category.toLowerCase().includes(q);
        const matchesDesc = project.description.toLowerCase().includes(q);
        const matchesContrib = project.contribution.toLowerCase().includes(q);
        const matchesHighlight = project.highlight.toLowerCase().includes(q);
        const matchesTech = project.technologies.some((t) => t.toLowerCase().includes(q));
        return matchesName || matchesCategory || matchesDesc || matchesContrib || matchesHighlight || matchesTech;
      }

      return true;
    });
  }, [projects, activeTab, searchQuery]);

  const liveCount = projects.filter((p) => Boolean(p.liveUrl)).length;
  const aiCount = projects.filter((p) =>
    p.technologies.some((t) => /ai|ml|semantic|retrieval/i.test(t)) ||
    p.slug === "unified-healthcare-interface"
  ).length;

  return (
    <div className="projects-explorer">
      {/* ── METRIC TILES BAR ── */}
      <ScrollAnimate direction="up" delay={50}>
        <div className="projects-metric-bar">
          <div className="metric-tile">
            <span className="metric-num">{projects.length.toString().padStart(2, "0")}</span>
            <div className="metric-text">
              <strong>Total Systems</strong>
              <span>Full-stack, APIs &amp; product prototypes</span>
            </div>
          </div>
          <div className="metric-tile">
            <span className="metric-num">{liveCount.toString().padStart(2, "0")}</span>
            <div className="metric-text">
              <strong>Live Deployments</strong>
              <span>Linux VPS / Microservices &amp; Vercel</span>
            </div>
          </div>
          <div className="metric-tile">
            <span className="metric-num">{aiCount.toString().padStart(2, "0")}</span>
            <div className="metric-text">
              <strong>Applied AI Focus</strong>
              <span>Semantic retrieval &amp; constraint checks</span>
            </div>
          </div>
        </div>
      </ScrollAnimate>

      {/* ── INTERACTIVE FILTER & SEARCH BAR ── */}
      <ScrollAnimate direction="up" delay={100}>
        <div className="projects-filter-bar">
          <div className="filter-tabs" role="tablist" aria-label="Filter projects">
            {FILTER_TABS.map((tab) => {
              const count = projects.filter((p) => {
                if (tab.id === "all") return true;
                if (tab.id === "live") return Boolean(p.liveUrl || p.status === "Complete & live");
                if (tab.id === "fullstack") {
                  return (
                    p.slug === "exceptional-ias-academy" ||
                    p.slug === "fitspacegym" ||
                    p.slug === "shoeshub"
                  );
                }
                if (tab.id === "ai") return p.slug === "unified-healthcare-interface";
                if (tab.id === "tools") {
                  return (
                    p.slug === "cloudify" ||
                    p.slug === "doclified" ||
                    p.slug === "nexgendevelopers"
                  );
                }
                return true;
              }).length;

              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`filter-tab ${isActive ? "is-active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span>{tab.label}</span>
                  <span className="filter-count">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="project-search-wrap">
            <span className="search-icon" aria-hidden="true">⌕</span>
            <input
              type="search"
              className="project-search-input"
              placeholder="Search tech or keyword (e.g. Docker, Next.js, API)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search projects by technology or keyword"
            />
            {searchQuery ? (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                ×
              </button>
            ) : null}
          </div>
        </div>
      </ScrollAnimate>

      {/* ── ACTIVE FILTER STATUS ── */}
      {(searchQuery.trim() || activeTab !== "all") && (
        <div className="filter-feedback">
          <span>
            Showing <strong>{filteredProjects.length}</strong> of {projects.length} projects
            {searchQuery.trim() ? <> matching &ldquo;{searchQuery}&rdquo;</> : null}
          </span>
          <button
            type="button"
            className="text-link reset-link"
            onClick={() => {
              setActiveTab("all");
              setSearchQuery("");
            }}
          >
            Reset filters ↺
          </button>
        </div>
      )}

      {/* ── PROJECT SHOWCASE LIST ── */}
      {filteredProjects.length === 0 ? (
        <div className="projects-empty-state">
          <span className="empty-icon">∅</span>
          <h3>No matching projects found</h3>
          <p>Try searching for a different keyword or reset the filter.</p>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setActiveTab("all");
              setSearchQuery("");
            }}
          >
            Show all projects
          </button>
        </div>
      ) : (
        <div className="project-detail-list">
          {filteredProjects.map((project, idx) => {
            const isLive = project.status === "Complete & live";
            return (
              <ScrollAnimate key={project.slug} delay={Math.min(idx * 60, 240)} direction="up">
                <article className="project-detail-card" id={project.slug}>
                  {/* Card Header Strip */}
                  <div className="card-topline">
                    <div className="topline-left">
                      <span className="card-number">{project.number}</span>
                      <span className="card-category-divider">/</span>
                      <span className="project-category">{project.category}</span>
                    </div>

                    <div className="topline-right">
                      <span className={`status ${isLive ? "status-live" : "status-progress"}`}>
                        <i />
                        {project.status}
                      </span>
                      {project.liveUrl ? (
                        <span className="live-pill">
                          <span className="live-dot" /> Live System
                        </span>
                      ) : null}
                    </div>
                  </div>

                  {/* Card Split Layout */}
                  <div className="card-content-grid">
                    {/* Visual Art Side */}
                    <div className="card-art-col">
                      <div className="project-detail-art">
                        <ProjectArt visual={project.visual} />
                      </div>
                      <div className="art-meta-label">
                        <span>Figure {project.number}</span>
                        <span>{project.slug}</span>
                      </div>
                    </div>

                    {/* Information & Engineering Side */}
                    <div className="card-body-col">
                      <h2 className="project-title">{project.name}</h2>
                      <p className="project-main-desc">{project.description}</p>

                      {/* Structured Scope Box */}
                      <div className="detail-spec-box">
                        <div className="spec-heading">
                          <span className="spec-icon">⌘</span>
                          <span className="detail-label">My Scope &amp; Contribution</span>
                        </div>
                        <p>{project.contribution}</p>
                      </div>

                      {/* Structured Architecture Highlight Box */}
                      <div className="detail-spec-box highlight-box">
                        <div className="spec-heading">
                          <span className="spec-icon">⚡</span>
                          <span className="detail-label">Engineering / Architecture Note</span>
                        </div>
                        <p>{project.highlight}</p>
                      </div>

                      {/* Technology Stack Pills */}
                      <div className="tech-section">
                        <span className="detail-label tech-label">Technology Stack</span>
                        <div className="tag-row">
                          {project.technologies.map((tech) => (
                            <span className="tag" key={tech}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="card-action-row">
                        {project.liveUrl ? (
                          <a
                            className="btn btn-primary btn-sm"
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Visit live website <span aria-hidden="true">↗</span>
                          </a>
                        ) : null}

                        {project.slug === "unified-healthcare-interface" ? (
                          <Link className="btn btn-secondary btn-sm" href="/research">
                            Research outline <span aria-hidden="true">↗</span>
                          </Link>
                        ) : null}

                        <a
                          className="text-link card-anchor-link"
                          href={`/projects/${project.slug}`}
                          title="View case study"
                        >
                          View case study <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollAnimate>
            );
          })}
        </div>
      )}
    </div>
  );
}
