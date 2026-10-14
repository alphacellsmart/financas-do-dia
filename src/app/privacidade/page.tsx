import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade do Finanças do Dia.",
};

export default function PrivacidadePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Política de Privacidade</h1>

      <div className="prose max-w-none space-y-4 text-gray-700 leading-relaxed text-sm">
        <p>
          <strong>Última atualização:</strong> Outubro de 2026
        </p>

        <p>
          O Finanças do Dia (“nós”, “nosso” ou “site”) respeita a sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações quando você visita nosso site.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">1. Informações que coletamos</h2>
        <p>
          Podemos coletar informações de forma automática, como endereço IP, tipo de navegador, páginas visitadas e tempo de permanência no site, através de cookies e ferramentas de análise (como Google Analytics).
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">2. Cookies e publicidade</h2>
        <p>
          Utilizamos cookies para melhorar a experiência do usuário e para exibir anúncios relevantes através do Google AdSense. O Google pode usar cookies para veicular anúncios com base em suas visitas anteriores a este ou a outros sites.
        </p>
        <p>
          Você pode optar por não receber anúncios personalizados visitando as{" "}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">
            Configurações de Anúncios do Google
          </a>.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">3. Uso das informações</h2>
        <p>
          As informações coletadas são utilizadas para:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Melhorar o conteúdo e a experiência do site</li>
          <li>Analisar o tráfego e o comportamento dos visitantes</li>
          <li>Exibir anúncios relevantes</li>
        </ul>

        <h2 className="text-lg font-bold text-gray-900 mt-6">4. Compartilhamento de dados</h2>
        <p>
          Não vendemos suas informações pessoais. Podemos compartilhar dados agregados e anônimos com parceiros de publicidade e análise (como Google).
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">5. Seus direitos (LGPD)</h2>
        <p>
          De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a solicitar acesso, correção ou exclusão de seus dados pessoais. Para isso, entre em contato conosco através da página de Contato.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">6. Alterações nesta política</h2>
        <p>
          Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre disponível nesta página.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">7. Contato</h2>
        <p>
          Em caso de dúvidas sobre esta política, entre em contato através da nossa{" "}
          <a href="/contato" className="text-emerald-700 underline">
            página de Contato
          </a>.
        </p>
      </div>
    </div>
  );
}
