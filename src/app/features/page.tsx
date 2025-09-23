import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Debt Management Features | AI Optimization Tools | DebtOptimizer",
  description:
    "Comprehensive debt management tools: balance transfer optimization, payment automation, credit score monitoring, and personalized debt strategies.",
};

export default function FeaturesPage() {
  const features = [
    {
      title: "AI Debt Optimization Engine",
      description:
        "Uses AI to prioritize payments and balance transfers to minimize total interest and time to payoff.",
    },
    {
      title: "Multi-Account Dashboard",
      description:
        "See all cards and loans in one place with balances, APRs, due dates, and payoff progress.",
    },
    {
      title: "Balance Transfer Finder",
      description:
        "Identifies 0% APR transfer opportunities and estimates net savings after fees and promo periods.",
    },
    {
      title: "Payment Calendar & Automation",
      description:
        "Generates a personalized schedule with due‑date alerts and optimal amounts to pay each cycle.",
    },
    {
      title: "Credit Score Monitoring",
      description:
        "Tracks utilization and payment factors, alerting you to changes that impact your credit score.",
    },
    {
      title: "Spending Analysis & Budgeting",
      description:
        "Categorizes spending to uncover cash you can redirect toward faster debt payoff.",
    },
    {
      title: "Goal Setting & Progress Tracking",
      description:
        "Set targets like a debt‑free date and visualize monthly progress, savings, and milestones.",
    },
    {
      title: "Educational Content Library",
      description:
        "Short, expert guides that explain payoff strategies, balance transfers, and credit best practices.",
    },
  ];
  return (
    <main>
      <Container className="py-16">
        <h1 className="text-4xl font-bold mb-2">Every Tool You Need to Conquer Debt</h1>
        <p className="text-gray-600 mb-8">Dive deeper into how DebtOptimizer helps you pay off debt faster.</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map(({ title, description }) => (
            <div key={title} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="font-semibold">{title}</div>
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
} 