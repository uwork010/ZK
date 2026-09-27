import type { Metadata } from "next";
import { inter, spaceGrotesk } from "./fonts";
import Providers from "./providers";
import "./globals.css";

const SITE_URL = "https://pedromarques.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Technology Company | Digital Products, Data & Platforms",
    template: "%s | Technology Company",
  },
  description:
    "A technology company website exploring digital products, data, AI, and modern platforms.",
  keywords: [
    "technology company",
    "digital products",
    "data and AI",
    "cloud platforms",
    "React",
    "Next.js",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Technology Company | Digital Products, Data & Platforms",
    description: "Explore technology services, solutions, work concepts, and perspectives.",
    type: "website",
    locale: "en_US",
    siteName: "Technology Company",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Company | Digital Products, Data & Platforms",
    description: "Explore technology services, solutions, work concepts, and perspectives.",
  },
  robots: {
    index: true,
    follow: true,
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
      "@id": `${SITE_URL}/#organization`,
      name: "Technology Company",
      url: SITE_URL,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Technology Company",
      description: "A technology company website exploring digital products, data, AI, and platforms.",
      publisher: { "@id": `${SITE_URL}/#organization` },
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
        <meta name="theme-color" content="#8154ff" />
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
