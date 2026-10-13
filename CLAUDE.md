# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio built with Create React App (`react-scripts` 5, React 18), deployed to GitHub Pages at https://arsalanbudhani.github.io/portfolio.

## Commands

Use **yarn only** — `package-lock.json` was removed deliberately; don't regenerate it.

- `yarn start` — dev server
- `yarn build` — production build into `build/`
- `yarn deploy` — runs `predeploy` (`yarn build`) then publishes `build/` to the `gh-pages` branch via the `gh-pages` package. `master` holds source only.
- `yarn test` — Jest in watch mode. There are currently no test files. Single file / single test: `yarn test src/path/File.test.js` or `yarn test -t "test name"`; add `--watchAll=false` for a one-shot run.
- Linting is CRA's built-in ESLint (`react-app` config), surfaced through `yarn start` / `yarn build`; there is no separate lint script.

## Architecture

- `src/App.js` composes the page: `Sidebar` (desktop-only left column) + `IconBar` + the section components in page order. Navigation is plain anchor links (`#home`, `#about`, …) — each section's root element carries the matching `id`, so renaming a section id requires updating `IconBar` and any in-page links (e.g. Home's "Contact Me" → `#contact`).
- `src/sections/` — one component per page section; `src/components/` — shared layout pieces. All components are named exports (`export const Home = () => …`).
- **Assets live in `public/assets/` and are not imported through webpack.** Reference them only via `src/constants/assets.js`, which prefixes paths with `process.env.PUBLIC_URL`. Hard-coding `/assets/...` will break in production because the site is served from the `/portfolio` subpath (the `homepage` field in `package.json`).
- Sections (except Home) wrap their content in `components/Section.js`, which supplies the white card, responsive padding and title. Section content (skills, jobs, schools, contact details) lives in data arrays at the top of each section file and is rendered with `.map()`.
- **Styling:** Bootstrap **5.2.3** and Bootstrap Icons are loaded from CDN in `public/index.html` (not npm dependencies). Use Bootstrap grid/utility classes for layout — but only ones that exist in 5.2 (e.g. no `fw-medium`, which is 5.3+). Custom CSS is the single `src/styles/App.css`; brand colors are CSS variables on `:root` (`--accent`, `--dark`, `--bg`, `--muted`) — use those / `.text-accent` / `.btn-accent` rather than inline `style` props.
- **Responsive layout is mobile-first with a single markup per section** — no duplicated desktop/mobile variants. The one breakpoint switch is `lg` (992px): below it the `Sidebar` is hidden (`d-none d-lg-block`) and the fixed bottom `IconBar` is shown (`d-lg-none`), with `body` padding-bottom reserving space for it.
- The Contact form posts to Formspree (GitHub Pages has no backend). The endpoint is `FORMSPREE_ENDPOINT` in `src/constants/config.js`; field `name` attributes become the fields of the email Formspree sends.
