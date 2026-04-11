import FadeIn from "@/components/FadeIn";

export default function Privacidade() {
  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="container max-w-3xl">
        <FadeIn>
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-gold/70 mb-4">
            Transparência Total
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-cream leading-tight">
            Política de Privacidade
          </h1>
          <div className="mt-6 h-px w-16 bg-gradient-to-r from-gold to-transparent" />
          <p className="mt-4 text-xs text-cream/40">
            Última atualização: abril de 2026 · Em conformidade com a LGPD (Lei 13.709/2018)
          </p>
        </FadeIn>

        <div className="mt-12 space-y-10 text-cream/70 text-sm leading-relaxed">
          <FadeIn>
            <section>
              <h2 className="font-serif text-xl font-semibold text-cream mb-4">1. Quem somos</h2>
              <p>
                A SoluxCode é uma empresa brasileira com CNPJ 60.468.351/0001-53, sediada em
                Rio Grande da Serra, São Paulo. Operamos a plataforma digital acessível em{" "}
                <a href="https://soluxcode.com" className="text-gold hover:underline">soluxcode.com</a>.
              </p>
              <p className="mt-3">
                Responsável pelo tratamento de dados:{" "}
                <strong className="text-cream">Job Willians</strong> —{" "}
                <a href="mailto:privacidade@soluxcode.com" className="text-gold hover:underline">
                  privacidade@soluxcode.com
                </a>
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="font-serif text-xl font-semibold text-cream mb-4">2. Quais dados coletamos</h2>
              <p className="mb-3">Coletamos apenas o essencial:</p>
              <ul className="space-y-2">
                {[
                  "Nome e endereço de email — quando você preenche um formulário ou lista de espera.",
                  "Mensagens enviadas pelo formulário de contato.",
                  "Dados de navegação anônimos via ferramenta de analytics sem cookies de rastreamento.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gold/50 mt-0.5 shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-cream/50 italic">
                Não coletamos dados sensíveis como CPF, dados bancários ou informações de saúde sem seu consentimento explícito.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="font-serif text-xl font-semibold text-cream mb-4">3. Para que usamos seus dados</h2>
              <ul className="space-y-2">
                {[
                  "Responder suas mensagens e dúvidas.",
                  "Enviar o material solicitado (ex: os 5 Prompts Ikigai).",
                  "Avisar sobre lançamentos e novidades — somente se você se inscreveu.",
                  "Melhorar nossa plataforma com base em dados agregados e anônimos.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gold/50 mt-0.5 shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-bold text-cream/80">
                Nunca vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="font-serif text-xl font-semibold text-cream mb-4">4. Base legal (LGPD)</h2>
              <ul className="space-y-2">
                {[
                  "Consentimento (Art. 7º, I) — para envio de comunicações de marketing.",
                  "Execução de contrato (Art. 7º, V) — para entrega dos serviços contratados.",
                  "Legítimo interesse (Art. 7º, IX) — para melhorias da plataforma.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gold/50 mt-0.5 shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="font-serif text-xl font-semibold text-cream mb-4">5. Seus direitos</h2>
              <ul className="space-y-2">
                {[
                  "Confirmar se tratamos seus dados.",
                  "Acessar os dados que temos sobre você.",
                  "Corrigir dados incompletos ou incorretos.",
                  "Solicitar a eliminação dos seus dados.",
                  "Revogar seu consentimento a qualquer momento.",
                  "Portabilidade dos dados (mediante solicitação).",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gold/50 mt-0.5 shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Para exercer qualquer direito:{" "}
                <a href="mailto:privacidade@soluxcode.com" className="text-gold hover:underline">
                  privacidade@soluxcode.com
                </a>
                . Respondemos em até 15 dias úteis.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="font-serif text-xl font-semibold text-cream mb-4">6. Como protegemos seus dados</h2>
              <ul className="space-y-2">
                {[
                  "Comunicação criptografada via HTTPS (TLS 1.3).",
                  "Acesso restrito: apenas o responsável pela plataforma acessa os dados coletados.",
                  "Sem rastreamento por cookies de terceiros.",
                  "Formulários não armazenam dados no navegador.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gold/50 mt-0.5 shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="font-serif text-xl font-semibold text-cream mb-4">7. Contato</h2>
              <div className="space-y-1">
                <p><strong className="text-cream">Email:</strong>{" "}
                  <a href="mailto:privacidade@soluxcode.com" className="text-gold hover:underline">
                    privacidade@soluxcode.com
                  </a>
                </p>
                <p><strong className="text-cream">Responsável:</strong> Job Willians</p>
                <p><strong className="text-cream">CNPJ:</strong> 60.468.351/0001-53</p>
              </div>
            </section>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
