'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ProjectMetrics } from '@/components/projects/ProjectMetrics'
import { ProjectFilters } from '@/components/projects/ProjectFilters'
import { ProjectList } from '@/components/projects/ProjectList'
import { projects } from '@/content'
import styles from './ProjectsExplorer.module.css'

export function ProjectsExplorer() {
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchFocused, setSearchFocused] = useState(false)

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (activeTab === 'live' && !project.liveUrl && project.status !== 'Complete & live') {
        return false
      }
      if (activeTab === 'fullstack' && !project.isFullstack) {
        return false
      }
      if (activeTab === 'ai' && !project.isAi) {
        return false
      }
      if (activeTab === 'tools' && !project.isTool) {
        return false
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim()
        return (
          project.name.toLowerCase().includes(q) ||
          project.category.toLowerCase().includes(q) ||
          project.description.toLowerCase().includes(q) ||
          project.contribution.toLowerCase().includes(q) ||
          project.highlight.toLowerCase().includes(q) ||
          project.technologies.some((t) => t.toLowerCase().includes(q))
        )
      }

      return true
    })
  }, [projects, activeTab, searchQuery])

  const liveCount = projects.filter((p) => Boolean(p.liveUrl)).length
  const aiCount = projects.filter((p) => p.isAi).length

  return (
    <div className={styles.explorer}>
      <ProjectMetrics total={projects.length} live={liveCount} ai={aiCount} />

      <ProjectFilters
        activeTab={activeTab}
        onChange={setActiveTab}
        searchQuery={searchQuery}
        onChangeSearch={setSearchQuery}
        onFocusChange={setSearchFocused}
      />

      {filteredProjects.length === 0 ? (
        <div className={styles.emptyState}>
          <span className={styles.emptyIcon}>∅</span>
          <h3>No matching projects found</h3>
          <p>Try searching for a different keyword or reset the filter.</p>
          <button
            type='button'
            className={styles.resetBtn}
            onClick={() => {
              setActiveTab('all')
              setSearchQuery('')
            }}
          >
            Show all projects
          </button>
        </div>
      ) : (
        <ProjectList projects={filteredProjects} />
      )}
    </div>
  )
}