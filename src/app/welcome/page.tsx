import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function WelcomePage() {
  return (
    <main>
      <Container className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to DebtOptimizer</h1>
        <p className="text-gray-600 mb-6">We’ve started your onboarding. Check your email for confirmation.</p>
        <Link href="/" className="text-primary-blue underline">Back to home</Link>
      </Container>
    </main>
  );
} 