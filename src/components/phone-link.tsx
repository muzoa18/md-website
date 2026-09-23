"use client";

import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { trackPhone } from "@/lib/track";

/**
 * The phone number as a `tel:` link, firing the `phone_click` key event.
 *
 * Exists so the number isn't hand-rolled as a bare <a> at eight call sites,
 * each needing its own tracking. GA4's enhanced measurement does not cover
 * `tel:` links — only outbound http(s) ones — so this is the only way the
 * click is counted.
 *
 * Caveat worth remembering when reading the numbers: on desktop many people
 * simply read the number and dial it, which fires nothing. Treat the mobile
 * segment as the reliable one.
 */
export function PhoneLink({
  label,
  className,
  iconClassName,
  showIcon = false,
  children,
}: {
  /** Placement, e.g. "footer" — becomes the GA event_label. */
  label: string;
  className?: string;
  iconClassName?: string;
  showIcon?: boolean;
  /** Defaults to the formatted number from site config. */
  children?: React.ReactNode;
}) {
  return (
    <a
      href={site.phoneHref}
      onClick={() => trackPhone(label)}
      className={className}
    >
      {showIcon && (
        <Phone className={`h-4 w-4 shrink-0 ${iconClassName ?? ""}`} />
      )}
      {children ?? site.phone}
    </a>
  );
}
