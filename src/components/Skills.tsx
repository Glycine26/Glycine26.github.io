import { portfolioContent } from "@/content/portfolioContent";

export default function Skills() {
  return <section id="skills" className="page-section"><div className="page-container"><div className="section-intro reveal"><p className="eyebrow">Capabilities</p><h2>Skills</h2></div><div className="skill-grid">{portfolioContent.skills.map((skill) => <article key={skill.title} className="skill-card reveal"><h3>{skill.title}</h3><ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>;
}
