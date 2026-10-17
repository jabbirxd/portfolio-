"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { researchInterestsData } from "@/data/research";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ResearchInterestCard } from "@/components/research/ResearchInterestCard";
import { Card } from "@/components/ui/Card";
import { FlaskConical } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container size="xl" className="space-y-16 sm:space-y-20">
        <Breadcrumb items={[{ label: "Research Interests" }]} />

        {/* 1. Research Hero Section */}
        <div className="space-y-6 pb-12 border-b border-[var(--border-default)]">
          <Eyebrow
            variant="research"
            icon={<FlaskConical className="w-3.5 h-3.5" />}
          >
            LEARNING IN PUBLIC · NO CLAIMS, JUST CURIOSITY
          </Eyebrow>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-sans">
            Research Interests
          </h1>

          <p className="text-lg sm:text-2xl text-[var(--text-secondary)] max-w-3xl leading-relaxed font-sans">
            Outside of web development, I spend time learning computational
            biology and how computation helps explore biological questions.
          </p>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-3xl leading-relaxed font-sans">
            I am doing independent study in computational drug design, with a
            manuscript in preparation. Until it is published, the details stay
            private — so this page covers the areas I am learning about, not
            results.
          </p>
        </div>

        {/* 2. Research Interests Grid */}
        <Reveal>
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
        </Reveal>

        {/* 3. Honest note */}
        <Reveal>
          <section>
          <Card variant="studio" className="p-8 sm:p-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3 font-sans">
              Why so little detail?
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-sans max-w-3xl">
              Unpublished research should stay unpublished until it is ready.
              I would rather show an honest short page than a long impressive
              one I cannot back up. If you are curious about the computational
              side, my web projects are a better window into how I work.
            </p>
          </Card>
          </section>
        </Reveal>
      </Container>
    </div>
  );
}
