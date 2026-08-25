import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/ui/JsonLd";
import "./globals.css";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex",
  display: "swap",
  weight: ["400", "500", "600"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://waelhammali.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Wael Hammali — Software Engineering Student at ENIT",
    template: "%s | Wael Hammali",
  },
  description:
    "Software engineering student at ENIT focused on Cloud, AI, and Cybersecurity. Building secure, scalable systems with computer vision, RAG, and infrastructure automation.",
  keywords: [
    "Wael Hammali", "ENIT", "Software Engineering Tunisia",
    "Cybersecurity", "Cloud Security", "RAG", "Computer Vision",
    "Network Automation", "Terraform", "Ansible", "AI", "Python",
    "Next.js", "Portfolio",
  ],
  authors: [{ name: "Wael Hammali", url: BASE_URL }],
  creator: "Wael Hammali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Wael Hammali",
    title: "Wael Hammali — Software Engineering Student",
    description: "Cloud, AI, and Cybersecurity student at ENIT building secure systems and AI-powered infrastructure.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Wael Hammali — Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wael Hammali",
    description: "Software engineering student · Cloud · AI · Cybersecurity · ENIT",
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
  verification: {
    google: "PASTE_YOUR_GOOGLE_VERIFICATION_TOKEN_HERE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${space.variable} ${plex.variable} font-sans bg-[#0d0f14] text-slate-100 antialiased`}>
        <PersonJsonLd />
        <WebsiteJsonLd />
        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
