import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Container, Heading, Eyebrow } from "@/components/ui";
import { Guarantees } from "@/components/sections/guarantees";
import { BookingButton } from "@/components/booking-button";
import { PhoneLink } from "@/components/phone-link";

export const metadata: Metadata = {
  title: "Garanti",
  description:
    "Garanti på allt arbete hos MD Bil: 1 års garanti på utfört arbete och 3 års garanti på reservdelar. Så fungerar garantin och så reklamerar du.",
  alternates: { canonical: "/garanti" },
};

const covered = [
  "Fel som beror på hur arbetet utförts hos oss",
  "Reservdelar vi monterat som visar sig vara defekta",
  "Arbete som inte motsvarar det vi kommit överens om",
];

const notCovered = [
  "Normalt slitage och förbrukningsdelar (t.ex. bromsbelägg som slits)",
  "Fel som uppstått av yttre påverkan, olycka eller felaktig användning",
  "Arbete eller delar som någon annan verkstad utfört eller monterat",
];

export default function WarrantyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trygghet"
        title="Garanti på allt arbete"
        lead="Vi står för det vi gör. Alla reparationer och byten utförs med garanti – för att du ska kunna lämna in bilen med förtroende."
        crumbs={[{ label: "Garanti" }]}
      />

      {/* Headline guarantee figures */}
      <section className="bg-paper py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="bg-navy p-10 text-white">
              <p className="font-display text-6xl font-black leading-none text-gold">
                1 år
              </p>
              <p className="mt-3 font-display text-xl font-bold uppercase tracking-wide">
                Garanti på arbetet
              </p>
              <p className="mt-2 text-sm text-white/65">
                Vi lämnar 1 års garanti på utfört arbete. Uppstår ett fel som är
                direkt relaterat till vårt arbete åtgärdar vi det utan extra
                kostnad.
              </p>
            </div>
            <div className="bg-blue p-10 text-white">
              <p className="font-display text-6xl font-black leading-none text-navy">
                3 år
              </p>
              <p className="mt-3 font-display text-xl font-bold uppercase tracking-wide">
                Garanti på reservdelar
              </p>
              <p className="mt-2 text-sm text-white/80">
                Reservdelar vi monterar omfattas av 3 års garanti via MECA:s
                leverantörsnätverk – kvalitet du kan lita på.
              </p>
            </div>
          </div>

          {/* What is / isn't covered */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="border border-line bg-white p-8">
              <h2 className="font-display text-xl font-black uppercase text-navy">
                Vad garantin omfattar
              </h2>
              <ul className="mt-5 space-y-3">
                {covered.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-steel">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-line bg-white p-8">
              <h2 className="font-display text-xl font-black uppercase text-navy">
                Vad som inte omfattas
              </h2>
              <ul className="mt-5 space-y-3">
                {notCovered.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-steel">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-steel">
                      –
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* The four guarantee pillars (shared section) */}
      <Guarantees />

      {/* How to claim */}
      <section className="bg-paper py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Reklamation</Eyebrow>
            <Heading className="mt-3 text-navy">Så gör du om något blir fel</Heading>
            <ol className="mt-6 space-y-5">
              {[
                {
                  t: "Kontakta oss",
                  d: "Hör av dig så snart du upptäcker felet – ring eller mejla oss och beskriv vad som hänt.",
                },
                {
                  t: "Ta med fordonet och kvittot",
                  d: "Vi behöver se fordonet och din faktura/kvitto för att bedöma ärendet.",
                },
                {
                  t: "Vi åtgärdar",
                  d: "Är felet kopplat till vårt arbete eller en monterad del rättar vi till det enligt garantin.",
                },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-navy font-display font-black text-gold">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold uppercase tracking-wide text-navy">
                      {s.t}
                    </p>
                    <p className="text-sm text-steel">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-sm text-steel">
              Utöver vår garanti har du som privatperson alltid skydd enligt
              konsumenttjänstlagen.{" "}
              <Link href="/villkor" className="font-medium text-blue underline">
                Läs mer om dina rättigheter
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col items-start justify-center gap-4 bg-navy p-10 text-white">
            <p className="font-display text-2xl font-black uppercase">
              Har du ett garantiärende?
            </p>
            <p className="text-white/70">
              Hör av dig så hjälper vi dig. Boka en tid online eller ring oss
              direkt under öppettiderna.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <BookingButton label="garanti_cta">Boka tid</BookingButton>
              <PhoneLink
                label="garanti_page"
                showIcon
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 px-7 py-3.5 font-display font-bold uppercase tracking-wide text-white hover:border-gold hover:text-gold"
              />
            </div>
            <Link
              href="/villkor"
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-gold hover:underline"
            >
              Villkor & dina rättigheter
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
