import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "How Credit Utilization Affects Your Credit Score",
  description: "Keep utilization under 30% to protect your score—under 10% for best results.",
};

export default function PostPage() {
  return (
    <main>
      <Container className="py-16 prose max-w-3xl">
        <h1>How Credit Utilization Affects Your Credit Score</h1>
        <p>Utilization is the percentage of your available credit you&apos;re using. High utilization can drag your score down quickly. DebtOptimizer suggests targeted payments to reduce utilization on specific cards before statement dates.</p>
      </Container>
    </main>
  );
} 