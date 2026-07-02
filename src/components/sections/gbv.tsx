import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { Container, Eyebrow, Heading } from "@/components/ui";

const points = [
  "Vi följer alltid lagar, förordningar och miljökrav samt Allmänna reklamationsnämndens beslut.",
  "Verkstaden granskas årligen av oberoende tredjepartskontrollanter.",
  "Standarden är framtagen av Sveriges Fordonsverkstäders Förening, Motorbranschens Riksförbund och Konsumentverket.",
  "Systematiskt arbetsmiljöarbete och ett professionellt kundbemötande ingår i kraven.",
];

export function Gbv() {
  return (
    <section id="gbv" className="bg-paper py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>Kvalitetsmärkning</Eyebrow>
          <Heading className="mt-3 text-navy">
            Godkänd
            <br />
            Bilverkstad
          </Heading>
          <p className="mt-4 text-steel">
            Vi är certifierade enligt standarden Godkänd Bilverkstad – en
            kvalitetssäkring som ger dig som konsument rätt service och trygghet.
          </p>
          <ul className="mt-7 space-y-3">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 border-l-4 border-gold bg-cream px-5 py-4 text-sm leading-relaxed text-steel"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex flex-col items-center gap-8 overflow-hidden bg-navy px-8 py-14">
          <div className="absolute inset-0 bg-hatch" aria-hidden />
          <div className="relative z-10 w-full max-w-xs overflow-hidden bg-white">
            <Image
              src="/images/gbv.jpg"
              alt="Godkänd Bilverkstad — certifiering"
              width={400}
              height={400}
              className="h-auto w-full"
            />
          </div>
          <div className="relative z-10 text-center">
            <p className="font-display text-xl font-black uppercase text-white">
              Certifierad och granskad
            </p>
            <p className="mt-2 text-sm text-white/60">
              Som MECA-partner uppfyller vi alla krav för Godkänd Bilverkstad.
            </p>
            <a
              href="https://www.godkandbilverkstad.se"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 border-b border-gold/40 pb-0.5 font-display text-sm font-bold uppercase tracking-wider text-gold hover:border-gold"
            >
              Läs mer på godkandbilverkstad.se
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
