"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SignupModal } from "@/components/forms/SignupModal";

export function EmailSignupForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="text-center space-y-4">
        <Button 
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto"
        >
          Get My Free Debt Analysis
        </Button>
        <div className="text-xs text-gray-600">
          No credit card required • Cancel anytime • 30-day money back guarantee
        </div>
      </div>

      <SignupModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
} 