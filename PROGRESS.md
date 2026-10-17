# Portfolio Fix Progress

Owner: Md. Jabbir Ali — https://github.com/jabbirxd/portfolio- (work branch: `fix/site-audit`; `main` is production, deployed by Vercel — do not commit to it)
Live: https://portfolio-jabbirxd.vercel.app
Stack: Next.js 16.3.3 (App Router, Turbopack), React 19.2.8, TypeScript 5, Tailwind CSS v4, motion, lucide-react. Vercel deploy.

## Skills per phase (owner instruction, 2026-10-17)
At the start of every phase, load and follow: `verification-before-completion`, `webapp-testing`, `code-reviewer` (mandatory). Per phase:
- Phase 3, 9: `frontend-design`, `web-design-guidelines`, `react-best-practices`
- Phase 4: `humanizer` (rewriting; keep every fact, invent nothing), `frontend-design` (task-manager visual)
- Phase 5: `web-design-guidelines` + `webapp-testing` (axe-core in Playwright on every route)
- Phase 6: `nextjs-developer`, `react-best-practices`, `react-expert`
- Phase 7: `nextjs-developer`, `typescript-pro`
- Phase 8: `code-reviewer`, `typescript-pro`, `secure-code-guardian`
- Debugging: `systematic-debugging` whenever something breaks.
UI claims must be checked with Playwright against the running production build (`npm run build && npm start`) at 375/768/1024/1440px, dark + light themes. Evidence rules: every "fixed" needs Playwright output or a screenshot; "before" claims quote the parent commit's exact line; unverified = "NOT VERIFIED".

## Phase workflow (owner instruction, 2026-10-17)
- **Before each phase:** sync the local working copy to the remote branch — `git fetch origin` then `git reset --hard origin/fix/site-audit` (keeps untracked `docs/`). Build and test exactly what is pushed. Then run lint/tsc/build on that clean copy before committing the phase.
- Each phase = one GitHub API commit on `fix/site-audit` containing exactly that phase's files.
- **Push lesson (2026-10-17):** if a push fails or the session dies, check `origin/fix/site-audit` head BEFORE retrying — the first attempt may have landed (Phase 2 part 2 left an empty duplicate `e75683b`; owner will squash-merge the PR at the end).

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
- [x] **Phase 4, part 1 — content/credibility (items 1–4).** Commit: `TODO_PHASE4A`. Skills: humanizer, frontend-design (+ mandatory). (1) Removed fake metrics: SystemVisual telemetry footer deleted (PARADIGM: INTEGRATED_DISCOVERY, LATENCY: 0.12ms); ProjectVisualPreview UPTIME: 99.9% removed (STATUS: SHIPPED kept — honest for deployed app). (2) Task Manager visual: design-token mockup replaced with honest task-list JSX (priorities, All/Active/Done filter, "Saved locally" footer; no stats). (3) Added optional `screenshot` field to ProjectItem + Next Image rendering in ProjectVisualPreview (falls back to illustrated visual when empty; never fabricated). (4) "N CONFIRMED" → "N skills" on SkillGroupCard; skills eyebrow "CONFIRMED TECHNICAL & METHODOLOGICAL MATRIX" → "TECHNICAL SKILLS & TOOLS". Checks: tsc clean. Build+Playwright in part 2.

- [x] **Phase 3, part 3 — 4 missed/regressed items.** Commit: `TODO_PHASE3C`. Skills: verification-before-completion, webapp-testing, code-reviewer, frontend-design, web-design-guidelines, react-best-practices. (1) Homepage scrollspy restricted: SPY_HREF now maps only home-work→/work, home-research→/research, home-capabilities→/skills; home-intro/ship/exploring map to nothing (pill clears). On home, isActiveLink uses scrollspy only (never pathname fallback). Playwright: home-work→Work, home-research→Research, home-capabilities→Skills, others→(none). (2) Regression fix: non-home pages use `pathname === href || pathname.startsWith(href + "/")` — /work/[slug] highlights Work again (verified), /contact button shows ring. (3) Case-study: all section numbers now accent-studio indigo (Playwright: single rgb(79,70,229) on all 3 projects); Challenge and Learnings uncarded — all sections are plain, no card/no-card alternation (screenshot verified). (4) Home closing CTA Container size lg→xl — both CTA and Capabilities containers measure 1280px at 1440px viewport. Checks: tsc clean, build passes, lint 12/44.

