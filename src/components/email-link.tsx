"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { getEmail } from "@/lib/email";
import { trackEmail } from "@/lib/track";
import { contactButton, cx } from "./button-styles";

/**
 * Renders the contact email as a mailto link, assembled on the client so
 * the raw address never appears in the static HTML (basic anti-scrape).
 *
 * Fires the `email_click` key event. GA4's enhanced measurement does not
 * cover `mailto:` links, so without this the address looks unused.
 */
export function EmailLink({
  label,
  className,
  iconClassName,
  showIcon = true,
  button = false,
}: {
  /** Placement, e.g. "footer" — becomes the GA event_label. */
  label: string;
  className?: string;
  iconClassName?: string;
  showIcon?: boolean;
  /** Render as a "Mejla oss" button instead of inline text. */
  button?: boolean;
}) {
  const [email, setEmail] = useState("");
  // Intentionally set after mount: keeps the raw address out of the static HTML
  // (anti-scrape) and avoids an SSR/client hydration mismatch.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setEmail(getEmail()), []);

  if (button) {
    return (
      <a
        href={email ? `mailto:${email}` : undefined}
        onClick={() => trackEmail(label)}
        className={cx(contactButton.root, className)}
      >
        <span className={contactButton.icon}>
          <Mail className="h-5 w-5" aria-hidden />
        </span>
        <span className="min-w-0">
          <span className={contactButton.verb}>Mejla oss</span>
          <span className={cx(contactButton.value, "text-base")}>{email || "…"}</span>
        </span>
      </a>
    );
  }

  return (
    <a
      href={email ? `mailto:${email}` : undefined}
      onClick={() => trackEmail(label)}
      className={`flex items-center gap-2 ${className ?? ""}`}
    >
      {showIcon && <Mail className={`h-4 w-4 shrink-0 ${iconClassName ?? ""}`} />}
      <span>{email || "…"}</span>
    </a>
  );
}
