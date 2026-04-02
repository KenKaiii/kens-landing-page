import type { Metadata } from "next";
import localFont from "next/font/local";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import "./globals.css";

const bitcountSingle = localFont({
  src: "../fonts/bitcount-single-latin.woff2",
  variable: "--font-bitcount-single",
  display: "swap",
  weight: "400",
  preload: false,
});

const datatype = localFont({
  src: "../fonts/datatype-latin.woff2",
  variable: "--font-datatype",
  display: "swap",
  weight: "400",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Your SaaS — Tagline that hooks visitors",
    template: "%s | Your SaaS",
  },
  description:
    "A brief, compelling description of your SaaS product. What problem do you solve? Who is it for? Keep it under 160 characters for SEO.",
  keywords: ["your keyword", "another keyword", "saas", "product"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "Your SaaS",
    title: "Your SaaS — Tagline that hooks visitors",
    description: "A brief, compelling description of your SaaS product.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your SaaS — Tagline that hooks visitors",
    description: "A brief, compelling description of your SaaS product.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bitcountSingle.variable} ${datatype.variable} antialiased`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
