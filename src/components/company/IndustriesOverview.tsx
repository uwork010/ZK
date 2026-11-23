"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { industryEntries } from "@/lib/company-content";
import IndustryVisual from "@/components/company/IndustryVisual";

export default function IndustriesOverview() {
  const reducedMotion = useReducedMotion();
  return (
    <main id="main-content" className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12">
      <div aria-hidden="true" className="atmosphere-industries pointer-events-none absolute inset-0"/>
      <div className="relative mx-auto max-w-7xl">
        <header className="grid gap-8 border-b border-white/[0.08] pb-10 sm:pb-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div><p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-light"><span className="h-px w-8 bg-primary/70"/>Industries</p><h1 className="max-w-5xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">Technology for Every Industry. Built Around Your Business.</h1></div>
          <p className="max-w-xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">Every industry has different challenges. We combine technology, creative thinking and practical engineering to build digital solutions around the way businesses operate.</p>
        </header>
        <section aria-label="All industries" className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {industryEntries.map((entry,index)=>(
            <motion.article key={entry.slug} initial={reducedMotion?false:{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:reducedMotion?0:.45,delay:reducedMotion?0:index*.06}} className="glass glass-hover group flex min-w-0 flex-col overflow-hidden rounded-xl">
              <div className="p-3 pb-0 sm:p-4 sm:pb-0"><IndustryVisual kind={entry.visual}/></div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-light/80">0{index+1} · Industry</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-white">{entry.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary">{entry.summary}</p>
                <ul className="mt-5 grid gap-2" aria-label={`${entry.title} capabilities`}>{entry.capabilities.slice(0,4).map((item)=><li key={item} className="flex items-start gap-2 text-xs leading-5 text-text-secondary/90"><span className="mt-[7px] size-1 shrink-0 rounded-full bg-primary-light"/>{item}</li>)}</ul>
                <Link href={`/industries/${entry.slug}`} className="mt-6 inline-flex min-h-10 items-center gap-2 self-start text-sm font-semibold text-primary-light hover:text-white">Explore Industry <ArrowRight size={15} className="transition-transform group-hover:translate-x-1"/></Link>
              </div>
            </motion.article>
          ))}
        </section>
        <section aria-labelledby="industries-cta-title" className="mt-12 border-y border-white/10 bg-gradient-to-r from-primary/[0.07] via-transparent to-accent/[0.06] px-5 py-8 sm:px-8 sm:py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><h2 id="industries-cta-title" className="font-display text-2xl font-semibold text-white sm:text-3xl">Have a Project in Mind?</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary sm:text-base">Tell us what you are planning and the business context around it.</p></div><Link href="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white hover:bg-primary-light">Start a Project <ArrowUpRight size={15}/></Link></div>
        </section>
      </div>
    </main>
  );
}
