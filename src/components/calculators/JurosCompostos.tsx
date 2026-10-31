"use client";

import { useState } from "react";

export default function JurosCompostos() {
  const [inicial, setInicial] = useState(1000);
  const [mensal, setMensal] = useState(200);
  const [taxa, setTaxa] = useState(0.8); // % ao mês
  const [meses, setMeses] = useState(60);

  const taxaDecimal = taxa / 100;
  let montante = inicial;
  for (let i = 0; i < meses; i++) {
    montante = montante * (1 + taxaDecimal) + mensal;
  }
  const totalInvestido = inicial + mensal * meses;
  const rendimento = montante - totalInvestido;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Calculadora de Juros Compostos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Valor inicial (R$)</label>
          <input
            type="number"
            value={inicial}
            onChange={(e) => setInicial(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Aporte mensal (R$)</label>
          <input
            type="number"
            value={mensal}
            onChange={(e) => setMensal(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Taxa ao mês (%)</label>
          <input
            type="number"
            step="0.1"
            value={taxa}
            onChange={(e) => setTaxa(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Prazo (meses)</label>
          <input
            type="number"
            value={meses}
            onChange={(e) => setMeses(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>
      </div>
      <div className="bg-emerald-50 rounded-lg p-4 space-y-2">
        <p className="text-sm text-gray-600">Total investido: <strong className="text-gray-900">R$ {totalInvestido.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</strong></p>
        <p className="text-sm text-gray-600">Rendimento: <strong className="text-emerald-700">R$ {rendimento.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</strong></p>
        <p className="text-base font-bold text-gray-900">Montante final: R$ {montante.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
      </div>
    </div>
  );
}
