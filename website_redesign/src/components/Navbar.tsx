import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { portfolioContent } from "@/content/portfolioContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = ["#home", "#about", "#projects", "#experience", "#skills", "#contact"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of [...sections].reverse()) {
        const id = sectionId.substring(1);
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActive(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);

  const follow = (href: string) => {
    setActive(href);
    setOpen(false);
  };

  const links = portfolioContent.navigation;

  return (
    <header className={`site-header transition-all duration-200 ${scrolled ? "scrolled shadow-xs" : ""}`}>
      <nav className="page-container" aria-label="Primary navigation">
        <a
          href="#home"
          onClick={() => follow("#home")}
          className="brand group flex items-center gap-2"
          aria-current={active === "#home" ? "location" : undefined}
        >
          <span className="w-8 h-8 rounded-lg bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm shadow-xs transition-transform group-hover:scale-105">
            D
          </span>
          <span className="font-display font-bold tracking-tight text-foreground">
            Diganth S<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => follow(link.href)}
                  className={`nav-link text-sm font-medium transition-colors ${
                    active === link.href ? "text-accent font-semibold is-active" : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={active === link.href ? "location" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-links"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>

        {/* Mobile Dropdown */}
        {open && (
          <div id="mobile-links" className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border p-4 shadow-lg flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => follow(link.href)}
                className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  active === link.href ? "bg-accent/10 text-accent font-bold" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
