"use client";

import { Container } from "@/components/ui/Container";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormInput } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { ConversionEvents } from "@/lib/constants";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({ resolver: zodResolver(contactFormSchema) });

  const onSubmit = async (data: ContactFormInput) => {
    try {
      // For GitHub Pages, simulate form submission
      console.log("Contact form data:", data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      track(ConversionEvents.CONTACT_FORM);
      alert("Thanks! We'll get back to you soon.");
      reset();
    } catch (e) {
      console.error(e);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main>
      <Container className="py-16">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-8">Support hours: Mon–Fri, 9am–6pm ET. We respond within 1–2 business days.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3 max-w-xl">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Name</label>
            <input className="border border-gray-200 rounded-md px-3 py-2" {...register("name")} />
            {errors.name && <p className="text-danger-red text-sm">{errors.name.message}</p>}
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Email</label>
            <input className="border border-gray-200 rounded-md px-3 py-2" {...register("email")} />
            {errors.email && <p className="text-danger-red text-sm">{errors.email.message}</p>}
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Inquiry Type</label>
            <select className="border border-gray-200 rounded-md px-3 py-2" {...register("subject")}>
              <option>General</option>
              <option>Support</option>
              <option>Partnership</option>
              <option>Press</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Message</label>
            <textarea rows={5} className="border border-gray-200 rounded-md px-3 py-2" {...register("message")} />
            {errors.message && <p className="text-danger-red text-sm">{errors.message.message}</p>}
          </div>
          <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send Message"}</Button>
        </form>
        <div className="mt-10 text-sm text-gray-600">Follow us: <a href="#" className="text-primary-blue">Twitter</a> · <a href="#" className="text-primary-blue">LinkedIn</a></div>
      </Container>
    </main>
  );
} 