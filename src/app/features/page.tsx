import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Debt Management Features | AI Optimization Tools | DebtOptimizer",
  description:
    "Comprehensive debt management tools: balance transfer optimization, payment automation, credit score monitoring, and personalized debt strategies.",
};

export default function FeaturesPage() {
  const features = [
    "AI Debt Optimization Engine",
    "Multi-Account Dashboard",
    "Balance Transfer Finder",
    "Payment Calendar & Automation",
    "Credit Score Monitoring",
    "Spending Analysis & Budgeting",
    "Goal Setting & Progress Tracking",
    "Educational Content Library",
  ];
  return (
    <main>
      <Container className="py-16">
        <h1 className="text-4xl font-bold mb-2">Every Tool You Need to Conquer Debt</h1>
        <p className="text-gray-600 mb-8">Dive deeper into how DebtOptimizer helps you pay off debt faster.</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="font-semibold">{f}</div>
              <p className="text-sm text-gray-600 mt-1">Detailed explanation and screenshot coming soon.</p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
} 