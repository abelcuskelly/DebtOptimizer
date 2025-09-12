"use client";

import { Hero } from "@/components/sections/Hero";
import { ValueGrid } from "@/components/sections/ValueGrid";
import { Container } from "@/components/ui/Container";
import { DebtCalculator } from "@/components/forms/DebtCalculator";
import { track } from "@/lib/analytics";
import { ConversionEvents } from "@/lib/constants";
import { SocialProof } from "@/components/sections/SocialProof";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { FeatureHighlights } from "@/components/sections/FeatureHighlights";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FloatingCTA } from "@/components/ui/FloatingCTA";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ValueGrid />
        
        <section id="how-it-works">
          <Container className="py-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">1</div>
                <h3 className="font-semibold text-gray-900 mb-2">Connect Your Accounts</h3>
                <p className="text-gray-600 text-sm">Securely via Plaid</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">2</div>
                <h3 className="font-semibold text-gray-900 mb-2">AI Analyzes Your Debt</h3>
                <p className="text-gray-600 text-sm">Smart algorithm crunches numbers</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">3</div>
                <h3 className="font-semibold text-gray-900 mb-2">Get Personalized Strategy</h3>
                <p className="text-gray-600 text-sm">Tailored payoff plan</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">4</div>
                <h3 className="font-semibold text-gray-900 mb-2">Implement & Save Money</h3>
                <p className="text-gray-600 text-sm">Track progress and results</p>
              </div>
            </div>
          </Container>
        </section>

        <SocialProof />
        <ProblemSolution />
        
        <section className="bg-gray-50">
          <Container className="py-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Calculate Your Savings</h2>
            <div className="max-w-2xl mx-auto">
              <DebtCalculator onComplete={() => track(ConversionEvents.CALCULATOR_COMPLETION)} />
            </div>
          </Container>
        </section>

        <FeatureHighlights />
        <PricingPreview />
        <FAQ />
        <FinalCTA />
      </main>
      <FloatingCTA />
    </>
  );
}
