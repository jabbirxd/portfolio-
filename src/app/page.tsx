import React from "react";
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

export default function HomePage() {
  const featuredInterests = researchInterestsData.slice(0, 3);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Introduction & 3 Capability Cards Section */}
      <IntroSection />

      {/* 3. Main Selected Work Section (Editorial Layout + Filters) */}
      <WorkSection />

      {/* 4. Currently Exploring Section (01 Comp Bio, 02 Cancer Research, 03 AI Automation) */}
      <ExploringSection />

      {/* 5. Research Interests Preview */}
      <section>
        <Container size="xl">
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
            {featuredInterests.map((interest) => (
              <ResearchInterestCard key={interest.id} interest={interest} />
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Multidisciplinary Matrix Preview */}
      <section>
        <Container size="xl">
          <Card variant="studio" className="p-8 sm:p-12 relative overflow-hidden">
            <div className="max-w-2xl space-y-4 mb-8">
              <Badge variant="studio">Capabilities</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans">
                What I Can Do
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                An honest map of my skills: what I'm comfortable with, what I'm learning, and what I'm curious about.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
              {skillsCategories.map((cat) => (
                <div
                  key={cat.id}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
                >
                  <span className="text-xs font-bold text-white mb-2">{cat.name}</span>
                  <span className="text-[10px] font-mono text-slate-400">{cat.skills.length} skills</span>
                </div>
              ))}
            </div>

            <Button href="/skills" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              See All Skills
            </Button>
          </Card>
        </Container>
      </section>

      {/* 7. CTA Section */}
      <section>
        <Container size="lg">
          <Card variant="studio" className="text-center p-8 sm:p-14 relative overflow-hidden">
            <div className="max-w-xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-sans">
                Let&apos;s build something meaningful
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
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
        </Container>
      </section>
    </div>
  );
}
