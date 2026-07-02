import type { Metadata } from "next";
import { Phone, Clock, CalendarCheck, ShieldCheck, BadgeCheck } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/ui";
import { BookingButton } from "@/components/booking-button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Boka tid",
  description:
    "Boka tid hos MD Bil & Motor i Eskilstuna – online dygnet runt via MECA:s bokningssystem, eller ring oss direkt.",
  alternates: { canonical: "/boka" },
};

const perks = [
  { icon: CalendarCheck, title: "Boka dygnet runt", text: "Online-bokning via MECA är öppen 24/7 – välj tjänst och tid som passar dig." },
  { icon: ShieldCheck, title: "Garanti på arbetet", text: "1 års garanti på arbete och 3 år på reservdelar – tryggt hela vägen." },
  { icon: BadgeCheck, title: "Tydlig offert", text: "Du får alltid en offert innan arbetet påbörjas. Inga dolda avgifter." },
];

export default function BookingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Boka tid"
        title="Boka tid online"
        lead="Boka enkelt via MECA:s bokningssystem – eller ring oss så hjälper vi dig att hitta en tid."
        crumbs={[{ label: "Boka tid" }]}
      />

      <section className="bg-paper py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-black uppercase text-navy">
              Två sätt att boka
            </h2>
            <p className="mt-4 text-steel">
              Snabbast är att boka direkt i MECA:s bokningssystem. Vill du hellre
              prata med oss går det bra att ringa under våra öppettider.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <BookingButton label="boka_page">Boka online</BookingButton>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 border-2 border-navy/25 px-7 py-3.5 font-display font-bold uppercase tracking-wide text-navy transition-colors hover:border-gold"
              >
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
            </div>

            <div className="mt-10 border-t border-line pt-6">
              <p className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.15em] text-blue">
                <Clock className="h-4 w-4" /> Öppettider
              </p>
              <ul className="mt-4 max-w-sm space-y-2 text-sm text-steel">
                {site.openingHours.map((o) => (
                  <li key={o.day} className="flex justify-between border-b border-line pb-2">
                    <span>{o.day}</span>
                    <span className="font-medium text-navy">{o.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            {perks.map((p) => (
              <div key={p.title} className="flex items-start gap-5 bg-cream p-7">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                  <p.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-navy">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-steel">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
