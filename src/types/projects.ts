export type ProjectStatus = 'In development' | 'Complete & live' | 'Live' | 'Ongoing brand work'

export type ProjectVisual = 'uhi' | 'academy' | 'fitness' | 'studio'

export interface Project {
  slug: string
  number: string
  name: string
  category: string
  description: string
  status: ProjectStatus
  technologies: string[]
  contribution: string
  highlight: string
  visual: ProjectVisual
  liveUrl?: string
  screenshot?: string
  isAi: boolean
  isFullstack: boolean
  isTool: boolean
}