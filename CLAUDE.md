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
- `src/App.jsx` composes the page: `Sidebar` (desktop-only left column) + `IconBar` + the section components in page order. Navigation is plain anchor links (`#home`, `#about`, …) — each section's root element carries the matching `id`, so adding/renaming a section means updating both `Sidebar` and `IconBar`, plus any in-page links (e.g. Home's "Contact Me" → `#contact`).
- `src/sections/` — one component per page section; `src/components/` — shared layout pieces. All components are named exports (`export const Home = () => …`).
- **Base path:** the site is served from `/portfolio/`, set by `base` in `vite.config.js`. Vite rewrites absolute URLs in `index.html` automatically, but in JS code use `import.meta.env.BASE_URL`.
- **Assets live in `public/assets/` and are not imported through the bundler.** Reference them only via `src/constants/assets.js`, which prefixes paths with `import.meta.env.BASE_URL`. Hard-coding `/assets/...` breaks in production. In `dist/`, these share the `assets/` folder with Vite's hashed bundles.
- Sections (except Home) wrap their content in `components/Section.jsx`, which supplies the white card, responsive padding and title. Section content (skills, jobs, schools, contact details) lives in data arrays at the top of each section file and is rendered with `.map()`.
- **Styling:** Bootstrap **5.2.3** and Bootstrap Icons are loaded from CDN in `index.html` (not npm dependencies). Use Bootstrap grid/utility classes for layout — but only ones that exist in 5.2 (e.g. no `fw-medium`, which is 5.3+). Custom CSS is the single `src/styles/App.css`; brand colors are CSS variables on `:root` (`--accent`, `--dark`, `--bg`, `--muted`) — use those / `.text-accent` / `.btn-accent` rather than inline `style` props.
- **Responsive layout is mobile-first with a single markup per section** — no duplicated desktop/mobile variants. The one breakpoint switch is `lg` (992px): below it the `Sidebar` is hidden (`d-none d-lg-block`) and the fixed bottom `IconBar` is shown (`d-lg-none`), with `body` padding-bottom reserving space for it.
- The Contact form posts to Formspree (GitHub Pages has no backend). The endpoint is `FORMSPREE_ENDPOINT` in `src/constants/config.js`; field `name` attributes become the fields of the email Formspree sends.
