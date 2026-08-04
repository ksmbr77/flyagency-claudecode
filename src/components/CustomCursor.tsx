"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export default function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 30 });
  const ringY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (reduceMotion) return;
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    // one-time environment detection, not derived from render state
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(isFinePointer);
  }, [reduceMotion]);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("cursor-none-custom");

    function handleMove(e: PointerEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    }
    function handleLeave() {
      setVisible(false);
    }
    function handleOver(e: PointerEvent) {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [role='button'], input, select, textarea"));
    }

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerover", handleOver);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      document.documentElement.classList.remove("cursor-none-custom");
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[300] h-1.5 w-1.5 rounded-full bg-white"
        style={{ x, y, translateX: "-50%", translateY: "-50%", opacity: visible ? 1 : 0 }}
        transition={{ opacity: { duration: 0.2 } }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[300] rounded-full border border-violet-accent/70"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: hovering ? 52 : 28,
          height: hovering ? 52 : 28,
          backgroundColor: hovering ? "rgba(139,92,246,0.12)" : "rgba(139,92,246,0)",
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
    </>
  );
}
