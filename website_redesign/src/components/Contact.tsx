import { Github, Linkedin, Mail, MapPin, Phone, Send, Copy, Check } from "lucide-react";
import { useState } from "react";
import { externalAnchorProps, portfolioContent } from "@/content/portfolioContent";

export default function Contact() {
  const contact = portfolioContent.contact;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="page-section bg-secondary/30 border-t border-border/70 relative overflow-hidden">
      {/* Subtle ambient accent background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-sky-400/10 via-indigo-400/10 to-amber-300/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="page-container">
        <div className="section-intro reveal mb-8">
          <h2>Get in Touch</h2>
        </div>

        <div className="max-w-3xl mx-auto reveal">
          <div className="bg-card p-8 md:p-10 rounded-2xl border border-border/80 shadow-sm space-y-8 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email Block */}
              <div className="p-4 rounded-xl bg-secondary/40 border border-border/60 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    Direct Email
                  </h3>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm font-semibold text-foreground hover:text-accent transition-colors break-all block"
                  >
                    {contact.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Block */}
              <div className="p-4 rounded-xl bg-secondary/40 border border-border/60 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    Phone / WhatsApp
                  </h3>
                  <a
                    href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
                  >
                    {contact.phone}
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">Available for calls & messages</p>
                </div>
              </div>

              {/* Location Block */}
              <div className="p-4 rounded-xl bg-secondary/40 border border-border/60 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    Location
                  </h3>
                  <p className="text-sm font-semibold text-foreground m-0">{contact.location}</p>
                  <p className="text-xs text-muted-foreground mt-1">Remote & Hybrid flexibility</p>
                </div>
              </div>

              {/* Quick Action Button */}
              <div className="p-4 rounded-xl bg-primary text-primary-foreground flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-primary-foreground mb-1">
                    Ready to start a conversation?
                  </h3>
                  <p className="text-xs text-primary-foreground/80">
                    Reach out via email or connect on LinkedIn.
                  </p>
                </div>
                <a
                  href={`mailto:${contact.email}?subject=Connecting%20with%20Diganth`}
                  className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white text-slate-900 text-xs font-bold hover:bg-slate-100 transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send an Email</span>
                </a>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-semibold text-muted-foreground">
                Find me on professional platforms:
              </span>

              <div className="flex items-center gap-3">
                <a
                  {...externalAnchorProps(contact.linkedin)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-secondary/50 hover:bg-secondary text-xs font-semibold text-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-sky-600" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  {...externalAnchorProps(contact.github)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-secondary/50 hover:bg-secondary text-xs font-semibold text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
