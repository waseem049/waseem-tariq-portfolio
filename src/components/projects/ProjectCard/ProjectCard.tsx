'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ProjectArt } from '@/components/projects/ProjectArt'
import type { Project } from '@/types/projects'
import styles from './ProjectCard.module.css'

export function ProjectCard({ project }: { project: Project }) {
  const isLive = project.status === 'Complete & live'

  return (
    <motion.article
      className={styles.card}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}
    >
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`Read about ${project.name}`}
        className={styles.artLink}
      >
        <ProjectArt visual={project.visual} />
      </Link>

      <div className={styles.body}>
        <div className={styles.metaRow}>
          <span className={styles.category}>{project.category}</span>
          <motion.span
            className={`${styles.status} ${isLive ? styles.live : styles.progress}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 20 }}
          >
            <motion.span
              className={styles.dot}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            {project.status}
          </motion.span>
        </div>

        <motion.h3
          className={styles.title}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link href={`/projects/${project.slug}`}>{project.name}</Link>
        </motion.h3>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {project.description}
        </motion.p>

        <div className={styles.tags}>
          {project.technologies.slice(0, 4).map((tech, i) => (
            <motion.span
              key={tech}
              className={styles.tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.05, type: 'spring' }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 4 && (
            <motion.span
              className={`${styles.tag} ${styles.more}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              +{project.technologies.length - 4}
            </motion.span>
          )}
        </div>

        <div className={styles.actions}>
          <motion.a
            className={`${styles.link} ${styles.primary}`}
            href={`/projects/${project.slug}`}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            View case study <span aria-hidden='true'>→</span>
          </motion.a>
        </div>
      </div>
    </motion.article>
  )
}