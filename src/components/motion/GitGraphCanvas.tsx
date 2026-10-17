"use client";

import { useEffect, useRef } from "react";

/**
 * GitGraphCanvas — a stylized, animated git history drawn on canvas.
 * Main branch grows commit by commit, a feature branch splits off and
 * merges back. Pure decoration: it visualizes "how I work", not real data.
 */

type Pt = { x: number; y: number };

type CommitNode = {
  fx: number; // x as fraction of width
  fy: number; // y as fraction of height
  branch: "main" | "feature";
  appearAt: number; // normalized time 0..1
  msg?: string;
  merge?: boolean;
  labelBelow?: boolean; // draw the commit label under the line (avoids branch-curve overlap)
};

const MAIN_COMMITS: CommitNode[] = [
  { fx: 0.04, fy: 0.62, branch: "main", appearAt: 0.02 },
  { fx: 0.18, fy: 0.62, branch: "main", appearAt: 0.1, msg: "init: portfolio", labelBelow: true },
  { fx: 0.32, fy: 0.62, branch: "main", appearAt: 0.18, msg: "feat: theme toggle" },
  { fx: 0.46, fy: 0.62, branch: "main", appearAt: 0.42 },
  { fx: 0.60, fy: 0.62, branch: "main", appearAt: 0.56, msg: "feat: scrollspy", labelBelow: true },
  { fx: 0.75, fy: 0.62, branch: "main", appearAt: 0.64, msg: "fix: fonts" },
  { fx: 0.93, fy: 0.62, branch: "main", appearAt: 0.72, msg: "ship it" },
];

const FEATURE_COMMITS: CommitNode[] = [
  { fx: 0.26, fy: 0.3, branch: "feature", appearAt: 0.3, msg: "feat: animations" },
  { fx: 0.38, fy: 0.3, branch: "feature", appearAt: 0.38 },
  { fx: 0.50, fy: 0.3, branch: "feature", appearAt: 0.46, msg: "polish: motion" },
];

const LOOP_SECONDS = 11;

function easeOutBack(t: number): number {
  const c = 1.70158;
  const u = t - 1;
  return 1 + (c + 1) * u * u * u + c * u * u;
}

