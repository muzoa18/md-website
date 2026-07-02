"use client";

import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { track } from "@/lib/track";

/**
 * MECA online-booking CTA. Always opens the external booking system in a new
 * tab and fires a GA `boka_click` event tagged with where it was clicked.
 */
export function BookingButton({
  children,
  label,
  variant = "gold",
  withArrow = true,
  className,
}: {
  children: ReactNode;
  label: string;
  variant?: "gold" | "outline";
  withArrow?: boolean;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-display font-bold uppercase tracking-[0.06em] transition-all duration-200 px-7 py-3.5 text-[0.95rem]";
  const variants = {
    gold: "bg-gold text-ink hover:bg-gold-bright hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(224,169,46,0.4)]",
    outline: "border-2 border-white/40 text-white hover:border-gold hover:text-gold",
  };

  return (
    <a
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("boka_click", { category: "booking", label })}
      className={`${base} ${variants[variant]} ${className ?? ""}`}
    >
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" aria-hidden />}
    </a>
  );
}
