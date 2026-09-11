import type { Metadata } from "next";
import { Kanit, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/ui/JsonLd";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  variable: "--font-kanit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

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
    default: "Wael Hammali — Software Engineering | AI & Cybersecurity",
    template: "%s | Wael Hammali",
  },
  description:
    "Software Engineering portfolio of Wael Hammali, student at ENIT focused on artificial intelligence, cybersecurity, cloud infrastructure and automation — building multi-agent AI systems for penetration testing and network-to-cloud translation.",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${kanit.variable} ${space.variable} ${plex.variable} font-sans bg-ink text-paper antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
        <PersonJsonLd />
        <WebsiteJsonLd />
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
