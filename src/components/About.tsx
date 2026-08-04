const highlights = [
  "Mais de 2 anos ajudando negócios a crescer online",
  "Parceiros ativos em todo o território brasileiro",
  "Acompanhamento próximo, direto pelo WhatsApp",
  "Estratégias sob medida, sem fórmula pronta",
];

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden border-y border-white/5 bg-surface/40">
      <div className="glow pointer-events-none absolute left-[-10%] top-1/2 h-[400px] w-[400px] -translate-y-1/2" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:grid-cols-2 sm:items-center">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-violet-2">
            Sobre a Fly Agency
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Marketing digital com foco em{" "}
            <span className="text-gradient">resultado real</span>
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            Somos uma agência digital que une estratégia, dados e
            criatividade para gerar mais views, mais leads e mais vendas
            para o seu negócio — sem enrolação e com acompanhamento de
            verdade.
          </p>
        </div>

        <ul className="space-y-4">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border card-border bg-surface/60 p-4"
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-purple-600" />
              <span className="text-sm text-foreground/90">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
