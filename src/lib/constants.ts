export const SITE = {
  name: "DebtOptimizer",
  url: "https://www.debtoptimizer.com",
  tagline: "Optimize your debt portfolio with AI",
};

export const NAV_LINKS: Array<{ href: string; label: string }> = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/security", label: "Security" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const TESTIMONIALS: Array<{ quote: string; author: string; role: string }> = [
  {
    quote:
      "I was paying minimum payments on 6 credit cards. DebtOptimizer showed me how to save $180/month just by changing my payment strategy.",
    author: "Sarah M.",
    role: "Teacher",
  },
  {
    quote:
      "The balance transfer recommendations saved me over $2,400 in interest. I wish I'd found this app sooner.",
    author: "Mike R.",
    role: "Engineer",
  },
  {
    quote:
      "My credit score went from 640 to 720 in 8 months by following their utilization optimization.",
    author: "Jennifer L.",
    role: "Marketing Manager",
  },
];

export const FEATURE_FLAGS = {
  showPricing: process.env.NEXT_PUBLIC_SHOW_PRICING !== "false",
  showBlog: process.env.NEXT_PUBLIC_SHOW_BLOG !== "false",
};

export enum ConversionEvents {
  EMAIL_SIGNUP = "email_signup",
  CALCULATOR_COMPLETION = "calculator_complete",
  PRICING_VIEW = "pricing_viewed",
  CONTACT_FORM = "contact_submitted",
} 