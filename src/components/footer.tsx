import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { Container } from "./ui";
import { site, services, nav, legalNav } from "@/lib/site";
import { EmailLink } from "./email-link";

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand + NAP */}
          <div>
            <p className="font-display text-2xl font-black uppercase tracking-wide text-white">
              MD <span className="text-gold">Bil &amp; Motor</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              MECA-certifierad bilverkstad i Eskilstuna. Service, reparation och
              däck med garanti – för alla märken och drivlinor.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {site.address}, {site.postal} {site.city}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a href={site.phoneHref} className="hover:text-gold">
                  {site.phone}
                </a>
              </p>
              <EmailLink className="hover:text-gold" iconClassName="text-gold" />
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Tjänster">
            <p className="font-display text-sm font-bold uppercase tracking-[0.15em] text-gold">
              Tjänster
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/tjanster/${s.slug}`}
                    className="hover:text-gold"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Pages */}
          <nav aria-label="Sidor">
            <p className="font-display text-sm font-bold uppercase tracking-[0.15em] text-gold">
              Sidor
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/boka" className="hover:text-gold">
                  Boka tid
                </Link>
              </li>
            </ul>
          </nav>

          {/* Hours */}
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.15em] text-gold">
              <Clock className="mr-2 inline h-4 w-4" />
              Öppettider
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {site.openingHours.map((o) => (
                <li key={o.day} className="flex justify-between gap-4">
                  <span>{o.day}</span>
                  <span className="text-white/55">{o.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-gold">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <span>
              © {new Date().getFullYear()} {site.legalName}. Alla rättigheter
              förbehållna.
            </span>
            <span className="font-display font-bold uppercase tracking-[0.15em] text-gold/80">
              MECA Partner · Godkänd Bilverkstad
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
