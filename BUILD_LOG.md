# Build log — MD Bil & Motor rebuild

A running record of every significant decision and action during the rebuild of the
old single-file `index.html` into a modern Next.js site. Newest work is appended at
the bottom.

## Context

- **Starting point:** `C:\Users\MuzafferArpacik\Downloads\index.html` — a ~2,050-line
  single-file static site for MD Bilreparationer / MD Bil & Motor (MECA workshop,
  Eskilstuna). Worked, but everything inline, emoji icons, one long scroll, no real
  subpages (bad for SEO and maintenance).
- **Goals:** modern tooling, real subpages, premium-but-on-brand design, free hosting
  on Vercel (replacing paid Miss Hosting), push to GitHub later.

## Decisions (confirmed with the owner up front)

| Question | Decision | Why it matters |
| --- | --- | --- |
| Framework | **Next.js (App Router) + TypeScript + Tailwind v4** | Multi-page routing + SEO + free Vercel deploy |
| Subpages | Per-service pages, About/workshop, Gift card, Booking | Real URLs to rank + share |
| Design | **Premium MECA blue/yellow** | Keep brand as a MECA partner, just elevate it |
| Reviews | Real — keep them | Owner confirmed the 3 reviews + 4.7 score are genuine |

## Actions taken

1. **Read the full original file** to inventory features: hero, trust bar, reviews,
   services, about, vehicles, guarantees, map, Godkänd Bilverkstad, gift cards
   (Gift Up), MECA banner, FAQ, contact form (Formspree), GA, MECA booking links.

2. **Checked the environment** — Node 20.19, npm 10.9, git present. No pnpm/imagemagick.

3. **Scaffolded the app** with `create-next-app` (TypeScript, Tailwind, App Router,
   `src/` dir, import alias `@/*`). Result: **Next.js 16.2.9 + Tailwind v4**.

4. **Read the bundled Next 16 docs** (`node_modules/next/dist/docs`) because the
   scaffold's `AGENTS.md` warns of breaking changes. Confirmed the important ones:
   - `params`/`searchParams` are now **async (Promises)** — must be `await`ed.
   - `PageProps<'/route'>` helper types are globally available.
   - Tailwind v4 uses `@import "tailwindcss"` + `@theme` (no `tailwind.config.js`).

5. **Curated assets** from Downloads into `public/images/`: the real logo
   (`MD_Bil_Motor_Logo.png`), garage photos, the gift-card image, and MECA campaign
   images (Elbil, Batteritest, GBV, Lånebil, Nybilsgaranti, AC). Skipped the 9–29 MB
   raw photos — too large to commit unoptimized (noted in README TODO).

6. **Refined the palette from the real logo** (dark navy wordmark, muted gold
   underline, cream background) rather than the old bright `#FFD700`/`#003B8E`. Kept a
   MECA light-blue as a link/accent so it still reads as a MECA partner. Tokens live in
   `globals.css` under `@theme` (`--color-navy`, `--color-gold`, `--color-cream`, …).

7. **Set up the root layout** — self-hosted Barlow + Barlow Condensed via `next/font`,
   full SEO metadata (title template, OG, keywords, canonical), and migrated Google
   Analytics (`G-P83FC802R4`) using `next/script`.

8. **Built a single source of truth** (`src/lib/site.ts`) for NAP, opening hours,
   integration IDs, services, reviews, FAQ, vehicles, guarantees, nav. Everything
   else reads from here so content can't drift between pages.

9. **Built reusable components**: `ui.tsx` (Container/Button/Heading/Eyebrow),
   `nav.tsx` (scroll-aware sticky nav + mobile menu), `footer.tsx`, `icon.tsx`
   (data-driven Lucide icons replacing emojis), `service-card.tsx`, `page-header.tsx`
   (subpage banner + breadcrumbs), `email-link.tsx` (assembles email client-side to
   deter scrapers), `booking-button.tsx` + `track.ts` (GA `boka_click` events),
   `gift-up.tsx` (Gift Up loader), `json-ld.tsx` (Schema.org `AutoRepair`).

10. **Rebuilt all homepage sections** as components and composed them in `page.tsx`:
    hero, reviews, services, about, vehicles, guarantees, GBV, gift cards, MECA
    banner, map, FAQ, contact. The contact form posts to Formspree and now shows an
    **inline success state** instead of redirecting to the old `tack.html`.

