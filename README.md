# Portfolio — Md. Jabbir Ali

My personal portfolio site. A final-year CSE student showing real projects,
honest skills, and what I'm learning.

**Live:** https://jabbirxd.online

## What's inside

- Home, Work, Research, About, Skills, Resume, and Contact pages
- 3 real projects with live demos and GitHub links
- Research section kept intentionally short — unpublished work stays private
- Dark editorial design, responsive from mobile up

## Tech

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, motion.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Notes

Content lives in `src/data/` — edit the data files to update projects,
skills, experience, or research interests. No CMS, no database.

## Owner TODOs

- [x] Rename the GitHub repo `Name--Techif` to something professional, then update its URL in `src/data/projects.ts` and in the CV
- [ ] Move/rename the task-manager deployment so the URL matches `jabbirxd`, then update `liveUrl` and the CV

## CI

No CI workflow yet. Before merging, run locally: `npm ci`, `npx tsc --noEmit`, `npm run lint`, `npm run build`.
