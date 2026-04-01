# Ken's Landing Page Boilerplate

A production-ready, animated SaaS landing page boilerplate built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

## What's included

- **Header** — Sticky glass-blur header with desktop nav, mobile hamburger menu, and floating mobile CTA
- **Hero** — Badge, headline, subheading, CTA button with stagger animations
- **Social Proof** — Infinite marquee of user avatars
- **Section Header** — Reusable component with badge, heading, and description (light/dark variants)
- **Feature Carousel** — Horizontal scrolling feature cards with mobile/desktop layouts
- **Comparison** — Animated bar chart comparing your product vs. competitors
- **Showcase Section** — Full-width image with selectable feature tabs below
- **Testimonials** — Masonry grid of testimonial cards with slight rotation
- **CTA Section** — Final call-to-action with footer
- **Smooth Scrolling** — Lenis-powered smooth scroll throughout

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

1. **Branding** — Update colors in `src/app/globals.css` (the `.dark` section and gradient backgrounds)
2. **Content** — Replace all placeholder text (search for `YourSaaS`, `$XX`, `yourdomain.com`, and bracket `[placeholders]`)
3. **Logo** — Replace `public/logo.svg` with your own
4. **OG Image** — Add `public/og-image.png` (1200×630px)
5. **Metadata** — Update `src/app/layout.tsx` with your title, description, and URLs
6. **Fonts** — The boilerplate uses Google's Inter font. Swap it in `layout.tsx` for your brand font

## Tech stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **Lenis** (smooth scrolling)
- **Lucide React** (icons)
- **TypeScript** (strict mode)

## Scripts

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production server
npm run typecheck    # Type check
npm run lint         # Lint
npm run format       # Format with Prettier
```
