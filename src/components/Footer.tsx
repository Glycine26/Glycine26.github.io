import { ArrowUp } from "lucide-react";
import { portfolioContent } from "@/content/portfolioContent";

export default function Footer() {
  const { hero } = portfolioContent;
  return <footer><div className="page-container footer-layout"><div><h2>{hero.name}</h2><p>{hero.role}</p><p>{hero.certification}</p></div><div className="footer-meta"><p>&copy; {new Date().getFullYear()} Diganth S. All rights reserved.</p><a className="scroll-top" href="#home" aria-label="Scroll to top"><ArrowUp aria-hidden="true" /></a></div></div></footer>;
}
