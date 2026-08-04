"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "8%", size: 3, duration: 9, delay: 0 },
  { left: "18%", size: 2, duration: 12, delay: 1.5 },
  { left: "29%", size: 4, duration: 10, delay: 0.6 },
  { left: "41%", size: 2, duration: 8, delay: 2.2 },
  { left: "54%", size: 3, duration: 13, delay: 0.9 },
  { left: "63%", size: 2, duration: 11, delay: 3 },
  { left: "74%", size: 4, duration: 9.5, delay: 1.2 },
  { left: "85%", size: 2, duration: 12.5, delay: 2.6 },
  { left: "93%", size: 3, duration: 10.5, delay: 0.3 },
  { left: "36%", size: 2, duration: 14, delay: 3.6 },
];

export default function HeroParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-violet-accent/70"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            bottom: "-5%",
            boxShadow: "0 0 8px 1px rgba(168,85,247,0.55)",
          }}
          animate={{ y: ["0%", "-115vh"], opacity: [0, 0.9, 0.9, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.1, 0.85, 1],
          }}
        />
      ))}
    </div>
  );
}
