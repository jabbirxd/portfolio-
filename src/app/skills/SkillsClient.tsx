"use client";

import { Reveal } from "@/components/motion/Reveal";

import React from "react";
;
import { skillsCategories } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
;
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SkillGroupCard } from "@/components/cards/SkillGroupCard";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function SkillsClient() {
  return (
    <div className="py-12 sm:py-16">
      <Container size="xl" className="space-y-12 sm:space-y-16">
        <Breadcrumb items={[{ label: "Skills & Capabilities" }]} />

        {/* 1. Header */}
        <div className="space-y-6 pb-12 border-b border-[var(--border-default)]">
          <Eyebrow
            variant="studio"
            icon={<ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-research)]" />}
          >
            TECHNICAL SKILLS & TOOLS
          </Eyebrow>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-sans">
            Capabilities & Competencies
          </h1>

          <p className="text-lg sm:text-2xl text-[var(--text-secondary)] max-w-3xl leading-relaxed font-sans">
            An honest list: what I&apos;m comfortable with, what I&apos;m learning, and what I&apos;m curious about. No percentage bars, no padding.
          </p>

        </div>

        {/* 2. Categorized Skill Grid (5 Disciplines) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillsCategories.map((category, i) => (
            <Reveal key={category.id} delay={(i % 3) * 0.08}>
              <SkillGroupCard category={category} />
            </Reveal>
          ))}
        </div>

        {/* 3. Methodology & Tooling Philosophy */}
        <Reveal>
        <Card variant="studio" className="p-8 sm:p-12 border-[var(--border-default)] bg-[var(--bg-surface)] space-y-6">
          <div className="max-w-3xl space-y-4">
            <Eyebrow variant="studio">Engineering Standard</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-sans">
              Evidence-Based Capabilities
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-sans">
              Tools change fast. I skip the percentage bars: each skill above links to a real project where I actually used it. If it is not linked to something I built, it is under “currently learning” for a reason.
            </p>
          </div>

          <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-4 items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
            <span>Explore all case studies linked directly above</span>
            <Button href="/work" variant="primary" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              Browse Full Case Studies
            </Button>
          </div>
        </Card>
        </Reveal>
      </Container>
    </div>
  );
}
