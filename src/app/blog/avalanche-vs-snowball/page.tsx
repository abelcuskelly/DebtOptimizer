import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "How to Pay Off Credit Card Debt: Avalanche vs Snowball Method",
  description: "Compare two proven payoff strategies and choose the right one for you.",
};

export default function PostPage() {
  return (
    <main>
      <Container className="py-16 prose max-w-3xl">
        <h1>How to Pay Off Credit Card Debt: Avalanche vs Snowball Method</h1>
        <p>The avalanche method targets the highest APR first, minimizing total interest paid. The snowball method targets the smallest balance first, maximizing motivation and quick wins. DebtOptimizer can simulate both and recommend the fastest route to savings.</p>
        <h2>Which is better?</h2>
        <p>Financially, avalanche usually wins. Behaviorally, snowball helps many people stick to the plan. Our users often blend both: start with a snowball to build momentum, then switch to avalanche to optimize interest.</p>
      </Container>
    </main>
  );
} 