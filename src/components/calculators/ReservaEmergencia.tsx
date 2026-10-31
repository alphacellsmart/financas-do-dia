"use client";

import { useState } from "react";

export default function ReservaEmergencia() {
  const [gastoMensal, setGastoMensal] = useState(3000);
  const [meses, setMeses] = useState(6);

  const reservaIdeal = gastoMensal * meses;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Calculadora de Reserva de Emergência</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Gasto mensal essencial (R$)</label>
          <input
            type="number"
            value={gastoMensal}
            onChange={(e) => setGastoMensal(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Meses de cobertura</label>
          <select
            value={meses}
            onChange={(e) => setMeses(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value={3}>3 meses (mínimo)</option>
            <option value={6}>6 meses (recomendado)</option>
            <option value={12}>12 meses (conservador)</option>
          </select>
        </div>
      </div>
      <div className="bg-emerald-50 rounded-lg p-4">
        <p className="text-sm text-gray-600 mb-1">Reserva ideal:</p>
        <p className="text-2xl font-bold text-emerald-800">
          R$ {reservaIdeal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Guarde esse valor em Tesouro Selic ou CDB de liquidez diária.
        </p>
      </div>
    </div>
  );
}
