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
      className="relative flex h-full flex-col items-center justify-center px-6 text-center"
    >
      {/* Gradient overlay for text readability */}
      <div className="hero-readability-overlay absolute inset-0" />
      <div className="hero-edge-shade absolute inset-0" />

      <div className="relative z-10 max-w-6xl">
          <div className="hero-badge mb-7 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-light sm:text-xs">
          <span className="h-px w-8 bg-primary/70" />
          Full-Service Technology &amp; Creative Agency
          <span className="h-px w-8 bg-primary/70" />
        </div>

        <h1 className="font-display text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="hero-name-line block"><span className="hero-name">From Idea to</span></span>
          <span className="hero-name-line block"><span className="hero-name">Digital</span></span>
          <span className="hero-name-line block"><span className="hero-name">Experience.</span></span>
        </h1>

        <p className="hero-title mx-auto mt-7 max-w-3xl font-display text-base font-medium leading-relaxed text-primary-light sm:text-xl md:text-2xl">
          Digital products, software, AI solutions, websites, apps, games, and creative experiences — from idea to launch.
        </p>

        <div className="hero-subtitle mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
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
