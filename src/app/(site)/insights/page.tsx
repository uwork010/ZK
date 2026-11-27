import type { Metadata } from "next";
import InsightsOverview from "@/components/insights/InsightsOverview";
import { pageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = pageMetadata("/insights");

export default function InsightsPage() {
  return <InsightsOverview />;
}