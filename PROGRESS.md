# Portfolio Fix Progress

Owner: Md. Jabbir Ali — https://github.com/jabbirxd/portfolio- (branch: main)
Live: https://portfolio-jabbirxd.vercel.app
Stack: Next.js 16.3.3 (App Router, Turbopack), React 19.2.8, TypeScript 5, Tailwind CSS v4, motion, lucide-react. Vercel deploy.

## How pushing works in this environment
- Direct `git push` does NOT work in this VM (`could not read Username`). All commits are made via the GitHub API (`push_files` / `delete_file`), one API commit per phase, each containing exactly that phase's files.
- **Branch workflow (owner instruction, 2026-10-17):** no more commits to `main` (Vercel deploys main straight to the live site). All phase work goes to branch **`fix/site-audit`**, created from main at `f4a98a7`. One PR covers all phases: **"Site audit fixes (Phases 1–9)"** from `fix/site-audit` → `main`. PR: https://github.com/jabbirxd/portfolio-/pull/1 (opened after Phase 1 commit). The owner reviews the Vercel preview and merges it himself at the end.
- Local git history (HEAD `67141be`) is diverged/behind the remote; the remote is the source of truth. `git status`/`git diff` locally still show the full uncommitted change set — ignore that for push tracking; each phase's file list is pushed explicitly via the API.
- `docs/` (local planning notes) is never pushed. `package-lock.json` is kept clean unless a phase legitimately changes dependencies (Phase 8: `npm ci` after the next/eslint-config-next upgrade).

## Baseline (Phase 0) — 2026-10-17
- Remote main HEAD at audit time: `46a10b7` "Fix Techif visual: Laravel artisan terminal instead of false Next.js/Vercel deploy mockup"
- `npm run lint`: **14 errors, 44 warnings** (matches the audit claim)
  - Errors: unescaped apostrophes (page.tsx, skills/page.tsx, ExploringSection.tsx, ProjectCard.tsx), JSX comment-as-text (ProjectCard.tsx:52), ref read during render (useScrollSpy.ts:14), setState-in-effect (ThemeProvider.tsx:39, ThemeToggle.tsx:14)
  - Warnings: mostly unused imports/vars (44)
- `npm audit`: BLOCKED in this sandbox — registry proxy returns `403 policy_denied` for the audit endpoint. Cannot run `npm audit` / `npm audit fix` here. Phase 8 will upgrade `next` to latest 16.x via package.json + `npm install` instead, and note the audit limitation.
- `npx tsc --noEmit`: clean. `npm run build`: passes (15 static pages).
- `node_modules` already present; skipped `npm install` to avoid lockfile churn.
- Dev server runs locally at http://localhost:3101/ for verification.

## Phases completed
- [x] **Phase 0 — baseline.** Commit: `f4a98a7` (on main). Items: recorded lint/audit/build baselines. Skipped: `npm install` (deps already present), `npm audit` (sandbox-blocked; owner ran it himself: next@16.3.3 has critical advisories, sharp has high ones — Phase 8 upgrades regardless).
- [x] **Phase 1 — critical bugs.** Commit: `5c27265`. Items fixed: (1) canonical per page — removed wrong layout-level canonical, added self-referencing canonicals to `/`, `/about`, `/contact`, `/work/[slug]` (client pages `/work`, `/research`, `/skills`, `/resume` get theirs in the Phase 7 server/client split); (2) CV fallback copy → "PDF not available yet — opening print view instead.", README owner-TODO for `public/cv.pdf`; (3) no-JS visibility — hero animates transform-only, `data-anim` + `<noscript>` override on all motion-hidden elements, Counter server-renders the final number (verified: JS-disabled shows all text, no "0 skills"); (4) theme refactor — provider lazy-inits from the `<head>` script's `data-theme` attribute, toggle uses `useSyncExternalStore` mounted guard (fixes 2 lint errors; verified: light-preference → light first paint, toggle persists); (5) Contact added to desktop nav as a small primary button. Checks: `tsc` clean, `build` passes, lint 14→12 errors (remaining 12 are Phase 8's). Skipped: nothing.

## Items skipped or deferred
- (none yet)

## Decisions made by owner
- (none yet)

## Owner TODO list (things Jabbir must do himself)
- Add the real CV file at `public/cv.pdf`.
- Add real screenshots for each project in `public/projects/`.
- Rename the GitHub repo `Name--Techif` to something professional (e.g. `techif-laravel`), then update `repoUrl` in `src/data/projects.ts`.
- The task-manager live demo URL uses a different account name (`task-manager-godspeed630.vercel.app`). Move or rename that deployment so it matches `jabbirxd`, then update `liveUrl`.
- Check that both live demo URLs in `projects.ts` load correctly.

## Next phase
- **Phase 1: critical bugs** (canonical URL, CV download fallback copy, no-JS content visibility, theme FOUC + provider refactor, Contact link in desktop navbar).
