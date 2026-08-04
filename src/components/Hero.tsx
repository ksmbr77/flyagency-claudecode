import WingsLogo from "./WingsLogo";
import { WHATSAPP_LINK, INSTAGRAM_LINK } from "@/lib/contacts";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-grid">
      <div className="glow pointer-events-none absolute left-1/2 top-[-10%] h-[600px] w-[600px] -translate-x-1/2" />
      <div className="glow pointer-events-none absolute right-[-10%] top-1/3 h-[400px] w-[400px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-28 pt-24 text-center sm:pt-32">
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border card-border bg-surface/60 shadow-[0_0_40px_rgba(139,92,246,0.25)]">
          <WingsLogo className="h-11 w-11" />
        </div>

        <span className="mb-5 rounded-full border card-border bg-surface/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-violet-2">
          Agência Digital · +2 anos de mercado
        </span>

        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl">
          Fly, voe rumo ao{" "}
          <span className="text-gradient">sucesso</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Aumente as views e as vendas da sua empresa com tráfego pago,
          alinhamento comercial e posicionamento de marca feitos por quem
          entende de performance.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-violet-500 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.45)] transition-transform hover:scale-105"
          >
            Quero decolar agora
          </a>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border card-border bg-surface/50 px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-surface-2"
          >
            Ver no Instagram
          </a>
        </div>

        <p className="mt-6 text-sm text-muted">
          Parceiros por todo o Brasil 🇧🇷
        </p>
      </div>
    </section>
  );
}
