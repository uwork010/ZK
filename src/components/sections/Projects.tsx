"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/constants";
import GradientText from "@/components/ui/GradientText";
import ScrollReveal from "@/components/ui/ScrollReveal";

export function ProjectsHeader() {
  return (
    <div className="section-padding pb-0">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-primary/75">02 / Work</span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          <GradientText as="h2" className="mt-4 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Selected Work Concepts
          </GradientText>
          <p className="mt-4 max-w-md text-text-secondary">
            SAMPLE / DEMO CONCEPTS — illustrative directions, not client case studies or claims of results.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}

export function ProjectDetail({ index }: { index: number }) {
  const project = projects[index];
  if (!project) return null;

  return (
    <div className="flex h-full items-center justify-end px-6 sm:px-12 lg:pr-24 lg:pl-[42%]">
      <div className="glass w-full max-w-xl rounded-xl p-6 text-center sm:p-9">
        {/* Badge */}
        <ScrollReveal>
          <span className="badge rounded-full border border-primary/20 bg-primary/5 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-light">
            Sample / Demo Concept · {String(index + 1).padStart(2, "0")}
          </span>
        </ScrollReveal>

        {/* Logo + Title */}
        <ScrollReveal delay={0.05}>
          <div className="mt-6 flex flex-col items-center gap-4">
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
              {project.title}
            </h3>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="my-7 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

        {/* Description */}
        <ScrollReveal delay={0.1}>
          <p className="text-sm leading-[1.8] text-text-secondary">
            {project.description}
          </p>
        </ScrollReveal>

        {/* Tech tags + Links */}
        <ScrollReveal delay={0.15}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="badge rounded-lg border border-white/[0.06] bg-white/[0.03] text-xs font-medium text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>
        <Link href="/work" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-light transition-colors hover:text-white">
          Explore all work concepts <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
