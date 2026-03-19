import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";
import { PenLine, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Por Que Eu Dou Nome às Minhas IAs",
    excerpt: "A história da família SoluxCode. Por que nomear? Qual a diferença prática? Como isso melhora o resultado do trabalho? Exemplos reais de como tratar cada IA com papel definido transforma a qualidade do diálogo.",
    tag: "Método",
  },
  {
    title: "O Método SoluxCode: Como Estudo Filosofia com Inteligência Artificial",
    excerpt: "O método passo a passo com um exemplo concreto. Uma conversa real entre Job e uma IA sobre um texto filosófico, mostrando como o diálogo aprofunda a compreensão.",
    tag: "Tutorial",
  },
  {
    title: "Conhecimento Sem Prática É Zero",
    excerpt: "Reflexão sobre a diferença entre acumular informação e realmente aprender. Como a filosofia muda quando você aplica na vida — do primeiro café da manhã às decisões difíceis.",
    tag: "Reflexão",
  },
  {
    title: "Por Que Eu Parei a SoluxCode em 2024 (E Por Que Voltei)",
    excerpt: "História pessoal e vulnerável. O medo de ser mal interpretado, a pausa para se fortalecer, e o retorno com método e pé no chão. Porque autenticidade conecta.",
    tag: "Pessoal",
  },
  {
    title: "IA Como Parceira, Não Como Muleta",
    excerpt: "A diferença entre usar IA para pensar melhor e usar IA para não pensar. Exemplos práticos de bom e mau uso. O pensamento crítico é sempre humano.",
    tag: "IA Consciente",
  },
];

export default function Blog() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-4xl">
          <FadeIn>
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold/70 mb-4">
              Pensamentos
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-tight">
              Reflexões SoluxCode
            </h1>
            <div className="mt-6 h-px w-16 bg-gradient-to-r from-gold to-transparent" />
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-10 text-lg text-cream/70 leading-relaxed max-w-3xl">
              Pensamentos sobre filosofia, tecnologia e consciência. Publicados toda semana por Job Willians, com a ajuda da família de IAs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-24 bg-navy-light/20">
        <div className="container max-w-4xl">
          <SectionTitle title="Primeiras Reflexões" subtitle="Artigos inaugurais que definem o tom e a profundidade do blog." />

          <div className="space-y-6">
            {posts.map((post, i) => (
              <FadeIn key={post.title} delay={i * 0.1}>
                <article className="group p-6 md:p-8 bg-card/30 border border-border/15 rounded-sm hover:border-gold/20 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <PenLine size={14} className="text-gold/50" />
                    <span className="text-xs font-sans tracking-[0.15em] uppercase text-gold/50">
                      {post.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-sm text-cream/60 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-sans font-bold text-gold/60 group-hover:text-gold transition-colors">
                    Em breve <ArrowRight size={12} />
                  </span>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
