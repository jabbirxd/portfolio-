"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useInView,
  useMotionValue,
  useSpring,
} from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

/**
 * Scroll-triggered reveal: fades and rises into view once.
 * Respects prefers-reduced-motion.
 * `data-anim` lets the <noscript> fallback in layout force it visible
 * when JavaScript is disabled (server HTML carries inline opacity:0).
 */
export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      data-anim
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration: shouldReduceMotion ? 0.05 : 0.55,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface CounterProps {
  to: number;
  suffix?: string;
  className?: string;
}

/**
 * Animated count-up that starts when scrolled into view.
 * Server-renders the final number so crawlers and no-JS visitors
 * never see "0"; the client animates from 0 when it scrolls into view.
 */
export function Counter({ to, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1200, bounce: 0 });
  const started = useRef(false);

  useLayoutEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    if (shouldReduceMotion) return;
    // Swap to 0 before the browser paints, then count up.
    if (ref.current) ref.current.textContent = `0${suffix}`;
    mv.set(to);
  }, [inView, mv, to, shouldReduceMotion, suffix]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(v)}${suffix}`;
      }
    });
    return unsub;
  }, [spring, suffix]);

  return (
    <span ref={ref} className={className}>
      {`${to}${suffix}`}
    </span>
  );
}
