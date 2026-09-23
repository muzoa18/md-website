# MD Bil — website

Modern marketing website for **MD Bil** (legal name: MD Bilreparationer AB),
a MECA-certified car workshop in Eskilstuna, Sweden.

This is a rebuild of the previous single-file static `index.html` (hosted on Miss
Hosting) into a maintainable, multi-page Next.js app that deploys for free on Vercel.

---

## Tech stack

| Concern | Choice | Why |
| --- | --- | --- |
| Framework | **Next.js 16** (App Router) | Real multi-page routing, great SEO, static export, one-click Vercel deploy |
| Language | **TypeScript** | Type-safe content model and props |
| Styling | **Tailwind CSS v4** | Utility-first, design tokens live in `globals.css` |
| Icons | **lucide-react** | Clean line icons (replaced the old emoji icons) |
| Fonts | `next/font` (Barlow + Barlow Condensed) | Self-hosted, no layout shift |
| Hosting | **Vercel** (free) | Replaces the paid Miss Hosting plan |

All pages are pre-rendered as **static HTML** at build time, so the site is fast and
cheap to host.

---

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx              # Root layout: fonts, metadata, GA, Nav + Footer
│  ├─ page.tsx                # Homepage (composes the sections)
│  ├─ globals.css             # Tailwind import + brand design tokens (@theme)
│  ├─ sitemap.ts              # /sitemap.xml
│  ├─ robots.ts               # /robots.txt
│  ├─ not-found.tsx           # 404 page
│  ├─ tjanster/
│  │  ├─ page.tsx             # Services overview
│  │  └─ [slug]/page.tsx      # One static page per service (SSG)
│  ├─ om-oss/page.tsx         # About / workshop
│  └─ boka/page.tsx           # Booking
├─ components/
│  ├─ nav.tsx, footer.tsx     # Site chrome
│  ├─ ui.tsx                  # Container, Button, Heading, Eyebrow primitives
│  ├─ service-card.tsx, page-header.tsx, icon.tsx, json-ld.tsx ...
│  └─ sections/               # Homepage sections (hero, reviews, services, …)
└─ lib/
   ├─ site.ts                 # ⭐ Single source of truth for ALL content/data
   ├─ email.ts                # Assembles the contact email client-side
   └─ track.ts                # Tiny GA event helper
public/images/                # Logo, workshop photos, MECA campaign images
```

---

## Editing content

Almost everything is data-driven from **`src/lib/site.ts`** — edit it and the
homepage, subpages, footer, sitemap and structured data all update together:

- **Contact info / opening hours** → `site` object
- **Services** (title, description, bullets, image, icon) → `services` array
  (the array also generates the `/tjanster/[slug]` pages automatically)
- **Reviews** and **Google score** → `reviews`, `googleScore`
- **FAQ** → `faqs`
- **Navigation** → `nav`

To add a new service, just add an object to `services` — a new page, nav/footer
link and sitemap entry appear with no other changes.

---

## Integrations (carried over from the old site)

| Integration | Where | Notes |
| --- | --- | --- |
| **MECA online booking** | `site.bookingUrl` | Opens MECA's booking system in a new tab |
| **Formspree** (contact form) | `site.formspreeId` | Posts the contact form, shows inline success |
| **Google Analytics** | `site.gaId` | Loaded in `layout.tsx`; events via `lib/track.ts` |
| **Google Maps** | `site.mapsEmbed` | Embedded iframe on home + about |

---

## Local development

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
npm run build    # production build (all pages prerendered)
npm run start    # serve the production build locally
npm run lint     # eslint
```

Requires Node 20+.

---

## Deploying to Vercel (replaces Miss Hosting)

1. Push this repo to GitHub.
2. Go to <https://vercel.com> → **Add New → Project** → import the GitHub repo.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. Add your custom domain under **Project → Settings → Domains**
   (point your `mdbilreparationer.se` DNS to Vercel, then you can cancel Miss Hosting).

Every push to `main` redeploys automatically. Preview deploys are created for PRs.

> Update `site.url` in `src/lib/site.ts` to the final production domain so the
> sitemap, canonical URLs and structured data use the correct address.

---

## Assets

Images live in `public/images/`. The hero/about currently use the small
`garage-day.png` placeholder — replace it with a high-resolution real photo of the
workshop for best results (the original `DSC_0336.jpg` etc. were too large to commit
unoptimized; export them at ~2000px wide before adding).

---

## Notes / TODO

- [ ] Replace placeholder garage photo with optimized real workshop photography
- [ ] Confirm the Google Maps embed pin is exact
- [ ] (Optional) Pull Google reviews live via the Places API instead of hardcoding
- [ ] Add Open Graph share image (`/public/og.jpg`)

See [`BUILD_LOG.md`](./BUILD_LOG.md) for the full record of what was built and why.
