import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import ProjectInquiryForm from "@/components/sections/ProjectInquiryForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { pageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = pageMetadata("/contact");

export default function ContactPage() {
  return (
    <main
      id="main-content"
      className="atmosphere-contact relative isolate overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute right-[-12rem] top-24 size-[34rem] rounded-full border border-white/[0.045]" />
        <div className="absolute right-[-7rem] top-44 size-[24rem] rounded-full border border-primary-light/[0.08] [transform:rotateX(67deg)_rotateZ(-24deg)]" />
        <div className="absolute right-[11%] top-[15rem] size-2 rounded-full bg-primary-light/80 shadow-[0_0_24px_rgba(185,169,255,.8)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <section
          aria-labelledby="contact-hero-title"
          className="grid min-h-[min(48rem,calc(100svh-8rem))] items-center gap-12 border-b border-white/[0.08] pb-16 sm:pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-24"
        >
          <div className="max-w-3xl">
            <ScrollReveal y={28} duration={0.65}>
              <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-light sm:text-xs">
                <span className="h-px w-8 bg-primary-light/65" />
                Contact / Start a conversation
              </p>
              <h1
                id="contact-hero-title"
                className="max-w-4xl font-display text-[clamp(2.65rem,8vw,6.25rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-white"
              >
                Let’s build something <span className="text-primary-light">meaningful.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
                Have an idea, a challenge, or a project in mind? We’d love to hear about it. Tell us what you’re looking to create, and let’s explore what’s possible together.
              </p>
              <div className="mt-8 flex flex-col gap-3 min-[400px]:flex-row">
                <a
                  href="#project-inquiry"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-galaxy-darker transition-colors hover:bg-primary-light"
                >
                  Start a conversation <ArrowDown size={15} />
                </a>
                <a
                  href="mailto:uwork428@gmail.com"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/[0.16] bg-white/[0.025] px-5 text-sm font-semibold text-white transition-colors hover:border-primary-light/40 hover:bg-white/[0.06]"
                >
                  Email our team <ArrowUpRight size={15} />
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.08} y={24} duration={0.7} className="hidden lg:block">
            <div className="relative mx-auto aspect-square w-full max-w-[27rem]" aria-hidden="true">
              <div className="absolute inset-[8%] rounded-full border border-white/[0.09] [transform:rotateX(66deg)_rotateZ(-24deg)]" />
              <div className="absolute inset-[18%] rounded-full border border-primary-light/[0.15] [transform:rotateX(66deg)_rotateZ(34deg)]" />
              <div className="absolute inset-[28%] rounded-full border border-accent/[0.2] [transform:rotateX(66deg)_rotateZ(-55deg)]" />
              <div className="absolute inset-[31%] rounded-full bg-[radial-gradient(circle_at_34%_29%,rgba(255,255,255,.28),transparent_8%),radial-gradient(circle_at_37%_35%,rgba(185,169,255,.42),transparent_30%),radial-gradient(circle_at_68%_72%,rgba(91,124,255,.28),transparent_48%),linear-gradient(145deg,#17263e,#080e19_70%)] shadow-[inset_-18px_-20px_40px_rgba(0,0,0,.7),inset_5px_5px_22px_rgba(255,255,255,.1),0_0_70px_rgba(91,124,255,.12)]" />
              <span className="absolute left-[18%] top-[25%] size-2 rounded-full bg-nebula-warm shadow-[0_0_18px_rgba(243,163,107,.9)]" />
              <span className="absolute bottom-[20%] right-[22%] size-1.5 rounded-full bg-primary-light shadow-[0_0_16px_rgba(185,169,255,.9)]" />
              <div className="absolute bottom-[8%] left-[12%] flex items-center gap-3 border-l border-primary-light/40 bg-[#09111e]/70 px-4 py-3 backdrop-blur-md">
                <Sparkles size={16} className="text-primary-light" />
                <div>
                  <p className="text-[9px] uppercase tracking-[0.16em] text-text-muted">Ideas into experience</p>
                  <p className="mt-1 text-xs font-medium text-white">Design · Engineering · Impact</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section
          id="project-inquiry"
          aria-labelledby="project-inquiry-title"
          className="scroll-mt-28 border-b border-white/[0.08] py-16 sm:py-20 lg:py-24"
        >
          <div className="grid items-start gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <ScrollReveal>
              <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-light sm:text-xs">
                <span className="h-px w-8 bg-primary-light/65" />
                The first step
              </p>
              <h2
                id="project-inquiry-title"
                className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
              >
                Start a conversation.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-text-secondary sm:text-base">
                Every great project begins with a conversation. Reach out to our team and let’s discuss how we can bring your vision to life.
              </p>

              <div className="mt-9 space-y-3">
                <a
                  href="mailto:uwork428@gmail.com"
                  className="group flex min-h-16 items-center gap-4 border-t border-white/[0.09] py-4 transition-colors hover:border-primary-light/30"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary-light/20 bg-primary-light/[0.06] text-primary-light transition-colors group-hover:bg-primary-light/[0.12]">
                    <Mail size={17} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.17em] text-text-label">Email</span>
                    <span className="mt-1 block break-all text-sm font-medium text-white sm:text-base">uwork428@gmail.com</span>
                  </span>
                  <ArrowUpRight size={15} className="shrink-0 text-text-muted transition-colors group-hover:text-primary-light" />
                </a>
                <a
                  href="https://wa.me/923705752100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-16 items-center gap-4 border-t border-white/[0.09] py-4 transition-colors hover:border-primary-light/30"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary-light/20 bg-primary-light/[0.06] text-primary-light transition-colors group-hover:bg-primary-light/[0.12]">
                    <MessageCircle size={17} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.17em] text-text-label">WhatsApp</span>
                    <span className="mt-1 block text-sm font-medium text-white sm:text-base">+92 370 5752100</span>
                  </span>
                  <ArrowUpRight size={15} className="shrink-0 text-text-muted transition-colors group-hover:text-primary-light" />
                </a>
              </div>
              <p className="mt-6 max-w-sm text-xs leading-6 text-text-muted">
                Prefer a direct note? Email or message us and tell us what you’re looking to make.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <ProjectInquiryForm />
            </ScrollReveal>
          </div>
        </section>

        <section
          aria-labelledby="partner-title"
          className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
        >
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-light/25 to-transparent" />
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
            <ScrollReveal>
              <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-light sm:text-xs">
                <span className="h-px w-8 bg-primary-light/65" />
                A partnership that moves ideas forward
              </p>
              <h2
                id="partner-title"
                className="max-w-4xl font-display text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white"
              >
                The right partner makes <span className="text-primary-light">all the difference.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
                From the first conversation to the final launch, we believe in building meaningful partnerships and delivering work that makes an impact.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08} className="lg:pb-1">
              <div className="flex size-14 items-center justify-center rounded-xl border border-primary-light/20 bg-primary-light/[0.06] text-primary-light">
                <Sparkles size={22} />
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-14 border-t border-white/[0.1] pt-8 sm:mt-16 sm:pt-10">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <ScrollReveal>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-label">Your next chapter starts here</p>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">Have something in mind?</h2>
                <p className="mt-3 max-w-lg text-sm leading-7 text-text-secondary">
                  Let’s turn your next big idea into something extraordinary.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <a
                    href="#project-inquiry"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-galaxy-darker transition-colors hover:bg-primary-light"
                  >
                    Start a Project <ArrowRight size={15} />
                  </a>
                  <a
                    href="mailto:uwork428@gmail.com"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/[0.16] bg-white/[0.025] px-5 text-sm font-semibold text-white transition-colors hover:border-primary-light/40 hover:bg-white/[0.06]"
                  >
                    Email Our Team <ArrowUpRight size={15} />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}