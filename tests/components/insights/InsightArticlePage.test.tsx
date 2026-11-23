import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import InsightArticlePage from "@/components/insights/InsightArticlePage";
import { getInsightReadingTime, insightArticles } from "@/lib/insights";

describe("<InsightArticlePage />", () => {
  it("renders a long-form article with working breadcrumbs, takeaways, related stories, and contact CTA", () => {
    const article = insightArticles[0];
    render(<InsightArticlePage article={article} />);

    expect(screen.getByRole("navigation", { name: "Breadcrumb" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Insights" })).toHaveAttribute("href", "/insights");
    expect(screen.getByRole("heading", { name: article.title, level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Key Takeaways" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Discuss Your Project/ })).toHaveAttribute("href", "/contact");

    for (const slug of article.related) {
      expect(screen.getByRole("link", { name: new RegExp(insightArticles.find((item) => item.slug === slug)?.title ?? "not found") }))
        .toHaveAttribute("href", `/insights/${slug}`);
    }
  });

  it("provides complete editorial content and valid related routes for every article", () => {
    const articleSlugs = new Set(insightArticles.map(({ slug }) => slug));

    expect(insightArticles).toHaveLength(8);
    for (const article of insightArticles) {
      expect(article.introduction.length, article.slug).toBeGreaterThan(80);
      expect(article.sections.length, article.slug).toBeGreaterThanOrEqual(3);
      expect(article.takeaways.length, article.slug).toBeGreaterThanOrEqual(3);
      expect(getInsightReadingTime(article), article.slug).toBeGreaterThan(0);
      expect(article.related.every((slug) => articleSlugs.has(slug)), article.slug).toBe(true);
    }
  });
});
