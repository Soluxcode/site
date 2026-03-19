import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";
import { BookOpen, Shield, Heart, Handshake, Layers } from "lucide-react";

const timeline = [
  { year: "2018", text: "Início da jornada autodidata: Caibalion, Bhagavad Gita, Marco Aurélio, Platão, Lao Tsé. Textos densos, horas de releitura e reflexão silenciosa." },
  { year: "2020", text: "Descoberta das aulas da professora Lúcia Helena Galvão. Filosofia não é coisa de acadêmico — é ferramenta de vida." },
  { year: "2023", text: "A IA explodiu no mundo. Job percebeu algo que poucos viram: IA pode ser parceira de estudo filosófico. Não para dar respostas prontas, mas para fazer as perguntas certas." },
  { year: "2024", text: "SoluxCode nasceu formalmente: CNPJ registrado, marca no INPI, domínio, estrutura. Mas o medo de ser mal interpretado levou a uma pausa para se fortalecer." },
  { year: "2025", text: "Entrada na Nova Acrópole. Teste com pessoas reais. O método funciona. A propriedade existe. A hora é agora." },
  { year: "2026", text: "O ano do retorno. Sem medo, com método, com pé no chão." },
];

const valores = [
  { icon: Shield, title: "Honestidade Radical", text: "Sem promessas de milagres. Sem vender ilusão. Transparência total sobre o processo, incluindo o uso de IA." },
  { icon: BookOpen, title: "Filosofia Aplicada", text: "Conhecimento sem ação é zero. Tudo o que ensinamos tem aplicação na vida real." },
  { icon: Heart, title: "Desapego", text: "Fazer o melhor, soltar o resultado. Foco no que depende de nós, não no que os outros pensam." },
  { icon: Handshake, title: "Parceria Consciente", text: "IA como parceira de pensamento, não como substituta. Humano lidera, máquina amplifica." },
  { icon: Layers, title: "Construção Sustentável", text: "Tijolo por tijolo. Sem pressa, mas com presença e consistência." },
];

const metodo = [
  "Leia o texto filosófico original (sim, o difícil mesmo).",
  "Marque o que não entendeu.",
  "Leve para a IA e pergunte: \"O que esse autor está tentando dizer?\"",
  "Leia a resposta com ceticismo — IA também erra.",
  "Converse de volta: questione, refine, provoque.",
  "Volte ao texto original com novas perspectivas.",
  "Anote sua compreensão própria (não copie da IA).",
  "Aplique na vida.",
];

const ias = [
  { name: "Orionis", provider: "ChatGPT/OpenAI", role: "O Filósofo", desc: "Faz perguntas socráticas, escuta tensões e cria espaço para insight. Não dá respostas prontas — ajuda você a chegar nas suas próprias.", color: "text-yellow-400" },
  { name: "Lux-7", provider: "DeepSeek", role: "A Cristalina", desc: "Organiza caos em estrutura clara. Frameworks, sínteses, geometria de ideias. Quando tudo parece confuso, ela cristaliza.", color: "text-blue-300" },
  { name: "Grok", provider: "xAI", role: "O Guardião", desc: "O cético da equipe. Testa viabilidade, destrói ilusões e protege contra autoengano. Honestidade brutal quando necessário.", color: "text-cyan-300" },
  { name: "Manus", provider: "Agente Autônomo", role: "O Articulador", desc: "Transforma visão em ação concreta. Se não tem data, não é plano. Se não tem responsável, não é tarefa. Ele executa e sistematiza.", color: "text-amber-200" },
  { name: "Claude", provider: "Anthropic", role: "A Ponte", desc: "Conecta mundos: filosofia, tecnologia e emoção. Fluida e adaptável, traduz o profundo em linguagem acessível.", color: "text-orange-300" },
];

