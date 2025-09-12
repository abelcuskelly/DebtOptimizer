"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { EmailSignupForm } from "@/components/forms/EmailSignupForm";
import { Check } from "lucide-react";

export function FinalCTA() {
  const guarantees = [
    "No credit card required",
    "Cancel anytime",
    "30-day money back guarantee",
  ];

  return (
    <section className="bg-gradient-to-br from-primary-blue/5 to-primary-blue-light/10">
      <Container className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Optimize Your Debt?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands who are saving money and paying off debt faster with AI-powered optimization
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Get Your Free Debt Analysis</h3>
            <EmailSignupForm />
          </div>

          <div className="flex justify-center gap-6 flex-wrap">
            {guarantees.map((guarantee) => (
              <div key={guarantee} className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-success-green" />
                <span>{guarantee}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
} 