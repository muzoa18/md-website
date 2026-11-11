"use client";

import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { trackPhone } from "@/lib/track";
import { contactButton, cx } from "./button-styles";

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
  button = false,
  children,
}: {
  /** Placement, e.g. "footer" — becomes the GA event_label. */
  label: string;
  className?: string;
  iconClassName?: string;
  showIcon?: boolean;
  /** Render as a "Ring oss" button instead of inline text. */
  button?: boolean;
  /** Defaults to the formatted number from site config. */
  children?: React.ReactNode;
}) {
  if (button) {
    return (
      <a
        href={site.phoneHref}
        onClick={() => trackPhone(label)}
        className={cx(contactButton.root, className)}
      >
        <span className={contactButton.icon}>
          <Phone className="h-5 w-5" aria-hidden />
        </span>
        <span className="min-w-0">
          <span className={contactButton.verb}>Ring oss</span>
          <span className={contactButton.value}>{site.phone}</span>
        </span>
      </a>
    );
  }

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
