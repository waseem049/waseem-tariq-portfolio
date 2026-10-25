'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ProjectCard } from '@/components/projects/ProjectCard'
import type { Project } from '@/types/projects'
import styles from './ProjectList.module.css'

interface ProjectListProps {
  projects: Project[]
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className={styles.list}>
      <AnimatePresence>
        {projects.map((project) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}