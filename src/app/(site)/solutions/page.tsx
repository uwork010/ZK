import type { Metadata } from "next";
import { CollectionPage } from "@/components/company/CompanyPages";
import { solutionEntries } from "@/lib/company-content";

export const metadata: Metadata = { title: "Solutions", description: "Explore digital product, intelligent workflow, and modern platform solution areas." };

export default function SolutionsPage() {
  return <CollectionPage title="Solutions shaped around your needs" eyebrow="How we help" description="Starting points for turning business needs into useful digital experiences, workflows, and platforms." basePath="/solutions" entries={solutionEntries} />;
}