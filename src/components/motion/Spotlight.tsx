"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Spotlight wrapper: a soft radial glow follows the cursor inside the
 * container, fading in on hover. Theme-aware via --spot-color.
 * Content paints above the glow (glow is the first, positioned child).
 */
export function Spotlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn("spotlight", className)}
    >
      <div aria-hidden="true" className="spotlight-glow" />
      {children}
    </div>
  );
}
