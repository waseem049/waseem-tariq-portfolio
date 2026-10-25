import { describe, it, expect } from "@jest/globals"
import { filterProjects, getLiveCount, getAiCount } from "@/lib/filters"
import { projects } from "@/content"

describe("Project Filters", () => {
  it("filters live projects by liveUrl", () => {
    const live = projects.filter((p) => p.liveUrl)
    expect(live.length).toBeGreaterThan(0)
  })

  it("filters AI projects", () => {
    const ai = projects.filter((p) => p.isAi)
    expect(ai.some((p) => p.slug === "unified-healthcare-interface")).toBe(true)
  })

  it("live count matches filtered", () => {
    expect(getLiveCount(projects)).toBe(projects.filter((p) => p.liveUrl).length)
  })
})