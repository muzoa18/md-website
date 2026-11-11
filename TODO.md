# Owner to-do — trust & UX

The code side is done. These need **you**: facts only you know, or work
outside the website. Most are one line in `src/lib/site.ts`. Anything left
empty there stays **hidden** on the site, so nothing half-true goes live.

## Prices

- [x] All prices confirmed and live 2026-11-11 (brakes and kupéfilter removed).
      Keep `prices` in `src/lib/site.ts` in step with the counter price.

## Photos (biggest trust win — no code needed from you)

- [ ] Owner portrait, and each mechanic with first name
- [ ] The workshop floor, with cars on the lifts
- [ ] Customer lounge, and the key drop box (both mentioned in the FAQ)
- [ ] A new, sharp front photo. The current one is 640×426 and used three times
- Phone photos in daylight are fine. Real beats stock.
- Send them over and they'll go into a "Möt oss" section on the home and Om oss pages.

## Fill in `src/lib/site.ts`

- [ ] `orgNr` — e.g. `"556123-4567"`, shown in the footer (check allabolag.se)
- [ ] `fSkatt` — `true` if you're approved for F-skatt, shown in the footer
- [ ] `googleScore.count` — total number of Google reviews (shows "63 omdömen"
      and enables star ratings in Google's structured data)
- [ ] `reviews[].date` — the month each quoted review was posted, e.g. `"mars 2026"`
- [ ] `courtesyCar` — set to `true` **only** if you offer a lånebil
- [ ] `replyPromise` — a reply time you can keep, e.g. `"Vi svarar samma arbetsdag."`

## Email

- [ ] Create `info@mdbilreparationer.se` (via your domain host, or Google
      Workspace / Microsoft 365) and forward it to the Gmail address. Then change
      `emailUser` / `emailDomain` in `site.ts`. Don't change them before the
      mailbox exists, or mail will bounce.

## Outside the website

- [ ] **Google Business Profile** — likely where most of your calls come from.
      Upload the same photos, post monthly, and reply to every review, including bad ones.
- [ ] Ask happy customers for a Google review (a QR code at the counter works well)
- [ ] GA4 key events and Search Console linking — see `ANALYTICS.md`

## Later ideas

- [ ] Examples of real jobs: "Volvo V70, bromsskivor — offert 3 200 kr, slutpris 3 200 kr"
- [ ] Show live Google reviews instead of the three hand-picked quotes
