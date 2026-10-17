import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { MotionConfig } from "motion/react";
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
  keywords: [
    "Md. Jabbir Ali",
    "Web Developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "PHP",
    "Laravel",
    "Frontend Development",
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
    jobTitle: "Web Developer",
    url: siteConfig.url,
    sameAs: [
      siteConfig.socials.github,
      siteConfig.socials.linkedin,
    ],
    knowsAbout: [
      "Web Development",
      "Next.js",
      "TypeScript",
      "PHP / Laravel",
      "REST APIs",
    ],
    description: siteConfig.bio,
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('jabbir-portfolio-theme');if(t!=='dark'&&t!=='light'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* No-JS fallback: motion components render with inline opacity:0 /
            transforms in the server HTML. Force them visible when JS is off. */}
        <noscript>
          <style>{`[data-anim]{opacity:1!important;transform:none!important;filter:none!important;}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg-app)] text-[var(--text-primary)] bg-technical-grid selection:bg-indigo-500/30 selection:text-white">
        <MotionConfig reducedMotion="user">
        <ThemeProvider>
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
        </ThemeProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
