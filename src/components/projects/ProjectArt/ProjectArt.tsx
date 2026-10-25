'use client'

import type { Project } from '@/types/projects'
import styles from './ProjectArt.module.css'

export function ProjectArt({ visual }: { visual: Project['visual'] }) {
  const visualConfigs: Record<string, { label: string; color: string; icon: string }> = {
    uhi: { label: 'Healthcare Service Discovery', color: '#166534', icon: '🏥' },
    academy: { label: 'Education Platform', color: '#78350f', icon: '🎓' },
    fitness: { label: 'Fitness Technology', color: '#0c4a6e', icon: '💪' },
    studio: { label: 'Web Development Studio', color: '#4c1d95', icon: '🏢' },
  }

  const config = visualConfigs[visual] || visualConfigs.studio

  return (
    <div className={styles.projectArt} aria-hidden='true'>
      <div className={styles.visualContent}>
        <span className={styles.visualIcon}>{config.icon}</span>
        <span className={styles.visualLabel}>{config.label}</span>
      </div>
    </div>
  )
}