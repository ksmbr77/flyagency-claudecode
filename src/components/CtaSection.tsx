"use client";

import { motion } from "framer-motion";
import PremiumButton from "./PremiumButton";
import { WHATSAPP_LINK } from "@/lib/contacts";

export default function CtaSection() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="relative rounded-3xl border border-white/[0.08] px-8 py-20 text-center sm:px-16"
        style={{
          background:
            "radial-gradient(600px circle at 50% -10%, rgba(139,92,246,0.35), transparent 60%), linear-gradient(180deg, #0c0b12 0%, #060608 100%)",
        }}
      >
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-violet-accent">
          Vamos conversar
        </span>

        <h2 className="text-display relative mx-auto mt-4 max-w-2xl text-foreground">
          Pronto para acelerar seu{" "}
          <span className="text-gradient">crescimento?</span>
        </h2>

        <p className="relative mx-auto mt-6 max-w-xl text-muted">
          Em menos de 30 minutos mostramos exatamente onde sua empresa está
          perdendo oportunidades — e o que fazer a respeito.
        </p>

        <div className="relative mt-10 flex justify-center">
          <PremiumButton href={WHATSAPP_LINK} target="_blank">
            Agendar diagnóstico
          </PremiumButton>
        </div>
      </motion.div>
    </section>
  );
}
