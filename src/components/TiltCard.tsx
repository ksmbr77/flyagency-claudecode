"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { PointerEvent, ReactNode } from "react";

export default function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 220, damping: 22 });
  const sry = useSpring(ry, { stiffness: 220, damping: 22 });

  const rotateX = useTransform(srx, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(sry, [-0.5, 0.5], [-8, 8]);

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    e.currentTarget.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
    e.currentTarget.style.setProperty("--my", `${(py + 0.5) * 100}%`);
    if (reduceMotion) return;
    rx.set(py);
    ry.set(px);
  }

  function handleLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 800 }}
      className={`spotlight ${className}`}
    >
      {children}
    </motion.div>
  );
}
