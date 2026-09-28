"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { CompanyEntry, ServiceEntry } from "@/lib/company-content";
import ServiceVisual from "@/components/company/ServiceVisual";

export type PageAtmosphere = "services" | "solutions" | "industries" | "work" | "about" | "insights" | "contact";

interface CollectionPageProps {
  title: string;
  eyebrow: string;
  description: string;
  basePath: string;
  entries: Pick<CompanyEntry, "slug" | "title" | "eyebrow" | "summary">[];
  atmosphere: PageAtmosphere;
}

function PageBackdrop({ atmosphere }: { atmosphere: PageAtmosphere }) {
  return <div aria-hidden="true" className={`pointer-events-none absolute inset-0 atmosphere-${atmosphere}`} />;
}

export function CollectionPage({ title, eyebrow, description, basePath, entries, atmosphere }: CollectionPageProps) {
  const reducedMotion = useReducedMotion();

  return (
    <main id="main-content" className="relative min-h-screen overflow-hidden px-6 pb-24 pt-36 sm:px-10 lg:px-16">
      <PageBackdrop atmosphere={atmosphere} />
      <div className="relative mx-auto max-w-6xl">
        <header className="grid gap-8 border-b border-white/[0.08] pb-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16 lg:pb-16">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
              <span className="h-px w-8 bg-primary/70" />{eyebrow}
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
          </div>
          <p className="max-w-xl text-base leading-7 text-text-secondary lg:pb-1 lg:text-lg">{description}</p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {entries.map((entry, index) => (
            <motion.article
              key={entry.slug}
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : index * 0.06 }}
              className="glass glass-hover group relative overflow-hidden rounded-xl transition-colors"
            >
              <Link href={`${basePath}/${entry.slug}`} className="flex h-full min-h-64 flex-col p-6 sm:p-7">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-light/80">{entry.eyebrow}</span>
                <h2 className="mt-8 font-display text-xl font-semibold text-white sm:text-2xl">{entry.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary">{entry.summary}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white">
                  Explore <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}

export function DetailPage({ entry, backHref, backLabel, atmosphere }: { entry: CompanyEntry; backHref: string; backLabel: string; atmosphere: PageAtmosphere }) {
  const reducedMotion = useReducedMotion();

  return (
    <main id="main-content" className="relative min-h-screen overflow-hidden px-6 pb-24 pt-36 sm:px-10 lg:px-16">
      <PageBackdrop atmosphere={atmosphere} />
      <motion.article
        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.5 }}
        className="relative mx-auto max-w-6xl"
      >
        <Link href={backHref} className="inline-flex items-center gap-2 rounded-lg text-sm text-text-secondary transition-colors hover:text-white">
          <ArrowLeft size={15} /> {backLabel}
        </Link>
        <div className="mt-12 grid gap-12 border-b border-white/[0.08] pb-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20 lg:pb-20">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">{entry.eyebrow}</p>
            {entry.sample && <p className="mb-4 inline-flex rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-secondary">Sample / Demo Concept</p>}
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">{entry.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">{entry.summary}</p>
          </div>
          <div className="glass self-end rounded-xl p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text-secondary/70">Areas to explore</p>
            <ul className="mt-5 space-y-3">
              {entry.focusAreas.map((area) => (
                <li key={area} className="flex items-start gap-3 text-sm leading-6 text-text-secondary">
                  <Check size={16} className="mt-1 shrink-0 text-primary-light" />{area}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid gap-10 py-12 lg:grid-cols-[1fr_0.75fr] lg:gap-20 lg:py-16">
          <div>
            <h2 className="font-display text-2xl font-semibold text-white">Overview</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-text-secondary">{entry.description}</p>
          </div>
          <div className="flex flex-col items-start justify-center rounded-2xl border border-primary/15 bg-primary/[0.04] p-6 sm:p-8">
            <p className="text-sm leading-6 text-text-secondary">Have a related challenge or an early idea?</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-galaxy-darker transition-colors hover:bg-primary-light">
              Start a Project <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </motion.article>
    </main>
  );
}

export function ServiceDetailPage({ entry }: { entry: ServiceEntry }) {
  const reducedMotion = useReducedMotion();
  const whatsappHref = `https://wa.me/923705752100?text=${encodeURIComponent("Hi, I visited your website and would like to discuss a project.")}`;
  const listSections = [
    { title: "What We Offer", items: entry.offers },
    { title: "Technologies & Tools", items: entry.technologies },
    { title: "Types of Projects We Build", items: entry.projectTypes },
  ];

  return (
    <main id="main-content" className="relative min-h-screen overflow-hidden px-5 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-12">
      <PageBackdrop atmosphere="services" />
      <motion.article
        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.5 }}
        className="relative mx-auto max-w-7xl"
      >
        <Link href="/services" className="inline-flex items-center gap-2 rounded-lg text-sm text-text-secondary transition-colors hover:text-white">
          <ArrowLeft size={15} /> All services
        </Link>

        <header className="mt-8 grid items-center gap-8 border-b border-white/[0.08] pb-8 sm:mt-10 sm:pb-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">{entry.title}</p>
            <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">{entry.heroTitle}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">{entry.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${entry.title} technologies and disciplines`}>
              {entry.tags.map((tag) => <li key={tag} className="rounded-md border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-xs font-medium text-text-secondary">{tag}</li>)}
            </ul>
          </div>
          <ServiceVisual kind={entry.visual} size="hero" />
        </header>

        <div className="flex flex-wrap gap-3 border-b border-white/[0.08] py-5">
          <Link href="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-light">
            Start a Project <ArrowRight size={15} />
          </Link>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 px-5 text-sm font-semibold text-white transition-colors hover:border-secondary/35 hover:text-rose-100">
            <MessageCircle size={15} />Chat on WhatsApp
          </a>
        </div>

        <div className="divide-y divide-white/[0.08]">
          {listSections.map((section) => (
            <section key={section.title} className="grid gap-5 py-8 sm:grid-cols-[0.7fr_1fr] sm:gap-12 sm:py-10 lg:py-12">
              <h2 className="font-display text-2xl font-semibold text-white">{section.title}</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-text-secondary">
                    <Check size={16} className="mt-1 shrink-0 text-primary-light" />{item}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="grid gap-5 py-8 sm:grid-cols-[0.7fr_1fr] sm:gap-12 sm:py-10 lg:py-12">
            <div>
              <h2 className="font-display text-2xl font-semibold text-white">Our Process</h2>
              <p className="mt-3 text-sm leading-6 text-text-secondary">A focused path shaped around your product and team.</p>
            </div>
            <ol className="grid gap-3 sm:grid-cols-3">
              {entry.processSteps.map((step, index) => (
                <li key={step} className="rounded-lg border border-white/[0.08] bg-white/[0.025] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-light">0{index + 1}</p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="grid gap-5 py-8 sm:grid-cols-[0.7fr_1fr] sm:gap-12 sm:py-10 lg:py-12">
            <h2 className="font-display text-2xl font-semibold text-white">Benefits</h2>
            <ul className="grid gap-3 sm:grid-cols-3">
              {entry.benefits.map((benefit) => <li key={benefit} className="flex items-start gap-3 text-sm leading-6 text-text-secondary"><Check size={16} className="mt-1 shrink-0 text-primary-light" />{benefit}</li>)}
            </ul>
          </section>

          <section className="grid gap-5 py-8 sm:grid-cols-[0.7fr_1fr] sm:gap-12 sm:py-10 lg:py-12">
            <div>
              <h2 className="font-display text-2xl font-semibold text-white">Example Use Cases</h2>
              <p className="mt-3 text-sm leading-6 text-text-secondary">Illustrative project contexts, not client case studies or claims of results.</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-3">
              {entry.useCases.map((item) => <li key={item} className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm leading-6 text-text-secondary">{item}</li>)}
            </ul>
          </section>

          <section className="grid gap-5 py-8 sm:grid-cols-[0.7fr_1fr] sm:gap-12 sm:py-10 lg:py-12">
            <h2 className="font-display text-2xl font-semibold text-white">Frequently Asked Questions</h2>
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {entry.faqs.map((faq) => (
                <details key={faq.question} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white marker:hidden">
                    {faq.question}<span className="text-lg font-normal text-primary-light transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-text-secondary">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-8 border-y border-white/10 bg-gradient-to-r from-primary/[0.07] via-transparent to-secondary/[0.06] px-5 py-8 sm:px-8 sm:py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">Have a project in mind?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary sm:text-base">Tell us what you want to build and we will help you turn it into a clear plan.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-light">Get a Quote <ArrowRight size={15} /></Link>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 px-4 text-sm font-medium text-white transition-colors hover:border-secondary/35 hover:text-rose-100"><MessageCircle size={15} />Chat on WhatsApp</a>
              <a href="mailto:uwork428@gmail.com" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/15 px-4 text-sm font-medium text-white transition-colors hover:border-primary/40">Email Us</a>
            </div>
          </div>
        </section>
      </motion.article>
    </main>
  );
}

export function CompanyInfoPage({ eyebrow, title, intro, sections, atmosphere = "about" }: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { title: string; body: string }[];
  atmosphere?: PageAtmosphere;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <main id="main-content" className="relative min-h-screen overflow-hidden px-6 pb-24 pt-36 sm:px-10 lg:px-16">
      <PageBackdrop atmosphere={atmosphere} />
      <motion.div initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.5 }} className="relative mx-auto max-w-5xl">
        <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-light"><span className="h-px w-8 bg-primary/70" />{eyebrow}</p>
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-text-secondary">{intro}</p>
        <div className="mt-12 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {sections.map((section) => (
            <section key={section.title} className="grid gap-3 py-7 sm:grid-cols-[0.65fr_1fr] sm:gap-10 sm:py-9">
              <h2 className="font-display text-lg font-semibold text-white">{section.title}</h2>
              <p className="text-sm leading-7 text-text-secondary">{section.body}</p>
            </section>
          ))}
        </div>
      </motion.div>
    </main>
  );
}