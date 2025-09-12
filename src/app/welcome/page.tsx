import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle, ArrowRight, Calculator, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-gradient-hero">
      <Container className="py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Header */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to DebtOptimizer! 🎉
            </h1>
            <p className="text-xl text-gray-600">
              Your account has been created successfully. You&apos;re one step closer to financial freedom!
            </p>
          </div>

          {/* What Happens Next */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">What happens next?</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Complete Your Profile</h3>
                <p className="text-sm text-gray-600">
                  Add your debt information to get a personalized analysis
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-success-green rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Get Your Strategy</h3>
                <p className="text-sm text-gray-600">
                  Receive a customized debt payoff plan within minutes
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-warning-amber rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Start Saving</h3>
                <p className="text-sm text-gray-600">
                  Implement your plan and track your progress to freedom
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="flex items-center gap-2">
                Start Debt Analysis
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Link href="/">
                <Button variant="secondary">
                  Explore Features
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-gray-600">
              Questions? <a href="/contact" className="text-primary-blue hover:underline">Contact our support team</a>
            </p>
          </div>

          {/* Benefits Reminder */}
          <div className="mt-12 bg-primary-blue/5 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Why DebtOptimizer users save an average of $1,200+ per year:
            </h3>
            <div className="grid gap-3 text-left max-w-2xl mx-auto">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0" />
                <span className="text-gray-700">AI-powered optimization finds the fastest payoff strategy</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0" />
                <span className="text-gray-700">Automatic balance transfer and refinancing recommendations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0" />
                <span className="text-gray-700">Real-time tracking and progress monitoring</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0" />
                <span className="text-gray-700">Expert support and financial coaching</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
} 