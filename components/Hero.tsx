"use client";

import { motion } from "framer-motion";
import { GradientOrb } from "@/components/ui/GradientOrb";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-radial-hero animate-gradient-shift" />

      <GradientOrb
        className="w-96 h-96 -top-20 -right-20"
        color="primary"
        speed="slow"
      />
      <GradientOrb
        className="w-80 h-80 bottom-20 -left-20"
        color="warm"
        speed="slower"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-10"
        >
          <span className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-accent-primary leading-none">
            R
          </span>
          <span className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mt-2">
            Reelize
          </span>
          <p className="text-accent-primary text-xs md:text-sm font-mono uppercase tracking-widest mt-4">
            Estudio de publicidad para redes sociales
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8"
        >
          Hacemos que tu marca{" "}
          <span className="text-gradient">se vea en vertical</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-text-muted text-lg md:text-2xl max-w-2xl mx-auto mb-12"
        >
          Videos cortos, Reels y contenido que para el scroll.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#portfolio"
            className="px-8 py-4 rounded-full glass-strong text-text-primary font-semibold hover:glow-primary transition-all"
          >
            Ver portfolio
          </a>
          <a
            href="#contacto"
            className="px-8 py-4 rounded-full bg-accent-primary text-bg-primary font-semibold hover:bg-accent-secondary glow-primary-hover transition-all"
          >
            Hablemos
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-text-muted text-xs uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-accent-primary to-transparent" />
        <div className="w-1 h-1 rounded-full bg-accent-primary animate-scroll-down" />
      </div>
    </section>
  );
}
