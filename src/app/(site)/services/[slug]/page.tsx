import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { ServiceDetailPage } from "@/components/company/CompanyPages";
import { serviceEntries } from "@/lib/company-content";
import { canonicalMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceEntries.flatMap(({ slug, aliases }) => [slug, ...(aliases ?? [])].map((slug) => ({ slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = serviceEntries.find((item) => item.slug === slug || item.aliases?.includes(slug));
  return entry
    ? {
        ...canonicalMetadata(`/services/${entry.slug}`),
        title: `Services: ${entry.title}`,
        description: entry.summary,
      }
    : {};
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const entry = serviceEntries.find((item) => item.slug === slug || item.aliases?.includes(slug));
  if (!entry) notFound();
  if (entry.slug !== slug) permanentRedirect(`/services/${entry.slug}`);
  return <ServiceDetailPage entry={entry} />;
}