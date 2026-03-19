import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { Mail, MapPin, Instagram, Linkedin, Youtube, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", assunto: "geral", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada! Entraremos em contato em breve.");
    setForm({ nome: "", email: "", assunto: "geral", mensagem: "" });
  };

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-4xl">
          <FadeIn>
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold/70 mb-4">
              Fale Conosco
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-tight">
              Vamos Conversar
            </h1>
            <div className="mt-6 h-px w-16 bg-gradient-to-r from-gold to-transparent" />
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-10 text-lg text-cream/70 leading-relaxed max-w-3xl">
              Tem uma ideia, uma dúvida, ou simplesmente quer trocar uma ideia sobre filosofia e tecnologia? Estamos aqui.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-navy-light/20">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <FadeIn className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-sans text-cream/60 mb-2">Nome</label>
                  <input
                    type="text"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="w-full px-4 py-3 bg-card/40 border border-border/20 rounded-sm text-cream text-sm focus:border-gold/40 focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-sans text-cream/60 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-card/40 border border-border/20 rounded-sm text-cream text-sm focus:border-gold/40 focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-sans text-cream/60 mb-2">Assunto</label>
                  <select
                    value={form.assunto}
                    onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                    className="w-full px-4 py-3 bg-card/40 border border-border/20 rounded-sm text-cream text-sm focus:border-gold/40 focus:outline-none transition-colors"
                  >
                    <option value="geral">Dúvida Geral</option>
                    <option value="parcerias">Parcerias</option>
                    <option value="refugio">Refúgio Solux</option>
                    <option value="livros">Livros</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-sans text-cream/60 mb-2">Mensagem</label>
                  <textarea
                    required
                    rows={5}
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    className="w-full px-4 py-3 bg-card/40 border border-border/20 rounded-sm text-cream text-sm focus:border-gold/40 focus:outline-none transition-colors resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 bg-gold/10 border border-gold/30 text-gold font-sans text-sm font-bold tracking-wide rounded-sm hover:bg-gold/20 transition-all duration-300"
                >
                  <Send size={14} />
                  Enviar Mensagem
                </button>
              </form>
            </FadeIn>

            {/* Info */}
            <FadeIn delay={0.2} className="lg:col-span-2">
              <div className="space-y-8">
                {/* Emails */}
                <div>
                  <h3 className="font-serif text-xl font-semibold text-cream mb-4">Email</h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:contato@soluxcode.com"
                      className="flex items-center gap-3 text-sm text-cream/60 hover:text-gold transition-colors"
                    >
                      <Mail size={16} className="text-gold/50" />
                      contato@soluxcode.com
                    </a>
                    <a
                      href="mailto:job@soluxcode.com"
                      className="flex items-center gap-3 text-sm text-cream/60 hover:text-gold transition-colors"
                    >
                      <Mail size={16} className="text-gold/50" />
                      job@soluxcode.com
                    </a>
                    <p className="text-xs text-cream/40 mt-1">
                      Para parcerias e assuntos comerciais
                    </p>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <h3 className="font-serif text-xl font-semibold text-cream mb-4">Redes Sociais</h3>
                  <div className="space-y-3">
                    <a
                      href="https://instagram.com/soluxcode"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-cream/60 hover:text-gold transition-colors"
                    >
                      <Instagram size={16} className="text-gold/50" />
                      @soluxcode
                    </a>
                    <a
                      href="https://linkedin.com/company/soluxcode"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-cream/60 hover:text-gold transition-colors"
                    >
                      <Linkedin size={16} className="text-gold/50" />
                      SoluxCode
                    </a>
                    <a
                      href="https://youtube.com/@soluxcode"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-cream/60 hover:text-gold transition-colors"
                    >
                      <Youtube size={16} className="text-gold/50" />
                      SoluxCode
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h3 className="font-serif text-xl font-semibold text-cream mb-4">Localização</h3>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-gold/50 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-cream/60">Rio Grande da Serra, São Paulo, Brasil</p>
                      <p className="text-xs text-cream/40 mt-2">
                        A SoluxCode opera 100% digital. Nosso futuro espaço físico será o Refúgio Solux em Ilhabela.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
