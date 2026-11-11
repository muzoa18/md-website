"use client";

import { CalendarCheck, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { trackBooking } from "@/lib/track";
import { PhoneLink } from "./phone-link";

/**
 * Call / book bar pinned to the bottom of the screen on phones.
 *
 * On small screens the header hides both the booking button and the phone
 * number behind the menu, so the two actions that make a lead were two taps
 * away. This keeps them one thumb-tap away on every page.
 *
 * The layout adds matching bottom padding (see layout.tsx) so the bar never
 * covers the footer.
 */
export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-ink pb-[env(safe-area-inset-bottom)] md:hidden"
      role="navigation"
      aria-label="Ring eller boka"
    >
      <PhoneLink
        label="mobile_bar"
        className="flex h-14 items-center justify-center gap-2 font-display text-base font-bold uppercase tracking-wide text-white"
      >
        <Phone className="h-5 w-5 text-gold" aria-hidden />
        Ring oss
      </PhoneLink>
      <a
        href={site.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackBooking("mobile_bar")}
        className="flex h-14 items-center justify-center gap-2 bg-gold font-display text-base font-bold uppercase tracking-wide text-ink"
      >
        <CalendarCheck className="h-5 w-5" aria-hidden />
        Boka tid
      </a>
    </div>
  );
}
