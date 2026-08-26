import { Award, ExternalLink } from "lucide-react";
import { externalAnchorProps, portfolioContent } from "@/content/portfolioContent";

export default function About() {
  const { about } = portfolioContent;

  return (
    <section id="about" className="page-section bg-secondary/30 border-y border-border/60">
      <div className="page-container">
        <div className="section-intro reveal mb-8">
          <h2>{about.title}</h2>
        </div>

        <div className="about-grid grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Biography Column */}
          <div className="lg:col-span-7 space-y-6 reveal">
            <div className="bg-card p-6 md:p-8 rounded-xl border border-border shadow-xs space-y-4">
              <p className="text-base text-foreground/90 leading-relaxed">
                {about.bioParagraph1}
              </p>

              <p className="text-base text-foreground/90 leading-relaxed">
                {about.bioParagraph2}
              </p>
            </div>
          </div>

          {/* Experience & Certifications Column */}
          <div className="lg:col-span-5 space-y-6 reveal">
            {/* Work Experience Stat Card */}
            <div className="bg-card p-6 rounded-xl border border-border shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                  {about.experienceHeading}
                </span>
                <span className="text-4xl md:text-5xl font-display font-bold text-foreground">
                  {about.experienceValue}
                </span>
                <span className="text-sm font-semibold text-accent block mt-1">
                  {about.experienceLabel}
                </span>
              </div>
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Award className="w-7 h-7" />
              </div>
            </div>

            {/* Certifications Card without the heading "Industry Certifications" */}
            <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-3">
              {about.certifications.map((cert) => (
                <a
                  key={cert.label}
                  {...externalAnchorProps(cert.destination)}
                  className="group flex items-center gap-4 p-3 rounded-lg border border-border bg-secondary/30 hover:bg-secondary hover:border-accent/50 transition-all"
                >
                  <img
                    src={cert.image}
                    alt={cert.alt}
                    width="52"
                    height="52"
                    loading="lazy"
                    className="w-12 h-12 object-contain shrink-0 transition-transform group-hover:scale-105"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-foreground group-hover:text-accent transition-colors leading-tight mb-1">
                      {cert.label}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent">
                      {cert.destination.label}
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
