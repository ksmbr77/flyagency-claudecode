const stats = [
  { value: "+2", label: "Anos de mercado" },
  { value: "BR", label: "Parceiros por todo o país" },
  { value: "312+", label: "Empresas na comunidade" },
  { value: "100%", label: "Foco em performance" },
];

export default function Stats() {
  return (
    <section className="border-y border-white/5 bg-surface/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-gradient text-3xl font-bold sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
