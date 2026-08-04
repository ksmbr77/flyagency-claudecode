"use client";

import { useLayoutEffect, useState } from "react";
import { AnimatePresence, motion, animate } from "framer-motion";
import WingsLogo from "./WingsLogo";

const STORAGE_KEY = "fly-intro-shown";
const LOAD_DURATION = 1.7;
const HOLD_MS = 250;
const CURTAIN_DURATION = 0.85;

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    const alreadyShown = sessionStorage.getItem(STORAGE_KEY);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (alreadyShown || prefersReduced) {
      // sync visibility with sessionStorage/media query before first paint
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
      sessionStorage.setItem(STORAGE_KEY, "1");
      return;
    }

    const controls = animate(0, 100, {
      duration: LOAD_DURATION,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setProgress(Math.round(v)),
      onComplete: () => {
        window.setTimeout(() => {
          setExiting(true);
          window.setTimeout(() => {
            setVisible(false);
            sessionStorage.setItem(STORAGE_KEY, "1");
          }, CURTAIN_DURATION * 1000);
        }, HOLD_MS);
      },
    });

    return () => controls.stop();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="fly-intro-loader"
          initial={{ y: 0 }}
          animate={{ y: exiting ? "-100%" : 0 }}
          transition={{ duration: CURTAIN_DURATION, ease: [0.76, 0, 0.24, 1] }}
          className="bg-noise fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8 overflow-hidden bg-background"
        >
          <div className="drift-center pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 rounded-full bg-violet/20 blur-[110px]" />

          <motion.div
            animate={{ opacity: exiting ? 0 : 1, scale: exiting ? 1.06 : 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center gap-5"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <WingsLogo className="h-16 w-16" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.15em" }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-1.5"
            >
              <span className="text-sm font-bold text-foreground">FLY AGENCY</span>
              <span className="text-[10px] font-medium uppercase text-violet-accent">
                Voe Alto
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: exiting ? 0 : 1 }}
            transition={{ duration: 0.4 }}
            className="relative flex flex-col items-center gap-2.5"
          >
            <div className="h-px w-40 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet to-violet-accent"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="font-mono text-[11px] tabular-nums tracking-[0.2em] text-muted">
              {progress}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
