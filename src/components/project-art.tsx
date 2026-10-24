import type { Project } from "@/data/projects";

export function ProjectArt({ visual }: { visual: Project["visual"] }) {
  if (visual === "uhi") {
    return (
      <div className="project-art art-uhi" aria-hidden="true">
        <div className="art-window">
          <div className="art-window-bar"><i /><i /><i /><span>service-discovery</span></div>
          <div className="flow-node node-intent"><b>01</b><span>Understand intent</span></div>
          <div className="flow-connector connector-one" />
          <div className="flow-node node-retrieval"><b>02</b><span>Semantic retrieval</span></div>
          <div className="flow-connector connector-two" />
          <div className="flow-node node-validate"><b>03</b><span>Validate constraints</span></div>
          <div className="flow-connector connector-three" />
          <div className="flow-result"><span className="result-dot" />Ranked service results</div>
        </div>
        <span className="art-orbit orbit-one" /><span className="art-orbit orbit-two" />
      </div>
    );
  }
  if (visual === "academy") {
    return (
      <div className="project-art art-academy" aria-hidden="true">
        <div className="academy-card"><span className="art-eyebrow">LEARN WITH PURPOSE</span><strong>Prepare for<br />what comes next.</strong><span className="academy-cta">Explore programmes <b>↗</b></span></div>
        <div className="academy-side"><span className="academy-side-mark">E</span><i /><i /><i /></div>
        <span className="academy-orb" />
      </div>
    );
  }
  if (visual === "fitness") {
    return (
      <div className="project-art art-fitness" aria-hidden="true">
        <div className="fitness-top"><span>FITSPACE / OVERVIEW</span><span className="fitness-pill">WEEK 04</span></div>
        <div className="fitness-stat"><span>Training consistency</span><strong>Build the habit<span> ↗</span></strong><div className="fitness-bars">{[37, 57, 43, 76, 54, 88, 66].map((height, i) => <i style={{ height: `${height}%` }} key={i} />)}</div></div>
        <div className="fitness-bottom"><span>01 / PLAN</span><span>02 / TRACK</span><span>03 / IMPROVE</span></div>
      </div>
    );
  }
  return (
    <div className="project-art art-studio" aria-hidden="true">
      <span className="studio-small">INDEPENDENT DIGITAL STUDIO</span>
      <div className="studio-wordmark">N<span>+</span>G</div>
      <div className="studio-lines"><i /><i /><i /></div>
      <span className="studio-caption">IDEAS INTO INTERFACES</span>
    </div>
  );
}
