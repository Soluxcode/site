import { Link } from "wouter";
import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";
import { TreePine, Users, Lightbulb, Mountain, ArrowRight } from "lucide-react";

const REFUGIO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663026804728/ZgTLDxJpHrs6RKoBD2LyNF/refugio-ilhabela-S3gMR6JyzeKj5pZgHc3oNv.webp";

const features = [
  {
    icon: TreePine,
    title: "Retiros de Filosofia Aplicada",
    desc: "Imersões de fim de semana para estudar, praticar e vivenciar os princípios que ensinamos. Sem celular, com café, com diálogo profundo.",
  },
  {
    icon: Lightbulb,
    title: "Workshops de IA Consciente",
    desc: "Aprenda a usar inteligência artificial como ferramenta de autoconhecimento e desenvolvimento pessoal, num ambiente que convida à reflexão.",
  },
  {
    icon: Users,
    title: "Espaço de Co-criação",
    desc: "Um lugar onde pensadores, criadores e curiosos se encontram para construir juntos. Projetos, ideias, conexões.",
  },
  {
    icon: Mountain,
    title: "Conexão com a Natureza",
    desc: "Trilhas, cachoeira, mata preservada. Porque a melhor tecnologia do mundo não substitui o sol da manhã e o som da água corrente.",
  },
];

export default function RefugioSolux() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero with image */}
      <section className="relative pb-16 md:pb-24">
        <div className="container max-w-5xl">
          <FadeIn>
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold/70 mb-4">
              O Sonho Físico
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-tight">
              Refúgio Solux
            </h1>
            <p className="mt-2 font-serif text-xl italic text-gold/70">
              Onde o digital encontra a natureza.
            </p>
            <div className="mt-6 h-px w-16 bg-gradient-to-r from-gold to-transparent" />
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10 rounded-sm overflow-hidden border border-border/15">
              <img
                src={REFUGIO_IMG}
                alt="Refúgio Solux — visão do espaço em Ilhabela"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-10 text-lg text-cream/70 leading-relaxed max-w-3xl">
              Imagine um lugar cercado por Mata Atlântica, com vista para o mar, onde o barulho do mundo digital se transforma em silêncio produtivo. Um espaço para desconectar do excesso e reconectar consigo mesmo.
            </p>
            <p className="mt-4 text-base text-cream/60 leading-relaxed max-w-3xl">
              O Refúgio Solux é o sonho físico da SoluxCode: um espaço real em Ilhabela, São Paulo, pensado para retiros, workshops e imersões que combinam filosofia aplicada com uso consciente de tecnologia.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-navy-light/20">
        <div className="container max-w-5xl">
          <SectionTitle title="O Que Será o Refúgio" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.12}>
                <div className="p-6 bg-card/30 border border-border/15 rounded-sm hover:border-green-solux/20 transition-all duration-500 h-full">
                  <f.icon size={24} className="text-green-light mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-cream mb-2">{f.title}</h3>
                  <p className="text-sm text-cream/60 leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Path */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-cream mb-6">
              O Caminho
            </h2>
            <p className="text-cream/60 leading-relaxed mb-4">
              O Refúgio Solux ainda é um sonho em construção. Estamos buscando formas de torná-lo realidade — passo a passo, como tudo na SoluxCode.
            </p>
            <p className="text-cream/60 leading-relaxed mb-8">
              Se esse sonho ressoa com você, entre em contato. Queremos encontrar pessoas que compartilham dessa visão e querem construir junto.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-solux/15 border border-green-solux/30 text-green-light font-sans text-sm font-bold tracking-wide rounded-sm hover:bg-green-solux/25 transition-all duration-300"
            >
              Quero Saber Mais
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
