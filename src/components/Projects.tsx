import { ArrowUpRight } from "lucide-react";
import { externalAnchorProps, portfolioContent, type ExistingProject, type OrbitGlideProject } from "@/content/portfolioContent";
import OrbitGlidePreview from "./OrbitGlidePreview";

function ExistingProjectCard({ project }: { project: ExistingProject }) {
  return <article className="case-study-card reveal">
    <figure className="media-frame"><img src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height} loading="lazy" /></figure>
    <div className="card-content">
      <h3><a {...externalAnchorProps(project.destination)}>{project.title}</a></h3>
      <p className="card-summary">{project.summary}</p>
      <section aria-labelledby={`${project.id}-responsibilities`}><h4 id={`${project.id}-responsibilities`}>Responsibilities</h4><ul>{project.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <div className="technology-list" aria-label={`${project.title} technologies`}>{project.technologies.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <a className="text-action" {...externalAnchorProps(project.destination)}>{project.destination.label}<ArrowUpRight aria-hidden="true" size={17} /></a>
    </div>
  </article>;
}

function FactList({ title, items }: { title: string; items: readonly string[] }) {
  return <section className="orbit-subsection"><h4>{title}</h4><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>;
}

function OrbitGlideCard({ project }: { project: OrbitGlideProject }) {
  return <article className="case-study-card orbit-card reveal">
    <OrbitGlidePreview {...project.preview} />
    <div className="card-content">
      <p className="eyebrow">{project.identity}</p>
      <h3>{project.title}</h3>
      <p className="package-name">Package: {project.packageName}</p>
      <p className="card-summary">{project.oneLineDescription}</p>
      <p className="card-summary">{project.shortBlurb}</p>
      <p className="status-pill">{project.status}</p>
      <FactList title="Responsibilities" items={project.responsibilities} />
      <section className="orbit-subsection"><h4>Technical highlights</h4><dl>{project.technicalHighlights.map(({ heading, text }) => <div key={heading}><dt>{heading}</dt><dd>{text}</dd></div>)}</dl></section>
      <section className="orbit-fact-groups" aria-label="Orbit Glide skills demonstrated">
        {Object.entries(project.skillFacts).map(([title, items]) => <FactList key={title} title={title} items={items} />)}
      </section>
      <section className="orbit-subsection"><h4>Project facts</h4><dl className="project-facts">{project.projectFacts.map(({ field, value }) => <div key={field}><dt>{field}</dt><dd>{value}</dd></div>)}</dl></section>
      <FactList title="Feature list" items={project.features} />
      <section className="orbit-subsection"><h4>Privacy</h4><p>{project.privacyStatements[0]}. The Play Data safety declaration truthfully reports {project.privacyStatements[1]}.</p><a className="text-action" {...externalAnchorProps(project.privacyPolicy)}>{project.privacyPolicy.label}<ArrowUpRight aria-hidden="true" size={17} /></a></section>
    </div>
  </article>;
}

export default function Projects() {
  return <section id="projects" className="page-section section-tint"><div className="page-container"><div className="section-intro reveal"><p className="eyebrow">Selected work</p><h2>Portfolio</h2><p>Most Recent Works</p></div><div className="case-study-grid">{portfolioContent.projects.map((project) => project.kind === "existing" ? <ExistingProjectCard key={project.id} project={project} /> : <OrbitGlideCard key={project.id} project={project} />)}</div></div></section>;
}
