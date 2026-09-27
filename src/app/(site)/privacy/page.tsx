import type { Metadata } from "next";
import { CompanyInfoPage } from "@/components/company/CompanyPages";

export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy policy draft placeholder." };

export default function PrivacyPage() {
  return <CompanyInfoPage
    eyebrow="Legal / Draft"
    title="Privacy Policy"
    intro="Draft placeholder. This page is not a complete privacy policy and must be replaced with reviewed, jurisdiction-appropriate legal copy before launch."
    sections={[
      { title: "Information collected", body: "Document the personal information the company collects, why it is collected, and the legal basis for processing after those practices are confirmed." },
      { title: "Use and retention", body: "Describe actual data uses, retention periods, service providers, and the safeguards applied to personal information." },
      { title: "Your choices", body: "Add verified instructions for privacy requests, consent preferences, and contact details for the responsible organization." },
    ]}
  />;
}