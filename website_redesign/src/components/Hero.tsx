import { ShieldCheck, Github, Linkedin, Mail } from "lucide-react";
import { externalAnchorProps, portfolioContent } from "@/content/portfolioContent";

export default function Hero() {
  const { hero, contact } = portfolioContent;

  return (
    <section id="home" className="hero-region relative overflow-hidden">
      {/* Subtle modern background accents */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="hero-ambient-glow hero-ambient-glow-1" />
        <div className="hero-ambient-glow hero-ambient-glow-2" />
        <div className="hero-grid-pattern" />
      </div>

      <div className="page-container hero-grid relative z-10">
        <div className="hero-copy reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-xs mb-4 tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for exciting challenges
          </div>

          <h1 className="hero-title">
            <span className="block text-xl md:text-2xl font-normal text-muted-foreground font-sans tracking-normal mb-1">
              {hero.greeting}
            </span>
            <span className="hero-name-gradient">{hero.name}</span>
          </h1>

          <p className="hero-role">{hero.title}</p>
          <p className="hero-subtitle text-muted-foreground mb-6 max-w-xl">
            {hero.subtitle}
          </p>

          <div className="hero-cert-badge mb-6 inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-card border border-border/80 shadow-xs">
            <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
            <span className="text-sm font-medium text-foreground">{hero.certification}</span>
          </div>

          {/* Social Quick-Access */}
          <div className="flex items-center gap-3 text-muted-foreground pt-4 border-t border-border/60">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
              Profiles:
            </span>
            <a
              {...externalAnchorProps(contact.github)}
              aria-label="GitHub Profile"
              className="p-2 rounded-lg hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              {...externalAnchorProps(contact.linkedin)}
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label="Send Email"
              className="p-2 rounded-lg hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Profile Visual */}
        <div className="hero-portrait-wrapper reveal flex flex-col items-center justify-center">
          <figure className="w-56 h-56 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-card shadow-lg bg-card shrink-0">
            <img
              src={hero.portrait.src}
              alt={hero.portrait.alt}
              width={hero.portrait.width}
              height={hero.portrait.height}
              fetchpriority="high"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 35%" }}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
