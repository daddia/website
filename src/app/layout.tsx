import type { Metadata, Viewport } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Footer } from "@/components/footer";
import { fontClassNames } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "daddia",
  description: "Welcome to daddia",
  metadataBase: new URL("https://daddia.com"),
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

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontClassNames} antialiased`}>
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      <body className="flex min-h-screen flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
