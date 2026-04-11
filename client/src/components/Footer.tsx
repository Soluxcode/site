import { Link } from "wouter";
import { Mail, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-border/20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          <div>
            <img
              src="/logo.png"
              alt="SoluxCode Logo"
              className="h-14 w-auto object-contain mb-3"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://d2xsxph8kpxj0f.cloudfront.net/310419663026804728/ZgTLDxJpHrs6RKoBD2LyNF/soluxcode_logo_main_f29551de.png";
              }}
            />
            <p className="font-serif text-sm italic text-cream/50 mb-4">
              Codificando Consciência, Manifestando Realidade
            </p>
            <p className="text-sm text-cream/40 leading-relaxed">
              Filosofia Aplicada na Era da Inteligência Artificial.
              Conectamos pessoas ao seu propósito real.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-cream/80 mb-4">Navegação</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/quem-somos", label: "Quem Somos" },
                { href: "/academia", label: "Academia" },
                { href: "/universo-solux", label: "Universo Solux" },
                { href: "/refugio-solux", label: "Refúgio Solux" },
                { href: "/blog", label: "Blog" },
                { href: "/contato", label: "Contato" },
                { href: "/ikigai", label: "Ikigai" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/50 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-cream/80 mb-4">Contato</h4>
            <div className="space-y-3">
              <a href="mailto:contato@soluxcode.com"
                className="flex items-center gap-2 text-sm text-cream/50 hover:text-gold transition-colors">
                <Mail size={14} />contato@soluxcode.com
              </a>
              <a href="mailto:job@soluxcode.com"
                className="flex items-center gap-2 text-sm text-cream/50 hover:text-gold transition-colors">
                <Mail size={14} />job@soluxcode.com
              </a>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://instagram.com/soluxcode" target="_blank" rel="noopener noreferrer"
                  className="text-cream/40 hover:text-gold transition-colors" aria-label="Instagram SoluxCode">
                  <Instagram size={18} />
                </a>
                <a href="https://linkedin.com/company/soluxcode" target="_blank" rel="noopener noreferrer"
                  className="text-cream/40 hover:text-gold transition-colors" aria-label="LinkedIn SoluxCode">
                  <Linkedin size={18} />
                </a>
                <a href="https://youtube.com/@soluxcode" target="_blank" rel="noopener noreferrer"
                  className="text-cream/40 hover:text-gold transition-colors" aria-label="YouTube SoluxCode">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-cream/30">
              &copy; {new Date().getFullYear()} SoluxCode. Todos os direitos reservados. CNPJ: 60.468.351/0001-53
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacidade"
                className="text-xs text-cream/30 hover:text-cream/60 transition-colors">
                Política de Privacidade
              </Link>
              <span className="text-cream/20">·</span>
              <p className="text-xs text-cream/30 font-serif italic">"Tijolo por tijolo. Café por café."</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
