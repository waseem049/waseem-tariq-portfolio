import profileData from './profile.json'
import projectsData from './projects.json'
import type { Project } from '@/types/projects'

export const profile = profileData
export const projects = projectsData as Project[]