11. **Built the subpages:** `/tjanster` (overview), `/tjanster/[slug]` (one static
    page per service via `generateStaticParams`, async `params`, async
    `generateMetadata`, related-services block), `/om-oss`, `/presentkort`, `/boka`.

12. **Added SEO plumbing:** `sitemap.ts`, `robots.ts`, and a branded `not-found.tsx`.

13. **Verified:** `npm run build` compiles cleanly — **16 static pages** prerendered
    (incl. all 6 service pages). Ran `npm run start` and confirmed every route returns
    200, the 404 works, and homepage content + JSON-LD are present.

## Deviations from the original (intentional)

- **Emoji icons → Lucide line icons** — the single biggest "cheap" signal removed.
- **Bright MECA yellow → muted logo gold + cream** — matches the actual brand mark.
- **`tack.html` redirect → inline form success** — fewer files, smoother UX.
- **One long page → home + 5 page types** — better SEO and shareable URLs.

## Polish pass (round 2)

- Added **scroll-reveal animations** (`scroll-reveal.tsx` + `.reveal` CSS). Implemented
  as progressive enhancement: a `.js` flag is added to `<html>` on mount so content is
  fully visible if JS is disabled, and the effect is skipped entirely under
  `prefers-reduced-motion`. Applied to the services, reviews, guarantees, vehicles,
  about and FAQ content blocks (inner wrappers only, so full-bleed backgrounds don't
  fade). Build re-verified clean.

## Added pages (round 3) — contact, warranty, legal

Owner requested three more pages: a dedicated contact page, a warranty page, and a
page covering "all the rules a Swedish workshop follows under Swedish law."

- **`/kontakt`** — dedicated contact page. Reuses the existing `Contact` form section
  and `MapSection` under a page header (no duplicated logic).
- **`/garanti`** — warranty page. Headline figures (1 år arbete / 3 år reservdelar),
  what is/isn't covered, the shared `Guarantees` pillars, and a 3-step reklamation
  process. Links to `/villkor` for the legal rights.
- **`/villkor`** — "Villkor & dina rättigheter". Because this is legal content I
  **researched it first** (WebSearch + WebFetch on Konsumentverket and MRF) rather than
  writing from memory, and grounded each claim:
  - Konsumenttjänstlagen (1985:716) is tvingande; work must be *fackmässig*; omsorgsplikt/avrådan.
  - Ungefärligt pris får ej överstigas med mer än **15 %**; annars *skäligt pris*; rätt till specificerad räkning.
  - Tilläggsarbete kräver samråd (med snäva undantag).
  - Reklamation inom skälig tid (**2 månader räknas alltid**), reklamationsrätt upp till **3 år**; påföljder: avhjälpande, prisavdrag, hävning, skadestånd.
  - Tvist → **ARN** (vi följer besluten som ansluten verkstad).
  - Godkänd Bilverkstad: 8 områden, branschöverenskommelsen *Reparationsvillkoren* med Konsumentverket, årlig tredjepartsgranskning + oanmälda stickprov.
  - Kort GDPR-stycke.
  - Includes a **disclaimer** (förenklad sammanfattning, ej juridisk rådgivning) and a
    **Källor**-list linking the authoritative sources. Sticky table of contents.

- **Nav/footer updated:** top nav is now Tjänster · Om oss · Garanti · Presentkort ·
  Kontakt. Legal pages (Garanti, Villkor) added to the footer. Sitemap updated.
- Verified: build = **19 static pages**, lint clean. Confirmed the new pages' content
  in the prerendered HTML under `.next/server/app/` (live server check was blocked by a
  sandbox restriction on the `sleep` used to wait for startup).

### Sources used for /villkor
- Konsumentverket — Konsumenttjänstlagen (konsument)
- Konsumentverket — Reklamera när bilverkstaden gjort fel
- MRF — Reparationsvillkor
- godkandbilverkstad.se

## Open items (also in README)

- Replace the low-res `garage-day.png` placeholder with optimized real photography.
- Confirm the Google Maps pin coordinates.
- Optional: pull Google reviews live (Places API) instead of hardcoding.
- Add an Open Graph share image.
- Set `site.url` to the final production domain before launch.
