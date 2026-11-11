import type { PriceItem } from "@/lib/site";
import { formatFrom } from "@/lib/price";

/** A list of "från"-priser: name and note on the left, price on the right. */
export function PriceList({
  items,
  dark = false,
}: {
  items: PriceItem[];
  /** For use on navy backgrounds. */
  dark?: boolean;
}) {
  return (
    <ul className={dark ? "divide-y divide-white/10" : "divide-y divide-line"}>
      {items.map((p) => (
        <li key={p.name} className="flex items-baseline justify-between gap-4 py-3">
          <span>
            <span className={dark ? "font-medium text-white" : "font-medium text-navy"}>
              {p.name}
            </span>
            {p.note && (
              <span className={`block text-xs ${dark ? "text-white/55" : "text-steel"}`}>
                {p.note}
              </span>
            )}
          </span>
          <span
            className={`shrink-0 whitespace-nowrap font-display text-lg font-bold ${
              dark ? "text-gold" : "text-navy"
            }`}
          >
            {formatFrom(p.from, p.fixed)}
          </span>
        </li>
      ))}
    </ul>
  );
}
