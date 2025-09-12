import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardVariant = "feature" | "testimonial" | "pricing";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

export function Card({ variant = "feature", className, ...props }: CardProps) {
  const base =
    variant === "feature"
      ? "bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200"
      : variant === "testimonial"
      ? "bg-gray-50 rounded-lg p-6 border-l-4 border-primary-blue"
      : "bg-white rounded-2xl shadow-lg p-8 relative";
  return <div className={cn(base, className)} {...props} />;
} 