"use client";

import { useLayoutEffect, useState } from "react";
import { AnimatePresence, motion, animate } from "framer-motion";
import WingsLogo from "./WingsLogo";

const STORAGE_KEY = "fly-intro-shown";
const LOAD_DURATION = 1.5;
const EXIT_DELAY_MS = 650;

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
        setExiting(true);
        window.setTimeout(() => {
          setVisible(false);
          sessionStorage.setItem(STORAGE_KEY, "1");
        }, EXIT_DELAY_MS);
      },
    });

    return () => controls.stop();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="fly-intro-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: exiting ? 0 : 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-7 bg-background"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: exiting ? 1.08 : 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glow-violet flex h-20 w-20 items-center justify-center rounded-2xl"
          >
            <WingsLogo className="h-14 w-14" />
          </motion.div>

          <div className="flex flex-col items-center gap-3">
            <div className="h-[3px] w-36 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet to-violet-accent"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="font-mono text-xs tabular-nums tracking-wider text-muted">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
