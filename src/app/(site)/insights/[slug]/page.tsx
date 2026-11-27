import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsightArticlePage from "@/components/insights/InsightArticlePage";
import { insightArticles } from "@/lib/insights";
import { pageMetadata } from "@/lib/page-seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insightArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = insightArticles.find((item) => item.slug === slug);
  return article
    ? pageMetadata(`/insights/${article.slug}`)
    : {};
}

export default async function InsightDetail({ params }: Props) {
  const { slug } = await params;
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  return <InsightArticlePage article={article} />;
}