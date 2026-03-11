# Faris Mashaleh — Resume Site

A cyberpunk-themed personal resume website built with Vite, React, TypeScript, and Tailwind CSS. Deployed to GitHub Pages via GitHub Actions.

**Live site:** https://farismash28.github.io/My-Resume/

---

## Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll-triggered animations
- **react-type-animation** — typewriter effect
- **lucide-react** — icons

## Features

- Cyberpunk / neon design with `#00f5ff` cyan and `#a855f7` purple accents
- Animated gradient orb background + scanline overlay
- Typewriter hero cycling through roles
- Scroll-triggered fade-in animations on every section
- Vertical timeline for experience
- Responsive project card grid
- Skill bars with animated fill
- Fixed navbar with blur backdrop
- CI/CD via GitHub Actions → `gh-pages` branch

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
├── data/
│   └── resume.ts   ← edit your content here
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Updating Content

All resume content (bio, experience, projects, skills, contact links) lives in `src/data/resume.ts`. Edit that file and push — the site redeploys automatically.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow which builds the site and publishes `dist/` to the `gh-pages` branch.

Make sure GitHub Pages is set to serve from the `gh-pages` branch in your repo settings.
