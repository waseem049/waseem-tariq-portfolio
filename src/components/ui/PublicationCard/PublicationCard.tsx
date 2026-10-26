"use client";

import styles from "./PublicationCard.module.css";

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: "conference" | "journal" | "preprint" | "workshop";
  tags: string[];
  links: Array<{
    label: string;
    href: string;
    primary?: boolean;
  }>;
}

export interface PublicationCardProps {
  publication: Publication;
}

const typeStyles: Record<Publication["type"], { label: string; color: string }> = {
  conference: { label: "Conference", color: "var(--color-accent)" },
  journal: { label: "Journal", color: "var(--color-purple)" },
  preprint: { label: "Preprint", color: "var(--color-amber)" },
  workshop: { label: "Workshop", color: "var(--color-sky)" },
};

export function PublicationCard({ publication }: PublicationCardProps) {
  const typeInfo = typeStyles[publication.type] || typeStyles.conference;

  return (
    <article className={styles.publicationCard}>
      <header className={styles.publicationHeader}>
        <span
          className={styles.publicationType}
          style={{ background: `${typeInfo.color}15`, borderColor: `${typeInfo.color}40`, color: typeInfo.color }}
        >
          {typeInfo.label}
        </span>
        <span className={styles.publicationYear}>{publication.year}</span>
      </header>

      <h3 className={styles.publicationTitle}>{publication.title}</h3>

      <div className={styles.publicationVenue}>
        <span className={styles.publicationVenueName}>{publication.venue}</span>
      </div>

      <p className={styles.publicationAuthors}>
        <strong>Authors:</strong> {publication.authors}
      </p>

      {publication.tags.length > 0 && (
        <div className={styles.publicationTags}>
          {publication.tags.map((tag) => (
            <span key={tag} className={styles.publicationTag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      {publication.links.length > 0 && (
        <footer className={styles.publicationActions}>
          {publication.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className={`${styles.publicationActionLink} ${link.primary ? styles["publicationActionLink--primary"] : ""}`}
            >
              {link.label}
            </a>
          ))}
        </footer>
      )}
    </article>
  );
}
