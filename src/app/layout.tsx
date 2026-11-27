import type { Metadata } from "next";
import { inter, spaceGrotesk } from "./fonts";
import Providers from "./providers";
import { getSiteUrl } from "@/lib/seo";
import { pageMetadata } from "@/lib/page-seo";
import "./globals.css";

const SITE_URL = getSiteUrl();
const BRAND_NAME = "CORE & CRAFT";
const BRAND_DESCRIPTION =
  "We build digital products, software, AI solutions, websites, apps, games, and creative experiences from idea to launch.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata("/"),
  title: {
    default: "CORE & CRAFT | Digital Solutions & Technology Agency",
    template: "%s | CORE & CRAFT",
  },
  keywords: [
    "CORE & CRAFT",
    "technology and creative agency",
    "digital products",
    "software development",
    "AI solutions",
    "websites and apps",
    "game development",
  ],
  verification: {
    google: "04aFB7aGIV9fFUPPzZPcBDegQN8sEL4YoOquozB2TOA",
  },
  other: {
    google: "notranslate",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      ...(SITE_URL ? { "@id": `${SITE_URL}/#organization`, url: SITE_URL } : {}),
      name: BRAND_NAME,
      description: "Full-Service Technology & Creative Agency.",
    },
    {
      "@type": "WebSite",
      ...(SITE_URL ? { "@id": `${SITE_URL}/#website`, url: SITE_URL } : {}),
      name: BRAND_NAME,
      description: `From Idea to Digital Experience. ${BRAND_DESCRIPTION}`,
      publisher: SITE_URL
        ? { "@id": `${SITE_URL}/#organization` }
        : { "@type": "Organization", name: BRAND_NAME },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta name="theme-color" content="#050b16" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-main">Skip to main content</a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
