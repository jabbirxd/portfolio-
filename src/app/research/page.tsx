"use client";

import React from "react";
import { researchInterestsData } from "@/data/research";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ResearchInterestCard } from "@/components/research/ResearchInterestCard";
import { Card } from "@/components/ui/Card";
import { FlaskConical } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="py-12 sm:py-16 space-y-20">
      <Container size="xl">
        <Breadcrumb items={[{ label: "Research Interests" }]} />

        {/* 1. Research Hero Section */}
        <div className="space-y-6 pb-12 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>LEARNING IN PUBLIC · NO CLAIMS, JUST CURIOSITY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight font-sans">
            Research Interests
          </h1>

          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl leading-relaxed font-sans">
            Outside of web development, I spend time learning computational
            biology and how computation helps explore biological questions.
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed font-sans">
            I am doing independent study in computational drug design, with a
            manuscript in preparation. Until it is published, the details stay
            private — so this page covers the areas I am learning about, not
            results.
          </p>
        </div>

        {/* 2. Research Interests Grid */}
        <section className="space-y-8">
          <SectionHeader
            eyebrow="What I'm learning"
            title="Areas of Interest"
            description="Topics I read about and study alongside my coursework. Interests, not credentials."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {researchInterestsData.map((interest) => (
              <ResearchInterestCard key={interest.id} interest={interest} />
            ))}
          </div>
        </section>

        {/* 3. Honest note */}
        <section>
          <Card variant="studio" className="p-8 sm:p-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 font-sans">
              Why so little detail?
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans max-w-3xl">
              Unpublished research should stay unpublished until it is ready.
              I would rather show an honest short page than a long impressive
              one I cannot back up. If you are curious about the computational
              side, my web projects are a better window into how I work.
            </p>
          </Card>
        </section>
      </Container>
    </div>
  );
}
