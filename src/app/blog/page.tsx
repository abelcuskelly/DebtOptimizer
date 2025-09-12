import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Blog | DebtOptimizer",
  description: "Guides on credit card debt payoff and optimization.",
};

const posts = [
  { slug: "avalanche-vs-snowball", title: "How to Pay Off Credit Card Debt: Avalanche vs Snowball Method" },
  { slug: "best-balance-transfer-cards-2025", title: "Best Balance Transfer Credit Cards for 2025" },
  { slug: "credit-utilization-and-score", title: "How Credit Utilization Affects Your Credit Score" },
  { slug: "true-cost-minimum-payments", title: "The True Cost of Minimum Payments" },
  { slug: "debt-consolidation-pros-cons", title: "Debt Consolidation: Pros and Cons" },
];

export default function BlogIndex() {
  return (
    <main>
      <Container className="py-16">
        <h1 className="text-4xl font-bold mb-2">DebtOptimizer Blog</h1>
        <p className="text-gray-600 mb-8">Learn strategies to save money on interest and pay off debt faster.</p>
        <ul className="space-y-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link className="text-primary-blue underline" href={`/blog/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
} 