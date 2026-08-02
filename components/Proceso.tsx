"use client";

import { motion } from "framer-motion";
import { MessageCircle, Search, Video, Send, LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESO } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  Search,
  Video,
  Send,
};

export function Proceso() {
  return (
    <section id="proceso" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="De la idea al scroll"
          subtitle="Un proceso simple, sin vueltas."
        />

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent" />

          {PROCESO.map((paso, i) => {
            const Icon = iconMap[paso.icono];
            return (
              <motion.div
                key={paso.numero}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="glass rounded-3xl p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-mono text-accent-warm text-2xl font-bold">
                      {paso.numero}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center">
                      <Icon size={18} className="text-accent-primary" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">
                    {paso.titulo}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {paso.descripcion}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
