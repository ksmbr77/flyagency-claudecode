const services = [
  {
    title: "Gestão de Tráfego Pago",
    description:
      "Campanhas estratégicas em Meta Ads e Google Ads para atrair o público certo e transformar cliques em clientes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="url(#g1)" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="5" stroke="url(#g1)" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="1.4" fill="url(#g1)" />
        <defs>
          <linearGradient id="g1" x1="3" y1="3" x2="21" y2="21">
            <stop stopColor="#d8b4fe" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Alinhamento Comercial",
    description:
      "Estruturamos o seu processo de vendas para que cada lead gerado seja aproveitado ao máximo pelo seu time comercial.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 12a8 8 0 1 1 3 6.24M4 12v5h5"
          stroke="url(#g2)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="2" fill="url(#g2)" />
        <defs>
          <linearGradient id="g2" x1="3" y1="3" x2="21" y2="21">
            <stop stopColor="#d8b4fe" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Posicionamento de Marca",
    description:
      "Construímos uma identidade forte e consistente para sua empresa se destacar e ser lembrada no mercado.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 10v4l4 1 9 4V5L8 9l-4 1Z"
          stroke="url(#g3)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M8 15v4a2 2 0 0 0 4 0v-3" stroke="url(#g3)" strokeWidth="1.6" strokeLinecap="round" />
        <defs>
          <linearGradient id="g3" x1="3" y1="3" x2="21" y2="21">
            <stop stopColor="#d8b4fe" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="solucoes" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-violet-2">
          Nossas soluções
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Tudo o que sua empresa precisa para{" "}
          <span className="text-gradient">decolar</span>
        </h2>
        <p className="mt-4 text-muted">
          Estratégia, execução e acompanhamento próximo em cada etapa do seu
          crescimento.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-2xl border card-border bg-surface/50 p-8 transition-all hover:-translate-y-1 hover:bg-surface-2 hover:shadow-[0_0_35px_rgba(139,92,246,0.2)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border card-border bg-violet-deep/20">
              {service.icon}
            </div>
            <h3 className="mt-6 text-lg font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
