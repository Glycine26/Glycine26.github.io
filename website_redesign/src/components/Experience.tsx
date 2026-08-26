import { Briefcase, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { externalAnchorProps, portfolioContent } from "@/content/portfolioContent";

export default function Experience() {
  const experiences = portfolioContent.experiences;

  return (
    <section id="experience" className="page-section bg-secondary/30 border-y border-border/60">
      <div className="page-container">
        <div className="section-intro reveal">
          <p className="eyebrow">Career Path</p>
          <h2>Work Experience</h2>
          <p className="text-muted-foreground">Professional engineering background and track record.</p>
        </div>

        <div className="space-y-6 max-w-4xl">
          {experiences.map((record) => (
            <article
              key={record.employer + record.period}
              className="experience-card reveal bg-card border border-border/80 rounded-2xl p-6 md:p-8 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-border/70">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-accent shrink-0" />
                    <a
                      className="employer-link text-sm font-bold text-accent hover:underline inline-flex items-center gap-1"
                      {...externalAnchorProps(record.destination)}
                    >
                      <span>{record.employer}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground m-0">
                    {record.role}
                  </h3>
                </div>

                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold text-xs border w-fit shrink-0 ${
                    record.isCurrent
                      ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20"
                      : "bg-secondary text-muted-foreground border-border"
                  }`}
                >
                  {record.isCurrent && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  )}
                  <span>{record.period}</span>
                </div>
              </div>

              <section aria-labelledby={`accomplishments-${record.employer}`} className="pt-6">
                <h4
                  id={`accomplishments-${record.employer}`}
                  className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4"
                >
                  Key Responsibilities & Contributions
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {record.accomplishments.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 p-3 rounded-lg bg-secondary/40 border border-border/50"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <p className="text-sm text-foreground/90 m-0 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
