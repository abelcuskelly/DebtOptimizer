"use client";

import { EmailSignupForm } from "@/components/forms/EmailSignupForm";

export default function TestButtonPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Button Test</h1>
        <EmailSignupForm />
      </div>
    </div>
  );
} 