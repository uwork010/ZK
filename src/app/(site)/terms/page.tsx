import type { Metadata } from "next";
import { CompanyInfoPage } from "@/components/company/CompanyPages";

export const metadata: Metadata = { title: "Terms", description: "Terms of use draft placeholder." };

export default function TermsPage() {
  return <CompanyInfoPage
    eyebrow="Legal / Draft"
    title="Terms of Use"
    intro="Draft placeholder. This page is not a complete agreement and must be replaced with reviewed legal terms before launch."
    sections={[
      { title: "Use of this website", body: "Set out the actual rules governing access to and use of the company website, including any applicable restrictions." },
      { title: "Content and intellectual property", body: "Identify ownership, permitted uses, and any third-party materials based on the company’s actual policies and rights." },
      { title: "Disclaimers and contact", body: "Add reviewed terms covering warranties, liability, governing law, and the correct legal contact information." },
    ]}
  />;
}