"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { TESTIMONIALS } from "@/lib/constants";
import { Shield, Lock, Award } from "lucide-react";

export function SocialProof() {
  const trustBadges = [
    { icon: Shield, label: "256-bit Encryption" },
    { icon: Lock, label: "SOC 2 Compliant" },
    { icon: Award, label: "Bank-Grade Security" },
  ];

  return (
    <section className="bg-gray-50">
      <Container className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Join 50,000+ Users Who&apos;ve Optimized Their Debt</h2>
          <p className="text-gray-600">Real stories from real users saving real money</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="testimonial" className="h-full">
                <p className="text-gray-700 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="text-sm">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-8 flex-wrap">
          {trustBadges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-gray-600">
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 