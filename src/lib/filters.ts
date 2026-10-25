import type { Project } from "@/types/projects"

export function filterProjects(projects: Project[], filters: { activeTab: string; searchQuery: string }) {
  const { activeTab, searchQuery } = filters

  return projects.filter((project) => {
    if (activeTab === "live" && !project.liveUrl && project.status !== "Complete & live") {
      return false
    }
    if (activeTab === "fullstack" && !project.isFullstack) {
      return false
    }
    if (activeTab === "ai" && !project.isAi) {
      return false
    }
    if (activeTab === "tools" && !project.isTool) {
      return false
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      return (
        project.name.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.contribution.toLowerCase().includes(q) ||
        project.highlight.toLowerCase().includes(q) ||
        project.technologies.some((t) => t.toLowerCase().includes(q))
      )
    }

    return true
  })
}

export function getLiveCount(projects: Project[]) {
  return projects.filter((p) => Boolean(p.liveUrl)).length
}

export function getAiCount(projects: Project[]) {
  return projects.filter((p) => p.isAi).length
}