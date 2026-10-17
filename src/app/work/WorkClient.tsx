"use client";

import React from "react";
import { projectsData } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function WorkClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="py-12 sm:py-16 space-y-12">
      <Container size="xl">
        <Breadcrumb items={[{ label: "Selected Work" }]} />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--border-default)]">
          <SectionHeader
            eyebrow="Portfolio & Case Studies"
            title="Selected Work"
            description="Real projects I designed and built. Each one taught me something."
            className="mb-0 max-w-2xl"
            headingLevel="h1"
          />

        </div>

        {/* Editorial Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-2"
        >
          <AnimatePresence mode="popLayout">
            {projectsData.map((project) => (
              <motion.div data-anim
                key={project.id}
                layout
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  duration: shouldReduceMotion ? 0.05 : 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={cn(
                  project.displaySize === "large" && "md:col-span-2",
                  project.displaySize === "wide" && "md:col-span-2"
                )}
              >
                <ProjectCard project={project} headingLevel="h2" showLearning />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </div>
  );
}
