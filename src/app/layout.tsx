import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  keywords: [
    "Mohammad Jabbir",
    "Developer",
    "Designer",
    "Researcher",
    "Full-Stack",
    "PHP Laravel",
    "Web Scraping",
    "Workflow Automation",
    "Biomedical Research",
    "Computational Biology",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Developer · Designer · Researcher",
    url: siteConfig.url,
    sameAs: [
      siteConfig.socials.github,
      siteConfig.socials.linkedin,
      siteConfig.socials.twitter,
    ],
    knowsAbout: [
      "Web Development",
      "PHP / Laravel",
      "UI/UX Design",
      "Web Scraping & Automation",
      "Computational Biology",
      "Molecular Docking & In Silico Analysis",
    ],
    description: siteConfig.bio,
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#05070a] text-[#f1f5f9] bg-technical-grid selection:bg-indigo-500/30 selection:text-white">
        {/* Accessible Skip-to-Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-indigo-600 focus:text-white focus:font-mono focus:text-xs focus:rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:shadow-2xl"
        >
          Skip to main content
        </a>

        {/* Ambient Studio & Laboratory Lighting (Restrained & High Contrast) */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-indigo-500/[0.07] to-transparent blur-[140px] rounded-full" />
          <div className="absolute top-[60%] right-[-5%] w-[450px] h-[350px] bg-emerald-500/[0.04] blur-[140px] rounded-full" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
