"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSignupSchema, EmailSignupInput } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { ConversionEvents } from "@/lib/constants";
import { useState } from "react";

export function EmailSignupForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailSignupInput>({ resolver: zodResolver(emailSignupSchema) });

  const onSubmit = async (data: EmailSignupInput) => {
    setSubmitting(true);
    try {
      // For GitHub Pages, we'll simulate form submission
      // In production, you'd integrate with a service like Formspree, Netlify Forms, or similar
      console.log("Form data:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      track(ConversionEvents.EMAIL_SIGNUP, { plan: "unknown" });
      setSubmitted(true);
    } catch (e) {
      console.error(e);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-6 bg-success-green/10 rounded-lg border border-success-green/20">
        <h3 className="text-xl font-semibold text-success-green mb-2">Thank you!</h3>
        <p className="text-gray-700">We've received your information and will send you a free debt analysis soon.</p>
      </div>
    );
  }

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