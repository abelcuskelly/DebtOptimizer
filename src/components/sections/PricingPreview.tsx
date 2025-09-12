import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function PricingPreview() {
  const plans = [
    { name: "Free", price: "$0", desc: "Basic debt tracking for up to 5 accounts" },
    { name: "Pro", price: "$9.99/month", desc: "Unlimited accounts, AI optimization, balance transfer alerts", popular: true },
    { name: "Premium", price: "$19.99/month", desc: "Everything + personal financial coaching" },
  ];

  return (
    <section>
      <Container className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Simple, Transparent Pricing</h2>
          <p className="text-gray-600">Start free, upgrade when you&apos;re ready</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-6 border ${
                plan.popular 
                  ? "border-primary-blue bg-primary-blue/5 relative" 
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-blue text-white text-xs px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="text-lg font-semibold">{plan.name}</div>
              <div className="text-2xl font-bold mt-2">{plan.price}</div>
              <p className="text-sm text-gray-600 mt-3 mb-4">{plan.desc}</p>
              <Link href="/pricing">
                <Button variant={plan.popular ? "primary" : "secondary"} className="w-full text-sm">
                  {plan.name === "Free" ? "Get Started" : "Start Free Trial"}
                </Button>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link href="/pricing" className="text-primary-blue underline">
            View detailed pricing comparison →
          </Link>
        </div>
      </Container>
    </section>
  );
} 