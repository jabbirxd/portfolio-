"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Rotating headline word: cycles through words inside a fixed mask,
 * sliding the old word up and the new one in from below.
 * Width is stabilized with a ch-based min-width so layout doesn't jump.
 */
export function RotatingWord({
  words,
  interval = 2600,
  className,
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [idx, setIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || words.length < 2) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval, shouldReduceMotion]);

  const longest = Math.max(...words.map((w) => w.length));

  return (
    <span
      className={cn("relative inline-block overflow-hidden align-bottom", className)}
      style={{ minWidth: `${longest}ch` }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={idx}
          initial={shouldReduceMotion ? false : { y: "70%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { y: "-70%", opacity: 0 }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block whitespace-nowrap"
        >
          {words[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
