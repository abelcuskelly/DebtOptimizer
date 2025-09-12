"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SignupModal } from "@/components/forms/SignupModal";

interface EmailSignupFormProps {
  buttonText?: string;
  showGuarantees?: boolean;
  className?: string;
}

export function EmailSignupForm({ 
  buttonText = "Get My Free Debt Analysis",
  showGuarantees = true,
  className = "w-full sm:w-auto"
}: EmailSignupFormProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="text-center space-y-4">
        <Button 
          onClick={() => setIsModalOpen(true)}
          className={className}
        >
          {buttonText}
        </Button>
        {showGuarantees && (
          <div className="text-xs text-gray-600">
            No credit card required • Cancel anytime • 30-day money back guarantee
          </div>
        )}
      </div>

      <SignupModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
} 