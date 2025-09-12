"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const response = await fetch("/api/mock-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", data: { email } }),
      });

      const result = await response.json();
      
      if (result.success) {
        setDone(true);
      } else {
        throw new Error(result.error || 'Subscription failed');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) return <p className="text-success-green">Thanks! You're subscribed.</p>;

  return (
    <form onSubmit={submit} className="flex gap-2 max-w-md">
      <input
        type="email"
        required
        placeholder="you@example.com"
        className="flex-1 border border-gray-200 rounded-md px-3 py-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={submitting}
      />
      <Button type="submit" variant="secondary" disabled={submitting}>
        {submitting ? "..." : "Subscribe"}
      </Button>
    </form>
  );
} 