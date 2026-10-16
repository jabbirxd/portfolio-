import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Mail, ArrowUpRight, Cpu, Layers, Dna } from "lucide-react";

export function Footer() {
  const footerLinks = [
    { label: "Work", href: "/work", isExternal: false },
    { label: "Research", href: "/research", isExternal: false },
    { label: "About", href: "/about", isExternal: false },
    { label: "CV", href: "/resume", isExternal: false },
    { label: "GitHub", href: siteConfig.socials.github, isExternal: true },
    { label: "LinkedIn", href: siteConfig.socials.linkedin, isExternal: true },
    { label: "Email", href: `mailto:${siteConfig.socials.email}`, isExternal: true },
  ];

  return (
    <footer className="mt-auto border-t border-white/[0.08] bg-[#05070a] text-slate-400 py-12 sm:py-16">
      <Container size="xl">
        {/* Subtle Visual Motif: Build · Design · Research Nodal Bridge */}
        <div className="mb-10 p-4 sm:p-6 rounded-2xl bg-[#080b11] border border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 select-none">
          <div className="flex items-center gap-6 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span className="text-white font-bold">01 // BUILD</span>
              <span className="text-slate-600 hidden sm:inline">Web Apps</span>
            </div>
            <span className="text-slate-700">→</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span className="text-white font-bold">02 // DESIGN</span>
              <span className="text-slate-600 hidden sm:inline">Interfaces</span>
            </div>
            <span className="text-slate-700">→</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-white font-bold">03 // INVESTIGATE</span>
              <span className="text-slate-600 hidden sm:inline">Computational Biology</span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 tracking-wider">
            LEARN · BUILD · SHIP
          </div>
        </div>

        {/* Main Identity & Navigation Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          {/* Identity */}
          <div className="space-y-1">
            <h2 className="text-base font-extrabold text-white tracking-tight font-sans">
              MD. JABBIR ALI
            </h2>
            <p className="text-xs font-mono text-indigo-300">
              Web Developer
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
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-600" />
                  </a>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Copyright & Technical Signature */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Md. Jabbir Ali</p>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Next.js App Router</span>
            <span>·</span>
            <span>TypeScript</span>
            <span>·</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
