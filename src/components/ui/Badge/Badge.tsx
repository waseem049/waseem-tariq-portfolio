'use client'

import { HTMLAttributes, forwardRef } from 'react'
import styles from './Badge.module.css'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'live' | 'progress' | 'neutral'
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={`${styles.badge} ${variant !== 'default' ? styles[variant] : ''} ${className || ''}`}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'