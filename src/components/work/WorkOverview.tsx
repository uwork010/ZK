"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { workFilters, workProjects, type WorkFilter } from "@/lib/work-content";
import WorkVisual from "./WorkVisual";

export default function WorkOverview() {
  const [active, setActive] = useState<WorkFilter>("All");
  const reducedMotion = useReducedMotion();
  const visibleProjects = active === "All" ? workProjects : workProjects.filter((project) => project.filters.includes(active));

  return (
    <main id="main-content" className="relative min-h-screen overflow-hidden px-5 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 atmosphere-work" />
      <div className="relative mx-auto max-w-7xl">
        <header className="grid gap-8 border-b border-white/[0.08] pb-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16 lg:pb-14">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
              <span className="h-px w-8 bg-primary/70" />Work
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">Work &amp; Demonstrations</h1>
          </div>
          <div className="max-w-xl">
            <p className="text-lg leading-8 text-text-secondary">Explore concept directions across digital products, platforms and creative experiences.</p>
            <p className="mt-4 text-sm leading-7 text-text-secondary">Every project on this page is a CORE &amp; CRAFT studio demonstration and is not presented as a verified client engagement or measured commercial result.</p>
          </div>
        </header>

        <div className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-3 sm:mx-0 sm:flex-wrap sm:px-0" aria-label="Filter projects">
          {workFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={active === filter}
              onClick={() => setActive(filter)}
              className={`min-h-11 shrink-0 rounded-full border px-4 text-sm font-medium transition-colors ${active === filter ? "border-primary/50 bg-primary/20 text-white" : "border-white/[0.09] bg-white/[0.025] text-text-secondary hover:border-primary/25 hover:text-white"}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-12" aria-live="polite">
          {visibleProjects.map((project, index) => {
            const featured = index === 0 && active === "All";
            const wide = active === "All" && (index === 3 || index === 6);
            return (
              <motion.article
                key={project.slug}
                initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : (index % 4) * 0.05 }}
                className={`group glass glass-hover overflow-hidden rounded-2xl ${featured ? "md:col-span-2 lg:col-span-7" : wide ? "lg:col-span-7" : "lg:col-span-5"}`}
              >
                <Link href={`/work/${project.slug}`} className="flex h-full flex-col p-3 sm:p-4">
                  <WorkVisual kind={project.visual} hero={featured} />
                  <div className="flex flex-1 flex-col px-2 pb-3 pt-5 sm:px-3 sm:pb-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-light/80">{project.category}</span>
                      <span className={`rounded-full border px-2.5 py-1 text-[9px] uppercase tracking-[0.1em] ${project.classification === "Completed Project" ? "border-[#f3a36b]/25 text-[#f3a36b]" : "border-white/10 text-text-secondary"}`}>
                        {project.classification === "Completed Project" ? "Completed" : "Studio Demo"}
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">{project.title}</h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-text-secondary">{project.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 self-start text-sm font-medium text-white">
                      View Project <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
