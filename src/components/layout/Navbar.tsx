"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useScrollSpy } from "@/components/layout/useScrollSpy";

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

  // Single source of truth for nav links (titles/hrefs live in siteConfig).
  // Desktop shows the 4 section links + a Contact button; mobile shows all.
  const mainNavLinks = siteConfig.navItems.filter((item) =>
    ["/work", "/research", "/about", "/skills"].includes(item.href)
  );

  // Scrollspy: on the home page, highlight the nav item whose preview
  // section is currently in view (single-page feel on a multi-page site).
  const HOME_SPY_IDS = [
    "home-intro",
    "home-ship",
    "home-work",
    "home-exploring",
    "home-research",
    "home-capabilities",
  ];
  const SPY_HREF: Record<string, string> = {
    "home-intro": "/about",
    "home-ship": "/work",
    "home-work": "/work",
    "home-exploring": "/skills",
    "home-research": "/research",
    "home-capabilities": "/skills",
  };
  const isHomePage = pathname === "/";
  const spyId = useScrollSpy(isHomePage ? HOME_SPY_IDS : []);
  const spyHref = spyId ? SPY_HREF[spyId] ?? null : null;
  const isActiveLink = (href: string) =>
    spyHref ? href === spyHref : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 border-b",
        scrolled
          ? "border-[var(--border-default)] bg-[var(--bg-app)]/90 backdrop-blur-md shadow-lg shadow-black/20"
          : "border-[var(--border-subtle)] bg-[var(--bg-app)]/60 backdrop-blur-sm"
      )}
    >
      <Container size="xl">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Left: Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg py-1 px-1.5"
          >
            <span className="text-sm sm:text-base font-extrabold tracking-wider text-[var(--text-primary)] group-hover:text-[var(--accent-studio)] transition-colors uppercase font-mono">
              Md. Jabbir Ali
            </span>
          </Link>

          {/* Center / Right: Main Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 sm:gap-2">
            {mainNavLinks.map((item) => {
              const isActive = isActiveLink(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wide transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500/50",
                    isActive
                      ? "text-[var(--text-primary)] font-bold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-lg bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)]"
                      transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{item.title}</span>
                </Link>
              );
            })}
            {/* Contact: small primary button at the end of the links */}
            <Link
              href="/contact"
              className={cn(
                "relative px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold tracking-wide transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500/50",
                "bg-indigo-600 hover:bg-indigo-500 text-white",
                pathname === "/contact" && "ring-2 ring-indigo-400/60"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Right: Resume, GitHub, LinkedIn */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface-subtle)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            >
              <FileText className="w-3.5 h-3.5 text-[var(--accent-studio)]" />
              <span>Resume</span>
            </Link>

            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface-subtle)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface-subtle)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <ThemeToggle />
          </div>

          {/* Mobile: theme toggle + menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
        <div className="lg:hidden border-b border-[var(--border-default)] bg-[var(--bg-app)]/98 backdrop-blur-xl px-5 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-1">
            {siteConfig.navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/" && !spyHref
                  : isActiveLink(item.href);
              const isResume = item.href === "/resume";
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-3.5 py-2.5 rounded-lg text-sm font-mono transition-colors",
                    isResume && "flex items-center gap-2",
                    isActive
                      ? "text-[var(--accent-studio)] bg-[var(--accent-studio-subtle)] font-bold border border-[var(--accent-studio-border)]"
                      : "text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
                  )}
                >
                  {isResume && (
                    <FileText className="w-4 h-4 text-[var(--accent-studio)]" />
                  )}
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-[var(--text-secondary)] bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)]"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-[var(--text-secondary)] bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)]"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-studio)] hover:text-[var(--accent-studio)]"
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
