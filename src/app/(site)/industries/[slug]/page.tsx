import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { IndustryDetailPage } from "@/components/company/CompanyPages";
import { industryEntries } from "@/lib/company-content";
import { pageMetadata } from "@/lib/page-seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industryEntries.flatMap(({ slug, aliases }) => [slug, ...(aliases ?? [])].map((slug) => ({ slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = industryEntries.find((item) => item.slug === slug || item.aliases?.includes(slug));
  return entry
    ? pageMetadata(`/industries/${entry.slug}`)
    : {};
}

export default async function IndustryDetail({ params }: Props) {
  const { slug } = await params;
  const entry = industryEntries.find((item) => item.slug === slug || item.aliases?.includes(slug));
  if (!entry) notFound();
  if (entry.slug !== slug) permanentRedirect(`/industries/${entry.slug}`);
  return <IndustryDetailPage entry={entry} />;
}