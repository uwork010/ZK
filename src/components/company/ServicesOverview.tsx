import Link from "next/link";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { serviceEntries } from "@/lib/company-content";
import ServiceVisual from "@/components/company/ServiceVisual";

const whatsappUrl = `https://wa.me/923705752100?text=${encodeURIComponent("Hi, I visited your website and would like to discuss a project.")}`;

export default function ServicesOverview() {
  return (
    <main id="main-content" className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12">
      <div aria-hidden="true" className="atmosphere-services pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl">
        <header className="max-w-4xl border-b border-white/[0.08] pb-10 sm:pb-12">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
            <span className="h-px w-8 bg-secondary" />Our Services
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-text-primary sm:text-5xl lg:text-6xl">
            Full-Service Technology &amp; Creative Capabilities
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
            From software engineering and AI to design, games, cloud, and creative production, we help businesses take ideas from concept to launch and scale.
          </p>
        </header>

        <section aria-label="All services" className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {serviceEntries.map((service, index) => (
            <article key={service.slug} className="glass glass-hover group flex min-w-0 flex-col overflow-hidden rounded-xl border border-violet-100/[0.1] bg-[linear-gradient(145deg,rgba(23,23,35,0.8),rgba(8,14,24,0.82))] transition-all duration-300 hover:-translate-y-1 hover:border-primary-light/25 hover:shadow-[0_22px_45px_rgba(0,0,0,0.32)]">
              <div className="p-3 pb-0 sm:p-4 sm:pb-0">
                <ServiceVisual kind={service.visual} />
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <p className="font-mono text-[10px] tracking-[0.12em] text-primary-light/85">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 font-display text-xl font-semibold leading-snug text-white">{service.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-6 text-text-secondary">{service.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${service.title} tags`}>
                  {service.tags.map((tag) => <li key={tag} className="rounded-md border border-white/[0.09] bg-white/[0.025] px-2.5 py-1.5 text-[10px] font-medium text-text-secondary">{tag}</li>)}
                </ul>
                <Link href={`/services/${service.slug}`} className="mt-5 inline-flex min-h-10 items-center gap-2 self-start text-sm font-semibold text-primary-light transition-colors hover:text-white">
                  Explore Service <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section aria-labelledby="services-cta-title" className="mt-12 border-y border-white/10 bg-gradient-to-r from-primary/[0.07] via-transparent to-secondary/[0.06] px-5 py-8 sm:mt-16 sm:px-8 sm:py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 id="services-cta-title" className="font-display text-2xl font-semibold text-white sm:text-3xl">Have a Project in Mind?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary sm:text-base">Tell us what you want to build and we’ll help you turn it into a clear plan.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-light">
                Start a Project <ArrowUpRight size={15} />
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 px-5 text-sm font-semibold text-white transition-colors hover:border-secondary/35 hover:text-rose-100">
                <MessageCircle size={15} />Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}