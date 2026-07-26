# Clue — Agency Homepage

Next.js 16 (App Router) + Tailwind v4 + Motion + GSAP ScrollTrigger.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Framework:** Next.js (App Router, React Server Components by default)
- **Styling:** Tailwind CSS v4
- **Animation:** Motion (`motion/react`) for UI/scroll-reveal, GSAP + ScrollTrigger for the pinned horizontal work showcase
- **Icons:** Phosphor Icons
- **Fonts:** Geist Sans / Geist Mono via `next/font`

## Structure

```
src/
  app/                # routes, layout, global styles
  components/
    layout/           # navbar, footer, page-transition wrapper
    sections/         # hero, about, services, work, clients, reviews, blogs
    ui/                # button, container, reveal, logomark
  lib/                 # shared utilities
```

All content on the homepage is placeholder copy and Picsum-sourced imagery — swap in real brand content before shipping.
