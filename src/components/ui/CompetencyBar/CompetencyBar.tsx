"use client";

import { useEffect, useState } from "react";
import styles from "./CompetencyBar.module.css";

export interface Competency {
  label: string;
  value: number; // 0-100
  color?: string;
}

export interface CompetencyBarProps {
  competencies: Competency[];
  animate?: boolean;
}

export function CompetencyBar({ competencies, animate = true }: CompetencyBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (animate) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );

      const container = document.querySelector(`.${styles.competencyBar}`);
      if (container) observer.observe(container);

      return () => observer.disconnect();
    } else {
      setIsVisible(true);
    }
  }, [animate]);

  return (
    <div className={styles.competencyBar} role="list" aria-label="Competency levels">
      {competencies.map((competency, index) => (
        <div key={competency.label} className={styles.competencyItem}>
          <div className={styles.competencyHeader}>
            <span className={styles.competencyLabel}>{competency.label}</span>
            <span className={styles.competencyValue} aria-hidden="true">
              {competency.value}%
            </span>
          </div>
          <div className={styles.competencyTrack} role="img" aria-label={`${competency.label}: ${competency.value}% proficiency`}>
            <div
              className={styles.competencyFill}
              style={{
                width: isVisible ? `${Math.min(Math.max(competency.value, 0), 100)}%` : "0%",
                transition: isVisible ? "width 1.2s var(--ease-out)" : "none",
                background: competency.color || "var(--color-accent)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
