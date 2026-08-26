import { GraduationCap, Award, Calendar } from "lucide-react";
import { portfolioContent } from "@/content/portfolioContent";

export default function Education() {
  const record = portfolioContent.education;

  return (
    <section className="page-section bg-secondary/30 border-y border-border/60">
      <div className="page-container">
        <div className="section-intro reveal">
          <p className="eyebrow">Academic Background</p>
          <h2>Education</h2>
          <p className="text-muted-foreground">Formal degree and engineering foundation.</p>
        </div>

        <article className="education-card reveal bg-card border border-border/80 rounded-2xl p-6 md:p-8 shadow-xs max-w-2xl flex flex-col sm:flex-row items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
            <GraduationCap className="w-7 h-7" />
          </div>

          <div className="space-y-3 flex-1">
            <h3 className="text-xl font-bold font-display text-foreground m-0">
              {record.degree}
            </h3>
            <p className="text-sm font-semibold text-muted-foreground m-0">
              {record.university}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-border/60">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                <Calendar className="w-4 h-4 text-accent" />
                <span>{record.period}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20">
                <Award className="w-3.5 h-3.5" />
                <span>Academic Score: {record.result}</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
