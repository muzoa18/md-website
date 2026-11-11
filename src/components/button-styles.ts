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

/**
 * Phone / email rendered as a tappable button rather than plain text.
 * Plain contact text on dark sections didn't read as pressable — visitors
 * copied the number by hand (no phone_click fired) or didn't act at all.
 * Shape: gold icon tile + small verb ("Ring oss") + the number/address.
 */
export const contactButton = {
  root:
    "group inline-flex max-w-full items-center gap-3 border-2 border-white/20 bg-white/5 py-2 pl-2 pr-5 text-left " +
    "transition-colors duration-200 hover:border-gold hover:bg-white/10 active:bg-white/15",
  icon:
    "flex h-11 w-11 shrink-0 items-center justify-center bg-gold text-ink",
  verb:
    "block font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold",
  value:
    "block [overflow-wrap:anywhere] font-display text-lg font-bold tracking-wide text-white group-hover:text-gold",
};
