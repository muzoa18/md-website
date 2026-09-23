/**
 * Shared CTA styling.
 *
 * Lives in its own module rather than in `ui.tsx` so the client-side CTAs
 * (`BookingButton`, `ContactButton`) can reuse it without pulling the whole
 * server-rendered primitives file into the client bundle.
 */

export function cx(...parts: Array<string | false | undefined | null>) {
  return parts.filter(Boolean).join(" ");
}

export const buttonBase =
  "inline-flex items-center justify-center gap-2 font-display font-bold uppercase tracking-[0.06em] " +
  "transition-all duration-200 px-7 py-3.5 text-[0.95rem]";

export const buttonVariants = {
  gold: "bg-gold text-ink hover:bg-gold-bright hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(224,169,46,0.4)]",
  outline:
    "border-2 border-white/40 text-white hover:border-gold hover:text-gold",
  ghost: "border border-gold/30 text-gold hover:border-gold hover:bg-gold/10",
};

export type ButtonVariant = keyof typeof buttonVariants;
