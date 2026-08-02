"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ as FAQ_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Preguntas frecuentes"
          subtitle="Si te queda alguna duda, escribime y la charlamos."
        />

        <div className="space-y-3">
          {FAQ_DATA.map((item, i) => {
            const open = openIndex === i;
            return (
              <motion.div
                key={item.pregunta}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full p-5 md:p-6 flex items-center justify-between gap-4 text-left"
                  aria-expanded={open}
                >
                  <span className="font-medium text-text-primary text-base md:text-lg">
                    {item.pregunta}
                  </span>
                  <Plus
                    size={20}
                    className={cn(
                      "flex-shrink-0 text-accent-primary transition-transform duration-300",
                      open && "rotate-45"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 text-text-muted text-sm md:text-base leading-relaxed">
                        {item.respuesta}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
