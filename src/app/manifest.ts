import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Technology Company",
    short_name: "Technology Company",
    description: "Digital products, data, AI, and platform services.",
    start_url: "/",
    display: "standalone",
    background_color: "#050b16",
    theme_color: "#66dff7",
    orientation: "portrait-primary",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
