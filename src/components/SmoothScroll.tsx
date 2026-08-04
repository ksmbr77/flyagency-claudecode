"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { MotionConfig } from "framer-motion";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 0.7,
      easing: (t: number) => 1 - Math.pow(1 - t, 2.2),
      wheelMultiplier: 1.15,
      touchMultiplier: 1.3,
    });

    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
