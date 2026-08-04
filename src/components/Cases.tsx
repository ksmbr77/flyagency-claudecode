"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const cases = [
  {
    segment: "E-commerce de moda",
    before: "Vinha de 1.2x ROAS, 40 leads/mês",
    metric: { value: 4.8, suffix: "x", label: "ROAS depois de 90 dias" },
    extra: [
      { value: 62, suffix: "%", label: "Redução no CPA" },
      { value: 340, suffix: "%", label: "Aumento em leads" },
    ],
  },
  {
    segment: "Clínica de estética",
    before: "Vinha de 2.1x ROAS, 18 leads/mês",
    metric: { value: 5.6, suffix: "x", label: "ROAS depois de 90 dias" },
    extra: [
      { value: 48, suffix: "%", label: "Redução no CPA" },
      { value: 210, suffix: "%", label: "Aumento em receita" },
    ],
  },
];

export default function Cases() {
  return (
    <section id="cases" className="relative scroll-mt-24 border-y border-white/[0.06] bg-surface/40 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-violet-accent">
            Resultados
          </span>
          <h2 className="text-display-sm mt-4 text-foreground">
            Números que mostram o{" "}
            <span className="text-gradient">antes e depois</span>
          </h2>
          <p className="mt-4 text-[15px] text-muted">
            Exemplos ilustrativos do tipo de evolução que buscamos entregar
            para cada cliente.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {cases.map((c, i) => (
            <motion.div
              key={c.segment}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const }}
              className="glass rounded-2xl p-8 sm:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground/90">{c.segment}</span>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted">
                  Exemplo ilustrativo
                </span>
              </div>

              <p className="mt-6 text-gradient text-6xl font-bold tracking-tight sm:text-7xl">
                <AnimatedCounter value={c.metric.value} suffix={c.metric.suffix} decimals={1} />
              </p>
              <p className="mt-2 text-sm font-medium text-foreground/80">
                {c.metric.label}
              </p>
              <p className="mt-1 text-[13px] text-muted">{c.before}</p>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/[0.06] pt-6">
                {c.extra.map((e) => (
                  <div key={e.label}>
                    <p className="text-2xl font-bold text-foreground">
                      <AnimatedCounter value={e.value} suffix={e.suffix} />
                    </p>
                    <p className="text-[13px] text-muted">{e.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
