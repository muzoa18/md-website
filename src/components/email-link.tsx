"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { getEmail } from "@/lib/email";

/**
 * Renders the contact email as a mailto link, assembled on the client so
 * the raw address never appears in the static HTML (basic anti-scrape).
 */
export function EmailLink({
  className,
  iconClassName,
  showIcon = true,
}: {
  className?: string;
  iconClassName?: string;
  showIcon?: boolean;
}) {
  const [email, setEmail] = useState("");
  // Intentionally set after mount: keeps the raw address out of the static HTML
  // (anti-scrape) and avoids an SSR/client hydration mismatch.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setEmail(getEmail()), []);

  return (
    <a
      href={email ? `mailto:${email}` : undefined}
      className={`flex items-center gap-2 ${className ?? ""}`}
    >
      {showIcon && <Mail className={`h-4 w-4 shrink-0 ${iconClassName ?? ""}`} />}
      <span>{email || "…"}</span>
    </a>
  );
}
