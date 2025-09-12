import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Security | DebtOptimizer",
  description: "Bank-level security, PCI DSS compliance, and strict privacy protections.",
};

export default function SecurityPage() {
  return (
    <main>
      <Container className="py-16">
        <h1 className="text-4xl font-bold mb-4">Security & Privacy</h1>
        <div className="prose max-w-3xl">
          <h2>Bank-level Security</h2>
          <p>We use 256-bit encryption in transit and at rest. Connections are secured via TLS 1.2+.</p>
          <h2>PCI DSS Compliance</h2>
          <p>We follow PCI DSS guidelines for handling sensitive financial data and never store credentials.</p>
          <h2>Data Encryption</h2>
          <p>All sensitive data is encrypted using AES-256. Key management follows industry best practices.</p>
          <h2>Privacy Policy Summary</h2>
          <p>We never sell your data. We only use your information to provide and improve the service.</p>
          <h2>Third-party Certifications</h2>
          <p>Coming soon: SOC 2 Type II report. We work with independent auditors to verify our controls.</p>
        </div>
      </Container>
    </main>
  );
} 