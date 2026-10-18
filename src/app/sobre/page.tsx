import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça o Finanças do Dia e nossa missão de ajudar pessoas a organizarem suas finanças.",
};

export default function SobrePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Sobre o Finanças do Dia</h1>

      <div className="prose max-w-none space-y-5 text-gray-700 leading-relaxed">
        <p>
          O <strong>Finanças do Dia</strong> nasceu com um objetivo simples e claro: ajudar pessoas comuns a entenderem e organizarem melhor o próprio dinheiro.
        </p>
        <p>
          Aqui você encontra conteúdos práticos sobre economia do dia a dia, como guardar dinheiro, controlar gastos, criar reservas de emergência e construir hábitos financeiros saudáveis — sem enrolação e sem termos complicados.
        </p>
        <p>
          Acreditamos que educação financeira de qualidade deve ser acessível a todos. Por isso, nossos artigos são escritos de forma clara, direta e aplicável à realidade brasileira.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Nossa missão</h2>
        <p>
          Democratizar o conhecimento sobre finanças pessoais e mostrar que é possível viver com mais tranquilidade financeira, independentemente da renda.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">O que você encontra aqui</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Dicas práticas de economia e organização financeira</li>
          <li>Orientação sobre reserva de emergência e poupança</li>
          <li>Conteúdo sobre orçamento pessoal de forma simples</li>
          <li>Informações claras para quem está começando</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Aviso importante</h2>
        <p>
          Os conteúdos deste site têm caráter exclusivamente educativo e informativo. Não constituem recomendação de investimento, consultoria financeira ou aconselhamento personalizado. Sempre avalie sua própria situação e, se necessário, consulte um profissional qualificado.
        </p>
      </div>
    </div>
  );
}
