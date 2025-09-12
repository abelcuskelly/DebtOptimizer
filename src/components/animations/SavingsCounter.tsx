"use client";

import CountUp from "react-countup";
import { formatCurrency } from "@/lib/utils";

interface SavingsCounterProps {
  from?: number;
  to: number;
  duration?: number;
}

export function SavingsCounter({ from = 0, to, duration = 2 }: SavingsCounterProps) {
  return (
    <CountUp start={from} end={to} duration={duration} decimals={0} formattingFn={(v) => formatCurrency(v)} />
  );
} 