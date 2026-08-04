"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import DiagnosticoModal from "./DiagnosticoModal";

type DiagnosticoContextValue = {
  openModal: () => void;
};

const DiagnosticoContext = createContext<DiagnosticoContextValue | null>(null);

export function useDiagnostico() {
  const ctx = useContext(DiagnosticoContext);
  if (!ctx) throw new Error("useDiagnostico must be used within DiagnosticoProvider");
  return ctx;
}

export default function DiagnosticoProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <DiagnosticoContext.Provider value={{ openModal: () => setOpen(true) }}>
      {children}
      <DiagnosticoModal open={open} onClose={() => setOpen(false)} />
    </DiagnosticoContext.Provider>
  );
}
