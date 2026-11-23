import type { Metadata } from "next";
import { inter, spaceGrotesk } from "./fonts";
import Providers from "./providers";
import { canonicalMetadata } from "@/lib/seo";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL).origin
  : undefined;
const BRAND_NAME = "CORE & CRAFT";
const BRAND_DESCRIPTION =
  "We build digital products, software, AI solutions, websites, apps, games, and creative experiences from idea to launch.";

export const metadata: Metadata = {
  ...(SITE_URL ? { metadataBase: new URL(SITE_URL) } : {}),
  ...canonicalMetadata("/"),
  title: {
    default: "CORE & CRAFT | From Idea to Digital Experience",
    template: "%s | CORE & CRAFT",
  },
  description: `Full-Service Technology & Creative Agency. ${BRAND_DESCRIPTION}`,
  keywords: [
    "CORE & CRAFT",
    "technology and creative agency",
    "digital products",
    "software development",
    "AI solutions",
    "websites and apps",
    "game development",
  ],
  openGraph: {
    title: "CORE & CRAFT | From Idea to Digital Experience",
    description: `Full-Service Technology & Creative Agency. ${BRAND_DESCRIPTION}`,
    type: "website",
    locale: "en_US",
    siteName: BRAND_NAME,
    ...(SITE_URL ? { url: SITE_URL } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "CORE & CRAFT | From Idea to Digital Experience",
    description: `Full-Service Technology & Creative Agency. ${BRAND_DESCRIPTION}`,
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
