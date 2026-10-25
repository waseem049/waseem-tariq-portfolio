'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from './ThemeContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}