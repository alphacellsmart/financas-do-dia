import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com o Finanças do Dia.",
};

export default function ContatoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contato</h1>

      <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
        <p>
          Tem alguma dúvida, sugestão ou quer entrar em contato conosco? Será um prazer ouvir você.
        </p>
        <p>
          Envie um e-mail para:{" "}
          <strong className="text-emerald-700">infelixmonster@gmail.com</strong>
        </p>
        <p>
          Respondemos o mais rápido possível, geralmente em até 2 dias úteis.
        </p>
        <p className="text-sm text-gray-500 mt-8">
          Os conteúdos deste site têm caráter exclusivamente educativo e informativo. Não constituem recomendação de investimento ou consultoria financeira personalizada.
        </p>
      </div>
    </div>
  );
}
