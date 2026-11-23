"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Clock3, Search, X } from "lucide-react";
import InsightVisual from "@/components/insights/InsightVisual";
import {
  getInsightReadingTime,
  insightArticles,
  insightCategories,
  type InsightArticle,
} from "@/lib/insights";

const featuredArticle = insightArticles[0];
const categories = ["All Insights", ...insightCategories] as const;
type ActiveCategory = (typeof categories)[number];

function matchesSearch(article: InsightArticle, query: string) {
  const searchableText = [
    article.title,
    article.summary,
    article.category,
    ...article.keywords,
  ].join(" ").toLocaleLowerCase();
  return searchableText.includes(query.trim().toLocaleLowerCase());
}

function ArticleCard({ article }: { article: InsightArticle }) {
  return (
    <article className="glass glass-hover group flex min-w-0 flex-col overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1">
      <Link href={`/insights/${article.slug}`} className="flex h-full flex-col p-3 sm:p-4">
        <InsightVisual kind={article.visual} />
        <div className="flex flex-1 flex-col px-2 pb-2 pt-5 sm:px-3 sm:pb-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-primary-light/85">{article.category}</span>
            <span className="inline-flex items-center gap-1.5 text-[10px] text-text-muted"><Clock3 size={12} />{getInsightReadingTime(article)} min read</span>
          </div>
          <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-white sm:text-xl">{article.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-text-secondary">{article.summary}</p>
          <span className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-primary-light transition-colors group-hover:text-white">
            Read Article <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}

export default function InsightsOverview() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("All Insights");
  const [search, setSearch] = useState("");

  const visibleArticles = useMemo(() => {
    const query = search.trim();
    return insightArticles.filter((article) => {
      const categoryMatches = activeCategory === "All Insights" || article.category === activeCategory;
      return categoryMatches && (!query || matchesSearch(article, query));
    });
  }, [activeCategory, search]);

  const showFeature = activeCategory === "All Insights" && !search.trim();
  const gridArticles = showFeature
    ? visibleArticles.filter((article) => article.slug !== featuredArticle.slug)
    : visibleArticles;
  const hasFilters = activeCategory !== "All Insights" || Boolean(search);

  const resetFilters = () => {
    setActiveCategory("All Insights");
    setSearch("");
  };

  return (
    <main id="main-content" className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12">
      <div aria-hidden="true" className="atmosphere-insights pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl">
        <header className="grid gap-8 border-b border-white/[0.08] pb-10 sm:pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 lg:pb-14">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-light sm:text-xs">
              <span className="h-px w-8 bg-primary-light/65" />Insights &amp; Ideas
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ideas That Move <span className="text-primary-light">Technology Forward.</span>
            </h1>
          </div>
          <p className="max-w-xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8 lg:pb-1">
            Explore perspectives, practical knowledge, and ideas on technology, digital products, artificial intelligence, design, and the future of business.
          </p>
        </header>

        {showFeature && (
          <section aria-labelledby="featured-heading" className="grid gap-5 border-b border-white/[0.08] py-8 sm:py-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-8 lg:py-12">
            <Link href={`/insights/${featuredArticle.slug}`} className="group min-w-0">
              <InsightVisual kind={featuredArticle.visual} large />
            </Link>
            <div className="flex min-w-0 flex-col justify-center py-1 lg:px-3">
              <p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-nebula-warm">
                <span className="h-px w-6 bg-nebula-warm/60" />Featured insight
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-primary-light/20 bg-primary/[0.07] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-primary-light">{featuredArticle.category}</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] text-text-muted"><Clock3 size={12} />{getInsightReadingTime(featuredArticle)} min read</span>
              </div>
              <h2 id="featured-heading" className="mt-4 max-w-xl font-display text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                {featuredArticle.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">{featuredArticle.introduction}</p>
              <Link href={`/insights/${featuredArticle.slug}`} className="mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-lg border border-white/[0.13] bg-white/[0.025] px-4 text-sm font-semibold text-white transition-colors hover:border-primary-light/35 hover:bg-primary/[0.08]">
                Read Article <ArrowUpRight size={15} />
              </Link>
            </div>
          </section>
        )}

        <section aria-labelledby="latest-heading" className="pt-8 sm:pt-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-primary-light/80">Perspectives / Field notes / Ideas</p>
              <h2 id="latest-heading" className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">Latest Insights</h2>
            </div>
            <label className="relative flex min-h-12 w-full items-center gap-3 rounded-xl border border-white/[0.1] bg-[#09111e]/75 px-4 transition-colors focus-within:border-primary-light/35 sm:max-w-sm">
              <Search size={16} className="shrink-0 text-text-muted" aria-hidden="true" />
              <span className="sr-only">Search insights</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.currentTarget.value)}
                placeholder="Search insights..."
                className="min-w-0 flex-1 bg-transparent py-2 text-sm text-text-primary outline-none placeholder:text-text-placeholder"
              />
              {search && (
                <button type="button" onClick={() => setSearch("")} aria-label="Clear search" className="flex size-8 shrink-0 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-white/[0.06] hover:text-white">
                  <X size={15} />
                </button>
              )}
            </label>
          </div>

          <div className="-mx-5 mt-6 flex snap-x gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0" role="group" aria-label="Filter insights by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`min-h-11 shrink-0 rounded-full border px-4 text-xs font-medium transition-colors sm:text-sm ${
                  activeCategory === category
                    ? "border-primary-light/35 bg-primary/[0.15] text-white"
                    : "border-white/[0.09] bg-white/[0.025] text-text-secondary hover:border-primary-light/25 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-6 flex min-h-6 items-center justify-between gap-3">
            <p aria-live="polite" className="text-xs text-text-muted">
              {gridArticles.length} {gridArticles.length === 1 ? "article" : "articles"}
              {hasFilters ? " found" : " to explore"}
            </p>
            {hasFilters && (
              <button type="button" onClick={resetFilters} className="inline-flex min-h-9 items-center gap-2 rounded-lg px-2 text-xs font-medium text-primary-light transition-colors hover:text-white">
                Reset filters <X size={13} />
              </button>
            )}
          </div>

          {gridArticles.length > 0 ? (
            <div className="mt-4 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gridArticles.map((article) => <ArticleCard key={article.slug} article={article} />)}
            </div>
          ) : (
            <div className="mt-4 flex min-h-60 flex-col items-center justify-center rounded-2xl border border-dashed border-white/[0.12] bg-white/[0.015] px-6 text-center">
              <span className="flex size-11 items-center justify-center rounded-xl border border-primary-light/20 bg-primary-light/[0.06] text-primary-light"><Search size={17} /></span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">No insights found</h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-text-secondary">Try another search or choose a different category to find a perspective that fits.</p>
              <button type="button" onClick={resetFilters} className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/[0.12] px-4 text-sm font-medium text-white transition-colors hover:border-primary-light/30 hover:bg-white/[0.04]">
                Show all insights <ArrowRight size={14} />
              </button>
            </div>
          )}
        </section>

        <section className="mt-16 overflow-hidden rounded-2xl border border-white/[0.1] bg-[linear-gradient(110deg,rgba(26,25,43,.86),rgba(8,15,27,.92))] px-6 py-9 sm:mt-20 sm:px-10 sm:py-11">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-nebula-warm">Ideas become useful in practice</p>
              <h2 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">Have a question about your next digital product?</h2>
              <p className="mt-2 text-sm leading-6 text-text-secondary">Let’s talk through the opportunity and find a thoughtful way forward.</p>
            </div>
            <Link href="/contact" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-light hover:text-galaxy-darker sm:self-auto">
              Start a Conversation <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
