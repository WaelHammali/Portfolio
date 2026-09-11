import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono, Caveat } from "next/font/google";

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

// hand-written accent used only for the small "More Than Code" hero tag
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["600", "700"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://waelhammali.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Wael Hammali — Software Engineering Student at ENIT",
    template: "%s | Wael Hammali",
  },
  description:
    "Wael Hammali, software engineering and SYSCOM research master's student at ENIT. Projects in artificial intelligence, computer vision, cybersecurity, and cloud automation.",
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
    description: "Software engineering and SYSCOM research master's student at ENIT working on AI, computer vision, cybersecurity, and cloud automation.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Wael Hammali — Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wael Hammali",
    description: "Software engineering · SYSCOM research master's · AI · Computer vision · Cybersecurity · ENIT",
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
      <body className={`${space.variable} ${plex.variable} ${caveat.variable} font-sans bg-[#0d0f14] text-slate-100 antialiased`}>
        {/* Marks JS as available so the Hero/About progressive-enhancement
            reveal (components/motion/FadeIn) animates in instead of staying
            static-visible; see the `.reveal` rules in globals.css. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
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
