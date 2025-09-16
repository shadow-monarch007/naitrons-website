import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SEOJsonLd } from "@/components/SEOJsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://naitrons.example.com';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "nAItronS — AI Solutions & Portfolio",
    template: "%s | nAItronS",
  },
  description:
    "nAItronS delivers bespoke AI, automation, and data visualization solutions. Explore our services and portfolio.",
  keywords: [
    "nAItronS",
    "AI consulting",
    "machine learning",
    "automation",
    "data visualization",
    "portfolio",
  ],
  openGraph: {
    title: "nAItronS — AI Solutions & Portfolio",
    description:
      "Bespoke AI, automation, and visualization solutions. Discover our services and selected case studies.",
    type: "website",
    url: "https://naitrons.example.com",
    siteName: "nAItronS",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "nAItronS — AI Solutions & Portfolio",
    description:
      "AI, automation, and data visualization services & portfolio by nAItronS.",
    creator: "@naitrons",
  },
  metadataBase: new URL("https://naitrons.example.com"),
  category: "technology",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover' as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // suppressHydrationWarning prevents noisy mismatches for intentional client-only theme toggling classes
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={siteUrl} />
        <SEOJsonLd />
        {process.env.NEXT_PUBLIC_ANALYTICS_ID && (
          <script
            defer
            data-domain="naitrons"
            data-analytics-id={process.env.NEXT_PUBLIC_ANALYTICS_ID}
            src={`https://analytics.example.com/script.js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
          />
        )}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
