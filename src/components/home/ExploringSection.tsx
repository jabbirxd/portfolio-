"use client";

import { Reveal } from "@/components/motion/Reveal";

import React from "react";
import Link from "next/link";
import { currentlyExploringData } from "@/data/exploring";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, Sparkles, Cpu, Dna, Activity } from "lucide-react";

export function ExploringSection() {
  const getIcon = (order: string) => {
    switch (order) {
      case "01":
        return <Cpu className="w-5 h-5 text-[var(--accent-studio)]" />;
      case "02":
        return <Activity className="w-5 h-5 text-[var(--accent-research)]" />;
      case "03":
        return <Dna className="w-5 h-5 text-[var(--accent-system)]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[var(--accent-studio)]" />;
    }
  };

  return (
    <section id="home-exploring" className="relative pt-12 sm:pt-16 scroll-mt-24">
      <Container size="xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border border-[var(--border-default)]">
              {/* Subtle animated indicator for current focus */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="tracking-wider uppercase">CURRENT_INQUIRY // ACTIVE_FOCUS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-sans">
              Currently Exploring
            </h2>

            <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed font-sans">
              What I'm focused on right now: building, learning, and staying curious.
            </p>
          </div>

          <div className="hidden md:block text-right font-mono text-xs text-[var(--text-secondary)]">
            <span>UPDATED REGULARLY</span>
          </div>
        </div>

        {/* 3 Elegant Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {currentlyExploringData.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08} className="h-full">
            <Card
              key={item.id}
              variant="interactive"
              className="flex flex-col justify-between p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)] border-[var(--border-default)] hover:border-[var(--border-strong)] transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[var(--text-primary)]/90">
                    {item.order}
                  </span>
                  <div className="p-2 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)]">
                    {getIcon(item.order)}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight font-sans mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[var(--accent-studio)] font-medium">
                    {item.category}
                  </p>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] leading-relaxed font-sans">
                  {item.summary}
                </p>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Themes */}
                <div className="pt-2">
                  <span className="text-xs font-mono text-[var(--text-secondary)] uppercase block mb-1.5">
                    Core Focus Points:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.currentThemes.map((theme) => (
                      <span
                        key={theme}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link to Relevant Project / Research */}
              {item.linkUrl && (
                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-xs font-mono text-[var(--text-secondary)]">
                    {item.statusTag}
                  </span>
                  <Link
                    href={item.linkUrl}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[var(--text-primary)] hover:text-[var(--accent-studio)] hover:translate-x-0.5 transition-all"
                  >
                    <span>{item.linkLabel || "Explore"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
