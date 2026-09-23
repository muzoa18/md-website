# Analytics setup — MD Bil

A to-do list for getting Google Analytics 4 reporting on leads, so we can tell
whether marketing and SEO work is actually paying off.

The code side is already done and deployed. **Everything below is clicking
around in the GA4 web interface** — no code changes needed.

Property: `G-P83FC802R4` (see `site.gaId`)

---

## The idea in one paragraph

Traffic is vanity. What matters is **leads**: someone tried to contact us. The
site now fires an event every time a visitor taps the phone number, taps the
email address, goes through to MECA's booking, or sends the contact form. Once
those four are marked as **Key Events** in GA4, GA4 reports them against every
traffic source automatically. Then "did SEO help?" stops being a guess:
*organic search sessions went up 40%, and organic key events went up 35%* is an
answer. Sessions alone is not.

---

## What the site sends

| Event | Meaning | Key event? |
| --- | --- | --- |
| `phone_click` | Tapped the phone number | **Yes** |
| `email_click` | Tapped the email address | **Yes** |
| `boka_click` | Went through to MECA booking | **Yes** |
| `form_submit` | Sent the contact form | **Yes** |
| `kontakt_click` | Jumped to the contact section | **No — on purpose** |

`kontakt_click` is deliberately not a lead. Scrolling to the contact form is
interest, not contact. Counting it would inflate our conversion rate and hide
whether SEO is really working.

Every event also carries a `label` saying *where* it was clicked — `hero`,
`footer`, `contact_section`, `map`, `mobile_menu`, and so on. See
[Optional: per-placement detail](#optional-per-placement-detail).

---

## The checklist

### 1. Generate one of each event first

GA4 only lists an event after it has seen it at least once, so there is nothing
to tick until real data arrives.

- [ ] Open the live site on your **phone**
- [ ] Tap the phone number, tap the email address, tap "Boka tid nu", send the contact form
- [ ] In GA4 go to **Reports → Realtime** and confirm the events show up (takes seconds)

> If nothing appears, check an ad blocker isn't blocking Google Analytics —
> very common, and it will make your own testing look broken.

### 2. Mark the four leads as Key Events

**Admin → Data display → Events**

Wait up to 24h after step 1 for the events to be listed here.

- [ ] `phone_click` → toggle **Mark as key event** on
- [ ] `email_click` → toggle on
- [ ] `boka_click` → toggle on
- [ ] `form_submit` → toggle on
- [ ] `kontakt_click` → **leave off**

### 3. Link Google Search Console

This is the single most important SEO step. GA4 will **never** show you which
search terms people found us with — only Search Console does.

- [ ] Verify the site in [Google Search Console](https://search.google.com/search-console) (if not already)
- [ ] GA4 → **Admin → Product links → Search Console links → Link**
- [ ] GA4 → **Reports → Library** → publish the "Search Console" collection so the reports actually appear in the sidebar

> Do this **now**, even if SEO work starts later. Search Console only collects
> data from the day it is linked — it cannot backfill.

### 4. Set a baseline and leave it alone

- [ ] Note today's date here: `baseline started: ____________`
- [ ] Change nothing for SEO/marketing for **~4 weeks**
- [ ] After 4 weeks, screenshot **Reports → Acquisition → Traffic acquisition**

Without a "before" there is no "after". This is the step people skip and then
can't prove anything worked.

---

## How to read it once data is in

**Reports → Acquisition → Traffic acquisition**, then add *Key events* as a column:

```
Channel            Sessions   Key events   Conv. rate
─────────────────────────────────────────────────────
Organic Search        1,240        84         6.8%   ← the SEO number
Direct                  610        51         8.4%
Referral (MECA)         180        22        12.2%
Organic Social           95         3         3.2%
```

- **Total key events** = our lead count.
- **Organic Search key events** = what SEO is delivering.
- **Conversion rate** = how good the site is at turning visitors into contacts.

Watch for the trap: traffic rising while leads stay flat usually means we're
ranking for the wrong search terms — people arriving who were never going to
book. That is worse than no traffic growth, because it looks like success.

---

## Known blind spots

Be honest about these when reporting numbers upward.

| Blind spot | Why | Where to look instead |
| --- | --- | --- |
| **Calls from Google Maps** | Most people search "bilverkstad Eskilstuna", see our Google Business Profile and hit *Call* there. That never touches the website, so GA4 cannot see it. For a local workshop this is often the **bigger** channel. | Google Business Profile → Performance |
| **Bookings actually completed** | `boka_click` means someone left for MECA's booking system. Whether they finished happens on MECA's domain. Treat it as **booking attempts**. | MECA's own system |
| **Desktop phone calls** | On mobile, tapping the number dials. On desktop, people read it and dial manually — no click, no event. Phone numbers are undercounted on desktop. | Segment by device; trust the mobile figure |
| **Ad blockers** | A slice of visitors block Google Analytics entirely. Everything here is undercounted by some consistent margin. | Fine for trends, not for exact totals |
| **Revenue** | A phone click is not a paying customer. | Would need leads tied to actual jobs — a separate project |

Trends over time are trustworthy. Absolute numbers are a floor, not the truth.

---

## Optional: per-placement detail

Everything above works with **zero** extra configuration, because GA4 reports
event *names* automatically.

Event *parameters* are different — they are invisible in reports until
registered. Do this only when you want to know *which* phone link gets used
(footer vs. hero vs. contact section):

- [ ] **Admin → Data display → Custom definitions → Create custom dimension**
- [ ] Dimension name `Event category`, scope **Event**, parameter `event_category`
- [ ] Dimension name `Event label`, scope **Event**, parameter `event_label`

Two caveats: it takes 24–48h to populate, and **it is not retroactive** — you
only get the breakdown from the day you register it. The lead counts themselves
are unaffected either way.

---

## If you change the tracking code

The event names in `src/lib/track.ts` are a contract with the GA4 config above.
Renaming one does not throw an error — it silently detaches that event from
conversion reporting, and the numbers quietly go to zero.

`src/lib/track.test.ts` asserts the exact payload of every event for this
reason. If you change a name there, update the Key Event toggles in GA4 to match.
