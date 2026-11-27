import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WorkDetailView from "@/components/work/WorkDetail";
import { workProjects } from "@/lib/work-content";
import { pageMetadata } from "@/lib/page-seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return workProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = workProjects.find((item) => item.slug === slug);
  return entry
    ? pageMetadata(`/work/${entry.slug}`)
    : {};
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = workProjects.find((item) => item.slug === slug);
  if (!entry) notFound();
  return <WorkDetailView project={entry} />;
}