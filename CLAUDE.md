# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio built with Vite + React 18, deployed to GitHub Pages at https://arsalanbudhani.github.io/portfolio. (Migrated from Create React App — don't reintroduce `react-scripts`, `process.env`, or `%PUBLIC_URL%`.)

## Commands

Use **yarn only** — `package-lock.json` was removed deliberately; don't regenerate it.

- `yarn dev` (alias `yarn start`) — dev server at http://localhost:5173/portfolio/ (note the base path)
- `yarn build` — production build into `dist/`
- `yarn preview` — serve the built `dist/` locally to check it before deploying
- `yarn lint` — ESLint (flat config in `eslint.config.js`: recommended + react-hooks + react-refresh). Not run by `build`, so run it explicitly.
- `yarn deploy` — runs `predeploy` (`yarn build`) then publishes `dist/` to the `gh-pages` branch via the `gh-pages` package. `master` holds source only.
- There is no test runner set up; there are no tests.

## Architecture

- Entry is the root `index.html` → `src/main.jsx` → `src/App.jsx`. Files containing JSX must use the `.jsx` extension (Vite won't parse JSX in `.js`).
- `src/App.jsx` composes the page: sticky `Navbar` + the section components in page order + `Footer`. Navigation is plain anchor links (`#home`, `#about`, …) — each section's root element carries the matching `id`, so adding/renaming a section means updating the `links` array in `Navbar.jsx` (which also drives active-link highlighting via IntersectionObserver), plus any in-page links (e.g. Home's "Get in touch" → `#contact`).
- Personal details (name, title, email, phone, location) and social links live in `src/constants/profile.js` and are shared by Home, Contact and Footer — edit them there, not inline.
- `src/sections/` — one component per page section; `src/components/` — shared layout pieces. All components are named exports (`export const Home = () => …`).
- **Base path:** the site is served from `/portfolio/`, set by `base` in `vite.config.js`. Vite rewrites absolute URLs in `index.html` automatically, but in JS code use `import.meta.env.BASE_URL`.
- **Assets live in `public/assets/` and are not imported through the bundler.** Reference them only via `src/constants/assets.js`, which prefixes paths with `import.meta.env.BASE_URL`. Hard-coding `/assets/...` breaks in production. In `dist/`, these share the `assets/` folder with Vite's hashed bundles.
- Sections (except Home) wrap their content in `components/Section.jsx`, which supplies the max-width container, padding, eyebrow and title. Section content (bio, jobs, skills, schools, interests) lives in `src/constants/content.js` and is rendered with `.map()`. Content is sourced from the CV in `public/assets/docs/` — keep them in sync.
- **AI chat:** `components/ChatWidget.jsx` (floating bubble) calls Gemini's REST API directly from the browser via `src/lib/gemini.js`, whose system prompt is built from `profile.js` + `content.js` — so editing site content updates what the assistant knows. Config is `VITE_GEMINI_API_KEY` / optional `VITE_GEMINI_MODEL` in `.env.local` (see `.env.example`); CI reads the key from the `GEMINI_API_KEY` repo secret. The widget is hidden when no key is set. The key is public in the bundle by design (free tier, HTTP-referrer restricted) — don't put a billed key there.
- **Styling:** Tailwind CSS **v4** via the `@tailwindcss/vite` plugin — there is no `tailwind.config.js`; all config is CSS-first in `src/styles/App.css` (`@theme` tokens, `@custom-variant`, `@utility`). Brand color is the `accent` token (`text-accent`, `bg-accent`, `accent-strong`; use `accent-light` in dark mode). Reusable component classes (`btn-primary`, `btn-secondary`, `card`, `chip`, `icon-link`, `input`, `text-link`) are defined there — reuse them rather than repeating long class lists. Note `@apply` can only reference utilities, so shared bases go in `@utility`, not `@layer components`. Icons are Bootstrap Icons (`bi bi-*`) from CDN in `index.html`; Inter is loaded from Google Fonts. Bootstrap CSS itself is gone — don't reintroduce its classes.
- **Dark mode** is class-based (`dark` on `<html>`): an inline script in `index.html` applies the saved/system theme before paint, and `ThemeToggle` flips it and stores it in `localStorage`. Every color class needs a `dark:` counterpart.
- **Responsive layout is mobile-first with a single markup per section** — no duplicated desktop/mobile variants. The nav collapses to a hamburger menu below `md`.
- The Contact form posts to Formspree (GitHub Pages has no backend). The endpoint is `FORMSPREE_ENDPOINT` in `src/constants/config.js`; field `name` attributes become the fields of the email Formspree sends.
