import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Brain, Target } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663026804728/ZgTLDxJpHrs6RKoBD2LyNF/hero-bg-T9pR8ptdv4mntknUM9ZB4q.webp";
const PILAR_ESPIRITO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663026804728/ZgTLDxJpHrs6RKoBD2LyNF/pilares-espirito-aUAf2VRQwtyQMqR44QfHqW.webp";
const PILAR_MENTE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663026804728/ZgTLDxJpHrs6RKoBD2LyNF/pilares-mente-VrpWRY4p45q9K9BK5qMXSz.webp";
const PILAR_MATERIA = "https://d2xsxph8kpxj0f.cloudfront.net/310419663026804728/ZgTLDxJpHrs6RKoBD2LyNF/pilares-materia-PLftYEFJ9k5Wk9wW9NyH9r.webp";

const pilares = [
  {
    icon: Sparkles,
    title: "Espírito",
    subtitle: "Consciência e Presença",
    description:
      "Filosofia não é teoria morta. É prática diária. Ensinamos como aplicar princípios filosóficos milenares na sua rotina real — do primeiro café da manhã às decisões mais difíceis.",
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

const paraQuemE = [
  "Sente que a tecnologia poderia servir a algo maior do que entretenimento e produtividade cega.",
  "Quer estudar filosofia mas acha os textos originais difíceis demais para começar sozinho.",
  "Já usa inteligência artificial mas quer ir além de pedir resumos e respostas prontas.",
  "Busca crescimento pessoal com profundidade, sem misticismo vazio ou promessas de transformação instantânea.",
  "Acredita que humanos e máquinas podem trabalhar juntos de forma consciente.",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/40 to-navy-deep" />

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
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-cream max-w-5xl mx-auto"
          >
            SoluxCode
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 font-serif text-xl md:text-2xl lg:text-3xl italic text-gold/90 max-w-3xl mx-auto"
          >
            Codificando Consciência, Manifestando Realidade
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 text-base md:text-lg text-cream/70 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Você já se perguntou como a sabedoria de milhares de anos pode
            transformar a forma como você usa tecnologia hoje? A SoluxCode
            nasceu dessa pergunta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/quem-somos"
              className="group flex items-center gap-2 px-6 py-3 bg-gold/10 border border-gold/30 text-gold font-sans text-sm font-bold tracking-wide rounded-sm hover:bg-gold/20 transition-all duration-300"
            >
              Conheça o Método
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/academia"
              className="px-6 py-3 border border-cream/20 text-cream/70 font-sans text-sm tracking-wide rounded-sm hover:border-cream/40 hover:text-cream transition-all duration-300"
            >
              Acesse a Academia
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
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

      {/* Intro text */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <FadeIn>
            <p className="font-serif text-xl md:text-2xl text-cream/80 leading-relaxed italic">
              Aqui, unimos filosofia antiga — estoicismo, hermetismo, vedanta,
              taoísmo — com inteligência artificial, não para substituir o
              pensamento humano, mas para amplificá-lo.
            </p>
            <p className="mt-6 text-base text-gold/80 font-sans font-bold tracking-wide">
              Não vendemos fórmulas mágicas. Ensinamos método.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3 Pilares */}
      <section className="py-16 md:py-24">
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
                    <p className="text-sm text-gold/70 font-sans mb-4">
                      {pilar.subtitle}
                    </p>
                    <p className="text-sm text-cream/60 leading-relaxed">
                      {pilar.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-16 md:py-24 bg-navy-light/30">
        <div className="container max-w-4xl">
          <SectionTitle
            title="Para Quem É a SoluxCode"
            subtitle="Se alguma dessas frases ressoa com você, está no lugar certo."
          />

          <div className="space-y-4">
            {paraQuemE.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 p-5 bg-card/30 border border-border/10 rounded-sm hover:border-gold/15 transition-all duration-300">
                  <span className="mt-0.5 w-2 h-2 rounded-full bg-gold/60 shrink-0" />
                  <p className="text-cream/70 text-sm md:text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 md:py-32">
        <div className="container text-center max-w-2xl">
          <FadeIn>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-10" />
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-gold leading-tight">
              "Tijolo por tijolo.
              <br />
              Café por café."
            </blockquote>
            <p className="mt-8 text-cream/60 text-base md:text-lg leading-relaxed">
              A SoluxCode é uma construção diária. Bem-vindo à jornada.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gold/10 border border-gold/30 text-gold font-sans text-sm font-bold tracking-wide rounded-sm hover:bg-gold/20 transition-all duration-300"
            >
              Entre em Contato
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
