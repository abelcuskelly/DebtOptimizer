"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { emailSignupSchema, EmailSignupInput } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { ConversionEvents } from "@/lib/constants";
import { useState } from "react";

export function EmailSignupForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailSignupInput>({ resolver: zodResolver(emailSignupSchema) });

  const onSubmit = async (data: EmailSignupInput) => {
    setSubmitting(true);
    try {
      const response = await fetch("/api/mock-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "email_signup", data }),
      });

      const result = await response.json();
      
      if (result.success) {
        track(ConversionEvents.EMAIL_SIGNUP, { plan: "unknown" });
        router.push("/welcome");
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
      <div className="grid gap-2">
        <label className="text-sm font-medium">Email</label>
        <input className="border border-gray-200 rounded-md px-3 py-2" placeholder="you@example.com" {...register("email")} />
        {errors.email && <p className="text-danger-red text-sm">{errors.email.message}</p>}
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-medium">First name</label>
        <input className="border border-gray-200 rounded-md px-3 py-2" placeholder="Jane" {...register("firstName")} />
        {errors.firstName && <p className="text-danger-red text-sm">{errors.firstName.message}</p>}
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-medium">Phone (optional)</label>
        <input className="border border-gray-200 rounded-md px-3 py-2" placeholder="(555) 123-4567" {...register("phone")} />
        {errors.phone && <p className="text-danger-red text-sm">{errors.phone.message}</p>}
      </div>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" {...register("agreeMarketing")} /> I agree to receive marketing communications
      </label>
      {errors.agreeMarketing && <p className="text-danger-red text-sm">{errors.agreeMarketing.message}</p>}
      <Button type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Get My Free Debt Analysis"}</Button>
      <div className="text-xs text-gray-600">No credit card required • Cancel anytime • 30-day money back guarantee</div>
    </form>
  );
} 