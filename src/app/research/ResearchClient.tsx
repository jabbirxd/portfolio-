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

export function ResearchClient() {
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
            I am a Computer-Aided Drug Discovery (CADD) researcher alongside web development — co-first author on a manuscript currently under review.
          </p>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-3xl leading-relaxed font-sans">
            At Northern University of Business and Technology Khulna, in collaboration with University of Dhaka, I designed 9 derivatives of 3 parent flavonoids, ran molecular docking (AutoDock Vina), 100 ns MD simulations, and MM/GBSA binding free energy calculations.
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
              Where the research stands
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-sans max-w-3xl">
              The manuscript is under review at a journal, so results and figures are not public yet. I will add a link to the paper here once it is out.
            </p>
          </Card>
          </section>
        </Reveal>
      </Container>
    </div>
  );
}
