"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavLinks = [
    { title: "Work", href: "/work" },
    { title: "Research", href: "/research" },
    { title: "About", href: "/about" },
    { title: "Skills", href: "/skills" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 border-b",
        scrolled
          ? "border-white/[0.08] bg-[#05070a]/90 backdrop-blur-md shadow-lg shadow-black/20"
          : "border-white/[0.04] bg-[#05070a]/60 backdrop-blur-sm"
      )}
    >
      <Container size="xl">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Left: Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg py-1 px-1.5"
          >
            <span className="text-sm sm:text-base font-extrabold tracking-wider text-white group-hover:text-indigo-300 transition-colors uppercase font-mono">
              Mohammad Jabbir
            </span>
          </Link>

          {/* Center / Right: Main Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            {mainNavLinks.map((item) => {
              const isActive = pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wide transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500/50",
                    isActive
                      ? "text-white bg-white/[0.08] font-bold border border-white/[0.06]"
                      : "text-slate-400 hover:text-slate-100 hover:bg-white/[0.03]"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Right: CV, GitHub, LinkedIn */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>CV</span>
            </Link>

            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Animated Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#05070a]/98 backdrop-blur-xl px-5 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "px-3.5 py-2.5 rounded-lg text-sm font-mono transition-colors",
                pathname === "/"
                  ? "text-white bg-white/[0.08] font-bold"
                  : "text-slate-300 hover:bg-white/[0.04]"
              )}
            >
              Home
            </Link>
            {mainNavLinks.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-3.5 py-2.5 rounded-lg text-sm font-mono transition-colors",
                    isActive
                      ? "text-white bg-indigo-950/40 text-indigo-300 font-bold border border-indigo-500/20"
                      : "text-slate-300 hover:bg-white/[0.04]"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
            <Link
              href="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg text-sm font-mono text-slate-300 hover:bg-white/[0.04] flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>Curriculum Vitae (CV)</span>
            </Link>
          </nav>

          <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-slate-300 bg-white/[0.04] border border-white/[0.06]"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-slate-300 bg-white/[0.04] border border-white/[0.06]"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
