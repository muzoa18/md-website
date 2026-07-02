import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "./icon";
import type { Service } from "@/lib/site";

/** Service teaser card used on the homepage and the services overview page. */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/tjanster/${service.slug}`}
      className="group relative flex flex-col overflow-hidden border border-line border-t-4 border-t-navy bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-t-gold hover:shadow-[0_18px_44px_rgba(13,27,42,0.13)]"
    >
      <span className="flex h-12 w-12 items-center justify-center bg-cream text-navy transition-colors group-hover:bg-navy group-hover:text-gold">
        <Icon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-display text-xl font-extrabold uppercase tracking-wide text-navy">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">
        {service.short}
      </p>
      <span className="mt-5 inline-flex items-center gap-1 font-display text-sm font-bold uppercase tracking-wider text-blue">
        Läs mer
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
