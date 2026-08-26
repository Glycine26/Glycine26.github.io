import { GraduationCap } from "lucide-react";
import { portfolioContent } from "@/content/portfolioContent";

export default function Education() {
  const record = portfolioContent.education;
  return <section className="page-section section-tint"><div className="page-container"><div className="section-intro reveal"><p className="eyebrow">Academic background</p><h2>Education</h2><p>My academic background</p></div><article className="education-card reveal"><GraduationCap aria-hidden="true" /><div><h3>{record.degree}</h3><p>{record.university}</p><div className="education-meta"><span>{record.period}</span><strong>{record.result}</strong></div></div></article></div></section>;
}
