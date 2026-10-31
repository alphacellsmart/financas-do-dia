"use client";

import { useState } from "react";

export default function MetaPoupanca() {
  const [meta, setMeta] = useState(10000);
  const [jaTem, setJaTem] = useState(1000);
  const [aporte, setAporte] = useState(300);

  const falta = Math.max(0, meta - jaTem);
  const meses = aporte > 0 ? Math.ceil(falta / aporte) : 0;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Calculadora de Meta de Poupança</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Meta (R$)</label>
          <input
            type="number"
            value={meta}
            onChange={(e) => setMeta(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Já tem (R$)</label>
          <input
            type="number"
            value={jaTem}
            onChange={(e) => setJaTem(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Aporte mensal (R$)</label>
          <input
            type="number"
            value={aporte}
            onChange={(e) => setAporte(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>
      </div>
      <div className="bg-emerald-50 rounded-lg p-4 space-y-1">
        <p className="text-sm text-gray-600">Ainda falta: <strong>R$ {falta.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</strong></p>
        <p className="text-base font-bold text-emerald-800">
          {meses > 0 ? `Você alcança a meta em cerca de ${meses} meses` : "Meta já atingida!"}
        </p>
      </div>
    </div>
  );
}
