"use client";

import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { trackBooking } from "@/lib/track";
import { buttonBase, buttonVariants, cx } from "./button-styles";

/**
 * MECA online-booking CTA. Always opens the external booking system in a new
 * tab and fires the `boka_click` key event tagged with where it was clicked.
 *
 * Note this measures booking *intent*: the booking itself completes on MECA's
 * domain, which we have no visibility into.
 */
export function BookingButton({
  children,
  label,
  variant = "gold",
  withArrow = true,
  className,
}: {
  children: ReactNode;
  /** Placement, e.g. "hero" — becomes the GA event_label. */
  label: string;
  variant?: "gold" | "outline";
  withArrow?: boolean;
  className?: string;
}) {
  return (
    <a
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackBooking(label)}
      className={cx(buttonBase, buttonVariants[variant], className)}
    >
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" aria-hidden />}
    </a>
  );
}
