"use client";

import { useLayoutEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import WingsLogo from "./WingsLogo";

const STORAGE_KEY = "fly-intro-shown";

export default function IntroLoader() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useLayoutEffect(() => {
    const alreadyShown = sessionStorage.getItem(STORAGE_KEY);
    if (alreadyShown || reduceMotion) {
      // sync visibility with sessionStorage before first paint
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
      sessionStorage.setItem(STORAGE_KEY, "1");
      return;
    }

    const exitTimer = window.setTimeout(() => setExiting(true), 1100);
    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, 1700);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="fly-intro-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: exiting ? 0 : 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: exiting ? 1.08 : 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <WingsLogo className="h-20 w-20" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
