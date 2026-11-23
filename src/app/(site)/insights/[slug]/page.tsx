import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsightArticlePage from "@/components/insights/InsightArticlePage";
import { insightArticles } from "@/lib/insights";
import { canonicalMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insightArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = insightArticles.find((item) => item.slug === slug);
  return article
    ? {
        ...canonicalMetadata(`/insights/${article.slug}`),
        title: article.title,
        description: article.summary,
      }
    : {};
}

export default async function InsightDetail({ params }: Props) {
  const { slug } = await params;
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  return <InsightArticlePage article={article} />;
}