import { Mail } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-accent-primary/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-2xl font-bold mb-1">
              {SITE.name.slice(0, -1)}
              <span className="text-accent-primary">{SITE.name.slice(-1)}</span>
            </p>
            <p className="text-text-muted text-sm">{SITE.tagline}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:glow-primary transition-all"
            >
              <InstagramIcon className="w-[18px] h-[18px] text-text-primary" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:glow-primary transition-all"
            >
              <Mail size={18} className="text-text-primary" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-accent-primary/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-text-muted text-xs">
          <p>© 2026 {SITE.name}. {SITE.footerOrigin}.</p>
          <p className="font-mono">{SITE.domain}</p>
        </div>
      </div>
    </footer>
  );
}
