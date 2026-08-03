"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InstagramEmbed } from "@/components/ui/InstagramEmbed";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { VIDEO_REELS } from "@/lib/data";

const bullets = [
  "Edición profesional, lo que necesitás",
  "Estrategia basada en lo que funciona hoy",
  "Tu marca, nuestra calidad",
];

export function SobreReelize() {
  return (
    <section id="sobre" className="relative py-24 md:py-32 overflow-hidden">
      <GradientOrb
        className="w-96 h-96 top-1/2 -right-48 -translate-y-1/2"
        color="soft"
        speed="slower"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <SectionHeading
              align="left"
              eyebrow="Sobre Reelize"
              title={
                <>
                  Editamos. <br />
                  <span className="text-gradient">Vos crecés.</span>
                </>
              }
            />

            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                Reelize comenzó porque nos cansamos de ver marcas que
                tenían todo para destacar y terminaban pasando desapercibidas.
              </p>
              <p>
                No es lo mismo aparecer que destacar. Hoy ayudamos a
                emprendimientos y marcas a traducir lo que hacen en videos
                cortos que la gente realmente quiere ver.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {bullets.map((bullet, i) => (
                <motion.li
                  key={bullet}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 text-text-primary"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-primary/20 flex items-center justify-center">
                    <Check size={14} className="text-accent-primary" />
                  </div>
                  {bullet}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-strong rounded-3xl p-3 glow-primary">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden">
                <InstagramEmbed url={VIDEO_REELS[0]} title="Reel destacado" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
