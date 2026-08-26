import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { portfolioContent } from "@/content/portfolioContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const setHash = () => setActive(window.location.hash || "#home");
    const media = window.matchMedia("(min-width: 1024px)");
    const closeAtWide = () => { if (media.matches) setOpen(false); };
    setHash();
    window.addEventListener("hashchange", setHash);
    media.addEventListener("change", closeAtWide);
    return () => { window.removeEventListener("hashchange", setHash); media.removeEventListener("change", closeAtWide); };
  }, []);

  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) { setOpen(false); toggleRef.current?.focus(); }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);

  const follow = (href: string) => { setActive(href); setOpen(false); };
  const links = portfolioContent.navigation;
  return <header className="site-header"><nav className="page-container" aria-label="Primary navigation"><a href="#home" onClick={() => follow("#home")} className={`brand ${active === "#home" ? "is-active" : ""}`} aria-current={active === "#home" ? "location" : undefined}>Diganth S.</a><button ref={toggleRef} type="button" className="menu-toggle" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="primary-links" onClick={() => setOpen((value) => !value)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button><ul id="primary-links" className={open ? "nav-links is-open" : "nav-links"}>{links.map((link) => <li key={link.href}><a href={link.href} onClick={() => follow(link.href)} className={active === link.href ? "is-active" : ""} aria-current={active === link.href ? "location" : undefined}>{link.label}</a></li>)}</ul></nav></header>;
}
