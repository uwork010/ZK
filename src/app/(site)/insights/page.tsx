import type { Metadata } from "next";
import InsightsOverview from "@/components/insights/InsightsOverview";
import { canonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...canonicalMetadata("/insights"),
  title: "Insights",
  description: "Perspectives and practical ideas on technology, digital products, AI, design, and the future of business.",
};

export default function InsightsPage() {
  return <InsightsOverview />;
}