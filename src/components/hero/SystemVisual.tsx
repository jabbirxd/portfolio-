"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Code2, Sparkles, FlaskConical } from "lucide-react";
import { Typewriter } from "@/components/motion/Typewriter";

export function SystemVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto p-0 sm:p-6 select-none">
      {/* Outer Studio Frame with scientific grid backdrop */}
      <div className="relative rounded-2xl border border-white/10 bg-[#0a0e14] p-4 sm:p-8 shadow-2xl overflow-hidden">
        {/* Subtle background coordinate markings */}
        <div className="absolute inset-0 bg-dot-matrix opacity-30 pointer-events-none" />
        
        <div className="flex items-center border-b border-white/[0.06] pb-3 mb-4 sm:mb-6 font-mono text-xs text-[#8a9bb0] tracking-wider">
          <div className="flex items-center gap-2 text-indigo-400/90">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="whitespace-nowrap">SYSTEM_PIPELINE // ACTIVE</span>
          </div>
        </div>

        {/* Abstract 3-Node Architecture (BUILD -> DESIGN -> RESEARCH) */}
        <div className="relative space-y-4">
          {/* Node 1: BUILD */}
          <motion.div data-anim
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.3 }}
            className="group relative p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/40 transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                      01 // Build
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Next.js · TypeScript · Tailwind CSS
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connector Line 1 -> 2 */}
          <div className="relative flex justify-center py-0.5">
            <div className="w-px h-5 bg-gradient-to-b from-indigo-500/40 via-cyan-500/30 to-purple-500/40" />
          </div>

          {/* Node 2: DESIGN */}
          <motion.div data-anim
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.4 }}
            className="group relative p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/40 transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                      02 // Design
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Responsive UI · Readable · Fast
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connector Line 2 -> 3 */}
          <div className="relative flex justify-center py-0.5">
            <div className="w-px h-5 bg-gradient-to-b from-purple-500/40 via-emerald-500/30 to-emerald-500/40" />
          </div>

          {/* Node 3: RESEARCH */}
          <motion.div data-anim
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.5 }}
            className="group relative p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/40 transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <FlaskConical className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                      03 // Investigate
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Curiosity · Reading · Learning
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Live terminal: typewriter */}
        <motion.div data-anim
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.7 }}
          className="hidden sm:block mt-6 rounded-xl bg-black/40 border border-white/[0.06] p-3.5"
        >
          <Typewriter
            lines={[
              { command: "whoami", output: "jabbir — web dev & CADD researcher, khulna" },
              { command: "git push origin main", output: "✓ deployed · vercel · 38s" },
              { command: "npm run build", output: "✓ compiled successfully" },
            ]}
          />
        </motion.div>
      </div>
    </div>
  );
}
