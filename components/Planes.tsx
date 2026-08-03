"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PLANES, SITE } from "@/lib/data";

function getGmailUrl(planNombre: string) {
  const subject = encodeURIComponent(`Consulta plan ${planNombre} - Reelize`);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${SITE.email}&su=${subject}`;
}

function PlanCard({ plan, index }: { plan: (typeof PLANES)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={plan.destacado ? "md:scale-105 md:-my-2" : ""}
    >
      <div
        className={`relative h-full rounded-3xl p-8 flex flex-col ${
          plan.destacado ? "glass-strong glow-primary" : "glass"
        }`}
      >
        {plan.destacado && plan.badge && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent-primary text-bg-primary text-xs font-bold uppercase tracking-wider">
            {plan.badge}
          </div>
        )}

        <h3 className="font-display text-2xl font-bold mb-2">
          {plan.nombre}
        </h3>

        <div className="flex items-baseline gap-1 mb-6">
          <span className="font-display text-4xl md:text-5xl font-bold text-accent-warm">
            {plan.precio}
          </span>
          <span className="text-text-muted text-sm">
            {plan.precioPeriodo}
          </span>
        </div>

        <ul className="space-y-3 mb-8 flex-1">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-text-muted text-sm"
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-primary/20 flex items-center justify-center mt-0.5">
                <Check size={12} className="text-accent-primary" />
              </div>
              {feature}
            </li>
          ))}
        </ul>

        <a
          href={getGmailUrl(plan.nombre)}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-3 rounded-full font-semibold text-center transition-all ${
            plan.destacado
              ? "bg-accent-primary text-bg-primary hover:bg-accent-secondary"
              : "glass-strong text-text-primary hover:glow-primary"
          }`}
        >
          Lo quiero
        </a>
      </div>
    </motion.div>
  );
}

function GrupoPlanes({
  titulo,
  subtitulo,
  planes,
}: {
  titulo: string;
  subtitulo?: string;
  planes: readonly (typeof PLANES)[number][];
}) {
  if (planes.length === 0) return null;
  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
          {titulo}
        </h3>
        {subtitulo && <p className="text-text-muted">{subtitulo}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {planes.map((plan, i) => (
          <PlanCard key={plan.id} plan={plan} index={i} />
        ))}
      </div>
    </div>
  );
}

export function Planes() {
  const individuales = PLANES.filter((p) => p.categoria === "individual");
  const mensuales = PLANES.filter((p) => p.categoria === "mensual");

  return (
    <section id="planes" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Planes"
          title="Planes que escalan con vos"
          subtitle="Elegí el que mejor se ajuste a tu marca, o charlamos uno a medida."
        />

        {individuales.length > 0 && (
          <GrupoPlanes
            titulo="Planes individuales"
            subtitulo="Pagos únicos por proyecto."
            planes={individuales}
          />
        )}

        {mensuales.length > 0 && (
          <GrupoPlanes
            titulo="Planes mensuales"
            subtitulo="Suscripción mensual con contenido continuo."
            planes={mensuales}
          />
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
              Ninguno encaja?
            </h3>
            <p className="text-text-muted">
              Armamos algo a medida para tu marca. Contanos qué necesitás.
            </p>
          </div>
          <a
            href={getGmailUrl("Personalizado")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-8 py-3 rounded-full bg-accent-primary text-bg-primary font-semibold hover:bg-accent-secondary glow-primary-hover transition-all whitespace-nowrap"
          >
            Escribime
          </a>
        </motion.div>
      </div>
    </section>
  );
}
