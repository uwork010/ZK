import type { Metadata } from "next";
import WorkOverview from "@/components/work/WorkOverview";
import { pageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = pageMetadata("/work");

export default function WorkPage() {
  return <WorkOverview />;
}