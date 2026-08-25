"use client";

import React from "react";
import Link from "next/link";
import { researchData, researchInterestsData } from "@/data/research";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ResearchCard } from "@/components/cards/ResearchCard";
import { ResearchInterestCard } from "@/components/research/ResearchInterestCard";
import { ScientificPathwayVisual } from "@/components/research/ScientificPathwayVisual";
import { PlaceholderCallout } from "@/components/ui/PlaceholderCallout";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FlaskConical, ArrowRight, Dna, Compass, BookOpen, ExternalLink, Target } from "lucide-react";

export default function ResearchPage() {
  const featuredStudy = researchData.find((r) => r.isFeatured) || researchData[0];

  return (
    <div className="py-12 sm:py-16 space-y-20">
      <Container size="xl">
        <Breadcrumb items={[{ label: "Scientific Research" }]} />

        {/* 1. Research Hero Section */}
        <div className="space-y-6 pb-12 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>MOLECULAR SCIENCE · COMPUTATION · ONCOLOGY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight font-sans">
            Research
          </h1>

          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl leading-relaxed font-sans">
            Exploring biological questions through molecular science, computation, and technology.
          </p>

          <PlaceholderCallout
            label="Research Framework"
            field="Presented as active academic research interests and in silico exploratory case studies without unverified claims of expertise"
          />
        </div>

        {/* 2. Research Interests Visual Grid */}
        <section className="space-y-8">
          <SectionHeader
            eyebrow="Academic Focus Areas"
            title="Core Research Interests"
            description="Active areas of investigation spanning structural oncology, programmed cell death mechanisms, and computational screening methodologies."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {researchInterestsData.map((interest) => (
              <ResearchInterestCard key={interest.id} interest={interest} />
            ))}
          </div>
        </section>

        {/* 3. Featured Research Showcase & Scientific Pathway Visual */}
        <section className="space-y-8 pt-4">
          <SectionHeader
            eyebrow="Featured Investigation"
            title="Targeting Anti-Apoptotic Bcl-2 Family Proteins in Cancer"
            description="A computational study evaluating hydrophobic binding groove dynamics, in silico docking conformations, and candidate small-molecule screening."
          />

          {/* Mechanistic Pathway Diagram */}
          <ScientificPathwayVisual />

          {/* Featured Study Summary Card */}
          {featuredStudy && (
            <Card variant="interactive" className="p-8 sm:p-10 border-emerald-500/30 bg-[#070a10] space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Badge variant="research" size="md">
                    {featuredStudy.domain}
                  </Badge>
                  <span className="text-xs font-mono text-slate-400">
                    // {featuredStudy.timeline}
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                  Status: {featuredStudy.status}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  <Link href={`/research/${featuredStudy.slug}`} className="hover:text-emerald-300 transition-colors">
                    {featuredStudy.title}
                  </Link>
                </h3>
                <p className="text-sm font-mono text-emerald-400/90">
                  {featuredStudy.tagline}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed max-w-4xl font-sans">
                  {featuredStudy.abstract}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {featuredStudy.methods.map((method) => (
                    <span
                      key={method}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-950/30 text-emerald-300 border border-emerald-800/40"
                    >
                      {method}
                    </span>
                  ))}
                </div>

                <Button
                  href={`/research/${featuredStudy.slug}`}
                  variant="research"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Read Full Research Study
                </Button>
              </div>
            </Card>
          )}
        </section>

        {/* 4. All Research Studies Catalog */}
        <section className="space-y-8 pt-4">
          <SectionHeader
            eyebrow="Research Catalog"
            title="All Investigations & Pipeline Studies"
            description="Curated index of computational oncology and biomedical dataset processing workflows."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {researchData.map((item) => (
              <ResearchCard key={item.id} research={item} />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
