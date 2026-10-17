import React from "react";
import type { Metadata } from "next";
import { researchInterestsData } from "@/data/research";
import { skillsCategories } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ResearchInterestCard } from "@/components/research/ResearchInterestCard";
import { Hero } from "@/components/hero/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { WorkSection } from "@/components/home/WorkSection";
import { ExploringSection } from "@/components/home/ExploringSection";
import { ArrowRight } from "lucide-react";
import { Reveal, Counter } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Marquee";
import { GitGraphCanvas } from "@/components/motion/GitGraphCanvas";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featuredInterests = researchInterestsData.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* 1. Hero Section */}
      <Hero />

      {/* Skills ticker */}
      <div className="relative py-2" aria-label="Skills ticker">
        <Marquee speed={42}>
          {skillsCategories.flatMap((cat) => cat.skills).map((skill, i) => (
            <span
              key={`${skill.name}-${i}`}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
            >
              {skill.name}
            </span>
          ))}
        </Marquee>
      </div>

      {/* 2. Introduction & 3 Capability Cards Section */}
      <IntroSection />

      {/* 2b. Git history canvas — how the work ships */}
      <section id="home-ship" aria-label="How I ship" className="scroll-mt-24">
        <Container size="xl">
          <Reveal>
            <SectionHeader
              eyebrow="Version control"
              title="Branch, commit, ship"
              description="Every project moves the same way — small branches, clear commits, merged when ready."
              align="center"
            />
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden">
              <GitGraphCanvas className="block w-full h-[300px] sm:h-[340px]" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 3. Main Selected Work Section (Editorial Layout + Filters) */}
      <WorkSection />

      {/* 4. Currently Exploring Section (01 Comp Bio, 02 Cancer Research, 03 AI Automation) */}
      <ExploringSection />

      {/* 5. Research Interests Preview */}
      <section id="home-research" className="scroll-mt-24">
        <Container size="xl">
          <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
            <SectionHeader
              eyebrow="Beyond code"
              title="Research Interests"
              description="Topics I'm learning about alongside my degree. Interests, not credentials."
              className="mb-0"
            />
            <Button href="/research" variant="research" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              View All Interests
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredInterests.map((interest, i) => (
              <Reveal key={interest.id} delay={i * 0.08}>
                <ResearchInterestCard interest={interest} />
              </Reveal>
            ))}
          </div>
          </Reveal>
        </Container>
      </section>

      {/* 6. Multidisciplinary Matrix Preview */}
      <section id="home-capabilities" className="scroll-mt-24">
        <Container size="xl">
          <Reveal>
          <Card variant="studio" className="p-8 sm:p-12 relative overflow-hidden">
            <div className="max-w-2xl space-y-4 mb-8">
              <Badge variant="studio">Capabilities</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-sans">
                What I Can Do
              </h2>
              <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">
                An honest map of my skills: what I'm comfortable with, what I'm learning, and what I'm curious about.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
              {skillsCategories.map((cat, i, arr) => (
                <div
                  key={cat.id}
                  className={`p-4 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)] flex flex-col justify-between${arr.length % 2 === 1 && i === arr.length - 1 ? " col-span-2 sm:col-span-1" : ""}`}
                >
                  <span className="text-xs font-bold text-[var(--text-primary)] mb-2">{cat.name}</span>
                  <span className="text-xs font-mono text-[var(--text-secondary)]"><Counter to={cat.skills.length} suffix=" skills" /></span>
                </div>
              ))}
            </div>

            <Button href="/skills" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              See All Skills
            </Button>
          </Card>
          </Reveal>
        </Container>
      </section>

      {/* 7. CTA Section */}
      <section>
        <Container size="lg">
          <Reveal>
          <Card variant="studio" className="text-center p-8 sm:p-10 relative overflow-hidden">
            <div className="max-w-xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight font-sans">
                Let&apos;s build something meaningful
              </h2>
              <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">
                I'm looking for junior web developer roles and internships. If you're hiring, I'd love to talk.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Get in Touch
                </Button>
                <Button href="/resume" variant="outline" size="lg">
                  View Resume
                </Button>
              </div>
            </div>
          </Card>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
