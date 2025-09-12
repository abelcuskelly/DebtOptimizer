import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Debt Consolidation: Pros and Cons",
  description: "Understand when consolidation helps—and when it can backfire.",
};

export default function PostPage() {
  return (
    <main>
      <Container className="py-16 prose max-w-3xl">
        <h1>Debt Consolidation: Pros and Cons</h1>
        <p>Consolidation can simplify payments and lower APR, but fees and longer terms can increase total interest paid. DebtOptimizer compares consolidation with avalanche/snowball to recommend the most cost-effective path.</p>
      </Container>
    </main>
  );
} 