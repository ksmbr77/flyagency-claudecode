"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PremiumButton from "./PremiumButton";
import HeroVisual from "./HeroVisual";
import HeroParticles from "./HeroParticles";
import WingsLogo from "./WingsLogo";
import { useDiagnostico } from "./DiagnosticoContext";

export default function Hero() {
  const { openModal } = useDiagnostico();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="bg-mesh bg-noise relative pb-24 pt-36 sm:pt-44"
    >
      <motion.div
        style={{ y: bgY }}
        className="bg-hairline pointer-events-none absolute inset-0"
      />
      <HeroParticles />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20"
          >
            <div className="drift-center pointer-events-none absolute left-1/2 top-1/2 h-20 w-20 rounded-full bg-violet/25 blur-[36px]" />
            <WingsLogo className="relative h-16 w-16 sm:h-20 sm:w-20" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass mt-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-violet-accent"
          >
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-violet-accent" />
            Voe Alto · Marketing digital para empresas que querem crescer
          </motion.span>

          <h1>
            <motion.span
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-display mt-6 block max-w-xl text-foreground"
            >
              Marketing que vende de{" "}
              <span className="text-gradient">verdade.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-7 max-w-md text-lg leading-relaxed text-muted"
          >
            Muita agência entrega relatório bonito e resultado fraco. A Fly
            cuida de tudo — estratégia, criação e vendas — para transformar
            seu investimento em clientes reais, todos os meses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <PremiumButton onClick={openModal}>
              Agendar Diagnóstico
            </PremiumButton>
            <PremiumButton href="#cases" variant="ghost">
              Ver resultados
            </PremiumButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-8 text-sm text-muted"
          >
            +2 anos de mercado · Parceiros por todo o Brasil
          </motion.p>
        </div>

        <motion.div style={{ y: visualY }}>
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
