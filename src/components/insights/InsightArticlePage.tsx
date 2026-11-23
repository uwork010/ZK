import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock3, Home } from "lucide-react";
import InsightVisual from "@/components/insights/InsightVisual";
import { getInsightReadingTime, insightArticles, type InsightArticle } from "@/lib/insights";

export default function InsightArticlePage({ article }: { article: InsightArticle }) {
  const relatedArticles = article.related
    .map((slug) => insightArticles.find((item) => item.slug === slug))
    .filter((item): item is InsightArticle => Boolean(item));

  return (
    <main id="main-content" className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12">
      <div aria-hidden="true" className="atmosphere-insights pointer-events-none absolute inset-0" />
      <article className="relative mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-9">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-text-secondary">
            <li><Link href="/" className="inline-flex min-h-8 items-center gap-1.5 transition-colors hover:text-white"><Home size={13} />Home</Link></li>
            <li aria-hidden="true" className="text-white/25">/</li>
            <li><Link href="/insights" className="inline-flex min-h-8 items-center transition-colors hover:text-white">Insights</Link></li>
            <li aria-hidden="true" className="text-white/25">/</li>
            <li aria-current="page" className="max-w-[13rem] truncate text-text-primary/80 sm:max-w-none">{article.title}</li>
          </ol>
        </nav>

        <header className="grid gap-8 border-b border-white/[0.08] pb-9 sm:pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:pb-14">
          <div className="min-w-0">
            <Link href="/insights" className="inline-flex min-h-9 items-center gap-2 text-xs font-medium text-text-secondary transition-colors hover:text-white">
              <ArrowLeft size={14} /> All insights
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-primary-light/20 bg-primary/[0.07] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-primary-light">{article.category}</span>
              <span className="inline-flex items-center gap-1.5 text-[10px] text-text-muted"><Clock3 size={12} />{getInsightReadingTime(article)} min read</span>
            </div>
            <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">{article.introduction}</p>
            <p className="mt-6 text-[9px] font-medium uppercase tracking-[0.15em] text-text-label">CORE &amp; CRAFT Editorial Team</p>
          </div>
          <InsightVisual kind={article.visual} large />
        </header>

        <div className="mx-auto grid max-w-6xl gap-10 py-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16">
          <div className="min-w-0">
            <div className="space-y-10 sm:space-y-12">
              {article.sections.map((section, index) => (
                <section key={section.title} aria-labelledby={`article-section-${index}`}>
                  <p className="font-mono text-[9px] tracking-[0.16em] text-primary-light/75">0{index + 1} / PERSPECTIVE</p>
                  <h2 id={`article-section-${index}`} className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  {section.list && (
                    <ul className="mt-5 space-y-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6">
                      {section.list.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-text-secondary">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary-light" />{item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <section aria-labelledby="takeaways-title" className="mt-12 rounded-2xl border border-primary-light/15 bg-[linear-gradient(130deg,rgba(139,108,255,.07),rgba(8,15,27,.56))] p-5 sm:mt-16 sm:p-7">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-primary-light">In brief</p>
              <h2 id="takeaways-title" className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">Key Takeaways</h2>
              <ul className="mt-5 space-y-3">
                {article.takeaways.map((takeaway) => (
                  <li key={takeaway} className="flex items-start gap-3 text-sm leading-6 text-text-secondary sm:text-base">
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border border-primary-light/25 bg-primary-light/[0.07] text-[10px] text-primary-light">✓</span>
                    {takeaway}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-xl border border-white/[0.09] bg-[#09111e]/70 p-5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-text-label">On this page</p>
              <ul className="mt-4 space-y-3">
                {article.sections.map((section, index) => (
                  <li key={section.title}>
                    <a href={`#article-section-${index}`} className="text-xs leading-5 text-text-secondary transition-colors hover:text-primary-light">{section.title}</a>
                  </li>
                ))}
                <li><a href="#takeaways-title" className="text-xs leading-5 text-text-secondary transition-colors hover:text-primary-light">Key Takeaways</a></li>
              </ul>
            </div>
          </aside>
        </div>

        <section aria-labelledby="related-title" className="border-t border-white/[0.08] py-10 sm:py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-primary-light/80">Continue exploring</p>
              <h2 id="related-title" className="font-display text-2xl font-semibold text-white sm:text-3xl">Related Insights</h2>
            </div>
            <Link href="/insights" className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-primary-light transition-colors hover:text-white">All insights <ArrowRight size={14} /></Link>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {relatedArticles.map((related) => (
              <Link key={related.slug} href={`/insights/${related.slug}`} className="group flex min-h-36 flex-col rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 transition-all hover:-translate-y-0.5 hover:border-primary-light/25 hover:bg-white/[0.035] sm:p-5">
                <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-primary-light/80">{related.category}</span>
                <span className="mt-2 flex-1 font-display text-base font-semibold leading-snug text-white">{related.title}</span>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-text-secondary group-hover:text-primary-light">Read article <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-white/[0.1] bg-[linear-gradient(110deg,rgba(26,25,43,.86),rgba(8,15,27,.92))] px-6 py-9 sm:px-10 sm:py-11">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-nebula-warm">Put an idea into motion</p>
              <h2 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">Have a challenge of your own?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary">Talk with CORE &amp; CRAFT about the product, workflow, or digital experience you want to improve.</p>
            </div>
            <Link href="/contact" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-light hover:text-galaxy-darker sm:self-auto">
              Discuss Your Project <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
