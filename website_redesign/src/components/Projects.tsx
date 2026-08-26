import { ArrowUpRight, Smartphone, ShieldCheck, Sparkles, Orbit, Music, Code2, Cloud } from "lucide-react";
import {
  externalAnchorProps,
  portfolioContent,
  type ExistingProject,
  type OrbitGlideProject,
} from "@/content/portfolioContent";
import OrbitGlidePreview from "./OrbitGlidePreview";

function getHighlightIcon(icon: string) {
  switch (icon) {
    case "Smartphone":
      return <Smartphone className="w-5 h-5 text-sky-500 shrink-0" />;
    case "Orbit":
      return <Orbit className="w-5 h-5 text-indigo-500 shrink-0" />;
    case "Music":
      return <Music className="w-5 h-5 text-amber-500 shrink-0" />;
    case "ShieldCheck":
      return <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />;
    default:
      return <Sparkles className="w-5 h-5 text-accent shrink-0" />;
  }
}

function OrbitGlideCard({ project }: { project: OrbitGlideProject }) {
  return (
    <article className="orbit-project-card reveal bg-card border border-border/80 rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Video Showcase */}
        <div className="lg:col-span-5 flex justify-center">
          <OrbitGlidePreview {...project.preview} />
        </div>

        {/* Right: Crisp project details */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-xs border border-accent/20">
                {project.tag}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 font-semibold text-xs border border-amber-500/20">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                {project.status}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              {project.title}
            </h3>
            <p className="text-sm font-semibold text-muted-foreground mt-1">
              {project.subtitle}
            </p>
          </div>

          <p className="text-base text-foreground/90 leading-relaxed">
            {project.summary}
          </p>

          {/* Key Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {project.highlights.map((item) => (
              <div
                key={item.title}
                className="p-3.5 rounded-xl bg-secondary/50 border border-border/70 flex items-start gap-3"
              >
                {getHighlightIcon(item.icon)}
                <div>
                  <h4 className="text-xs font-bold text-foreground normal-case tracking-normal">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Badges */}
          <div className="pt-2">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-2">
              Tech Stack:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-secondary text-foreground text-xs font-medium border border-border/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-border/60">
            <a
              className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline"
              {...externalAnchorProps(project.privacyPolicy)}
            >
              <span>{project.privacyPolicy.label}</span>
              <ArrowUpRight size={15} />
            </a>

            <span className="text-xs text-muted-foreground">
              • Google Play closed-testing build active
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

function ExistingProjectCard({ project }: { project: ExistingProject }) {
  return (
    <article className="case-study-card reveal bg-card border border-border/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
        <figure className="lg:col-span-5 bg-secondary/40 relative aspect-video lg:aspect-auto overflow-hidden m-0">
          <img
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-muted-foreground font-semibold text-xs border border-border">
              <Cloud className="w-3.5 h-3.5 text-accent" />
              <span>{project.tag}</span>
            </div>

            <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
              {project.title}
            </h3>

            <p className="text-sm text-foreground/80 leading-relaxed">
              {project.summary}
            </p>

            <div className="space-y-2 pt-1">
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Key Deliverables
              </h4>
              <ul className="text-xs text-foreground/80 space-y-1.5 list-disc pl-4">
                {project.responsibilities.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4 pt-2 border-t border-border/60">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-secondary/80 text-foreground text-[11px] font-medium border border-border/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-accent transition-all w-fit shadow-xs"
              {...externalAnchorProps(project.destination)}
            >
              <span>{project.destination.label}</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="page-section">
      <div className="page-container">
        <div className="section-intro reveal">
          <p className="eyebrow">Featured Work</p>
          <h2>Projects & Showcase</h2>
          <p className="text-muted-foreground">
            Featured mobile game engineering and scalable cloud solutions.
          </p>
        </div>

        <div className="space-y-10">
          {portfolioContent.projects.map((project) =>
            project.kind === "orbit-glide" ? (
              <OrbitGlideCard key={project.id} project={project} />
            ) : (
              <ExistingProjectCard key={project.id} project={project} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
