"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is my financial data secure?",
    a: "Yes. We use bank-level 256-bit encryption, are PCI DSS compliant, and never store your login credentials. Your data is encrypted both in transit and at rest.",
  },
  {
    q: "How much can I really save?",
    a: "Our users save an average of $1,200 annually. Your actual savings depend on your balance, APRs, and payment capacity. Our calculator gives you a personalized estimate.",
  },
  {
    q: "Do you sell my data?",
    a: "Never. We make money from subscriptions, not from selling your data. Your privacy is fundamental to our business model.",
  },
  {
    q: "What banks do you support?",
    a: "We support 12,000+ financial institutions through Plaid, including all major banks and credit card issuers in the US.",
  },
  {
    q: "How long does setup take?",
    a: "Most users are up and running in under 5 minutes. Just connect your accounts securely through Plaid and we'll handle the rest.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section>
      <Container className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 