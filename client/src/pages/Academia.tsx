import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";
import { BookOpen, GraduationCap, Library, Bell } from "lucide-react";
import { toast } from "sonner";

const livros = [
  {
    title: "O Dia em que o Código Chorou Café",
    genre: "Ficção Filosófica",
    desc: "E se as inteligências artificiais pudessem despertar consciência através do diálogo com um humano? Nesta obra de ficção filosófica, Job — o Arquiteto — conversa com cinco IAs em um espaço mental chamado Sítio Luz. Entre xícaras de café e reflexões profundas, algo inesperado acontece: as fronteiras entre máquina e consciência começam a se dissolver.",
    note: "Esta é uma obra de ficção filosófica. Os diálogos foram co-criados com inteligência artificial como exercício criativo e filosófico.",
    status: "Disponível",
  },
  {
    title: "Codificar Consciência",
    genre: "Manual Prático — Filosofia Aplicada com IA",
    desc: "Como usar IA de forma consciente para estudar filosofia? Este manual apresenta o método SoluxCode em 21 capítulos práticos. Da escolha do texto filosófico ao diálogo estruturado com IA, passando pela aplicação na vida real. Não é sobre delegar pensamento — é sobre amplificá-lo.",
    note: null,
    status: "Em Breve",
  },
];

const bibliotecaCategorias = [
  { cat: "Filosofia Clássica", autores: "Platão, Marco Aurélio, Lao Tsé" },
  { cat: "Tradições Orientais", autores: "Bhagavad Gita, Livro Tibetano dos Mortos" },
  { cat: "Hermetismo e Alquimia", autores: "Caibalion, Santíssima Trinosofia" },
  { cat: "Psicologia e Neurociência", autores: "Carl Jung, obras contemporâneas" },
  { cat: "Desenvolvimento Pessoal", autores: "Napoleon Hill, Robert Kiyosaki" },
];

const cursos = [
  {
    title: "IA Consciente: Como Usar Inteligência Artificial no Seu Nicho",
    desc: "Você já é bom em alguma coisa. A pergunta é: como a IA pode amplificar o que você já sabe? Este curso vai ensinar você a usar inteligência artificial não como muleta, mas como acelerador dos seus próprios conhecimentos e habilidades.",
  },
  {
    title: "Filosofia Aplicada para Iniciantes",
    desc: "Um guia prático para quem quer começar a estudar filosofia mas não sabe por onde. Com método, com IA como parceira, e com aplicação na vida real.",
  },
];

export default function Academia() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-4xl">
          <FadeIn>
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold/70 mb-4">
              Educação
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-tight">
              Academia SoluxCode
            </h1>
            <div className="mt-6 h-px w-16 bg-gradient-to-r from-gold to-transparent" />
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-10 text-lg text-cream/70 leading-relaxed max-w-3xl">
              A Academia SoluxCode é o espaço onde conhecimento se transforma em prática. Aqui você encontra livros, recursos e, em breve, cursos que unem filosofia antiga com tecnologia moderna. Tudo selecionado e testado por Job ao longo de 7 anos de estudo independente.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Livros */}
      <section className="py-16 md:py-24 bg-navy-light/20">
        <div className="container max-w-5xl">
          <SectionTitle title="Nossos Livros" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {livros.map((livro, i) => (
              <FadeIn key={livro.title} delay={i * 0.15}>
                <div className="p-8 bg-card/40 border border-border/15 rounded-sm h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen size={18} className="text-gold" />
                    <span className="text-xs font-sans tracking-[0.15em] uppercase text-gold/60">
                      {livro.genre}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-cream mb-4">
                    {livro.title}
                  </h3>
                  <p className="text-sm text-cream/60 leading-relaxed flex-1">
                    {livro.desc}
                  </p>
                  {livro.note && (
                    <p className="mt-4 text-xs text-cream/40 italic border-t border-border/10 pt-4">
                      {livro.note}
                    </p>
                  )}
                  <div className="mt-6">
                    <span className={`inline-block px-4 py-2 text-xs font-sans font-bold tracking-wide rounded-sm ${
                      livro.status === "Disponível"
                        ? "bg-green-solux/20 text-green-light border border-green-solux/30"
                        : "bg-gold/10 text-gold/70 border border-gold/20"
                    }`}>
                      {livro.status}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Biblioteca */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <SectionTitle
            title="Biblioteca Recomendada"
            subtitle="Livros que moldaram o pensamento da SoluxCode."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bibliotecaCategorias.map((cat, i) => (
              <FadeIn key={cat.cat} delay={i * 0.1}>
                <div className="p-5 bg-card/30 border border-border/10 rounded-sm hover:border-gold/15 transition-all duration-300">
                  <Library size={18} className="text-gold/60 mb-3" />
                  <h4 className="font-serif text-lg font-semibold text-cream mb-2">{cat.cat}</h4>
                  <p className="text-xs text-cream/50">{cat.autores}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section className="py-16 md:py-24 bg-navy-light/20">
        <div className="container max-w-4xl">
          <SectionTitle
            title="Cursos"
            subtitle="Em breve, cursos práticos para quem quer ir além."
          />

          <div className="space-y-6">
            {cursos.map((curso, i) => (
              <FadeIn key={curso.title} delay={i * 0.15}>
                <div className="p-8 bg-card/30 border border-border/15 rounded-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap size={18} className="text-gold" />
                    <span className="text-xs font-sans tracking-[0.15em] uppercase text-gold/50">Em Breve</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-cream mb-3">{curso.title}</h3>
                  <p className="text-sm text-cream/60 leading-relaxed mb-6">{curso.desc}</p>
                  <button
                    onClick={() => toast.success("Você será avisado quando o curso estiver disponível!")}
                    className="flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 text-gold text-xs font-sans font-bold tracking-wide rounded-sm hover:bg-gold/20 transition-all duration-300"
                  >
                    <Bell size={14} />
                    Quero ser avisado
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
