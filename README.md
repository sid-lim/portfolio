# Sid Lim — Portfolio

Personal portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, GSAP, and Framer Motion. Statically exported and deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev
```

The dev server runs with the `/portfolio` basePath configured in `next.config.js`, so open [http://localhost:3000/portfolio](http://localhost:3000/portfolio).

## Build

```bash
npm run build
```

Outputs a static export to `out/`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static export and publishes it to GitHub Pages. Enable Pages in the repo settings with source **GitHub Actions**.
