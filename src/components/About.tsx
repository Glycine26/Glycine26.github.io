import { externalAnchorProps, portfolioContent } from "@/content/portfolioContent";

export default function About() {
  const { about } = portfolioContent;
  return <section id="about" className="page-section"><div className="page-container"><div className="section-intro reveal"><p className="eyebrow">Profile</p><h2>About Me</h2></div><div className="about-layout"><div className="about-copy reveal"><img src={about.portrait.src} alt={about.portrait.alt} width={about.portrait.width} height={about.portrait.height} loading="lazy" /><p>{about.biography}</p></div><aside className="about-sidebar"><div className="stat-card reveal"><strong>{about.experience}</strong><span>{about.experienceLabel}</span></div><section aria-labelledby="certifications-heading"><h3 id="certifications-heading">Certifications</h3><div className="certification-list">{about.certifications.map((certification) => <a className="certification-card reveal" key={certification.label} {...externalAnchorProps(certification.destination)}><img src={certification.image} alt={certification.alt} width="80" height="80" loading="lazy" /><span>{certification.label}</span></a>)}</div></section></aside></div></div></section>;
}
