"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/data";
import { cn } from "@/lib/utils";

const links = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#planes", label: "Planes" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled ? "bg-bg-primary/80 backdrop-blur-xl border-b border-accent-primary/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-bold tracking-tight">
          {SITE.name.slice(0, -1)}
          <span className="text-accent-primary">{SITE.name.slice(-1)}</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-muted hover:text-text-primary transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-5 py-2 rounded-full bg-accent-primary text-bg-primary font-semibold text-sm hover:bg-accent-secondary transition-colors"
          >
            Empezar proyecto
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-text-primary"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-strong rounded-b-3xl p-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-text-primary text-lg font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 rounded-full bg-accent-primary text-bg-primary font-semibold text-center"
          >
            Empezar proyecto
          </a>
        </div>
      )}
    </nav>
  );
}
