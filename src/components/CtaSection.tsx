"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PremiumButton from "./PremiumButton";
import { useDiagnostico } from "./DiagnosticoContext";

const ease = [0.16, 1, 0.3, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 24, rotateX: -40 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease } },
};

const headlineWords = ["Pronto", "para"];

export default function CtaSection() {
  const { openModal } = useDiagnostico();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section ref={sectionRef} id="contato" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={cardVariants}
        className="relative rounded-3xl border border-white/[0.08] px-8 py-24 text-center sm:px-16 sm:py-28"
        style={{
          background:
            "radial-gradient(600px circle at 50% -10%, rgba(139,92,246,0.35), transparent 60%), linear-gradient(180deg, #0c0b12 0%, #060608 100%)",
        }}
      >
        <motion.div
          style={{ y: glowY }}
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-violet/20 blur-[90px]"
        />

        <motion.span
          variants={wordVariants}
          className="relative inline-block text-xs font-medium uppercase tracking-[0.2em] text-violet-accent"
        >
          Vamos conversar
        </motion.span>

        <h2 className="text-display relative mx-auto mt-4 max-w-2xl text-foreground [perspective:800px]">
          {headlineWords.map((word) => (
            <motion.span key={word} variants={wordVariants} className="mr-[0.22em] inline-block">
              {word}
            </motion.span>
          ))}
          <motion.span variants={wordVariants} className="text-gradient inline-block">
            voar alto?
          </motion.span>
        </h2>

        <motion.p
          variants={wordVariants}
          className="relative mx-auto mt-6 max-w-xl text-[17px] text-muted"
        >
          Em menos de 30 minutos mostramos exatamente onde sua empresa está
          perdendo oportunidades e o que fazer a respeito.
        </motion.p>

        <motion.div variants={wordVariants} className="relative mt-12 flex justify-center">
          <PremiumButton onClick={openModal} className="!px-10 !py-5 !text-base">
            Agendar diagnóstico
          </PremiumButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
