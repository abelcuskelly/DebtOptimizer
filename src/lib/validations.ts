import { z } from "zod";

const usPhoneRegex = /^(\+1\s?)?\(?\d{3}\)?[-\s.]?\d{3}[-\s.]?\d{4}$/;

export const emailSignupSchema = z.object({
  email: z.string().email().refine((v) => !/@(mailinator|10minutemail|tempmail|guerrillamail)\./i.test(v), {
    message: "Disposable email domains are not allowed",
  }),
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .regex(/^[A-Za-z ]+$/, "Only letters and spaces are allowed"),
  phone: z
    .string()
    .optional()
    .refine((v) => !v || usPhoneRegex.test(v), { message: "Invalid US phone number" }),
  agreeMarketing: z.boolean().refine((v) => v === true, { message: "You must agree to receive communications" }),
});

export type EmailSignupInput = z.infer<typeof emailSignupSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email(),
  subject: z.enum(["General", "Support", "Partnership", "Press"]),
  message: z.string().min(10, "Please provide more details"),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>; 