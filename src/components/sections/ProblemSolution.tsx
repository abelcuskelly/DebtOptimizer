"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AlertCircle, CheckCircle } from "lucide-react";

export function ProblemSolution() {
  const problems = [
    "Multiple cards with different APRs confuse payment priorities",
    "Poor payment allocation wastes money on interest",
    "Missed balance transfer opportunities cost thousands",
    "No clear timeline for becoming debt-free",
  ];

  const solutions = [
    "AI analyzes all your accounts and finds optimal payment order",
    "Smart allocation minimizes total interest paid",
    "Automatic alerts for 0% APR transfer opportunities",
    "Clear dashboard shows exact payoff date and savings",
  ];

  return (
    <section>
      <Container className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">The Average American Has $6,194 in Credit Card Debt</h2>
          <p className="text-gray-600">Most people are paying way more interest than necessary</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-danger-red flex items-center gap-2">
              <AlertCircle /> The Problems
            </h3>
            <ul className="space-y-3">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start gap-2">
                  <span className="text-danger-red mt-1">✕</span>
                  <span className="text-gray-700">{problem}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-success-green flex items-center gap-2">
              <CheckCircle /> Our Solution
            </h3>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution} className="flex items-start gap-2">
                  <span className="text-success-green mt-1">✓</span>
                  <span className="text-gray-700">{solution}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
} 