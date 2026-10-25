'use client'

import { motion } from 'framer-motion'
import styles from './ProjectMetrics.module.css'

interface MetricTileProps {
  value: string
  label: string
  sublabel: string
}

export function MetricTile({ value, label, sublabel }: MetricTileProps) {
  return (
    <motion.div
      className={styles.metricTile}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <span className={styles.metricNum}>{value}</span>
      <div className={styles.metricText}>
        <strong>{label}</strong>
        <span>{sublabel}</span>
      </div>
    </motion.div>
  )
}

interface ProjectMetricsProps {
  total: number
  live: number
  ai: number
}

export function ProjectMetrics({ total, live, ai }: ProjectMetricsProps) {
  return (
    <div className={styles.metricsBar}>
      <MetricTile value={total.toString().padStart(2, '0')} label='Total Systems' sublabel='Full-stack, APIs & product prototypes' />
      <MetricTile value={live.toString().padStart(2, '0')} label='Live Deployments' sublabel='Linux VPS / Microservices & Vercel' />
      <MetricTile value={ai.toString().padStart(2, '0')} label='Applied AI Focus' sublabel='Semantic retrieval & constraint checks' />
    </div>
  )
}