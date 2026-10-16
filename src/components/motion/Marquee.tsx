"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Infinite marquee ticker: content is duplicated into two identical halves
 * so the -50% loop is seamless. Pauses on hover; disabled under
 * prefers-reduced-motion.
 */
export function Marquee({
  children,
  reverse = false,
  speed = 38,
  className,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  speed?: number;
  className?: string;
}) {
  const renderHalf = (half: "a" | "b") => (
    <div
      key={half}
      aria-hidden={half === "b"}
      className="flex items-center gap-3 pr-3 shrink-0"
    >
      {React.Children.map(children, (child, i) =>
        React.isValidElement<{ key?: React.Key }>(child)
          ? React.cloneElement(child, { key: `${half}-${i}` })
          : child
      )}
    </div>
  );

  return (
    <div className={cn("marquee", className)}>
      <div
        className="marquee-track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {renderHalf("a")}
        {renderHalf("b")}
      </div>
    </div>
  );
}
