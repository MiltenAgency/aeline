# Aeline — Next.js site

Rebuilt as a component-based Next.js App Router app (originally a verbatim Framer export — see git history).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

- `app/` — App Router pages. Dynamic segments: `blog/[slug]`, `our-services/[slug]`, `teams/[slug]` (all statically generated via `generateStaticParams`). Plus `sitemap.ts`, `robots.ts`, `not-found.tsx`.
- `components/` — shared UI: `Navbar`, `Footer`, `CtaBanner`, `Testimonials`, `PricingCards`, `ServiceCards`, `TeamGrid`, `BlogTeasers`, `Accordion`, `Marquee`, `Reveal` (scroll animations), `Counter`, forms.
- `lib/content/` — all site copy as typed data files (`site.ts`, `services.ts`, `blog.ts`, `team.ts`, `pricing.ts`, `testimonials.ts`). Edit content here; pages render from these.
- `public/assets/` — self-hosted WebP images and fonts from the original export.

## Stack

Next.js 14 (App Router, static export of every route), React 18, Tailwind CSS v4, framer-motion, `next/font` (Plus Jakarta Sans + Inter, self-hosted at build).

Set `NEXT_PUBLIC_SITE_URL` to the deploy domain for correct canonical/sitemap URLs.

Deploy to Vercel/Netlify like any Next.js app (`vercel.json` / `_headers` carry caching rules).
