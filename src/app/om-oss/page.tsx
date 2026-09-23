import type { Metadata } from "next";
import Image from "next/image";
import { Trophy, Medal, ShieldCheck, Users } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Container, Heading, Eyebrow } from "@/components/ui";
import { Gbv } from "@/components/sections/gbv";
import { MapSection } from "@/components/sections/map-section";
import { BookingButton } from "@/components/booking-button";

export const metadata: Metadata = {
  title: "Om oss – MECA-verkstad i Eskilstuna",
  description:
    "MD Bil är en oberoende MECA-verkstad i Eskilstuna med över 25 års erfarenhet. Personlig service med en stor koncerns resurser.",
  alternates: { canonical: "/om-oss" },
};

const values = [
  {
    icon: Users,
    title: "Personlig service",
    text: "Du möter alltid samma kunniga personal som tar sig tid att förklara vad som behöver göras – och varför.",
  },
  {
    icon: Trophy,
    title: "MECA-koncernen",
    text: "Som MECA-partner har vi tillgång till hela koncernens nätverk av leverantörer, utbildning och verktyg.",
  },
  {
    icon: Medal,
    title: "Godkänd Bilverkstad",
    text: "Vi är certifierade och granskas årligen av oberoende tredjepart – en trygghet för dig som kund.",
  },
  {
    icon: ShieldCheck,
    title: "Garanti på allt",
    text: "1 års garanti på arbetet och 3 år på reservdelar. Vi står för det vi gör.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Om oss"
        title="Erfarna händer. Ärliga svar."
        lead="En oberoende verkstad under MECA-koncernen med över 25 år i branschen – mitt i Eskilstuna."
        crumbs={[{ label: "Om oss" }]}
      />

      <section className="bg-paper py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/garage-day.png"
                alt="MD Bil verkstad"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 flex h-32 w-32 flex-col items-center justify-center bg-gold sm:-right-6">
              <span className="font-display text-5xl font-black leading-none text-navy">
                25
              </span>
              <span className="font-display text-[0.7rem] font-bold uppercase tracking-[0.1em] text-navy">
                År i branschen
              </span>
            </div>
          </div>
          <div>
            <Eyebrow>Vår historia</Eyebrow>
            <Heading className="mt-3 text-navy">
              Verkstaden du kan lita på
            </Heading>
            <div className="mt-4 space-y-4 text-steel">
              <p>
                MD Bil har tagit hand om Eskilstunabornas fordon i
                över 25 år. Under den tiden har bilarna blivit mer avancerade –
                och vi har följt med utvecklingen, från klassiska
                förbränningsmotorer till dagens el- och hybridbilar.
              </p>
              <p>
                Som en del av MECA-koncernen kombinerar vi den lilla verkstadens
                personliga bemötande med en stor organisations resurser,
                utbildning och reservdelssortiment. Resultatet är en verkstad där
                du får raka besked, tydliga offerter och garanti på allt arbete.
              </p>
            </div>
            <div className="mt-7">
              <BookingButton label="om_oss_cta">Boka tid hos oss</BookingButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Vad vi står för</Eyebrow>
            <Heading className="mt-3 text-navy">Våra värderingar</Heading>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="flex items-start gap-5 bg-white p-7">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                  <v.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-navy">
                    {v.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-steel">
                    {v.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Gbv />
      <MapSection />
    </>
  );
}
