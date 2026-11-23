import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { SolutionDetailPage } from "@/components/company/CompanyPages";
import { solutionEntries } from "@/lib/company-content";
import { canonicalMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutionEntries.flatMap(({ slug, aliases }) => [slug, ...(aliases ?? [])].map((slug) => ({ slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = solutionEntries.find((item) => item.slug === slug || item.aliases?.includes(slug));
  return entry
    ? {
        ...canonicalMetadata(`/solutions/${entry.slug}`),
        title: `Solutions for ${entry.title}`,
        description: entry.summary,
      }
    : {};
}

export default async function SolutionDetail({ params }: Props) {
  const { slug } = await params;
  const entry = solutionEntries.find((item) => item.slug === slug || item.aliases?.includes(slug));
  if (!entry) notFound();
  if (entry.slug !== slug) permanentRedirect(`/solutions/${entry.slug}`);
  return <SolutionDetailPage entry={entry} />;
}