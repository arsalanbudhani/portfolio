# Arsalan Budhani — Portfolio

Personal portfolio site of Muhammad Arsalan Budhani, Full-Stack Developer.

**Live:** https://arsalanbudhani.github.io/portfolio

Built with React (Create React App) and Bootstrap 5, hosted on GitHub Pages.

## Getting started

Requires Node.js and [Yarn](https://classic.yarnpkg.com/).

```bash
yarn install
yarn start      # dev server at http://localhost:3000
```

## Scripts

| Command        | What it does                                                         |
| -------------- | -------------------------------------------------------------------- |
| `yarn start`   | Run the dev server with hot reload                                   |
| `yarn build`   | Create a production build in `build/`                                |
| `yarn deploy`  | Build and publish `build/` to the `gh-pages` branch (the live site)  |
| `yarn test`    | Run tests with Jest                                                  |

## Project structure

```
public/
  assets/
    images/        profile photo, placeholder, favicon
    docs/          CV (linked from the Resume button)
src/
  App.js           page layout: sidebar + sections
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

This builds the site and pushes it to the `gh-pages` branch, which GitHub Pages serves. The `homepage` field in `package.json` sets the `/portfolio` base path — keep it in sync if the repository is renamed.
