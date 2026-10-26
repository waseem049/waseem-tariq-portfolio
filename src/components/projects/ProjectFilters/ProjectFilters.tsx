'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './ProjectFilters.module.css'

interface ProjectFiltersProps {
  activeTab: string
  onChange: (tab: string) => void
  searchQuery: string
  onChangeSearch: (query: string) => void
  onFocusChange: (focused: boolean) => void
  counts: Record<string, number>
}

export function ProjectFilters({ activeTab, onChange, searchQuery, onChangeSearch, onFocusChange, counts }: ProjectFiltersProps) {
  const FILTER_TABS = [
    { id: 'all', label: 'All Projects', count: counts.all ?? 0 },
    { id: 'live', label: 'Live Deployments', count: counts.live ?? 0 },
    { id: 'fullstack', label: 'Full-Stack & Systems', count: counts.fullstack ?? 0 },
    { id: 'ai', label: 'Applied AI & Research', count: counts.ai ?? 0 },
    { id: 'tools', label: 'Web Apps & Tools', count: counts.tools ?? 0 },
  ] as const

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterTabs} role='tablist' aria-label='Filter projects'>
        {FILTER_TABS.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              type='button'
              role='tab'
              aria-selected={isActive}
              className={`${styles.filterTab} ${isActive ? styles.isActive : ''}`}
              onClick={() => onChange(tab.id)}
            >
              <span>{tab.label}</span>
              <span className={styles.filterCount}>{tab.count}</span>
            </button>
          )
        })}
      </div>

      <div className={styles.searchWrap}>
        <span className={styles.searchIcon} aria-hidden='true'>⌕</span>
        <input
          type='search'
          className={styles.searchInput}
          placeholder='Search tech or keyword (e.g. Docker, Next.js, API)...'
          value={searchQuery}
          onChange={(e) => onChangeSearch(e.target.value)}
          aria-label='Search projects by technology or keyword'
          onFocus={() => onFocusChange(true)}
          onBlur={() => onFocusChange(false)}
        />
        {searchQuery ? (
          <button
            type='button'
            className={styles.searchClearBtn}
            onClick={() => onChangeSearch('')}
            aria-label='Clear search'
          >
            ×
          </button>
        ) : null}
      </div>
    </div>
  )
}