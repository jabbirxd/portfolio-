# Portfolio — Md. Jabbir Ali

My personal portfolio site. A final-year CSE student showing real projects,
honest skills, and what I'm learning.

**Live:** https://portfolio-jabbirxd.vercel.app

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

## Owner TODO

- [ ] Add the real CV file at `public/cv.pdf` — the "Download CV (PDF)"
  button on /resume currently falls back to the browser print dialog
  until the file exists.
