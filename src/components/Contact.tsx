import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { externalAnchorProps, portfolioContent } from "@/content/portfolioContent";

export default function Contact() {
  const contact = portfolioContent.contact;
  return <section id="contact" className="page-section"><div className="page-container"><div className="section-intro reveal"><p className="eyebrow">Let&apos;s connect</p><h2>Contact Me</h2><p>Get in touch</p></div><div className="contact-card reveal"><div className="contact-details"><div><Phone aria-hidden="true" /><div><h3>Phone</h3><p>{contact.phone}</p></div></div><div><Mail aria-hidden="true" /><div><h3>Email</h3><a href={`mailto:${contact.email}`}>{contact.email}</a></div></div><div><MapPin aria-hidden="true" /><div><h3>Location</h3><p>{contact.location}</p></div></div></div><div className="social-links"><a aria-label="GitHub" {...externalAnchorProps(contact.github)}><Github aria-hidden="true" /></a><a aria-label="LinkedIn" {...externalAnchorProps(contact.linkedin)}><Linkedin aria-hidden="true" /></a></div></div></div></section>;
}
