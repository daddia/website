import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const csp = [
  "default-src 'self'",
  [
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
    isDev ? "https://vercel.live" : "",
  ]
    .filter(Boolean)
    .join(" "),
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: https://www.google-analytics.com",
  "font-src 'self' https://fonts.gstatic.com",
  [
    "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com",
    isDev ? "https://vercel.live wss://vercel.live" : "",
  ]
    .filter(Boolean)
    .join(" "),
  "frame-src 'self' https://www.googletagmanager.com",
  "object-src 'none'",
].join("; ");

const nextConfig: NextConfig = {
  reactCompiler: true,
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        { key: "Content-Security-Policy", value: csp },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
  ],
};

export default nextConfig;
