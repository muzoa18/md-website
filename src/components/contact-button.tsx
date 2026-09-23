"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trackContactCta } from "@/lib/track";
import { buttonBase, buttonVariants, type ButtonVariant, cx } from "./button-styles";

/**
 * CTA that jumps to the contact section, firing `kontakt_click`.
 *
 * Deliberately NOT a key event in GA4: reaching the contact form is interest,
 * not a lead. Counting it as a conversion would inflate the rate we measure
 * SEO work against. The lead is the phone/email/booking click that follows.
 */
export function ContactButton({
  children,
  label,
  href = "/#kontakt",
  variant = "outline",
  withArrow = false,
  className,
}: {
  children: ReactNode;
  /** Placement, e.g. "hero" — becomes the GA event_label. */
  label: string;
  href?: string;
  variant?: ButtonVariant;
  withArrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={() => trackContactCta(label)}
      className={cx(buttonBase, buttonVariants[variant], className)}
    >
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" aria-hidden />}
    </Link>
  );
}
