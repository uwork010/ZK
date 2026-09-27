import type { Metadata } from "next";
import { CollectionPage } from "@/components/company/CompanyPages";
import { workEntries } from "@/lib/company-content";

export const metadata: Metadata = { title: "Work", description: "Explore sample technology project concepts." };

export default function WorkPage() {
  return <CollectionPage title="Selected work concepts" eyebrow="Work" description="These clearly labeled sample concepts illustrate possible project formats. They are not client case studies or claims of delivered results." basePath="/work" entries={workEntries} atmosphere="work" />;
}