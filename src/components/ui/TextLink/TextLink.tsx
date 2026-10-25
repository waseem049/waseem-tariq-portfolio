'use client'

import { AnchorHTMLAttributes, forwardRef } from 'react'
import styles from './TextLink.module.css'

interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'default' | 'muted'
}

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={`${styles.textLink} ${variant !== 'default' ? styles[variant] : ''} ${className || ''}`}
      >
        {children}
      </a>
    )
  }
)

TextLink.displayName = 'TextLink'