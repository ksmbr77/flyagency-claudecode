"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import DiagnosticoModal, { type ModalSource } from "./DiagnosticoModal";
import ExitIntentTrigger from "./ExitIntentTrigger";

type DiagnosticoContextValue = {
  openModal: (source?: ModalSource) => void;
};

const DiagnosticoContext = createContext<DiagnosticoContextValue | null>(null);

export function useDiagnostico() {
  const ctx = useContext(DiagnosticoContext);
  if (!ctx) throw new Error("useDiagnostico must be used within DiagnosticoProvider");
  return ctx;
}

export default function DiagnosticoProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState<ModalSource>("default");

  function openModal(nextSource: ModalSource = "default") {
    setSource(nextSource);
    setOpen(true);
  }

  return (
    <DiagnosticoContext.Provider value={{ openModal }}>
      {children}
      <ExitIntentTrigger />
      <DiagnosticoModal open={open} source={source} onClose={() => setOpen(false)} />
    </DiagnosticoContext.Provider>
  );
}
