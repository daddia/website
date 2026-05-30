import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "daddia.",
    short_name: "daddia.",
    description: "daddia.com",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4CA77F",
    icons: [
      {
        src: "/favicon/favicon.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/logo/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/logo/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
