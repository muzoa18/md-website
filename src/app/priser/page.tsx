import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/ui";
import { PriceList } from "@/components/price-list";
import { BookingButton } from "@/components/booking-button";
import { PhoneLink } from "@/components/phone-link";
import { Process } from "@/components/sections/process";
import { prices, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Priser – däckbyte, service och felsökning i Eskilstuna",
  description:
    "Från-priser hos MD Bil i Eskilstuna: hjulskifte, däckhotell, felsökning, service, bromsar och AC. Alla priser inkl. moms – du får alltid en offert innan vi börjar.",
  alternates: { canonical: "/priser" },
};

export default function PricesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Priser"
        title="Tydliga priser"
        lead="Här är våra från-priser. Det slutliga priset beror på bilmodell – du får alltid en offert innan vi börjar arbeta."
        crumbs={[{ label: "Priser" }]}
      />

      <section className="bg-paper py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {prices.map((group) => {
              const service = services.find((s) => s.slug === group.service);
              return (
                <div key={group.title} className="border border-line bg-white p-7">
                  <h2 className="font-display text-2xl font-black uppercase text-navy">
                    {group.title}
                  </h2>
                  <div className="mt-3">
                    <PriceList items={group.items} />
                  </div>
                  {service && (
                    <Link
                      href={`/tjanster/${service.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-navy"
                    >
                      Mer om {service.title.toLowerCase()}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex items-start gap-3 border-l-4 border-gold bg-cream px-5 py-4 text-sm text-steel">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden />
            <p>
              Alla priser är inklusive moms. Från-priset gäller en vanlig
              personbil – större bilar, specialdelar eller extra arbete kan kosta
              mer. Vi ger dig alltid en offert först, och inget arbete utöver
              offerten görs utan ditt godkännande. Hittar du inte det du söker?
              Ring oss så ger vi ett pris direkt.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <BookingButton label="priser_page">Boka tid online</BookingButton>
            <PhoneLink
              label="priser_page"
              showIcon
              className="inline-flex items-center justify-center gap-2 border-2 border-navy/25 px-7 py-3.5 font-display font-bold uppercase tracking-wide text-navy transition-colors hover:border-gold"
            />
          </div>
        </Container>
      </section>

      <Process />
    </>
  );
}
