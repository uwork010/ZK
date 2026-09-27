"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GradientText from "@/components/ui/GradientText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionDivider from "@/components/ui/SectionDivider";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="atmosphere-contact relative overflow-hidden px-6 pt-32 pb-16 md:px-12 md:pt-40 xl:px-16">
      <SectionDivider />
      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/45" />
            <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-primary/75">04 / Contact</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/45" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <GradientText as="h2" className="mt-4 text-center font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Let&apos;s make something matter.
          </GradientText>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-text-secondary md:text-lg">
            Share the idea, challenge, or opportunity taking shape. We can start with a conversation about what it needs.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <ScrollReveal delay={0.15}>
            <ContactForm />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass flex h-full flex-col justify-between gap-8 rounded-xl p-6 sm:p-8">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-light">From first thought to next step</p>
                <h3 className="mt-4 max-w-sm font-display text-2xl font-semibold leading-snug text-white">Bring the rough idea. We&apos;ll shape the right starting point.</h3>
              </div>
              <div>
                <p className="max-w-md text-sm leading-6 text-text-secondary">Product development, custom software, AI and automation, design, creative production, and the systems that support them.</p>
                <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-light transition-colors hover:text-white">
                  Explore services <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
