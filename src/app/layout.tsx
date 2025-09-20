import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnalyticsProvider } from "@/components/providers/AnalyticsProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Credit Card Debt Optimization | Save $1000+ Annually | DebtOptimizer",
  description: "AI-powered credit card debt optimization. Reduce interest payments, improve credit scores, and get personalized debt payoff strategies. Free analysis included.",
  
  // PWA Configuration
  manifest: "/site.webmanifest",
  themeColor: "#2563eb",
  colorScheme: "light",
  
  // Mobile Web App
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "DebtOptimizer",
  },

  // Favicon and icons
  icons: {
    icon: "/DOicon.png",
    apple: "/DOicon.png",
  },

  // Open Graph
  openGraph: {
    title: "DebtOptimizer - AI-Powered Debt Optimization",
    description: "Save $1,200+ annually with intelligent debt management. Free analysis included.",
    url: "https://debt-optimizer-lyart.vercel.app",
    siteName: "DebtOptimizer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/DOicon.png",
        width: 658,
        height: 688,
        alt: "DebtOptimizer - AI-Powered Debt Optimization",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary",
    title: "DebtOptimizer - AI-Powered Debt Optimization",
    description: "Save $1,200+ annually with intelligent debt management. Free analysis included.",
    images: ["/DOicon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/DOicon.png" type="image/png" />
        <link rel="shortcut icon" href="/DOicon.png" type="image/png" />
      </head>
      <body className={`${inter.variable} antialiased bg-gray-50 text-gray-900`}>
        <AnalyticsProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
