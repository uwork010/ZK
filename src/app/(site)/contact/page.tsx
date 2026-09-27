import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = { title: "Contact", description: "Start a conversation about a technology project." };

export default function ContactPage() {
  return (
    <main id="main-content" className="atmosphere-contact relative min-h-screen overflow-hidden px-6 pb-24 pt-36 sm:px-10 lg:px-16">
      <div className="relative mx-auto max-w-5xl">
        <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-light"><span className="h-px w-8 bg-primary/70" />Contact</p>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">Start a conversation.</h1>
            <p className="mt-6 text-base leading-7 text-text-secondary">Share a little about the problem, idea, or opportunity you have in mind. This contact form uses the existing configured email delivery endpoint.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}