"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { IconChart, IconCompass, IconTarget, IconLoop, IconRocket } from "./icons";

const steps = [
  {
    n: "01",
    icon: IconChart,
    title: "Diagnóstico",
    description:
      "Olhamos para o seu negócio, seu funil e sua concorrência e mostramos, sem enrolação, onde você está perdendo dinheiro.",
  },
  {
    n: "02",
    icon: IconCompass,
    title: "Planejamento Estratégico",
    description:
      "Montamos um plano sob medida para o seu momento, com metas claras de crescimento — nada de fórmula pronta.",
  },
  {
    n: "03",
    icon: IconTarget,
    title: "Execução das Campanhas",
    description:
      "Colocamos tudo no ar: anúncios, criativos e processos comerciais, com acompanhamento próximo em cada etapa.",
  },
  {
    n: "04",
    icon: IconLoop,
    title: "Otimização Contínua",
    description:
      "Acompanhamos os números toda semana para escalar o que funciona e corrigir rápido o que não performa.",
  },
  {
    n: "05",
    icon: IconRocket,
    title: "Escala dos Resultados",
    description:
      "Com a máquina rodando, é hora de investir mais no que traz retorno e multiplicar o crescimento.",
  },
];

export default function Processo() {
  return (
    <section id="processo" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-violet-accent">
          Como trabalhamos
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Um processo <span className="text-gradient">simples e transparente</span>
        </h2>
        <p className="mt-4 text-muted">
          Sem caixa-preta. Você sabe exatamente em que etapa sua empresa está
          a cada momento.
        </p>
      </div>

      <div className="relative mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <TiltCard className="glass group relative flex h-full flex-col rounded-2xl p-6 transition-colors duration-300 hover:bg-white/[0.06]">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-violet-secondary/15 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-2xl font-bold text-white/10">{step.n}</span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
