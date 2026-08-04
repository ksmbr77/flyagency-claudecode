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

    // Lenis doesn't intercept anchor-link clicks on its own, so without this
    // nav links would jump instantly while wheel/touch scrolling stays smooth.
    function handleAnchorClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -16 });
    }
    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
