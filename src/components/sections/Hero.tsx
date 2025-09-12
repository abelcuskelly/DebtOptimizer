"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SavingsCounter } from "@/components/animations/SavingsCounter";
import { getHeadlineVariant, HEADLINE_VARIANTS } from "@/lib/feature-flags";
import { EmailSignupForm } from "@/components/forms/EmailSignupForm";

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
            <EmailSignupForm showGuarantees={false} />
            <Link href="#how-it-works"><Button variant="secondary">See How It Works</Button></Link>
          </div>
          <div className="mt-6 text-sm text-gray-600">Join 50,000+ users who&apos;ve optimized their debt</div>
        </div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-center">
          <div className="text-sm text-gray-600 mb-2">Users save an average of</div>
          <SavingsCounter to={1200} duration={2} />
          <div className="text-sm text-gray-600 mt-2">annually with DebtOptimizer</div>
        </motion.div>
      </Container>
    </section>
  );
} 