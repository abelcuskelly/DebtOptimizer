import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <Container className="py-10 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold mb-2">Stay in the loop</h3>
          <p className="text-gray-600 mb-4">Get the latest tips on paying off debt faster.</p>
          <NewsletterForm />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="font-medium mb-2">Product</div>
            <ul className="space-y-1 text-gray-600">
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/security">Security</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-2">Company</div>
            <ul className="space-y-1 text-gray-600">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </Container>
      <Container className="py-6 border-t border-gray-200 text-sm text-gray-600 flex items-center justify-between">
        <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
        <div className="flex gap-4">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </Container>
    </footer>
  );
} 