- [x] **Phase 3, part 2 — design consistency (items 5–9) + 5 part-1 regression fixes.** Commit: `TODO_PHASE3B`. Skills loaded: verification-before-completion, webapp-testing, code-reviewer, frontend-design, web-design-guidelines, react-best-practices. Regression fixes: (1) Removed duplicate "Contact ↗" from mobile menu bottom — 1 visible Contact confirmed via Playwright. (2) Footer page links now render from siteConfig.navItems (Work, Research, About, Skills, Resume, Contact, then GitHub/LinkedIn/Email); desktop nav order fixed to Work→Resume→Contact (was Contact→Resume); all three list same pages in same order — verified via Playwright DOM. (3) "View All Interests" changed from green `research` variant to `outline`; `research` Button variant removed; Playwright scanned all 7 routes — zero green buttons. (4) "Capabilities", "Engineering Standard", "Hands-On Curiosity" switched from Badge to Eyebrow; Eyebrow now applies `uppercase` itself — all three verified as pill-shaped uppercase via Playwright. (5) /resume H1 "Curriculum Vitae"→"Resume", subtitle reworded, breadcrumb updated — verified. Items: (5) Scrollspy: `isActiveLink` now uses exact `pathname === href` (was `startsWith`) — /work/[slug] no longer highlights Work (Playwright: font-weight 400). (6) Case-study: Challenge/Learnings use Card variant="solid"; "07." added; dynamic `sectionNum()` keeps numbering sequential (verified 01-05, 01-04, 01-04 across the 3 projects — no gaps). (7) /work/[slug] closing CTA moved from sidebar to full-width Card below the grid. (8) Removed "Usually replies within 24–48 hours" from location bar; hero keeps "usually reply within a day or two" (1 visible instance). (9) Card standardization: resume education/research/projects/skills/experience cards → Card variant="subtle"; work/[slug] Challenge/Learnings/CTA → Card variant="solid". Checks: `tsc` clean, `build` passes, lint 12 errors/44 warnings (unchanged). Skipped: IntroSection link cards keep custom hover treatments (unique per-card accent colors, not generic cards).

