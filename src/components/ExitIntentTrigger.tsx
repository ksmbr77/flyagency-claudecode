"use client";

import { useEffect } from "react";
import { useDiagnostico } from "./DiagnosticoContext";
import { LEAD_SUBMITTED_KEY } from "./DiagnosticoModal";

const SHOWN_KEY = "fly-exit-intent-shown";
const ARM_DELAY_MS = 8000;

export default function ExitIntentTrigger() {
  const { openModal } = useDiagnostico();

  useEffect(() => {
    if (sessionStorage.getItem(SHOWN_KEY) || sessionStorage.getItem(LEAD_SUBMITTED_KEY)) {
      return;
    }
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;

    let armed = false;
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, ARM_DELAY_MS);

    function handleMouseLeave(e: MouseEvent) {
      if (!armed || e.clientY > 0) return;
      sessionStorage.setItem(SHOWN_KEY, "1");
      document.removeEventListener("mouseleave", handleMouseLeave);
      openModal("exit-intent");
    }

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
