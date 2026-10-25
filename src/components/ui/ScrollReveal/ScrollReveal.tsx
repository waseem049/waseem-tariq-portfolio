'use client'

import { useInView, useAnimation } from 'framer-motion'
import { useRef, useEffect } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  once?: boolean
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  duration?: number
  ease?: number[]
  className?: string
}

export function ScrollReveal({ children, className, once = true, delay = 0, direction = 'up', distance = 24, duration = 0.5, ease = [0.4, 0, 0.2, 1], ...restProps }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const isInView = useInView(elementRef, { once, margin: '-50px' })

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: { delay: 0, duration: 0.5, ease: [0.4, 0, 0.2, 1] }
      })
    }
  }, [isInView])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

ScrollReveal.displayName = 'ScrollReveal'