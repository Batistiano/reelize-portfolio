"use client";

import { motion } from "framer-motion";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InstagramEmbed } from "@/components/ui/InstagramEmbed";
import { VIDEO_REELS, SITE } from "@/lib/data";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Algunos trabajos"
          subtitle="Lo que pasa cuando una marca confía en nosotros."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEO_REELS.map((url, i) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="glass rounded-3xl p-3 transition-all duration-300 group-hover:glow-primary group-hover:border-accent-primary/30">
                <div className="aspect-[9/16] rounded-2xl overflow-hidden">
                  <InstagramEmbed
                    url={url}
                    title={`Reel ${i + 1} de ${SITE.name}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-strong text-text-primary font-medium hover:glow-primary transition-all"
          >
            <InstagramIcon className="w-[18px] h-[18px] text-accent-primary" />
            Ver más en Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
