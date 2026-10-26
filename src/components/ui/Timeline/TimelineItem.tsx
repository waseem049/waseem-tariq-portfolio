"use client";

import { forwardRef, HTMLAttributes } from "react";
import styles from "./Timeline.module.css";

export interface TimelineItemProps extends HTMLAttributes<HTMLDivElement> {
  role: string;
  organization: string;
  duration: string;
  summary: string;
  highlights?: string[];
  techGroups?: Array<{ category: string; technologies: string[]; color?: string }>;
  actions?: Array<{ label: string; href: string; external?: boolean }>;
  isCurrent?: boolean;
}

export const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(
  (
    {
      role,
      organization,
      duration,
      summary,
      highlights = [],
      techGroups = [],
      actions = [],
      isCurrent = false,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`${styles.timelineItem} ${isCurrent ? styles.isCurrent : ""} ${className}`}
        {...props}
      >
        <article className={styles.timelineCard}>
          <header className={styles.timelineHeader}>
            <div>
              <h3 className={styles.timelineRole}>{role}</h3>
              <p className={styles.timelineOrg}>{organization}</p>
            </div>
            <div className={styles.timelineMeta}>
              <span className={`${styles.timelineDuration} chip-neutral`}>{duration}</span>
            </div>
          </header>

          <p className={styles.timelineSummary}>{summary}</p>

          {highlights.length > 0 && (
            <ul className={styles.timelineHighlights}>
              {highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          )}

          {techGroups.length > 0 && (
            <div className={styles.timelineTechGroups}>
              {techGroups.map((group, groupIndex) => (
                <span key={groupIndex} className={styles.timelineTechGroup}>
                  <span
                    className={styles.timelineTechGroupDot}
                    style={{ backgroundColor: group.color || "var(--color-accent)" }}
                  />
                  {group.category}
                </span>
              ))}
            </div>
          )}

          {actions.length > 0 && (
            <footer className={styles.timelineActions}>
              {actions.map((action, actionIndex) => (
                <a
                  key={actionIndex}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noreferrer noopener" : undefined}
                  className={styles.timelineActionLink}
                >
                  {action.label}
                </a>
              ))}
            </footer>
          )}

          {children}
        </article>
      </div>
    );
  }
);

TimelineItem.displayName = "TimelineItem";
