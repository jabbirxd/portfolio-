"use client";

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
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case "02":
        return <Activity className="w-5 h-5 text-emerald-400" />;
      case "03":
        return <Dna className="w-5 h-5 text-cyan-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="exploring" className="relative pt-12 sm:pt-16">
      <Container size="xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/[0.08]">
              {/* Subtle animated indicator for current focus */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="tracking-wider uppercase">CURRENT_INQUIRY // ACTIVE_FOCUS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              Currently Exploring
            </h2>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
              Ongoing investigative interests, emerging workflows, and active technical deep-dives across computation and biology.
            </p>
          </div>

          <div className="hidden md:block text-right font-mono text-[11px] text-slate-500">
            <span>UPDATED REGULARLY</span>
          </div>
        </div>

        {/* 3 Elegant Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {currentlyExploringData.map((item) => (
            <Card
              key={item.id}
              variant="interactive"
              className="flex flex-col justify-between p-6 sm:p-8 space-y-6 bg-[#0a0d14] border-white/[0.08] hover:border-white/[0.2] transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white/90">
                    {item.order}
                  </span>
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    {getIcon(item.order)}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight font-sans mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-indigo-300 font-medium">
                    {item.category}
                  </p>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-slate-200 leading-relaxed font-sans">
                  {item.summary}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Themes */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1.5">
                    Core Focus Points:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.currentThemes.map((theme) => (
                      <span
                        key={theme}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.02] text-slate-300 border border-white/[0.06]"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link to Relevant Project / Research */}
              {item.linkUrl && (
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">
                    {item.statusTag}
                  </span>
                  <Link
                    href={item.linkUrl}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-white hover:text-indigo-400 hover:translate-x-0.5 transition-all"
                  >
                    <span>{item.linkLabel || "Explore"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
