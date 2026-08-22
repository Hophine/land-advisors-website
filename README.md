# Land Advisors Website

Marketing website for **LAND ADVISORS CO. LIMITED** — *"Your Trusted Partner in Real Estate and Beyond."*

A fully static, animation-rich site built with Vite + React + TypeScript, Tailwind CSS, and Framer Motion. No backend, database, or CMS — the only action on the site is a WhatsApp chat link.

## Tech stack

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/) for scroll-reveal and hover animations
- [lucide-react](https://lucide.dev/) for icons

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Project structure

- `src/content.ts` — all site copy (company info, services, team, projects, contact details) in one place, editable without touching component code.
- `src/images.ts` — central registry of every image placeholder on the site. Add a real photo by setting a `src` path here; no component changes needed.
- `src/components/ui/` — reusable primitives (`Button`, `Card`, `Section`, `Badge`, `ImagePlaceholder`, `Reveal`).
- `src/components/` — page sections (Navbar, Hero, About, Services, Leadership, Experience, WhyChooseUs, Contact, Footer).

## Deployment

`npm run build` produces a static `dist/` folder that can be deployed to any static host (Netlify, Vercel, GitHub Pages, S3, etc.) — no server required.
