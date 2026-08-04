import { WHATSAPP_LINK } from "@/lib/contacts";

export default function CtaSection() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border card-border bg-gradient-to-br from-violet-deep/40 via-surface to-surface-2 px-8 py-16 text-center sm:px-16">
        <div className="glow pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2" />

        <h2 className="relative text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Pronto para fazer sua empresa{" "}
          <span className="text-gradient">decolar</span>?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-muted">
          Fale agora com a nossa equipe pelo WhatsApp e descubra a melhor
          estratégia para o seu momento.
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 px-9 py-4 text-base font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.45)] transition-transform hover:scale-105"
        >
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
