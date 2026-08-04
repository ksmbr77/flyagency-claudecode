"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { node: <AnimatedCounter value={2} prefix="+" />, label: "Anos de mercado" },
  { node: "BR", label: "Parceiros por todo o país" },
  { node: <AnimatedCounter value={312} suffix="+" />, label: "Empresas na comunidade" },
  { node: <AnimatedCounter value={100} suffix="%" />, label: "Foco em performance" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Stats() {
  return (
    <section className="relative border-y border-white/[0.06] bg-surface/40">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={item} className="text-center">
            <p className="text-gradient text-3xl font-bold sm:text-4xl">{stat.node}</p>
            <span className="mx-auto mt-3 block h-px w-8 bg-gradient-to-r from-transparent via-violet-accent/60 to-transparent" />
            <p className="mt-3 text-sm text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
