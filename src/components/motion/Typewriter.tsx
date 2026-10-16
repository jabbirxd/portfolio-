"use client";

import React, { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export interface TypeLine {
  command: string;
  output: string;
}

/**
 * Terminal-style typewriter: types each command character by character,
 * prints its output, pauses, then moves to the next line in a loop.
 */
export function Typewriter({
  lines,
  className,
}: {
  lines: TypeLine[];
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [lineIdx, setLineIdx] = useState(0);
  const [chars, setChars] = useState(0);
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const line = lines[lineIdx % lines.length];
    let t: ReturnType<typeof setTimeout>;
    if (chars < line.command.length) {
      t = setTimeout(() => setChars((c) => c + 1), 26 + Math.random() * 44);
    } else if (!showOutput) {
      t = setTimeout(() => setShowOutput(true), 380);
    } else {
      t = setTimeout(() => {
        setLineIdx((i) => (i + 1) % lines.length);
        setChars(0);
        setShowOutput(false);
      }, 2300);
    }
    return () => clearTimeout(t);
  }, [chars, showOutput, lineIdx, lines, shouldReduceMotion]);

  const line = lines[lineIdx % lines.length];
  const typing = !shouldReduceMotion && chars < line.command.length;

  return (
    <div className={cn("font-mono text-xs leading-relaxed", className)}>
      <div className="flex items-center gap-1.5 text-slate-400">
        <span className="text-emerald-400 select-none">$</span>
        <span className="text-slate-200">
          {shouldReduceMotion ? line.command : line.command.slice(0, chars)}
        </span>
        {typing && (
          <span
            className="inline-block w-[7px] h-[14px] bg-emerald-400 animate-pulse"
            aria-hidden="true"
          />
        )}
      </div>
      {(shouldReduceMotion || showOutput) && (
        <div className="text-slate-500 pl-4 truncate">{line.output}</div>
      )}
    </div>
  );
}
