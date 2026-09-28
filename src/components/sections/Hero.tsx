"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-config";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion) return;
    const tl = gsap.timeline({ delay: 0.25 });
    const SAFETY_SELECTORS = ".hero-badge, .hero-title, .hero-subtitle, .hero-cta-btn, .hero-scroll";

    tl.from(".hero-badge", {
      y: 12,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    })
      .from(".hero-title", {
        y: 20,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out",
      }, "-=0.25")
      .from(".hero-subtitle", {
        y: 16,
        opacity: 0,
        duration: 0.55,
        ease: "power3.out",
      }, "-=0.3")
      .from(".hero-cta-btn", {
        y: 12,
        opacity: 0,
        duration: 0.45,
        ease: "power3.out",
        stagger: 0.08,
      }, "-=0.2")
      .from(".hero-scroll", {
        opacity: 0,
        duration: 0.4,
      }, "-=0.1");

    const safetyId = window.setTimeout(() => {
      if (!tl.isActive() && tl.progress() >= 0.99) return;
      gsap.set(SAFETY_SELECTORS, {
        opacity: 1, y: 0, clearProps: "transform",
      });
    }, 6000);

    return () => window.clearTimeout(safetyId);
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 text-center"
    >
      {/* Gradient overlay for text readability */}
      <div className="hero-readability-overlay absolute inset-0" />
      <div className="hero-edge-shade absolute inset-0" />

      <div className="relative z-10 w-full max-w-6xl">
        <p className="mb-4 font-display text-xl font-bold uppercase tracking-[0.16em] text-text-primary sm:mb-5 sm:text-2xl sm:tracking-[0.2em] md:text-[28px] lg:text-[30px] lg:tracking-[0.22em]">
          CORE <span className="text-primary-light">&amp;</span> CRAFT
        </p>
        <div className="hero-badge mx-auto mb-6 flex max-w-full items-center justify-center gap-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-primary-light sm:mb-7 sm:gap-3 sm:text-xs sm:tracking-[0.22em]">
          <span className="hidden h-px w-8 bg-primary/70 sm:block" />
          Full-Service Technology &amp; Creative Agency
          <span className="hidden h-px w-8 bg-primary/70 sm:block" />
        </div>

        <h1 className="font-display text-[1.75rem] font-bold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="hero-name-line block"><span className="hero-name">From Idea to</span></span>{" "}
          <span className="hero-name-line block"><span className="hero-name">Digital Experience.</span></span>
        </h1>

        <p className="hero-title mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-text-secondary sm:text-base md:text-lg">
          We build digital products, software, AI solutions, websites, apps, games, and creative experiences from idea to launch.
        </p>

        <div className="hero-subtitle mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-5">
          <div className="hero-cta-btn">
            <MagneticButton href="/contact">
              Start a Project
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </div>
          <div className="hero-cta-btn">
            <MagneticButton href="/work" className="border border-glass-border bg-[var(--surface-glass)] text-white hover:bg-[var(--surface-glass-hover)]">
              Explore Our Work
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-text-secondary/50">
          Scroll
        </span>
        <motion.div
          animate={reducedMotion ? undefined : { opacity: [0.45, 0.9, 0.45] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-text-secondary/50" />
        </motion.div>
      </div>
    </section>
  );
}
