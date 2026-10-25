'use client'

import { HTMLAttributes, forwardRef } from 'react'
import styles from './Container.module.css'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide'
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'default', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`${styles.container} ${size !== 'default' ? styles[size] : ''} ${className || ''}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'