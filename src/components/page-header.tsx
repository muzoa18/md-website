import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "./ui";

type Crumb = { label: string; href?: string };

/** Dark banner used at the top of every subpage, with breadcrumbs. */
export function PageHeader({
  eyebrow,
  title,
  lead,
  crumbs = [],
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy pt-[70px] text-white">
      <div className="absolute inset-0 bg-hatch" aria-hidden />
      <Container className="relative z-10 py-16 sm:py-20">
        <nav
          aria-label="Brödsmulor"
          className="flex flex-wrap items-center gap-1.5 text-xs uppercase tracking-wider text-white/50"
        >
          <Link href="/" className="hover:text-gold">
            Hem
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3" />
              {c.href ? (
                <Link href={c.href} className="hover:text-gold">
                  {c.label}
                </Link>
              ) : (
                <span className="text-gold">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        {eyebrow && (
          <p className="mt-6 font-display text-sm font-bold uppercase tracking-[0.22em] text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-black uppercase leading-[0.95] tracking-tight">
          {title}
        </h1>
        {lead && <p className="mt-5 max-w-2xl text-lg text-white/70">{lead}</p>}
      </Container>
    </section>
  );
}
