import { externalAnchorProps, portfolioContent } from "@/content/portfolioContent";

export default function Experience() {
  const record = portfolioContent.experience;
  return <section id="experience" className="page-section section-tint"><div className="page-container"><div className="section-intro reveal"><p className="eyebrow">Professional background</p><h2>Work Experience</h2></div><article className="experience-card reveal"><div className="experience-heading"><div><a className="employer-link" {...externalAnchorProps(record.destination)}>{record.employer}</a><h3>{record.role}</h3></div><p className="employment-period"><span aria-hidden="true" className="status-dot" />{record.period}</p></div><section aria-labelledby="accomplishments-heading"><h4 id="accomplishments-heading">Accomplishments</h4><ul>{record.accomplishments.map((item) => <li key={item}>{item}</li>)}</ul></section></article></div></section>;
}
