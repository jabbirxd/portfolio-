# Portfolio Fix Progress

Owner: Md. Jabbir Ali — https://github.com/jabbirxd/portfolio- (branch: main)
Live: https://portfolio-jabbirxd.vercel.app
Stack: Next.js 16.3.3 (App Router, Turbopack), React 19.2.8, TypeScript 5, Tailwind CSS v4, motion, lucide-react. Vercel deploy.

## How pushing works in this environment
- Direct `git push` does NOT work in this VM (`could not read Username`). All commits are made via the GitHub API (`push_files` / `delete_file`), one API commit per phase.
- Local git history (HEAD `67141be`) is diverged/behind the remote; the remote is the source of truth. `git status`/`git diff` locally still show the full uncommitted change set — ignore that for push tracking; each phase's file list is pushed explicitly via the API.
- `docs/` (local planning notes) is never pushed. `package-lock.json` is kept clean unless a phase legitimately changes dependencies (Phase 8).

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
- [x] **Phase 0 — baseline.** Commit: `TODO` (this file). Items: recorded lint/audit/build baselines. Skipped: `npm install` (deps already present), `npm audit` (sandbox-blocked, see above).

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
