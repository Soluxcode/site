import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { Sparkles, Download, Users, ArrowRight, CheckCircle, Clock } from "lucide-react";
import { toast } from "sonner";

const beneficios = [
  "Descubra o que você ama fazer — além do óbvio",
  "Identifique o que o mundo precisa — com lente filosófica",
  "Mapeie seus talentos reais — não os que o mercado impõe",
  "Encontre a interseção entre propósito e remuneração",
  "Use IA como parceira de autoconhecimento — não como oráculo",
];

const metodo333 = [
  { fase: "Raiz", etapa: "Fundação", tema: "Espírito", desc: "Filosofia convergente, valores, consciência e presença. Resolver a desconexão entre quem você é e o que você faz." },
  { fase: "Tronco", etapa: "Estrutura", tema: "Mente", desc: "Método IA + pensamento crítico. Clareza sobre o que te trava e ferramentas para sair da paralisia." },
  { fase: "Galho", etapa: "Direção", tema: "Matéria", desc: "Ikigai aplicado: mapear seus dons reais e transformá-los em oferta concreta ao mundo." },
  { fase: "Folhas", etapa: "Conexão", tema: "Comunidade", desc: "Troca, desafios em grupo, conexões reais. Sair do isolamento e construir junto." },
  { fase: "Frutos", etapa: "Ação", tema: "Resultados", desc: "Plano MVP remunerado. Sair da teoria e colocar em prática — com acompanhamento." },
];

export default function Ikigai() {
  const [leadEmail, setLeadEmail] = useState("");
  const [waitlistEmail, setWaitlistEmail] = useState("");

  const handleLead = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Pronto! Verifique seu email para receber os 5 Prompts Ikigai.");
    setLeadEmail("");
  };

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Você está na lista de espera! Entraremos em contato em breve.");
    setWaitlistEmail("");
  };

  return (
    <div className="pt-20 md:pt-28">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold/70 mb-6">
              Lead Magnet Gratuito
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-tight">
              Descubra seu Propósito
              <br />
              <span className="text-gold">e Transforme em Ação</span>
            </h1>
            <p className="mt-6 text-lg text-cream/70 leading-relaxed max-w-2xl mx-auto">
              Você sabe que pode mais, mas não sabe por onde começar. O Método 333 resolve o que te trava: alinha Espírito, Mente e Matéria para você sair da paralisia e construir com clareza.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-16 md:py-24 bg-navy-light/30">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <div className="flex items-center gap-2 mb-4">
                <Download size={18} className="text-gold" />
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-gold/60">
                  Gratuito
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-cream mb-4">
                5 Prompts IA para Ikigai Filosófico
              </h2>
              <p className="text-cream/60 leading-relaxed mb-6">
                Não são prompts genéricos. São 5 perguntas filosóficas profundas, estruturadas para usar com qualquer IA, que vão te ajudar a mapear seu Ikigai de verdade.
              </p>
              <ul className="space-y-3">
                {beneficios.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-cream/60">
                    <CheckCircle size={16} className="text-green-light shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-8 bg-card/50 border border-gold/15 rounded-sm">
                <h3 className="font-serif text-xl font-semibold text-cream mb-2">
                  Receba agora — grátis
                </h3>
                <p className="text-xs text-cream/40 mb-6">
                  Insira seu email e receba os 5 prompts no seu inbox.
                </p>
                <form onSubmit={handleLead} className="space-y-4">
                  <input
                    type="email"
                    required
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-navy-deep/60 border border-border/20 rounded-sm text-cream text-sm focus:border-gold/40 focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gold/15 border border-gold/30 text-gold font-sans text-sm font-bold tracking-wide rounded-sm hover:bg-gold/25 transition-all duration-300"
                  >
                    <Sparkles size={16} />
                    Quero os 5 Prompts
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Método 333 */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold/60 mb-4">
                Resolva o que te trava
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-cream mb-4">
                Método 333
              </h2>
              <p className="text-cream/60 max-w-2xl mx-auto leading-relaxed">
                Filosofia antiga + IA moderna = clareza real sobre quem você é e o que fazer com isso. Não sou guru. Quebrei cabeça 8 anos. Este é o método que funcionou para sair da paralisia e começar a construir.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {metodo333.map((m, i) => (
              <FadeIn key={m.fase} delay={i * 0.1}>
                <div className="flex items-start gap-5 p-5 bg-card/30 border border-border/15 rounded-sm hover:border-gold/15 transition-all duration-300">
                  <div className="shrink-0 w-16 text-center">
                    <span className="font-serif text-lg font-semibold text-gold">{m.fase}</span>
                    <p className="text-[10px] text-cream/40 mt-0.5">{m.etapa}</p>
                  </div>
                  <div className="border-l border-border/15 pl-5">
                    <span className="text-xs font-sans tracking-[0.15em] uppercase text-gold/50">{m.tema}</span>
                    <p className="text-sm text-cream/60 leading-relaxed mt-1">{m.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="py-16 md:py-24 bg-navy-light/30">
        <div className="container max-w-3xl text-center">
          <FadeIn>
            <div className="p-8 md:p-12 bg-card/40 border border-gold/15 rounded-sm">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users size={18} className="text-gold" />
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-gold/60">
                  Lista de Espera
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-cream mb-3">
                50 Vagas Beta
              </h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Clock size={14} className="text-cream/40" />
                <p className="text-sm text-cream/50">
                  Preço beta: <span className="text-gold font-bold">R$297</span>
                  <span className="text-cream/30 line-through ml-2">R$497</span>
                </p>
              </div>
              <p className="text-cream/60 leading-relaxed mb-8 max-w-xl mx-auto">
                Inclui o método completo, os 2 eBooks, acesso à comunidade vitalícia e suporte direto do Job. Vagas limitadas para garantir qualidade e acompanhamento real.
              </p>

              <form onSubmit={handleWaitlist} className="max-w-md mx-auto space-y-4">
                <input
                  type="email"
                  required
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-navy-deep/60 border border-border/20 rounded-sm text-cream text-sm focus:border-gold/40 focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gold/15 border border-gold/30 text-gold font-sans text-sm font-bold tracking-wide rounded-sm hover:bg-gold/25 transition-all duration-300"
                >
                  Garantir Minha Vaga
                  <ArrowRight size={16} />
                </button>
              </form>

              <p className="mt-4 text-xs text-cream/30">
                Sem compromisso. Você será avisado quando as vagas abrirem.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
