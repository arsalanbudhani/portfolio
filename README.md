# Arsalan Budhani — Portfolio

Personal portfolio site of Muhammad Arsalan Budhani, Full-Stack Developer.

**Live:** https://arsalanbudhani.github.io/portfolio

Built with React, Vite and Bootstrap 5, hosted on GitHub Pages.

## Getting started

Requires Node.js 20.19+ (or 22.12+) and [Yarn](https://classic.yarnpkg.com/).

```bash
yarn install
yarn dev        # dev server at http://localhost:5173/portfolio/
```

## Scripts

| Command        | What it does                                                         |
| -------------- | -------------------------------------------------------------------- |
| `yarn dev`     | Run the dev server with hot reload (`yarn start` also works)         |
| `yarn build`   | Create a production build in `dist/`                                 |
| `yarn preview` | Serve the production build locally                                   |
| `yarn lint`    | Check the code with ESLint                                           |
| `yarn deploy`  | Build and publish `dist/` to the `gh-pages` branch (the live site)   |

## Project structure

```
public/
  assets/
    images/        profile photo, placeholder, favicon
    docs/          CV (linked from the Resume button)
index.html         page shell (Bootstrap CDN links, favicon, meta tags)
vite.config.js     Vite config, including the /portfolio/ base path
src/
  main.jsx         entry point
  App.jsx          page layout: sidebar + sections
  components/      shared pieces — Sidebar, IconBar (mobile nav), Section wrapper
  sections/        one file per page section — Home, About, Skills, Experience, Education, Contact
  constants/       asset paths (assets.js) and the Formspree endpoint (config.js)
  styles/App.css   custom styles and brand colors
```

## Updating content

- **Skills, experience, education, contact details** — edit the data arrays at the top of the matching file in `src/sections/`.
- **CV or images** — drop the file into `public/assets/` and update its path in `src/constants/assets.js`.
- **Contact form** — messages are delivered by [Formspree](https://formspree.io); the endpoint is set in `src/constants/config.js`.

## Deployment

```bash
yarn deploy
```

This builds the site and pushes it to the `gh-pages` branch, which GitHub Pages serves. The `base` option in `vite.config.js` sets the `/portfolio/` base path — keep it in sync if the repository is renamed.
