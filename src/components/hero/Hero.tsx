"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SystemVisual } from "@/components/hero/SystemVisual";
import { ArrowRight, FileText, Sparkles } from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const getTransition = (delay: number) => ({
    duration: shouldReduceMotion ? 0.05 : 0.35,
    delay: shouldReduceMotion ? 0 : delay,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  });

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center py-12 lg:py-16 overflow-hidden">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Display Typography & CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Status / Category Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.05)}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/[0.08]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="tracking-wide">LEARN · BUILD · SHIP</span>
              </div>
            </motion.div>

            {/* 1. Name */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.1)}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase font-sans leading-[1.05]">
                Md. Jabbir Ali
              </h1>
            </motion.div>

            {/* 2. Title Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.18)}
            >
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 font-mono tracking-tight">
                Web Developer
              </p>
            </motion.div>

            {/* 3. Supporting Statement */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.26)}
            >
              <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl leading-relaxed font-sans">
                &ldquo;I bring the ideas and direction, and build with modern tools to ship real projects fast.&rdquo;
              </p>
            </motion.div>

            {/* 4. Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.34)}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <Button
                href="/work"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore My Work
              </Button>
              <Button
                href="/resume"
                variant="outline"
                size="lg"
                icon={<FileText className="w-4 h-4" />}
              >
                View CV
              </Button>
            </motion.div>

            {/* Quick Micro-Domain Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={getTransition(0.42)}
              className="pt-4 flex flex-wrap gap-2 text-[11px] font-mono text-slate-500"
            >
              <span className="px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.05]">
                Next.js & TypeScript
              </span>
              <span className="px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.05]">
                PHP & Laravel
              </span>
              <span className="px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.05]">
                Responsive UI
              </span>
              <span className="px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.05]">
                Open to junior roles
              </span>
            </motion.div>
          </div>

          {/* Right Column: Abstract Scientific & Technical Visual (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={getTransition(0.3)}
            className="lg:col-span-5 flex justify-center"
          >
            <SystemVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
