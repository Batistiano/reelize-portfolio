"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { SITE } from "@/lib/data";

export function Contacto() {
  return (
    <section id="contacto" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-radial-hero opacity-50" />
      <GradientOrb
        className="w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        color="primary"
        speed="slower"
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <SectionHeading
          eyebrow="Contacto"
          title={
            <>
              Dale, <span className="text-gradient">hablemos</span>
            </>
          }
          subtitle="Contanos qué necesitás y te respondemos en menos de 24h."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group glass-strong rounded-3xl p-8 md:p-10 flex flex-col gap-4 hover:glow-primary transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-2xl bg-accent-primary/20 flex items-center justify-center group-hover:bg-accent-primary/30 transition-colors">
                <InstagramIcon className="w-7 h-7 text-accent-primary" />
              </div>
              <ArrowUpRight
                size={24}
                className="text-text-muted group-hover:text-accent-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              />
            </div>
            <div>
              <p className="text-text-muted text-sm mb-1">Instagram</p>
              <p className="font-display text-2xl md:text-3xl font-bold">
                @{SITE.instagram}
              </p>
            </div>
            <p className="text-text-muted text-sm mt-auto">
              Mandanos un DM y te respondemos al toque.
            </p>
          </motion.a>

          <motion.a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${SITE.email}&su=${encodeURIComponent("Consulta sobre Reelize")}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group glass-strong rounded-3xl p-8 md:p-10 flex flex-col gap-4 hover:glow-primary transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-2xl bg-accent-primary/20 flex items-center justify-center group-hover:bg-accent-primary/30 transition-colors">
                <Mail size={28} className="text-accent-primary" />
              </div>
              <ArrowUpRight
                size={24}
                className="text-text-muted group-hover:text-accent-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              />
            </div>
            <div>
              <p className="text-text-muted text-sm mb-1">Email</p>
              <p className="font-display text-xl md:text-2xl font-bold break-all">
                {SITE.email}
              </p>
            </div>
            <p className="text-text-muted text-sm mt-auto">
              Escribinos con detalle y te respondemos en menos de 24h.
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
