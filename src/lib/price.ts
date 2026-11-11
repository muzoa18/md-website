import type { PriceItem } from "./site";

/**
 * Formats a price the Swedish way: "från 1 995 kr", or "700 kr" when the
 * price is fixed. A null price renders as "Ring för pris" so a row can stay
 * listed while the owner hasn't settled on a number.
 */
export function formatFrom(
  from: PriceItem["from"],
  fixed: PriceItem["fixed"] = false,
): string {
  if (from === null) return "Ring för pris";
  const amount = `${from.toLocaleString("sv-SE")} kr`;
  return fixed ? amount : `från ${amount}`;
}
