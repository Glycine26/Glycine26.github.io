import { Cloud, Server, Smartphone, Cpu, Layers } from "lucide-react";
import { portfolioContent } from "@/content/portfolioContent";

function getSkillIcon(index: number) {
  switch (index) {
    case 0:
      return <Cloud className="w-5 h-5 text-sky-500" />;
    case 1:
      return <Server className="w-5 h-5 text-emerald-500" />;
    case 2:
      return <Smartphone className="w-5 h-5 text-indigo-500" />;
    default:
      return <Layers className="w-5 h-5 text-accent" />;
  }
}

export default function Skills() {
  return (
    <section id="skills" className="page-section">
      <div className="page-container">
        <div className="section-intro reveal">
          <p className="eyebrow">Technical Competencies</p>
          <h2>Skills & Expertise</h2>
          <p className="text-muted-foreground">
            Core technologies, cloud platforms, languages, and toolsets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioContent.skills.map((skill, idx) => (
            <article
              key={skill.title}
              className="skill-card reveal bg-card border border-border/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center border border-border/60">
                  {getSkillIcon(idx)}
                </div>
                <h3 className="text-lg font-bold font-display text-foreground m-0">
                  {skill.title}
                </h3>
                <div className="space-y-2 pt-2">
                  {skill.items.map((item) => (
                    <div
                      key={item}
                      className="p-2.5 rounded-lg bg-secondary/50 border border-border/60 text-xs font-medium text-foreground/90 leading-snug"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
