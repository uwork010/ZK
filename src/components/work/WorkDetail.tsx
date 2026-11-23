"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { workProjects, type WorkProject } from "@/lib/work-content";
import WorkVisual from "./WorkVisual";

export default function WorkDetail({ project }: { project: WorkProject }) {
  const reducedMotion = useReducedMotion();
  const relatedProjects = workProjects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <main id="main-content" className="relative min-h-screen overflow-hidden px-5 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 atmosphere-work" />
      <motion.article initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.5 }} className="relative mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-text-secondary sm:text-sm">
          <Link href="/work" className="inline-flex items-center gap-2 transition-colors hover:text-white"><ArrowLeft size={14}/>All work</Link>
          <span aria-hidden="true">/</span>
          <span className="text-white/70">{project.title}</span>
        </nav>

        <header className="mt-8 grid items-center gap-8 border-b border-white/[0.08] pb-8 sm:mt-10 sm:pb-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">{project.category}</p>
            <div className="mt-5">
              <span className={`inline-flex rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${project.classification === "Completed Project" ? "border-[#f3a36b]/30 bg-[#f3a36b]/5 text-[#f3a36b]" : "border-primary/25 bg-primary/5 text-primary-light"}`}>{project.classification}</span>
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">{project.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-text-secondary">{project.description}</p>
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-light">Visit Live Website <ArrowRight size={15}/></a>}
          </div>
          <WorkVisual kind={project.visual} hero />
        </header>

        <div className="divide-y divide-white/[0.08]">
          <section className="grid gap-5 py-10 sm:grid-cols-[0.72fr_1fr] sm:gap-12 lg:py-14">
            <h2 className="font-display text-2xl font-semibold text-white">Project overview</h2>
            <p className="max-w-3xl text-base leading-8 text-text-secondary">{project.overview}</p>
          </section>

          <section className="grid gap-5 py-10 sm:grid-cols-[0.72fr_1fr] sm:gap-12 lg:py-14">
            <div><h2 className="font-display text-2xl font-semibold text-white">Problem or opportunity</h2></div>
            <p className="max-w-3xl text-base leading-8 text-text-secondary">{project.problem}</p>
          </section>

          <section className="grid gap-5 py-10 sm:grid-cols-[0.72fr_1fr] sm:gap-12 lg:py-14">
            <h2 className="font-display text-2xl font-semibold text-white">Project objectives</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.objectives.map((objective) => <li key={objective} className="flex items-start gap-3 text-sm leading-6 text-text-secondary"><Check size={16} className="mt-1 shrink-0 text-primary-light"/>{objective}</li>)}
            </ul>
          </section>

          <section className="grid gap-5 py-10 sm:grid-cols-[0.72fr_1fr] sm:gap-12 lg:py-14">
            <h2 className="font-display text-2xl font-semibold text-white">Solution &amp; implementation</h2>
            <p className="max-w-3xl text-base leading-8 text-text-secondary">{project.solution}</p>
          </section>

          <section className="grid gap-5 py-10 sm:grid-cols-[0.72fr_1fr] sm:gap-12 lg:py-14">
            <h2 className="font-display text-2xl font-semibold text-white">Main features</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-text-secondary"><Check size={16} className="mt-1 shrink-0 text-primary-light"/>{feature}</li>)}
            </ul>
          </section>

          <section className="grid gap-8 py-10 sm:grid-cols-[0.72fr_1fr] sm:gap-12 lg:py-14">
            <div><h2 className="font-display text-2xl font-semibold text-white">Project experience</h2><p className="mt-3 text-sm leading-6 text-text-secondary">An illustrative interface composition for this project concept.</p></div>
            <WorkVisual kind={project.visual} hero />
          </section>

          <section className="grid gap-5 py-10 sm:grid-cols-[0.72fr_1fr] sm:gap-12 lg:py-14">
            <h2 className="font-display text-2xl font-semibold text-white">Technology</h2>
            <div className="flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-lg border border-white/[0.09] bg-white/[0.025] px-3 py-2 text-sm text-text-secondary">{technology}</span>)}</div>
          </section>

          <section className="grid gap-5 py-10 sm:grid-cols-[0.72fr_1fr] sm:gap-12 lg:py-14">
            <h2 className="font-display text-2xl font-semibold text-white">Project details</h2>
            <dl className="grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
              {Object.entries(project.details).map(([label, value]) => <div key={label} className="bg-galaxy-darker/90 p-5"><dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-text-label">{label}</dt><dd className="mt-2 text-sm font-medium text-white">{value}</dd></div>)}
            </dl>
          </section>

          <section className="grid gap-5 py-10 sm:grid-cols-[0.72fr_1fr] sm:gap-12 lg:py-14">
            <h2 className="font-display text-2xl font-semibold text-white">Design &amp; engineering decisions</h2>
            <ul className="grid gap-3 sm:grid-cols-2">{project.designDecisions.map((decision) => <li key={decision} className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 text-sm leading-6 text-text-secondary">{decision}</li>)}</ul>
          </section>

          <section className="grid gap-5 py-10 sm:grid-cols-[0.72fr_1fr] sm:gap-12 lg:py-14">
            <h2 className="font-display text-2xl font-semibold text-white">Related services</h2>
            <div className="grid gap-3 sm:grid-cols-3">{project.relatedServices.map((service) => <Link key={service.href} href={service.href} className="group flex min-h-24 items-end justify-between rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 text-sm font-medium text-text-secondary hover:border-primary/25 hover:text-white"><span>{service.title}</span><ArrowRight size={15} className="shrink-0 transition-transform group-hover:translate-x-1"/></Link>)}</div>
          </section>
        </div>

        <section className="py-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">Related projects</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">{relatedProjects.map((item) => <Link key={item.slug} href={`/work/${item.slug}`} className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-3 transition-colors hover:border-primary/25"><WorkVisual kind={item.visual}/><div className="px-2 pb-3 pt-4"><p className="text-[10px] uppercase tracking-[0.12em] text-primary-light/70">{item.category}</p><h3 className="mt-2 font-display text-xl font-semibold text-white">{item.title}</h3><span className="mt-4 inline-flex items-center gap-2 text-sm text-text-secondary group-hover:text-white">View Project <ArrowRight size={14}/></span></div></Link>)}</div>
        </section>

        <section className="border-y border-white/10 bg-gradient-to-r from-primary/[0.07] via-transparent to-accent/[0.06] px-5 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">Have a Similar Project in Mind?</h2><p className="mt-2 max-w-xl text-sm leading-6 text-text-secondary">Tell us about the product, platform or experience you want to create.</p></div><Link href="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white hover:bg-primary-light">Start a Project <ArrowRight size={15}/></Link></div>
        </section>
      </motion.article>
    </main>
  );
}
