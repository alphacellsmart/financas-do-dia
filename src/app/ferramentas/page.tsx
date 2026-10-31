import type { Metadata } from "next";
import JurosCompostos from "@/components/calculators/JurosCompostos";
import ReservaEmergencia from "@/components/calculators/ReservaEmergencia";
import Orcamento503020 from "@/components/calculators/Orcamento503020";
import MetaPoupanca from "@/components/calculators/MetaPoupanca";

export const metadata: Metadata = {
  title: "Ferramentas",
  description: "Calculadoras gratuitas de juros compostos, reserva de emergência, orçamento 50/30/20 e meta de poupança.",
};

export default function FerramentasPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Ferramentas financeiras</h1>
        <p className="text-gray-600 max-w-2xl">
          Use as calculadoras abaixo para planejar sua reserva de emergência, organizar o orçamento, 
          simular juros compostos e acompanhar suas metas de poupança. Tudo de forma simples e gratuita.
        </p>
      </div>

      <div className="space-y-8">
        <ReservaEmergencia />
        <Orcamento503020 />
        <MetaPoupanca />
        <JurosCompostos />
      </div>

      <div className="mt-12 p-5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-600">
        <strong>Aviso:</strong> Estas calculadoras são apenas ferramentas educativas. Os resultados são estimativas 
        e não consideram impostos, taxas ou variações de mercado. Não constituem recomendação de investimento.
      </div>
    </div>
  );
}
