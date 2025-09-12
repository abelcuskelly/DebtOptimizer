# DebtOptimizer - AI-Powered Credit Card Debt Optimization Platform

A modern, conversion-optimized consumer website for DebtOptimizer - helping users save money through intelligent debt management.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit http://localhost:3000 to see the site.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Landing page
│   ├── features/          # Feature showcase
│   ├── pricing/           # Pricing tiers
│   ├── blog/              # SEO blog content
│   └── api/               # API routes
├── components/
│   ├── ui/                # Reusable UI components
│   ├── sections/          # Page sections
│   ├── forms/             # Form components
│   ├── layout/            # Nav, Footer
│   └── animations/        # Animation components
└── lib/                   # Utilities and configs
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Calculator**: Real-time debt savings calculator
- **Form Validation**: Zod schemas with React Hook Form
- **Analytics Ready**: GA4 and Facebook Pixel integration
- **A/B Testing**: Built-in feature flags for headline testing
- **SEO Optimized**: Structured data, meta tags, sitemap
- **Performance**: Optimized images, lazy loading, code splitting

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=XXXXXXXXXXXXXXX

# Form Endpoint (optional, defaults to mock)
NEXT_PUBLIC_FORM_ENDPOINT=https://your-api.com/forms

# Feature Flags
NEXT_PUBLIC_SHOW_PRICING=true
NEXT_PUBLIC_SHOW_BLOG=true
```

### A/B Testing

The site includes automatic headline A/B testing. Variants are stored in localStorage and tracked via analytics events.

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Manual Deployment

```bash
# Build the application
npm run build

# Test production build locally
npm start

# Export static site (optional)
npm run export
```

## 📊 Analytics Events

The following conversion events are tracked:

- `email_signup` - Primary email form submission
- `calculator_complete` - Debt calculator completion
- `pricing_viewed` - Pricing page view
- `contact_submitted` - Contact form submission

## 🎯 Performance Metrics

Target metrics:
- Lighthouse Score: 95+
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- Core Web Vitals: All green

## 🔒 Security

- 256-bit encryption messaging
- PCI DSS compliance ready
- Security headers via middleware
- No sensitive data in client code

## 📝 Content Management

Blog posts are in `src/app/blog/[slug]/page.tsx`. Add new posts by creating new folders with `page.tsx` files.

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Test on mobile and desktop
4. Submit pull request

## 📄 License

Private and confidential. All rights reserved.
