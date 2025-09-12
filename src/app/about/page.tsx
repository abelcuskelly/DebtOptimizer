import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "About | DebtOptimizer",
  description: "Why we built DebtOptimizer and the team behind it.",
};

export default function AboutPage() {
  return (
    <main>
      <Container className="py-16">
        <h1 className="text-4xl font-bold mb-4">About DebtOptimizer</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-gray-600 mt-2">Help debt-stressed consumers save money, improve credit, and gain financial freedom through AI.</p>
            <h2 className="text-2xl font-semibold mt-6">Why We Built It</h2>
            <p className="text-gray-600 mt-2">Credit card interest is confusing and expensive. We believe smart software can level the playing field.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Team</h2>
            <p className="text-gray-600 mt-2">Founders and advisors to be announced. Passionate about consumer fintech and privacy.</p>
          </div>
        </div>
      </Container>
    </main>
  );
} 