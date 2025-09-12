import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "success";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-blue hover:bg-primary-blue-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl",
  secondary:
    "border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200",
  success:
    "bg-success-green hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return <button ref={ref} className={cn(variantClasses[variant], className)} {...props} />;
  }
);

Button.displayName = "Button"; 