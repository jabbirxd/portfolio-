import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/ui/Container";
;
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  // Page links come from the single nav source (Work, Research, About,
  // Skills, Resume, Contact — same order as desktop nav and mobile menu).
  const footerLinks = [
    ...siteConfig.navItems
      .filter((item) => item.href !== "/")
      .map((item) => ({ label: item.title, href: item.href, isExternal: false })),
    { label: "GitHub", href: siteConfig.socials.github, isExternal: true },
    { label: "LinkedIn", href: siteConfig.socials.linkedin, isExternal: true },
    { label: "Email", href: `mailto:${siteConfig.socials.email}`, isExternal: true },
  ];

  return (
    <footer className="mt-auto border-t border-[var(--border-default)] bg-[var(--bg-app)] text-[var(--text-secondary)] py-12 sm:py-16">
      <Container size="xl">
        {/* Subtle Visual Motif: Build · Design · Research Nodal Bridge */}
        <div className="mb-10 p-4 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-4 select-none">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs font-mono text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span className="text-[var(--text-primary)] font-bold">01 // BUILD</span>
              <span className="text-[var(--text-muted)] hidden sm:inline">Web Apps</span>
            </div>
            <span className="text-[var(--text-muted)] rotate-90 sm:rotate-0 self-start sm:self-auto">→</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span className="text-[var(--text-primary)] font-bold">02 // DESIGN</span>
              <span className="text-[var(--text-muted)] hidden sm:inline">Interfaces</span>
            </div>
            <span className="text-[var(--text-muted)] rotate-90 sm:rotate-0 self-start sm:self-auto">→</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[var(--text-primary)] font-bold">03 // INVESTIGATE</span>
              <span className="text-[var(--text-muted)] hidden sm:inline">CADD Research</span>
            </div>
          </div>

          <div className="text-xs font-mono text-[var(--text-secondary)] tracking-wider">
            LEARN · BUILD · SHIP
          </div>
        </div>

        {/* Main Identity & Navigation Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-[var(--border-subtle)]">
          {/* Identity */}
          <div className="space-y-1">
            <h2 className="text-base font-extrabold text-[var(--text-primary)] tracking-tight font-sans">
              MD. JABBIR ALI
            </h2>
            <p className="text-xs font-mono text-[var(--accent-studio)]">
              Web Developer · CADD Researcher
            </p>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono">
            {footerLinks.map((item) => {
              if (item.isExternal) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
                  </a>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Copyright & Technical Signature */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
          <p>© 2026 Md. Jabbir Ali</p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs">
            <span className="whitespace-nowrap">Next.js App Router</span>
            <span aria-hidden="true">·</span>
            <span className="whitespace-nowrap">TypeScript</span>
            <span aria-hidden="true">·</span>
            <span className="whitespace-nowrap">Tailwind CSS</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
