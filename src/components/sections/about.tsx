import Image from "next/image";
import { Trophy, Medal, ShieldCheck } from "lucide-react";
import { Container, Eyebrow, Heading, Button } from "@/components/ui";

const features = [
  {
    icon: Trophy,
    title: "Under MECA-koncernen",
    text: "Tillgång till hela MECA:s nätverk av leverantörer, utbildning och verktyg.",
  },
  {
    icon: Medal,
    title: "Godkänd Bilverkstad",
    text: "Certifierade och granskade — du kan alltid kräva kvalitet av oss.",
  },
  {
    icon: ShieldCheck,
    title: "Garanti på allt arbete",
    text: "Alla reparationer utförs med garanti. Lämna in bilen med förtroende.",
  },
];

export function About() {
  return (
    <section id="om-oss" className="bg-paper py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/garage-day.png"
              alt="MD Bil & Motor verkstad i Eskilstuna"
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
          <Eyebrow>Om oss</Eyebrow>
          <Heading className="mt-3 text-navy">
            Erfarna händer.
            <br />
            Ärliga svar.
          </Heading>
          <p className="mt-4 text-steel">
            Vi är en oberoende verkstad under MECA-koncernen med över 25 år i
            branschen. Det betyder att du får den lilla verkstadens personliga
            service – med en stor koncerns resurser och kompetens.
          </p>

          <div className="reveal mt-7 space-y-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-4 border-l-4 border-blue bg-cream px-5 py-4"
              >
                <f.icon className="mt-0.5 h-6 w-6 shrink-0 text-navy" />
                <div>
                  <p className="font-display text-base font-bold uppercase tracking-wide text-navy">
                    {f.title}
                  </p>
                  <p className="text-sm text-steel">{f.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button href="/om-oss" variant="ghost" withArrow className="!text-navy !border-navy/25 hover:!bg-navy/5">
              Mer om verkstaden
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
