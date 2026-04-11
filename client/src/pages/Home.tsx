/**
 * SoluxCode Home Page — v2
 * Posicionamento: "Conectar pessoas ao propósito real. Viver do que ama."
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Brain, Target, AlertCircle } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";
import FloatingCode from "@/components/FloatingCode";
import GoldParticles from "@/components/GoldParticles";

const PILAR_ESPIRITO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663026804728/ZgTLDxJpHrs6RKoBD2LyNF/pilares-espirito-aUAf2VRQwtyQMqR44QfHqW.webp";
const PILAR_MENTE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663026804728/ZgTLDxJpHrs6RKoBD2LyNF/pilares-mente-VrpWRY4p45q9K9BK5qMXSz.webp";
const PILAR_MATERIA =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663026804728/ZgTLDxJpHrs6RKoBD2LyNF/pilares-materia-PLftYEFJ9k5Wk9wW9NyH9r.webp";

const doresReais = [
  "Trabalha 8h por dia em algo que não te realiza — e sente que desperdiça sua vida.",
  "Sabe que pode mais, mas toda vez que tenta mudar, a rotina te engole de volta.",
  "Já consumiu dezenas de cursos de produtividade e autoajuda. Nenhum mudou nada de verdade.",
  "Usa IA todo dia mas nunca parou pra perguntar: o que eu realmente quero construir?",
  "Tem uma ideia, um talento, um sonho — mas não sabe como transformar isso em algo concreto.",
];

const pilares = [
  {
    icon: Sparkles,
    title: "Espírito",
    subtitle: "Consciência e Presença",
    description:
      "Filosofia não é teoria morta. É prática diária. Ensinamos como aplicar princípios filosóficos milenares na sua rotina — do primeiro café da manhã às decisões mais difíceis.",
    image: PILAR_ESPIRITO,
    label: "Raiz",
  },
  {
    icon: Brain,
    title: "Mente",
    subtitle: "Conhecimento e Discernimento",
    description:
      "Inteligência Artificial como parceira de estudo, não como muleta. Aprenda a usar IA para aprofundar seus conhecimentos, questionar suas certezas e pensar com mais clareza.",
    image: PILAR_MENTE,
    label: "Tronco",
  },
  {
    icon: Target,
    title: "Matéria",
    subtitle: "Ação e Resultado",
    description:
      "Conhecimento sem prática é zero. Tudo o que ensinamos tem aplicação concreta: nos seus projetos, no seu trabalho, na sua vida.",
    image: PILAR_MATERIA,
    label: "Galhos & Frutos",
  },
];

const naoSomos = [
  "Não somos mais um curso de produtividade com 7 passos para o sucesso.",
  "Não somos coaching motivacional que some depois que você paga.",
  "Não usamos IA para dar respostas prontas — usamos para fazer as perguntas certas.",
  "Não prometemos transformação instantânea. Prometemos método real.",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a0e1a 0%, #0d1321 30%, #101829 60%, #0a0e1a 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 35%, rgba(191,155,48,0.04) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 40% 40% at 50% 50%, rgba(30,50,80,0.3) 0%, transparent 70%)",
          }}
        />
        <GoldParticles />
        <FloatingCode />

        <div className="relative z-10 container text-center pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-gold/80 mb-6">
              Filosofia Aplicada + Inteligência Artificial
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-cream max-w-4xl mx-auto"
          >
            Você sente que pode mais.
            <br />
            <span className="text-gold">A SoluxCode existe pra isso.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-base md:text-lg lg:text-xl text-cream/70 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Conectamos pessoas ao seu propósito real — para que você saia da paralisia,
            descubra o que ama fazer, e construa uma vida com sentido e liberdade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/ikigai"
              className="group flex items-center gap-2 px-7 py-3.5 bg-gold/15 border border-gold/40 text-gold font-sans text-sm font-bold tracking-wide rounded-sm hover:bg-gold/25 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300"
            >
              Descubra seu Propósito — Grátis
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/quem-somos"
              className="px-7 py-3.5 border border-cream/20 text-cream/70 font-sans text-sm tracking-wide rounded-sm hover:border-cream/40 hover:text-cream transition-all duration-300"
            >
              Conheça o Método
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 text-xs text-cream/30 font-sans"
          >
            Fundado por Job Willians · 7 anos de estudo filosófico independente · Sem fórmulas rasas
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border border-cream/20 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-gold/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* DOR REAL */}
      <section className="py-20 md:py-28 bg-navy-light/20">
        <div className="container max-w-4xl">
          <FadeIn>
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold/60 mb-4 text-center">
              Seja honesto consigo
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-cream text-center mb-10">
              Você já se sentiu assim?
            </h2>
          </FadeIn>

          <div className="space-y-3">
            {doresReais.map((dor, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 p-5 bg-card/30 border border-border/10 rounded-sm hover:border-gold/15 transition-all duration-300">
                  <AlertCircle size={16} className="text-gold/40 shrink-0 mt-0.5" />
                  <p className="text-cream/70 text-sm md:text-base leading-relaxed">{dor}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <p className="mt-10 text-center font-serif text-xl md:text-2xl italic text-gold/80">
              Se alguma dessas frases ressoou — você está no lugar certo.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PONTE */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <FadeIn>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-10" />
            <p className="font-serif text-xl md:text-2xl text-cream/80 leading-relaxed">
              A SoluxCode une a sabedoria dos grandes filósofos —
              estoicismo, hermetismo, vedanta, taoísmo — com inteligência
              artificial consciente. Não para substituir o pensamento humano.
              <span className="text-gold font-semibold"> Para amplificá-lo.</span>
            </p>
            <p className="mt-6 text-base text-cream/60 leading-relaxed">
              Aqui você não recebe respostas prontas. Você aprende a fazer as perguntas
              certas — e a agir a partir das suas próprias respostas.
            </p>
            <p className="mt-6 text-base text-gold/80 font-sans font-bold tracking-wide">
              Não vendemos fórmulas mágicas. Ensinamos método.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3 PILARES */}
      <section className="py-16 md:py-24 bg-navy-light/10">
        <div className="container">
          <SectionTitle
            title="Os 3 Pilares"
            subtitle="Espírito, Mente e Matéria — o Código 333 que guia toda a metodologia SoluxCode."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {pilares.map((pilar, i) => (
              <FadeIn key={pilar.title} delay={i * 0.15}>
                <div className="group relative bg-card/50 border border-border/20 rounded-sm overflow-hidden hover:border-gold/20 transition-all duration-500">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={pilar.image}
                      alt={pilar.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <pilar.icon size={20} className="text-gold" />
                      <span className="text-xs font-sans tracking-[0.2em] uppercase text-gold/60">
                        {pilar.label}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-cream mb-1">
                      {pilar.title}
                    </h3>
                    <p className="text-sm text-gold/70 font-sans mb-4">{pilar.subtitle}</p>
                    <p className="text-sm text-cream/60 leading-relaxed">{pilar.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE NÃO SOMOS */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <FadeIn>
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold/60 mb-4 text-center">
              Honestidade antes de tudo
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-cream text-center mb-10">
              O que a SoluxCode <em>não</em> é
            </h2>
          </FadeIn>

          <div className="space-y-3">
            {naoSomos.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 p-5 bg-card/20 border border-border/10 rounded-sm">
                  <span className="mt-1 text-gold/50 font-serif text-lg font-semibold shrink-0">✕</span>
                  <p className="text-cream/60 text-sm md:text-base leading-relaxed">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-32 bg-navy-light/20">
        <div className="container text-center max-w-2xl">
          <FadeIn>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-10" />
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-gold leading-tight">
              "Tijolo por tijolo.
              <br />
              Café por café."
            </blockquote>
            <p className="mt-6 text-cream/60 text-base md:text-lg leading-relaxed">
              A SoluxCode é uma construção diária — como qualquer coisa que vale a pena.
              Comece pelo primeiro passo: descubra seu propósito.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/ikigai"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gold/15 border border-gold/40 text-gold font-sans text-sm font-bold tracking-wide rounded-sm hover:bg-gold/25 transition-all duration-300"
              >
                Quero Descobrir meu Propósito
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-cream/20 text-cream/60 font-sans text-sm tracking-wide rounded-sm hover:border-cream/40 hover:text-cream transition-all duration-300"
              >
                Falar com o Job
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
