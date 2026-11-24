import type { Metadata } from "next";
import { CompanyInfoPage } from "@/components/company/CompanyPages";
import { canonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...canonicalMetadata("/terms"),
  title: "Terms",
  description: "Terms governing use of the CORE & CRAFT website.",
};

export default function TermsPage() {
  return <CompanyInfoPage
    eyebrow="Legal"
    title="Terms of Use"
    intro="By accessing this website, you agree to use it lawfully and to respect CORE & CRAFT’s intellectual property and the rights of others."
    sections={[
      { title: "Website access", body: "You may browse the website for lawful informational purposes. You must not attempt to disrupt service, bypass security controls, misuse forms, or use automated systems in a way that harms the site or interferes with other users." },
      { title: "Content and intellectual property", body: "Unless otherwise stated, the website’s design, text, graphics, and brand presentation are owned or licensed by CORE & CRAFT and may not be reproduced or commercially reused without permission. Service names and third-party trademarks remain the property of their respective owners." },
      { title: "Portfolio and demonstration content", body: "Work and project content may include studio concepts or demonstrations rather than verified client engagements. Such content is provided for illustration and must not be interpreted as a claim of client work, measured performance, or a commercial result." },
      { title: "Enquiries and project proposals", body: "Submitting an enquiry does not create a service agreement. Scope, fees, timelines, responsibilities, confidentiality, and acceptance of work are governed only by a separate written agreement accepted by both parties." },
      { title: "Information accuracy", body: "Website content is provided for general information and may change as services and offerings evolve. No action should be taken solely on the basis of this website where specific technical, commercial, legal, or professional advice is needed." },
      { title: "Limitation of liability", body: "To the extent permitted by applicable law, CORE & CRAFT is not liable for indirect or consequential loss arising from use of this website or reliance on its general information. Nothing in these terms excludes rights or liability that cannot lawfully be excluded." },
      { title: "Contact", body: "Questions about these terms may be sent to uwork428@gmail.com or discussed through WhatsApp at +92 370 5752100." },
    ]}
  />;
}