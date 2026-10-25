'use client'

import { HTMLAttributes, forwardRef } from 'react'
import styles from './Tag.module.css'

interface TagProps extends HTMLAttributes<HTMLSpanElement> {}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={`${styles.tag} ${className || ''}`}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Tag.displayName = 'Tag'