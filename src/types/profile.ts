export interface ExperienceItem {
  role: string
  organization: string
  engagement: string
  duration?: string
  summary: string
  highlights: string[]
  technologies?: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
  status: string
  detail: string
  note?: string
}

export interface Profile {
  name: string
  role: string
  location: string
  headline: string
  introduction: string
  careerStory: string
  experience: ExperienceItem[]
  education: EducationItem[]
  researchTopic: string
  researchSummary: string
  focusAreas: string[]
  email: string
  github: string
  linkedin: string
  resumePath: string | undefined
}