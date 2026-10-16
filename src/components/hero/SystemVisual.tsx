"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Code2, Sparkles, FlaskConical, Terminal, Dna, Layers } from "lucide-react";
import { Typewriter } from "@/components/motion/Typewriter";

export function SystemVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto p-4 sm:p-6 select-none">
      {/* Outer Studio Frame with scientific grid backdrop */}
      <div className="relative rounded-2xl border border-white/[0.08] bg-[#070a10]/80 backdrop-blur-sm p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Subtle background coordinate markings */}
        <div className="absolute inset-0 bg-dot-matrix opacity-30 pointer-events-none" />
        
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-6 font-mono text-[11px] text-slate-500 tracking-wider">
          <div className="flex items-center gap-2 text-indigo-400/90">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>SYSTEM_PIPELINE // ACTIVE</span>
          </div>
          <span>COORDINATE [42.10, 88.34]</span>
        </div>

        {/* Abstract 3-Node Architecture (BUILD -> DESIGN -> RESEARCH) */}
        <div className="relative space-y-4">
          {/* Node 1: BUILD */}
          <motion.div data-anim
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.3 }}
            className="group relative p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/40 transition-all duration-200"
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
                    <span className="text-[11px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.2 rounded border border-indigo-500/20">
                      STACK_ENGINE
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                    Next.js · TypeScript · Tailwind CSS
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1 font-mono text-[11px] text-slate-500">
                <Terminal className="w-3 h-3 text-indigo-400" />
                <span>99.9% UPTIME</span>
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
            className="group relative p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/40 transition-all duration-200"
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
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.2 rounded border border-cyan-500/20">
                      INTERFACE
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                    Responsive UI · Readable · Fast
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1 font-mono text-[11px] text-slate-500">
                <Layers className="w-3 h-3 text-cyan-400" />
                <span>60 FPS</span>
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
            className="group relative p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/40 transition-all duration-200"
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
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                      COMP_BIO
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                    Curiosity · Reading · Learning
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1 font-mono text-[11px] text-slate-500">
                <Dna className="w-3 h-3 text-emerald-400" />
                <span>FAIR_SCHEMA</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Live terminal: typewriter */}
        <motion.div data-anim
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.7 }}
          className="mt-6 rounded-xl bg-black/40 border border-white/[0.06] p-3.5"
        >
          <Typewriter
            lines={[
              { command: "whoami", output: "jabbir — web developer, khulna" },
              { command: "git push origin main", output: "✓ deployed · vercel · 38s" },
              { command: "npm run build", output: "✓ compiled successfully" },
            ]}
          />
        </motion.div>

        {/* Bottom Technical Telemetry Footer */}
        <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>PARADIGM: INTEGRATED_DISCOVERY</span>
          <span className="text-indigo-400/80">LATENCY: 0.12ms</span>
        </div>
      </div>
    </div>
  );
}