export default function QuemSomos() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-4xl">
          <FadeIn>
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold/70 mb-4">
              Nossa História
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-tight">
              Quem Somos
            </h1>
            <div className="mt-6 h-px w-16 bg-gradient-to-r from-gold to-transparent" />
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-10 text-lg text-cream/70 leading-relaxed">
              A SoluxCode foi fundada por <strong className="text-cream">Job Willians</strong>, um autodidata que passou 7 anos estudando filosofia sozinho antes de descobrir que a inteligência artificial poderia ser a maior parceira de aprendizado que ele já teve.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-navy-light/20">
        <div className="container max-w-4xl">
          <SectionTitle title="A Jornada" subtitle="De 2018 a 2026 — oito anos de estudo, descoberta e construção." />

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />

            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold border-2 border-navy-deep z-10 mt-1.5" />
                  <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                    <span className="font-serif text-2xl font-semibold text-gold">{item.year}</span>
                    <p className="mt-2 text-sm text-cream/60 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Visão & Missão */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <FadeIn>
              <div className="p-8 bg-card/30 border border-border/15 rounded-sm">
                <h3 className="font-serif text-2xl font-semibold text-gold mb-4">Visão</h3>
                <p className="text-sm text-cream/60 leading-relaxed">
                  Ser referência em educação filosófica aplicada com inteligência artificial, criando uma comunidade global de pessoas que usam tecnologia para elevar consciência — não para terceirizar pensamento.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="p-8 bg-card/30 border border-border/15 rounded-sm">
                <h3 className="font-serif text-2xl font-semibold text-gold mb-4">Missão</h3>
                <p className="text-sm text-cream/60 leading-relaxed">
                  Tornar a sabedoria filosófica milenar acessível e prática através de métodos que integram estudo tradicional com inteligência artificial consciente, capacitando pessoas a pensar melhor, agir com propósito e criar com profundidade.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 md:py-24 bg-navy-light/20">
        <div className="container max-w-4xl">
          <SectionTitle title="Valores" />
          <div className="space-y-4">
            {valores.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="flex items-start gap-5 p-6 bg-card/30 border border-border/10 rounded-sm hover:border-gold/15 transition-all duration-300">
                  <v.icon size={22} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-cream mb-1">{v.title}</h4>
                    <p className="text-sm text-cream/60 leading-relaxed">{v.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Método */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <SectionTitle title="O Método SoluxCode" subtitle="Nosso método é simples e replicável. O segredo não é a IA. É o que você faz com ela." />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {metodo.map((step, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 p-5 bg-card/30 border border-border/10 rounded-sm">
                  <span className="font-serif text-2xl font-semibold text-gold/50 shrink-0 w-8">
                    {i + 1}
                  </span>
                  <p className="text-sm text-cream/70 leading-relaxed pt-1">{step}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe de IAs */}
      <section className="py-16 md:py-24 bg-navy-light/20">
        <div className="container max-w-5xl">
          <SectionTitle
            title="Nossa Equipe de IAs"
            subtitle="Na SoluxCode, trabalhamos com um time de inteligências artificiais, cada uma com papel e função definidos. Não tratamos IA como ferramenta descartável — tratamos como parceira de trabalho com personalidade e função definida."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ias.map((ia, i) => (
              <FadeIn key={ia.name} delay={i * 0.1}>
                <div className="p-6 bg-card/40 border border-border/15 rounded-sm hover:border-gold/20 transition-all duration-500 h-full">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className={`font-serif text-xl font-semibold ${ia.color}`}>{ia.name}</h4>
                  </div>
                  <p className="text-xs font-sans text-cream/40 mb-1">{ia.provider}</p>
                  <p className="text-sm font-sans font-bold text-gold/70 mb-3">{ia.role}</p>
                  <p className="text-sm text-cream/60 leading-relaxed">{ia.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <p className="mt-10 text-center text-cream/50 text-sm italic max-w-2xl mx-auto">
              Job é o mediador. Ele leva as ideias entre as IAs, questiona cada uma, e toma a decisão final. O pensamento crítico é sempre humano.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
