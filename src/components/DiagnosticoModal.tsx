"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/lib/contacts";

const desafios = [
  "Poucos leads chegando",
  "Leads chegam, mas não fecham",
  "Marca pouco conhecida no mercado",
  "Não sei por onde começar",
  "Outro",
];

export default function DiagnosticoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [desafio, setDesafio] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const lines = [
      "Olá! Quero agendar um diagnóstico com a Fly Agency.",
      "",
      `Nome: ${nome}`,
      `Empresa: ${empresa}`,
      `WhatsApp: ${whatsapp}`,
    ];
    if (desafio) lines.push(`Principal desafio hoje: ${desafio}`);

    const message = lines.join("\n");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setNome("");
    setEmpresa("");
    setWhatsapp("");
    setDesafio("");
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-10 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="diagnostico-title"
            className="glass-strong relative w-full max-w-md rounded-2xl border border-white/10 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-white/[0.08] hover:text-foreground"
            >
              ✕
            </button>

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-violet-accent">
              Vamos conversar
            </span>
            <h3 id="diagnostico-title" className="mt-3 text-2xl font-bold text-foreground">
              Agende seu diagnóstico
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Preencha rapidinho e a gente continua a conversa no WhatsApp,
              já com o contexto do seu negócio.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="nome" className="mb-1.5 block text-xs font-medium text-muted">
                  Nome
                </label>
                <input
                  id="nome"
                  ref={firstFieldRef}
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-violet-accent/60 focus:ring-2 focus:ring-violet-accent/30"
                />
              </div>

              <div>
                <label htmlFor="empresa" className="mb-1.5 block text-xs font-medium text-muted">
                  Empresa
                </label>
                <input
                  id="empresa"
                  required
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  placeholder="Nome da sua empresa"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-violet-accent/60 focus:ring-2 focus:ring-violet-accent/30"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="mb-1.5 block text-xs font-medium text-muted">
                  WhatsApp
                </label>
                <input
                  id="whatsapp"
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="(00) 00000-0000"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-violet-accent/60 focus:ring-2 focus:ring-violet-accent/30"
                />
              </div>

              <div>
                <label htmlFor="desafio" className="mb-1.5 block text-xs font-medium text-muted">
                  Principal desafio hoje (opcional)
                </label>
                <select
                  id="desafio"
                  value={desafio}
                  onChange={(e) => setDesafio(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-violet-accent/60 focus:ring-2 focus:ring-violet-accent/30"
                >
                  <option value="" className="bg-surface-2">
                    Selecione uma opção
                  </option>
                  {desafios.map((d) => (
                    <option key={d} value={d} className="bg-surface-2">
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet to-violet-secondary px-6 py-3.5 text-sm font-semibold text-white glow-violet transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Enviar e continuar no WhatsApp →
              </button>

              <p className="text-center text-[11px] text-muted">
                Ao enviar, você será direcionado ao WhatsApp da Fly Agency.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
