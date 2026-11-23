import type { Metadata } from "next";

export function canonicalMetadata(path: string): Pick<Metadata, "alternates"> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return {};

  const origin = new URL(siteUrl).origin;
  return { alternates: { canonical: new URL(path, origin).toString() } };
}
