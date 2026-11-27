import type { Metadata } from "next";
import SolutionsOverview from "@/components/company/SolutionsOverview";
import { pageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = pageMetadata("/solutions");

export default function SolutionsPage() { return <SolutionsOverview />; }