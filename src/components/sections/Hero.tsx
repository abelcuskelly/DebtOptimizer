"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SavingsCounter } from "@/components/animations/SavingsCounter";
import { getHeadlineVariant, HEADLINE_VARIANTS } from "@/lib/feature-flags";

export function Hero() {
  const [headline, setHeadline] = useState(HEADLINE_VARIANTS.control);

  useEffect(() => {
    const variant = getHeadlineVariant();
    setHeadline(HEADLINE_VARIANTS[variant]);
  }, []);

  return (
    <section className="relative gradient-hero overflow-hidden">
      <Container className="py-20 md:py-28 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            {headline}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="mt-4 text-lg text-gray-700">
            Save $1,000+ annually through intelligent payment allocation and balance transfer optimization.
          </motion.p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="#signup"><Button>Get My Free Debt Analysis</Button></Link>
            <Link href="#how-it-works"><Button variant="secondary">See How It Works</Button></Link>
          </div>
          <div className="mt-6 text-sm text-gray-600">Join 50,000+ users who&apos;ve optimized their debt</div>
        </div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }} className="relative">
          <div className="rounded-2xl bg-white shadow-lg p-6 border border-gray-200">
            <div className="text-sm text-gray-600">Average annual savings</div>
            <div className="text-4xl font-bold text-success-green mt-2">
              <SavingsCounter to={1200} />
            </div>
            <div className="mt-4 text-sm text-gray-600">18 months faster payoff on average</div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
} 