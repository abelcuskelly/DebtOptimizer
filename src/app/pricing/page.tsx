import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Pricing | DebtOptimizer",
  description: "Choose the plan that fits your journey to debt freedom.",
};

export default function PricingPage() {
  const plans = [
    { name: "Free", price: "$0", features: ["Basic debt tracking for up to 5 accounts"], cta: "Get started" },
    { name: "Pro", price: "$9.99/mo", features: ["Unlimited accounts", "AI optimization", "Balance transfer alerts"], cta: "Start free trial", popular: true },
    { name: "Premium", price: "$19.99/mo", features: ["Everything in Pro", "Personal financial coaching"], cta: "Start free trial" },
  ];

  return (
    <main>
      <Container className="py-16">
        <h1 className="text-4xl font-bold mb-2">Simple, Transparent Pricing</h1>
        <p className="text-gray-600 mb-8">Annual billing discounts coming soon.</p>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <Card key={p.name} variant="pricing" className={p.popular ? "ring-2 ring-primary-blue" : ""}>
              <div className="text-sm uppercase tracking-wide text-gray-600">{p.popular ? "Most Popular" : ""}</div>
              <div className="text-2xl font-bold mt-1">{p.name}</div>
              <div className="text-3xl font-bold mt-2">{p.price}</div>
              <ul className="mt-4 text-sm text-gray-600 space-y-1">
                {p.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <Button className="mt-6 w-full">{p.cta}</Button>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions</h2>
          <div className="text-gray-600 text-sm">Billing, refunds, and trial details coming soon.</div>
        </div>
      </Container>
    </main>
  );
} 