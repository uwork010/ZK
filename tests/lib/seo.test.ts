import { afterEach, describe, expect, it, vi } from "vitest";
import { canonicalMetadata } from "@/lib/seo";

afterEach(() => vi.unstubAllEnvs());

describe("canonicalMetadata", () => {
  it("uses the production origin when no public site URL is configured", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");
    expect(canonicalMetadata("/contact")).toEqual({
      alternates: { canonical: "https://core-craft-roan.vercel.app/contact" },
    });
  });

  it("returns an absolute canonical URL on the configured public origin", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://coreandcraft.example/path");
    expect(canonicalMetadata("/contact")).toEqual({
      alternates: { canonical: "https://coreandcraft.example/contact" },
    });
  });
});
