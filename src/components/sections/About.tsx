import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { agencyServiceGroups } from "@/lib/constants";
import GradientText from "@/components/ui/GradientText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionDivider from "@/components/ui/SectionDivider";

export default function About() {
  return (
    <section className="section-padding relative">
      <SectionDivider />
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-primary/75">01 / Approach</span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/35 to-transparent" />
          </div>
          <GradientText as="h2" className="mt-4 max-w-4xl font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Technology and creative, working as one.
          </GradientText>
        </ScrollReveal>

        <div className="mt-9 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <ScrollReveal delay={0.08}>
            <p className="max-w-2xl text-lg leading-8 text-text-secondary">
              We build digital products, software, AI solutions, websites, apps, games, and creative experiences from idea to launch. The work begins with the problem and brings design, engineering, and delivery into the same conversation.
            </p>
            <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary-light transition-colors hover:text-white">
              About the company <ArrowRight size={15} />
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <div className="glass rounded-xl p-5 sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-secondary/70">A connected service spectrum</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {agencyServiceGroups.map((group) => (
                  <div key={group.name}>
                    <div className="mb-2 h-px w-8 bg-primary/65" />
                    <h3 className="font-display text-sm font-semibold text-white">{group.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-secondary/70">A connected service spectrum</p>
