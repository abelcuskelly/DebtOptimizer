import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Brain, PiggyBank, TrendingUp, ShieldCheck } from "lucide-react";

export function ValueGrid() {
  const items = [
    { icon: Brain, title: "AI-Powered Optimization", desc: "Smart algorithms analyze your entire debt portfolio" },
    { icon: PiggyBank, title: "Average $1,200 Annual Savings", desc: "Users save significantly on interest payments" },
    { icon: TrendingUp, title: "Credit Score Improvement", desc: "Strategic utilization optimization boosts your score" },
    { icon: ShieldCheck, title: "Bank-Level Security", desc: "PCI-compliant with 256-bit encryption" },
  ];

  return (
    <section>
      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="h-full">
              <Icon className="text-primary-blue" />
              <div className="mt-3 font-semibold text-gray-900">{title}</div>
              <div className="mt-1 text-gray-600 text-sm">{desc}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
} 