"use client";

import React from "react";
import Link from "next/link";
import { skillsCategories } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SkillGroupCard } from "@/components/cards/SkillGroupCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowRight, ShieldCheck, Layers, Terminal } from "lucide-react";

export default function SkillsPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      <Container size="xl">
        <Breadcrumb items={[{ label: "Skills & Capabilities" }]} />

        {/* 1. Header */}
        <div className="space-y-6 pb-12 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>CONFIRMED TECHNICAL & METHODOLOGICAL MATRIX</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight font-sans">
            Capabilities & Competencies
          </h1>

          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl leading-relaxed font-sans">
            An honest list: what I'm comfortable with, what I'm learning, and what I'm curious about. No percentage bars, no padding.
          </p>

        </div>

        {/* 2. Categorized Skill Grid (5 Disciplines) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillsCategories.map((category) => (
            <SkillGroupCard key={category.id} category={category} />
          ))}
        </div>

        {/* 3. Methodology & Tooling Philosophy */}
        <Card variant="studio" className="p-8 sm:p-12 border-white/[0.08] bg-[#070a10] space-y-6">
          <div className="max-w-3xl space-y-4">
            <Badge variant="studio">Engineering Standard</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans">
              Evidence-Based Capabilities
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              Tools change fast. I skip the percentage bars: each skill above links to a real project where I actually used it. If it is not linked to something I built, it is under “currently learning” for a reason.
            </p>
          </div>

          <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-4 items-center justify-between text-xs font-mono text-slate-400">
            <span>Explore all case studies linked directly above</span>
            <Button href="/work" variant="primary" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              Browse Full Case Studies
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
}
