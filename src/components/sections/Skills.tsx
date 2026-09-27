"use client";

import { motion, useReducedMotion } from "framer-motion";
import { agencyServiceGroups } from "@/lib/constants";
import GradientText from "@/components/ui/GradientText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Skills() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="section-padding relative">
      <SectionDivider />
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-primary/75">03 / Capabilities</span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          <GradientText as="h2" className="mt-4 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            What we do
          </GradientText>
          <p className="mt-4 max-w-2xl text-text-secondary">
            A connected range of technology and creative disciplines, brought together around the work.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {agencyServiceGroups.map((group, groupIndex) => (
            <motion.section
              key={group.name}
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : groupIndex * 0.08 }}
              className="glass rounded-xl p-5 sm:p-6"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-light/80">0{groupIndex + 1} / Discipline</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">{group.name}</h3>
              <ul className="mt-5 space-y-3 border-t border-glass-border pt-4">
                {group.services.map((service) => (
                  <li key={service.slug} className="flex items-start gap-3 text-sm leading-5 text-text-secondary">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/80" />{service.title}
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
}
