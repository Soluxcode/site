import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";
import { BookOpen, Coffee, Shirt, Calendar, KeyRound, Gem, Bell } from "lucide-react";
import { toast } from "sonner";

const produtos = [
  {
    icon: BookOpen,
    title: "Livros Autorais",
    desc: "As obras escritas por Job em co-criação com inteligência artificial. Ficção filosófica e manuais práticos.",
    status: "Disponível",
  },
  {
    icon: Coffee,
    title: "Canecas SoluxCode",
    desc: "Porque o café é ritual sagrado. Canecas com frases e arte da SoluxCode para acompanhar suas manhãs.",
    status: "Em Breve",
  },
  {
    icon: Shirt,
    title: "Camisetas",
    desc: "Vista a filosofia. Camisetas com design minimalista e frases que provocam reflexão.",
    status: "Em Breve",
  },
  {
    icon: Calendar,
    title: "Agenda SoluxCode",
    desc: "Planeje com consciência. Uma agenda que combina organização prática com reflexões filosóficas diárias.",
    status: "Em Breve",
  },
  {
    icon: KeyRound,
    title: "Chaveiros",
    desc: "Pequenos lembretes para carregar no bolso. Símbolos da jornada SoluxCode.",
    status: "Em Breve",
  },
  {
    icon: Gem,
    title: "Cristais",
    desc: "Selecionados com cuidado. Cristais para trazer presença e energia positiva ao seu espaço de trabalho e estudo.",
    status: "Em Breve",
  },
];

export default function UniversoSolux() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-4xl">
          <FadeIn>
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold/70 mb-4">
              Loja da Marca
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-tight">
              Universo Solux
            </h1>
            <div className="mt-6 h-px w-16 bg-gradient-to-r from-gold to-transparent" />
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-10 text-lg text-cream/70 leading-relaxed max-w-3xl">
              Produtos que carregam a filosofia SoluxCode no seu dia a dia. Cada produto do Universo Solux foi pensado para ser mais do que um objeto — é um lembrete da jornada. Da caneca que acompanha seu café da manhã ao cristal que fica na sua mesa de trabalho, tudo aqui tem intenção.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-navy-light/20">
        <div className="container max-w-5xl">
          <SectionTitle title="Categorias de Produtos" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtos.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="group p-6 bg-card/40 border border-border/15 rounded-sm hover:border-gold/20 transition-all duration-500 h-full flex flex-col">
                  <p.icon size={28} className="text-gold/60 mb-4 group-hover:text-gold transition-colors duration-300" />
                  <h3 className="font-serif text-xl font-semibold text-cream mb-2">{p.title}</h3>
                  <p className="text-sm text-cream/60 leading-relaxed flex-1">{p.desc}</p>
                  <div className="mt-5">
                    {p.status === "Disponível" ? (
                      <span className="inline-block px-3 py-1.5 text-xs font-sans font-bold tracking-wide bg-green-solux/20 text-green-light border border-green-solux/30 rounded-sm">
                        Disponível
                      </span>
                    ) : (
                      <button
                        onClick={() => toast.success("Você será avisado quando este produto estiver disponível!")}
                        className="flex items-center gap-2 px-3 py-1.5 text-xs font-sans font-bold tracking-wide bg-gold/10 text-gold/70 border border-gold/20 rounded-sm hover:bg-gold/20 transition-all duration-300"
                      >
                        <Bell size={12} />
                        Avise-me
                      </button>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