export function GitGraphCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let start: number | null = null;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const themeColors = () => {
      const dark = document.documentElement.dataset.theme !== "light";
      return dark
        ? {
            main: "#818cf8",
            feature: "#22d3ee",
            merge: "#34d399",
            nodeFill: "#0b0b14",
            text: "#8b93a7",
            head: "#c7d2fe",
          }
        : {
            main: "#4f46e5",
            feature: "#0891b2",
            merge: "#059669",
            nodeFill: "#ffffff",
            text: "#64748b",
            head: "#312e81",
          };
    };

    const pt = (c: CommitNode): Pt => ({ x: c.fx * w, y: c.fy * h });

    // Cubic curve from a to b with vertical easing (branch-like)
    const branchCurve = (a: Pt, b: Pt) => {
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.bezierCurveTo(a.x + (b.x - a.x) * 0.35, a.y, a.x + (b.x - a.x) * 0.65, b.y, b.x, b.y);
    };

    const draw = (now: number) => {
      if (start === null) start = now;
      const elapsed = (now - start) / 1000;
      // normalized loop time; last 25% is a calm hold before restart
      const t = reducedMotion ? 1 : (elapsed % LOOP_SECONDS) / LOOP_SECONDS;
      const c = themeColors();

      ctx.clearRect(0, 0, w, h);
      ctx.lineCap = "round";

      const mainPts = MAIN_COMMITS.map(pt);
      const featPts = FEATURE_COMMITS.map(pt);
      const splitFrom = mainPts[1];
      const mergeInto = mainPts[4];

      // --- main branch line (draws progressively) ---
      const mainProg = Math.min(1, t / 0.72);
      ctx.strokeStyle = c.main;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = c.main;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      const endX = mainPts[0].x + (mainPts[mainPts.length - 1].x - mainPts[0].x) * mainProg;
      ctx.moveTo(mainPts[0].x - 14, mainPts[0].y);
      ctx.lineTo(endX, mainPts[0].y);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // --- feature branch curves ---
      const featProg = Math.max(0, Math.min(1, (t - 0.26) / 0.3));
      if (featProg > 0) {
        ctx.strokeStyle = c.feature;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = c.feature;
        ctx.shadowBlur = 8;
        // split curve: drawn with progress
        ctx.beginPath();
        const mx = splitFrom.x + (featPts[0].x - splitFrom.x) * featProg;
        const my = splitFrom.y + (featPts[0].y - splitFrom.y) * featProg;
        ctx.moveTo(splitFrom.x, splitFrom.y);
        ctx.bezierCurveTo(
          splitFrom.x + (mx - splitFrom.x) * 0.4, splitFrom.y,
          splitFrom.x + (mx - splitFrom.x) * 0.6, my,
          mx, my
        );
        ctx.stroke();
        // feature line through its commits
        if (featProg > 0.35) {
          const fEnd = featPts[0].x + (featPts[featPts.length - 1].x - featPts[0].x) * Math.min(1, (featProg - 0.35) / 0.65);
          ctx.beginPath();
          ctx.moveTo(featPts[0].x - 6, featPts[0].y);
          ctx.lineTo(fEnd, featPts[0].y);
          ctx.stroke();
        }
        ctx.shadowBlur = 0;
      }

      // --- merge curve back to main ---
      const mergeProg = Math.max(0, Math.min(1, (t - 0.52) / 0.14));
      if (mergeProg > 0) {
        const last = featPts[featPts.length - 1];
        ctx.strokeStyle = c.merge;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = c.merge;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        const mx = last.x + (mergeInto.x - last.x) * mergeProg;
        const my = last.y + (mergeInto.y - last.y) * mergeProg;
        ctx.moveTo(last.x, last.y);
        ctx.bezierCurveTo(
          last.x + (mx - last.x) * 0.4, last.y,
          last.x + (mx - last.x) * 0.6, my,
          mx, my
        );
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // --- commits (pop in with a spring) ---
      const drawNode = (n: CommitNode, p: Pt, color: string, isMerge = false) => {
        const local = Math.max(0, Math.min(1, (t - n.appearAt) / 0.06));
        if (local <= 0) return;
        const s = easeOutBack(local);
        const r = (isMerge ? 9 : 6.5) * s;
        // pulse on the merge + HEAD during the hold phase
        let glow = 0;
        if (t > 0.78 && (isMerge || n.msg === "ship it")) {
          glow = 10 + 8 * Math.sin(elapsed * 3);
        }
        ctx.save();
        ctx.shadowColor = color;
        ctx.shadowBlur = Math.max(6, glow);
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.1, r), 0, Math.PI * 2);
        ctx.fillStyle = c.nodeFill;
        ctx.fill();
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.restore();

        if (n.msg && local > 0.6 && w > 520) {
          ctx.font = "11px ui-monospace, SFMono-Regular, Menlo, monospace";
          ctx.fillStyle = c.text;
          ctx.textAlign = "center";
          ctx.fillText(n.msg, p.x, n.labelBelow ? p.y + 26 : p.y - 16);
        }
      };

      MAIN_COMMITS.forEach((n, i) =>
        drawNode(n, mainPts[i], n.msg === "ship it" ? c.merge : c.main, i === 4)
      );
      FEATURE_COMMITS.forEach((n, i) => drawNode(n, featPts[i], c.feature));

      // --- branch labels ---
      if (t > 0.12) {
        ctx.font = "11px ui-monospace, SFMono-Regular, Menlo, monospace";
        ctx.textAlign = "left";
        ctx.fillStyle = c.main;
        ctx.fillText("main", 8, mainPts[0].y + 26);
      }
      if (t > 0.34 && w > 520) {
        ctx.fillStyle = c.feature;
        ctx.textAlign = "center";
        const midX = (featPts[0].x + featPts[featPts.length - 1].x) / 2;
        ctx.fillText("feature/animations", midX, featPts[0].y + 24);
      }
      // HEAD tag on the last commit during hold
      if (t > 0.78) {
        const head = mainPts[mainPts.length - 1];
        ctx.font = "bold 11px ui-monospace, SFMono-Regular, Menlo, monospace";
        ctx.fillStyle = c.head;
        ctx.textAlign = "center";
        const bob = reducedMotion ? 0 : Math.sin(elapsed * 2.2) * 3;
        ctx.fillText("HEAD", head.x, head.y + 30 + bob);
      }

      if (!reducedMotion) {
        raf = requestAnimationFrame(draw);
      }
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      role="img"
      aria-label="Animated git history: a feature branch splits off main and merges back"
    />
  );
}
