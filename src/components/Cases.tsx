"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const cases = [
  {
    segment: "E-commerce de moda",
    before: { label: "Antes", roas: "1.2x", leads: "40/mês" },
    metric: { value: 4.8, suffix: "x", label: "ROAS depois de 90 dias" },
    extra: [
      { value: 62, suffix: "%", label: "Redução no CPA" },
      { value: 340, suffix: "%", label: "Aumento em leads" },
    ],
  },
  {
    segment: "Clínica de estética",
    before: { label: "Antes", roas: "2.1x", leads: "18/mês" },
    metric: { value: 5.6, suffix: "x", label: "ROAS depois de 90 dias" },
    extra: [
      { value: 48, suffix: "%", label: "Redução no CPA" },
      { value: 210, suffix: "%", label: "Aumento em receita" },
    ],
  },
];

export default function Cases() {
  return (
    <section id="cases" className="relative border-y border-white/[0.06] bg-surface/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-violet-accent">
            Resultados
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Números que mostram o{" "}
            <span className="text-gradient">antes e depois</span>
          </h2>
          <p className="mt-4 text-muted">
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
              className="glass rounded-2xl p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground/90">{c.segment}</span>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted">
                  Exemplo ilustrativo
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <p className="text-[11px] text-muted">{c.before.label}</p>
                  <p className="mt-1 text-lg font-semibold text-foreground/80">
                    {c.before.roas} ROAS
                  </p>
                  <p className="text-xs text-muted">{c.before.leads}</p>
                </div>

                <span className="text-xl text-violet-accent">→</span>

                <div className="flex-1 rounded-xl border border-violet-accent/25 bg-violet/10 p-4">
                  <p className="text-[11px] text-violet-accent">Depois</p>
                  <p className="text-gradient mt-1 text-2xl font-bold">
                    <AnimatedCounter value={c.metric.value} suffix={c.metric.suffix} decimals={1} />
                  </p>
                  <p className="text-xs text-muted">{c.metric.label}</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/[0.06] pt-6">
                {c.extra.map((e) => (
                  <div key={e.label}>
                    <p className="text-xl font-bold text-foreground">
                      <AnimatedCounter value={e.value} suffix={e.suffix} />
                    </p>
                    <p className="text-xs text-muted">{e.label}</p>
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
