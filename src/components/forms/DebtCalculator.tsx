"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { formatCurrency, clamp } from "@/lib/utils";

export interface DebtInputData {
  creditCardBalance: number;
  currentAPR: number;
  minimumPayment: number;
  availableMonthlyPayment: number;
}

interface DebtCalculatorProps {
  onComplete: (data: DebtInputData) => void;
}

export function DebtCalculator({ onComplete }: DebtCalculatorProps) {
  const [data, setData] = useState<DebtInputData>({
    creditCardBalance: 5000,
    currentAPR: 24.99,
    minimumPayment: 125,
    availableMonthlyPayment: 300,
  });

  const monthlyRate = data.currentAPR / 100 / 12;
  const currentInterestMonthly = data.creditCardBalance * monthlyRate;
  const optimizedPayment = Math.max(data.minimumPayment, data.availableMonthlyPayment);
  const optimizedInterestMonthly = data.creditCardBalance * (monthlyRate * 0.7);
  const estimatedSavingsMonthly = Math.max(0, currentInterestMonthly - optimizedInterestMonthly);

  const handleChange = (key: keyof DebtInputData, value: number) => {
    setData((d) => ({ ...d, [key]: clamp(Number.isFinite(value) ? value : 0, 0, key === "currentAPR" ? 99.99 : 1_000_000) }));
  };

  return (
    <div className="rounded-2xl bg-white shadow-lg p-6 border border-gray-200 grid gap-4">
      <div className="grid grid-cols-2 gap-3">
        <label className="grid gap-1 text-sm">
          <span>Credit card balance ($)</span>
          <input type="number" className="border border-gray-200 rounded-md px-3 py-2" value={data.creditCardBalance} onChange={(e) => handleChange("creditCardBalance", parseFloat(e.target.value))} />
        </label>
        <label className="grid gap-1 text-sm">
          <span>Current APR (%)</span>
          <input type="number" step="0.01" className="border border-gray-200 rounded-md px-3 py-2" value={data.currentAPR} onChange={(e) => handleChange("currentAPR", parseFloat(e.target.value))} />
        </label>
        <label className="grid gap-1 text-sm">
          <span>Minimum payment ($)</span>
          <input type="number" className="border border-gray-200 rounded-md px-3 py-2" value={data.minimumPayment} onChange={(e) => handleChange("minimumPayment", parseFloat(e.target.value))} />
        </label>
        <label className="grid gap-1 text-sm">
          <span>Available monthly payment ($)</span>
          <input type="number" className="border border-gray-200 rounded-md px-3 py-2" value={data.availableMonthlyPayment} onChange={(e) => handleChange("availableMonthlyPayment", parseFloat(e.target.value))} />
        </label>
      </div>
      <div className="grid grid-cols-2 gap-3 bg-gray-50 rounded-lg p-4">
        <div>
          <div className="text-sm text-gray-600">Current scenario</div>
          <div className="text-lg font-semibold">Interest/month: {formatCurrency(currentInterestMonthly)}</div>
          <div className="text-sm text-gray-600">Payment: {formatCurrency(data.minimumPayment)}</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Optimized scenario</div>
          <div className="text-lg font-semibold text-success-green">Interest/month: {formatCurrency(optimizedInterestMonthly)}</div>
          <div className="text-sm text-gray-600">Payment: {formatCurrency(optimizedPayment)}</div>
        </div>
      </div>
      <div className="text-sm">Estimated savings/month: <span className="font-semibold text-success-green">{formatCurrency(estimatedSavingsMonthly)}</span></div>
      <Button onClick={() => onComplete(data)}>Get My Full Analysis</Button>
    </div>
  );
} 