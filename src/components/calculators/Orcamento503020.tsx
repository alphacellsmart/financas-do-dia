"use client";

import { useState } from "react";

export default function Orcamento503020() {
  const [renda, setRenda] = useState(4000);

  const necessidades = renda * 0.5;
  const desejos = renda * 0.3;
  const futuro = renda * 0.2;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Orçamento 50/30/20</h3>
      <div className="mb-6">
        <label className="block text-sm text-gray-600 mb-1">Renda líquida mensal (R$)</label>
        <input
          type="number"
          value={renda}
          onChange={(e) => setRenda(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
        />
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-3">
          <div>
            <p className="font-medium text-gray-900">Necessidades (50%)</p>
            <p className="text-xs text-gray-500">Moradia, comida, transporte, contas</p>
          </div>
          <p className="font-bold text-gray-900">R$ {necessidades.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
        </div>
        <div className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-3">
          <div>
            <p className="font-medium text-gray-900">Desejos (30%)</p>
            <p className="text-xs text-gray-500">Lazer, streaming, restaurantes</p>
          </div>
          <p className="font-bold text-gray-900">R$ {desejos.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
        </div>
        <div className="flex justify-between items-center bg-emerald-50 rounded-lg px-4 py-3">
          <div>
            <p className="font-medium text-emerald-900">Futuro (20%)</p>
            <p className="text-xs text-emerald-700">Poupança, investimentos, dívidas</p>
          </div>
          <p className="font-bold text-emerald-800">R$ {futuro.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
        </div>
      </div>
    </div>
  );
}
