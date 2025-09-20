import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnalyticsProvider } from "@/components/providers/AnalyticsProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Credit Card Debt Optimization | Save $1000+ Annually | DebtOptimizer",
  description:
    "AI-powered credit card debt optimization. Reduce interest payments, improve credit scores, and get personalized debt payoff strategies. Free analysis included.",
  metadataBase: new URL("https://debt-optimizer-lyart.vercel.app"),
  
  // Favicon and icons
  icons: {
    icon: [
      { url: "/DOicon.png?v=3", type: "image/png", sizes: "any" },
      { url: "/DOicon.png?v=3", type: "image/png", sizes: "32x32" },
      { url: "/DOicon.png?v=3", type: "image/png", sizes: "16x16" },
      { url: "/favicon.ico?v=3", type: "image/x-icon", sizes: "16x16" },
    ],
    apple: "/DOicon.png?v=3",
  },
  
  // Web app manifest
  manifest: "/site.webmanifest",
  
  // Open Graph for social media
  openGraph: {
    title: "DebtOptimizer - AI-Powered Debt Optimization",
    description: "Save $1,200+ annually with intelligent debt management. Free analysis included.",
    url: "https://debt-optimizer-lyart.vercel.app",
    siteName: "DebtOptimizer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/DOicon.png?v=3",
        width: 658,
        height: 688,
        alt: "DebtOptimizer - AI-Powered Debt Optimization",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary",
    title: "DebtOptimizer - AI-Powered Debt Optimization",
    description: "Save $1,200+ annually with intelligent debt management. Free analysis included.",
    images: ["/DOicon.png?v=3"],
  },
  
  // Additional meta tags
  other: {
    "theme-color": "#2563eb",
    "color-scheme": "light",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "DebtOptimizer",
  },
};

const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
  },
  product: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DebtOptimizer",
    applicationCategory: "FinanceApplication",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "19.99",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "523",
    },
  },
  faqs: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is my financial data secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We use bank-level 256-bit encryption, are PCI DSS compliant, and never store your login credentials.",
        },
      },
      {
        "@type": "Question",
        name: "How much can I really save?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our users save an average of $1,200 annually. Your actual savings depend on your balance, APRs, and payment capacity.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}>
        <AnalyticsProvider />
        <Navbar />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.organization),
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.product),
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.faqs),
          }}
        />
      </body>
    </html>
  );
}
