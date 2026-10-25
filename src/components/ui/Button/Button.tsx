'use client'

import { useRef } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'panel'
  size?: 'default' | 'sm'
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({ className, variant = 'primary', size = 'default', href, children, ...props }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const linkRef = useRef<HTMLAnchorElement>(null)

  const isLink = !!href

  const classNames = [
    styles.btn,
    styles[variant],
    size !== 'default' && styles.sm,
    href && styles.link
  ].filter(Boolean).join(' ')

  if (href) {
    return (
      <a
        ref={linkRef}
        href={href}
        className={`${styles.btn} ${styles[variant]} ${size !== 'default' ? styles.sm : ''}`}
      >
        {children}
      </a>
    )

    return (
      <button
        ref={buttonRef}
        className={`${styles.btn} ${styles[variant]} ${size !== 'default' ? styles.sm : ''}`}
        {...props}
      >
        {children}
      </button>
    )
  }
}

Button.displayName = 'Button'