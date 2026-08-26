import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { externalAnchorProps, portfolioContent } from "@/content/portfolioContent";

export default function Footer() {
  const { contact } = portfolioContent;

  return (
    <footer className="bg-primary text-primary-foreground py-8 border-t border-slate-800">
      <div className="page-container flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs text-slate-400 m-0 text-center sm:text-left">
          &copy; 2026-2027 Diganth S. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <a
              {...externalAnchorProps(contact.github)}
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-full border border-slate-700 bg-slate-800/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              {...externalAnchorProps(contact.linkedin)}
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-full border border-slate-700 bg-slate-800/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email Diganth"
              className="w-9 h-9 rounded-full border border-slate-700 bg-slate-800/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <a
            href="#home"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-700 bg-slate-800/60 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
