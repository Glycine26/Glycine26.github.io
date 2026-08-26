import { portfolioContent } from "@/content/portfolioContent";

export default function Hero() {
  const { hero } = portfolioContent;

  return (
    <section id="home" className="hero-region">
      <div className="page-container hero-grid">
        <div className="hero-copy">
          <h1>{hero.name}</h1>
          <p className="hero-role">{hero.role}</p>
          <p className="hero-certification">{hero.certification}</p>
        </div>
        <figure className="hero-portrait">
          <img
            src={hero.portrait.src}
            alt={hero.portrait.alt}
            width={hero.portrait.width}
            height={hero.portrait.height}
            fetchPriority="high"
          />
        </figure>
      </div>
    </section>
  );
}
