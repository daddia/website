import type { Metadata, Viewport } from "next";
import { fontClassNames } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "daddia",
  description: "Welcome to daddia",
  metadataBase: new URL("https://daddia.com"),
  manifest: "/site.webmanifest",
  openGraph: {
    title: "daddia",
    description: "Welcome to daddia",
    url: "https://daddia.com",
    siteName: "daddia",
    images: [{ url: "/logo/logo.png" }],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#4CA77F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontClassNames} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
