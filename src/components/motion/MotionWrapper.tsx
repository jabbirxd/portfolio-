"use client";

import React from "react";
import { motion, useReducedMotion, HTMLMotionProps } from "motion/react";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
  ...props
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const directionOffset = {
    up: 16,
    down: -16,
    left: 16,
    right: -16,
    none: 0,
  };

  const initialY = shouldReduceMotion
    ? 0
    : direction === "up" || direction === "down"
    ? directionOffset[direction]
    : 0;

  const initialX = shouldReduceMotion
    ? 0
    : direction === "left" || direction === "right"
    ? directionOffset[direction]
    : 0;

  return (
    <motion.div
      data-anim
      initial={{ opacity: 0, y: initialY, x: initialX }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0.05 : 0.35,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
