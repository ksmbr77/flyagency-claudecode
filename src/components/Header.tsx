"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WingsLogo from "./WingsLogo";
import PremiumButton from "./PremiumButton";
import { useDiagnostico } from "./DiagnosticoContext";

const links = [
  { href: "#servicos", label: "O que entregamos" },
  { href: "#cases", label: "Cases" },
  { href: "#processo", label: "Processo" },
  { href: "#sobre", label: "Sobre" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openModal } = useDiagnostico();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled || open
          ? "border-b border-white/[0.08] bg-background/70 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <WingsLogo className="h-9 w-9 sm:h-11 sm:w-11" />
          <span className="text-sm font-bold tracking-[0.15em] text-foreground">
            FLY AGENCY
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <PremiumButton onClick={openModal} className="!px-5 !py-2.5 text-[13px]">
            Agendar Diagnóstico
          </PremiumButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="glass flex h-10 w-10 items-center justify-center rounded-full md:hidden"
        >
          <span className="relative flex h-4 w-4 flex-col items-center justify-center">
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 0 : -4 }}
              className="absolute h-px w-4 bg-foreground"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="absolute h-px w-4 bg-foreground"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? 0 : 4 }}
              className="absolute h-px w-4 bg-foreground"
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
            className="overflow-hidden border-t border-white/[0.08] bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base text-foreground/90 transition-colors hover:bg-white/[0.06]"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3">
                <PremiumButton
                  onClick={() => {
                    setOpen(false);
                    openModal();
                  }}
                  className="w-full !justify-center"
                >
                  Agendar Diagnóstico
                </PremiumButton>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
