'use client'

import { useTheme } from '@/contexts/ThemeContext'
import styles from './ThemeToggle.module.css'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <span aria-hidden="true" className={styles.icon}>
        {theme === 'light' ? '☾' : '☼'}
      </span>
      <span className={styles.label}>{theme === 'light' ? 'Dark' : 'Light'}</span>
    </button>
  )
}