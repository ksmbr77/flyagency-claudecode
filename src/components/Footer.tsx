"use client";

import { motion } from "framer-motion";
import WingsLogo from "./WingsLogo";
import { WHATSAPP_LINK, INSTAGRAM_LINK } from "@/lib/contacts";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className="border-t border-white/[0.06]"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2">
          <WingsLogo className="h-9 w-9" />
          <span className="leading-tight">
            <span className="block text-sm font-medium text-foreground">
              FLY <span className="text-violet-accent">AGENCY</span>
            </span>
            <span className="block text-[11px] tracking-[0.15em] text-muted">
              VOE ALTO
            </span>
          </span>
        </div>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Fly Agency · Todos os direitos reservados
        </p>

        <div className="flex items-center gap-4 text-sm text-muted">
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Instagram
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
