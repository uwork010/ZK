import type { Metadata } from "next";
import { CompanyInfoPage } from "@/components/company/CompanyPages";
import { canonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...canonicalMetadata("/privacy"),
  title: "Privacy Policy",
  description: "How CORE & CRAFT handles information submitted through this website.",
};

export default function PrivacyPage() {
  return <CompanyInfoPage
    eyebrow="Legal"
    title="Privacy Policy"
    intro="CORE & CRAFT respects privacy and limits the information collected through this website to what is needed to respond to enquiries and operate the site."
    sections={[
      { title: "Information you provide", body: "When you submit a contact or project enquiry, the website collects the details you enter, such as your name, email address, company, budget range, project type, and message. This information is used to assess and respond to the enquiry." },
      { title: "How information is handled", body: "Enquiry details may be processed by the website’s email delivery provider so that CORE & CRAFT can receive and respond to your message. We do not use submitted enquiry information to sell advertising or to create unrelated marketing profiles." },
      { title: "Retention and security", body: "Information should be kept only for as long as reasonably needed to handle the enquiry, maintain appropriate records, or meet a legal requirement. Reasonable technical and organizational measures are used, while no internet transmission or storage system can be guaranteed completely secure." },
      { title: "Your choices", body: "You may ask to access, correct, or delete personal information associated with an enquiry by contacting uwork428@gmail.com. You can also choose not to submit optional details or to contact us by email or WhatsApp instead." },
      { title: "Third-party links", body: "This website may link to external services. Those services operate under their own privacy policies, and CORE & CRAFT does not control how they collect or use information." },
      { title: "Policy updates", body: "This policy may be updated when website practices, providers, or legal requirements change. The latest published version applies to information submitted after it takes effect." },
    ]}
  />;
}