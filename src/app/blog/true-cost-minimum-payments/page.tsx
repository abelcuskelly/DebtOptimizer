import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "The True Cost of Minimum Payments",
  description: "Minimums can keep you in debt for decades—here’s how to break free.",
};

export default function PostPage() {
  return (
    <main>
      <Container className="py-16 prose max-w-3xl">
        <h1>The True Cost of Minimum Payments</h1>
        <p>Paying only the minimum often means most of your payment goes to interest, not principal. With $6,000 at 25% APR, the minimum could keep you paying for years. DebtOptimizer reallocates payments to slash interest and accelerate payoff.</p>
      </Container>
    </main>
  );
} 