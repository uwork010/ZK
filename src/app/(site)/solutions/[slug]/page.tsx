import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/company/CompanyPages";
import { solutionEntries } from "@/lib/company-content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutionEntries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = solutionEntries.find((item) => item.slug === slug);
  return entry ? { title: entry.title, description: entry.summary } : {};
}

export default async function SolutionDetail({ params }: Props) {
  const { slug } = await params;
  const entry = solutionEntries.find((item) => item.slug === slug);
  if (!entry) notFound();
  return <DetailPage entry={entry} backHref="/solutions" backLabel="All solutions" />;
}