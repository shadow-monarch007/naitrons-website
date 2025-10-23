import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SEOJsonLd } from "@/components/SEOJsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://naitrons.tech';

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
    default: "Naitrons — AI Solutions & Portfolio",
    template: "%s | Naitrons",
  },
  description:
    "Naitrons delivers bespoke AI, automation, and data visualization solutions. Explore our services and portfolio.",
  keywords: [
    "Naitrons",
    "AI consulting",
    "machine learning",
    "automation",
    "data visualization",
    "portfolio",
  ],
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/naitrons-logo.png',
    shortcut: ['/icon.svg', '/favicon.png'],
  },
  openGraph: {
    title: "Naitrons — AI Solutions & Portfolio",
    description:
      "Bespoke AI, automation, and visualization solutions. Discover our services and selected case studies.",
    type: "website",
    url: siteUrl,
    siteName: "Naitrons",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naitrons — AI Solutions & Portfolio",
    description:
      "AI, automation, and data visualization services & portfolio by Naitrons.",
    creator: "@naitrons",
  },
  metadataBase: new URL(siteUrl),
  category: "technology",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
        {/* Prevent theme flash: apply saved or system theme before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {try{const pref=localStorage.getItem('theme-pref')||'system';const sys=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';const eff=pref==='system'?sys:pref;const root=document.documentElement;root.classList.remove('light');root.classList.remove('dark');if(eff==='dark'){root.classList.add('dark');}if(eff==='light'){root.classList.add('light');}}catch(e){}})();`
          }}
        />
        <SEOJsonLd />
        {process.env.NEXT_PUBLIC_ANALYTICS_ID && (
          <script
            defer
            data-domain="naitrons.tech"
            data-analytics-id={process.env.NEXT_PUBLIC_ANALYTICS_ID}
            src={`https://analytics.example.com/script.js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
          />
        )}
        {/* GSAP for animations - load only when needed */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" defer />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" defer />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
