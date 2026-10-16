"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Code2, Sparkles, FlaskConical, ArrowUpRight, Terminal, Layers, Dna } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function IntroSection() {
  const shouldReduceMotion = useReducedMotion();

  const getTransition = (delay: number) => ({
    duration: shouldReduceMotion ? 0.05 : 0.35,
    delay: shouldReduceMotion ? 0 : delay,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  });

  return (
    <section className="relative pt-6 sm:pt-10">
      {/* Editorial Transition Divider */}
      <div className="w-full border-t border-white/[0.08] mb-12 sm:mb-16">
        <Container size="xl">
          <div className="flex items-center justify-between py-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            <span>01 // How I work</span>
            <span className="hidden sm:inline">Perspective: Curious generalist</span>
            <span>Axis [Build × Learn × Explore]</span>
          </div>
        </Container>
      </div>

      <Container size="xl">
        {/* Editorial Heading & Supporting Copy */}
        <div className="max-w-3xl space-y-4 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={getTransition(0.05)}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans leading-[1.15]">
              I like solving problems from different angles.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={getTransition(0.12)}
          >
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              I build web apps, keep learning new parts of the stack, and stay curious about science. I enjoy taking a problem apart, understanding how it works, and building something that actually runs.
            </p>
          </motion.div>
        </div>

        {/* 3 Distinct Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: BUILD */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={getTransition(0.1)}
            className="h-full"
          >
            <Link
              href="/work"
              className="group relative flex flex-col h-full p-6 sm:p-8 rounded-2xl bg-[#0a0d14] border border-white/[0.08] hover:border-indigo-500/40 hover:bg-[#0f131d] transition-all duration-200 shadow-lg hover:shadow-indigo-500/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 block"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                  <Code2 className="w-5 h-5" />
                </div>
                <Badge variant="studio" size="sm">
                  ENGINEERING
                </Badge>
              </div>

              <div className="space-y-2 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                  BUILD
                </h3>
                <p className="text-xs font-mono text-indigo-400 font-semibold tracking-wide uppercase">
                  Web · Frontend · Backend
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
                Shipping real web apps with Next.js and TypeScript, and learning the backend side with PHP and Laravel.
              </p>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-slate-500">Next.js · TS · Laravel</span>
                <span className="inline-flex items-center gap-1 text-indigo-400 font-bold group-hover:translate-x-1 transition-transform">
                  Explore Work <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Card 2: DESIGN */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={getTransition(0.18)}
            className="h-full"
          >
            <Link
              href="/skills"
              className="group relative flex flex-col h-full p-6 sm:p-8 rounded-2xl bg-[#0a0d14] border border-white/[0.08] hover:border-cyan-500/40 hover:bg-[#0f131d] transition-all duration-200 shadow-lg hover:shadow-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 block"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <Badge variant="system" size="sm">
                  CREATIVE
                </Badge>
              </div>

              <div className="space-y-2 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  DESIGN
                </h3>
                <p className="text-xs font-mono text-cyan-400 font-semibold tracking-wide uppercase">
                  UI · Responsive · Details
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
                Interfaces that stay readable on any screen. I study real sites to learn what good UI feels like, then apply it.
              </p>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-slate-500">Tailwind · Responsive</span>
                <span className="inline-flex items-center gap-1 text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">
                  View Skills <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Card 3: RESEARCH */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={getTransition(0.26)}
            className="h-full"
          >
            <Link
              href="/research"
              className="group relative flex flex-col h-full p-6 sm:p-8 rounded-2xl bg-[#0a0d14] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-[#0f131d] transition-all duration-200 shadow-lg hover:shadow-emerald-500/10 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 block"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <Badge variant="research" size="sm">
                  INVESTIGATION
                </Badge>
              </div>

              <div className="space-y-2 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                  RESEARCH
                </h3>
                <p className="text-xs font-mono text-emerald-400 font-semibold tracking-wide uppercase">
                  Biology · Computation · Curiosity
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
                Independent study in computational biology alongside my degree. Details stay private until published.
              </p>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-slate-500">Learning in public</span>
                <span className="inline-flex items-center gap-1 text-emerald-400 font-bold group-hover:translate-x-1 transition-transform">
                  View Research <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
