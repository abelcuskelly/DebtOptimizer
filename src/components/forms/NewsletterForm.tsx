"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // For GitHub Pages, simulate form submission
      console.log("Newsletter signup:", { email });
      await new Promise(resolve => setTimeout(resolve, 500));
      setDone(true);
    } catch (e) {
      console.error(e);
      alert("Something went wrong. Please try again.");
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
      />
      <Button type="submit" variant="secondary">Subscribe</Button>
    </form>
  );
} 