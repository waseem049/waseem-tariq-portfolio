"use client";

import styles from "./AvailabilityBadge.module.css";

export type AvailabilityStatus = "open" | "busy" | "closed";

interface AvailabilityBadgeProps {
  status: AvailabilityStatus;
  label?: string;
  className?: string;
}

const defaultLabels: Record<AvailabilityStatus, string> = {
  open: "Open to opportunities",
  busy: "Currently engaged",
  closed: "Not available",
};

export function AvailabilityBadge({ status, label, className = "" }: AvailabilityBadgeProps) {
  return (
    <span className={`${styles.availabilityBadge} ${styles[`availabilityBadge--${status}`]} ${className}`}>
      <span className={styles.statusDot} aria-hidden="true" />
      <span>{label || defaultLabels[status]}</span>
    </span>
  );
}