- [x] **Phase 3, part 1 — design consistency (items 1–4 + owner additions).** Commit: `TODO_PHASE3A`. (1) New reusable `Eyebrow` component (variants: default/studio/research, optional icon); replaced all 7 one-off eyebrow badges (/work hero? no — /about, /contact, /skills, /research, hero, ExploringSection, SectionHeader). (2) Button audit: all primary CTAs already use the single indigo `primary` variant; removed the unused duplicate `emerald` variant (identical to `research`). (3) "CV" → "Resume" everywhere (navbar, mobile menu, hero button, resume page button, footer link); `/resume` route kept. (4) Nav now renders from `siteConfig.navItems` — desktop uses the 4 section links + Contact button, mobile menu renders all 7 (this also fixed Contact missing from the mobile menu). (10) ThemeProvider writes to localStorage only inside `toggleTheme`, never on first visit — OS preference keeps being followed until the user chooses. (11) Date/period badges on /resume and /about get `self-start` so they size to content on mobile instead of stretching full-width. Checks: `tsc` clean, `build` passes, lint 12 errors/44 warnings (unchanged, Phase 8's). Skipped: nothing; items 5–9 in part 2.

- [x] **Phase 2, part 2 — visual/layout bugs (items 6–11) + owner follow-ups.** Commit: `TODO_PHASE2B`. Owner follow-ups: (1) removed COORDINATE span from hero header (Phase 4 was going to remove it anyway); header label `whitespace-nowrap`, verified never truncated at 375px and 1440px; (2) terminal stack labels ("NEXT.JS · TYPESCRIPT" / "PHP · LARAVEL") hidden below `sm`, so "build output"/"artisan" always shows in full on mobile; (3) "feat: scrollspy" label moved below the main line — verified no line crosses any label at 375/1024/1440px. Phase 2 fixes: (6) research cards — footer chips get `min-h-[96px]` so "Key Investigative Themes" labels align (verified 1052/1052/1052); exploring cards get missing `h-full`; (7) orphaned last items span full width when count is odd (/resume projects + skill groups `sm:col-span-2`, home tiles `col-span-2 sm:col-span-1`); (8) footer process strip stacks vertically on mobile with rotated arrows, tech signature wraps cleanly with `whitespace-nowrap` terms; (9) case-study stat tiles are a compact 3-col row on mobile (330px → 85px tall); (10) "Axis [Build × Learn × Explore]" hidden below `sm`; (11) skill card badge stacks under the heading on mobile. Checks: `tsc` clean, `build` passes, lint 12 errors/44 warnings (unchanged, Phase 8's). Skipped: nothing.

- [x] **Phase 2, part 1 — visual/layout bugs (items 1–5) + owner fixes.** Commit: `TODO_PHASE2A`. Owner fixes: (1) navbar regression — desktop nav now shows from `lg` (1024px) up, mobile menu below; verified logo on one line and ≥12px Contact–CV gap at 768/800/834/1024; (2) PROGRESS.md header + Next phase corrected; (3) new workflow: `git fetch` + `git reset --hard origin/fix/site-audit` before each phase (fetch works read-only on the public repo), noted in PROGRESS.md; (4) Phase 3 gets a new item — only write theme to localStorage on toggle click. Phase 2 fixes: (1) terminal headers get gap + truncate, no mobile collision; (2) skills badge `whitespace-nowrap`, Evidence row gets gap; (3) SystemVisual — header no longer wraps (coordinate hidden <420px), card aligns with content edges on mobile, compact on mobile (terminal + telemetry hidden, tighter nodes), solid dark bg so it is not washed out in light theme; (4) root cause found — `space-y-*` was on a wrapper div while content lived inside `<Container>`, so sections touched at 0px; moved spacing onto Container on all 3 case-study pages, /research, /skills, /contact, /about (verified 0px → 48px on case study); (5) git graph — branch label moved below feature line, "init: portfolio" label below main line (curve no longer crosses it), commits spread 4%→93% width. Checks: `tsc` clean, `build` passes, lint 12 errors/44 warnings (unchanged, Phase 8's). Skipped: nothing; items 6–11 in part 2.

- [x] **Phase 0 — baseline.** Commit: `f4a98a7` (on main). Items: recorded lint/audit/build baselines. Skipped: `npm install` (deps already present), `npm audit` (sandbox-blocked; owner ran it himself: next@16.3.3 has critical advisories, sharp has high ones — Phase 8 upgrades regardless).
- [x] **Phase 1 — critical bugs.** Commit: `5c27265`. Items fixed: (1) canonical per page — removed wrong layout-level canonical, added self-referencing canonicals to `/`, `/about`, `/contact`, `/work/[slug]` (client pages `/work`, `/research`, `/skills`, `/resume` get theirs in the Phase 7 server/client split); (2) CV fallback copy → "PDF not available yet — opening print view instead.", README owner-TODO for `public/cv.pdf`; (3) no-JS visibility — hero animates transform-only, `data-anim` + `<noscript>` override on all motion-hidden elements, Counter server-renders the final number (verified: JS-disabled shows all text, no "0 skills"); (4) theme refactor — provider lazy-inits from the `<head>` script's `data-theme` attribute, toggle uses `useSyncExternalStore` mounted guard (fixes 2 lint errors; verified: light-preference → light first paint, toggle persists); (5) Contact added to desktop nav as a small primary button. Checks: `tsc` clean, `build` passes, lint 14→12 errors (remaining 12 are Phase 8's). Skipped: nothing.

## Items skipped or deferred
- (none yet)

## Decisions made by owner
- (none yet)

## Phase 5 note (owner instruction, 2026-10-17)
- The mobile stat-tile labels in `work/[slug]` use `text-[10px]` — raise to the 12px minimum in Phase 5.

## Phase 3 addition (owner instruction, 2026-10-17)
- Date/period badges ("Expected 2026", "2020", "2018") stretch full-width like a bar on /resume mobile — make all date/period badges size to content (`self-start` / `w-fit`) at every breakpoint, on /resume and /about.
- ThemeProvider currently writes the theme to localStorage on the first visit even if the visitor never pressed the toggle — this freezes their OS preference forever. Only save to localStorage when the user clicks the toggle. (Handle in Phase 3.)

## Owner TODO list (things Jabbir must do himself)
- Add the real CV file at `public/cv.pdf`.
- Add real screenshots for each project in `public/projects/`.
- Rename the GitHub repo `Name--Techif` to something professional (e.g. `techif-laravel`), then update `repoUrl` in `src/data/projects.ts`.
- The task-manager live demo URL uses a different account name (`task-manager-godspeed630.vercel.app`). Move or rename that deployment so it matches `jabbirxd`, then update `liveUrl`.
- Check that both live demo URLs in `projects.ts` load correctly.

## Next phase
- **Phase 3: design consistency** (in progress — split into parts) (canonical URL, CV download fallback copy, no-JS content visibility, theme FOUC + provider refactor, Contact link in desktop navbar).
