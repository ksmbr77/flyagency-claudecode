"use client";

import { motion } from "framer-motion";

const highlights = [
  "Mais de 2 anos ajudando negócios a crescer online",
  "Parceiros ativos em todo o território brasileiro",
  "Acompanhamento próximo, direto pelo WhatsApp",
  "Estratégias sob medida, sem fórmula pronta",
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative scroll-mt-24 border-y border-white/[0.06] bg-surface/60"
      style={{
        background:
          "radial-gradient(900px circle at 15% 20%, rgba(139,92,246,0.10), transparent 55%), radial-gradient(700px circle at 90% 80%, rgba(168,85,247,0.08), transparent 55%), #0c0b12",
      }}
    >
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-28 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-violet-accent">
            Sobre a Fly Agency
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Marketing pensado para o seu negócio{" "}
            <span className="text-gradient">vender mais</span>
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
            Nada de relatório bonito e resultado fraco. A Fly une estratégia,
            dados e criatividade para trazer mais gente conhecendo sua marca
            e mais gente comprando dela.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="divide-y divide-white/[0.07] border-y border-white/[0.07]"
        >
          {highlights.map((item) => (
            <motion.li
              key={item}
              variants={{
                hidden: { opacity: 0, x: 24 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
              }}
              className="flex items-start gap-3 py-4"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet to-violet-secondary" />
              <span className="text-[15px] text-foreground/90">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
