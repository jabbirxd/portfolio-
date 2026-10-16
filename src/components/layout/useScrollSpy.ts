"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scrollspy: returns the id of the section currently passing through
 * the middle band of the viewport, or null when no section is there
 * (e.g. back at the hero). Empty id list disables it.
 */
export function useScrollSpy(ids: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  const key = ids.join("|");
  const idsRef = useRef(ids);
  idsRef.current = ids;

  useEffect(() => {
    const list = idsRef.current;
    if (list.length === 0) {
      setActiveId(null);
      return;
    }

    const visible = new Set<string>();
    const pick = () => {
      // DOM order wins when several overlap; null when the band is empty
      const next = list.find((id) => visible.has(id)) ?? null;
      setActiveId((prev) => (prev === next ? prev : next));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        }
        pick();
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    for (const id of list) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return activeId;
}
