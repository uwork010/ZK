import type { Metadata } from "next";
import { CollectionPage } from "@/components/company/CompanyPages";
import { industryEntries } from "@/lib/company-content";

export const metadata: Metadata = { title: "Industries", description: "Explore technology focus areas for financial services, healthcare, and industry." };

export default function IndustriesPage() {
  return <CollectionPage title="Industry focus areas" eyebrow="Where technology meets context" description="Illustrative areas of interest. Any future engagement should be shaped with the right domain expertise and project context." basePath="/industries" entries={industryEntries} />;
}