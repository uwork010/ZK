import type { Metadata } from "next";

export const PRODUCTION_SITE_URL = "https://core-craft-roan.vercel.app";

export function getSiteUrl(): string {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_SITE_URL;
  return new URL(configuredUrl).origin;
}

export function canonicalMetadata(path: string): Pick<Metadata, "alternates"> {
  const origin = getSiteUrl();
  return { alternates: { canonical: new URL(path, origin).toString() } };
}
