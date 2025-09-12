import { z } from "zod";

// Email signup schema (existing)
export const emailSignupSchema = z.object({
  email: z.string().email("Please enter a valid email address")
    .refine((email) => !email.includes("+"), "Please use your primary email address")
    .refine((email) => {
      const disposableDomains = ["tempmail.org", "10minutemail.com", "guerrillamail.com"];
      const domain = email.split("@")[1];
      return !disposableDomains.includes(domain);
    }, "Please use a permanent email address"),
  firstName: z.string().min(1, "First name is required").max(50, "First name too long"),
  phone: z.string().optional().refine((phone) => {
    if (!phone) return true;
    const cleaned = phone.replace(/\D/g, "");
    return cleaned.length === 10 || cleaned.length === 11;
  }, "Please enter a valid US phone number"),
  agreeMarketing: z.boolean().refine((v) => v === true, "Please agree to receive marketing communications"),
});

// User account creation schema
export const userSignupSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name too long"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name too long"),
  email: z.string().email("Please enter a valid email address")
    .refine((email) => !email.includes("+"), "Please use your primary email address")
    .refine((email) => {
      const disposableDomains = ["tempmail.org", "10minutemail.com", "guerrillamail.com"];
      const domain = email.split("@")[1];
      return !disposableDomains.includes(domain);
    }, "Please use a permanent email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain uppercase, lowercase, and number"),
  confirmPassword: z.string(),
  phone: z.string().optional().refine((phone) => {
    if (!phone) return true;
    const cleaned = phone.replace(/\D/g, "");
    return cleaned.length === 10 || cleaned.length === 11;
  }, "Please enter a valid US phone number"),
  agreeTerms: z.boolean().refine((v) => v === true, "Please agree to the Terms of Service"),
  agreePrivacy: z.boolean().refine((v) => v === true, "Please agree to the Privacy Policy"),
  agreeMarketing: z.boolean().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type UserSignupInput = z.infer<typeof userSignupSchema>;

// Contact form schema (existing)
export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message too long"),
});

// Type exports
export type EmailSignupInput = z.infer<typeof emailSignupSchema>;
export type ContactFormInput = z.infer<typeof contactFormSchema>; 