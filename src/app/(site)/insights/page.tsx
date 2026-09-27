import type { Metadata } from "next";
import { CollectionPage } from "@/components/company/CompanyPages";
import { insightEntries } from "@/lib/company-content";

export const metadata: Metadata = { title: "Insights", description: "Sample editorial concepts about software, data, and technology." };

export default function InsightsPage() {
  return <CollectionPage title="Ideas in progress" eyebrow="Insights" description="Draft editorial concepts for future perspectives on software, data, and product engineering." basePath="/insights" entries={insightEntries} atmosphere="insights" />;
}