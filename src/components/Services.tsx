"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import {
  IconTarget,
  IconShield,
  IconHandshake,
  IconLayout,
  IconFunnel,
  IconChart,
  IconReport,
  IconLoop,
  IconTrending,
} from "./icons";

const services = [
  {
    title: "Gestão de Tráfego Pago",
    description:
      "Anúncios que colocam sua marca na frente de quem já está pronto para comprar.",
    icon: IconTarget,
  },
  {
    title: "Posicionamento de Marca",
    description:
      "Uma identidade que passa confiança e faz sua empresa ser lembrada.",
    icon: IconShield,
  },
  {
    title: "Estratégia Comercial",
    description:
      "Organizamos seu processo de vendas para nenhum lead se perder pelo caminho.",
    icon: IconHandshake,
  },
  {
    title: "Landing Pages de Alta Conversão",
    description:
      "Páginas rápidas e persuasivas, feitas para transformar visita em cliente.",
    icon: IconLayout,
  },
  {
    title: "Funis de Venda",
    description:
      "Um caminho claro, do primeiro contato até o fechamento da compra.",
    icon: IconFunnel,
  },
  {
    title: "Análise de Dados",
    description:
      "Decisões baseadas em números reais, não em achismo ou tentativa.",
    icon: IconChart,
  },
  {
    title: "Relatórios Inteligentes",
    description:
      "Você sabe exatamente para onde vai seu investimento e o que ele traz de volta.",
    icon: IconReport,
  },
  {
    title: "Otimização Contínua",
    description:
      "Testamos e ajustamos toda semana, sem esperar o mês inteiro passar.",
    icon: IconLoop,
  },
  {
    title: "Crescimento Orientado por Dados",
    description:
      "Cada decisão pensada para gerar mais resultado com o mesmo investimento.",
    icon: IconTrending,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-violet-accent">
          O que entregamos
        </span>

        <h2 className="mt-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="block text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Tudo o que sua empresa precisa para{" "}
            <span className="text-gradient">vender mais</span>
          </motion.span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-muted"
        >
          Da estratégia à execução, cuidamos de cada etapa para transformar
          atenção em cliente — sem depender de mil fornecedores diferentes.
        </motion.p>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <TiltCard className="glass h-full rounded-2xl p-7 transition-colors duration-300 hover:bg-white/[0.06]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-violet-secondary/15">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
