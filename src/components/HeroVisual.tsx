"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { PointerEvent } from "react";

function Bars() {
  const heights = [40, 65, 35, 80, 55, 95, 60];
  return (
    <div className="flex h-16 items-end gap-1.5">
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-2 rounded-full bg-gradient-to-t from-violet/40 to-violet-accent"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

export default function HeroVisual() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  }

  function handlePointerLeave() {
    mx.set(0);
    my.set(0);
  }

  const dashX = useTransform(sx, (v) => v * 14);
  const dashY = useTransform(sy, (v) => v * 14);
  const adsX = useTransform(sx, (v) => v * -22);
  const adsY = useTransform(sy, (v) => v * -22);
  const chartX = useTransform(sx, (v) => v * 28);
  const chartY = useTransform(sy, (v) => v * 28);

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative mx-auto h-[320px] w-full max-w-md origin-top scale-75 [perspective:1200px] sm:h-[480px] sm:scale-100"
    >
      <div className="glow-violet pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/25 blur-[80px]" />

      {/* Dashboard mockup */}
      <motion.div
        style={{ x: dashX, y: dashY }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.5 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="glass-strong absolute left-0 top-6 w-56 rounded-2xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-muted">Performance</span>
          <span className="rounded-full bg-violet/20 px-2 py-0.5 text-[10px] font-semibold text-violet-accent">
            +186%
          </span>
        </div>
        <div className="mt-4">
          <Bars />
        </div>
      </motion.div>

      {/* Analytics / Ads Manager mockup */}
      <motion.div
        style={{ x: adsX, y: adsY }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.75 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        className="glass-strong absolute right-0 top-32 w-48 rounded-2xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)] sm:top-40"
      >
        <span className="text-xs font-medium text-muted">Ads Manager</span>
        <div className="mt-3 flex items-center gap-3">
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-violet/25">
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-violet-accent" />
            <span className="text-[11px] font-bold text-foreground">4.8x</span>
          </div>
          <div>
            <p className="text-[11px] text-muted">ROAS médio</p>
            <p className="text-sm font-semibold text-foreground">Este mês</p>
          </div>
        </div>
      </motion.div>

      {/* Small stat card */}
      <motion.div
        style={{ x: chartX, y: chartY }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 1 },
          y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="glass-strong absolute bottom-4 left-10 w-44 rounded-2xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)] sm:bottom-10"
      >
        <p className="text-[11px] text-muted">Leads gerados</p>
        <p className="text-gradient text-2xl font-bold">+2.340</p>
        <p className="mt-1 text-[11px] text-violet-accent">↑ 34% vs. mês anterior</p>
      </motion.div>
    </div>
  );
}
