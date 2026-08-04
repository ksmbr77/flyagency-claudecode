import WingsLogo from "./WingsLogo";
import { WHATSAPP_LINK } from "@/lib/contacts";

const links = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <WingsLogo className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-wide text-foreground">
            FLY <span className="text-violet-2">AGENCY</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
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

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gradient-to-r from-violet-500 to-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-transform hover:scale-105"
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
