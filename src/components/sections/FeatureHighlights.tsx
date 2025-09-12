import { Container } from "@/components/ui/Container";
import { ArrowRightLeft, Calendar, BarChart3, TrendingDown, BookOpen } from "lucide-react";

export function FeatureHighlights() {
  const features = [
    { icon: ArrowRightLeft, title: "Balance Transfer Optimization", desc: "Find and track 0% APR opportunities" },
    { icon: Calendar, title: "Payment Schedule Automation", desc: "Never miss an optimal payment date" },
    { icon: BarChart3, title: "Credit Utilization Management", desc: "Keep ratios optimized for score growth" },
    { icon: TrendingDown, title: "Debt Avalanche vs Snowball", desc: "Choose the strategy that fits you" },
    { icon: BookOpen, title: "Real-time Interest Tracking", desc: "See exactly how much you're saving" },
  ];

  return (
    <section className="bg-gray-50">
      <Container className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Powerful Features to Accelerate Your Journey</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-blue-light/20 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-blue" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 