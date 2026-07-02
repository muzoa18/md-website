import { Mail, Wrench, ShieldCheck, Smartphone } from "lucide-react";
import { Container, Eyebrow, Heading } from "@/components/ui";
import { GiftUp } from "@/components/gift-up";

const points = [
  {
    icon: Mail,
    title: "Levereras direkt",
    text: "Mottagaren får presentkortet via e-post direkt efter köpet — eller schemalägg det till ett speciellt datum.",
  },
  {
    icon: Wrench,
    title: "Gäller alla tjänster",
    text: "Används för service, däckbyte, diagnostik och alla andra tjänster vi erbjuder.",
  },
  {
    icon: ShieldCheck,
    title: "Säker betalning",
    text: "Betalning sker säkert via Stripe med kort, Apple Pay eller Google Pay.",
  },
  {
    icon: Smartphone,
    title: "Enkelt att lösa in",
    text: "Ta med koden till verkstaden eller ange den när du bokar tid online.",
  },
];

export function Presentkort() {
  return (
    <section id="presentkort" className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow light>Ge bort något speciellt</Eyebrow>
          <Heading className="mt-3 text-white">Presentkort</Heading>
          <p className="mt-4 text-white/60">
            Perfekt present för bilägaren. Välj ett belopp och vi skickar
            presentkortet direkt till mottagaren via e-post.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div className="flex flex-col gap-4">
            {points.map((p) => (
              <div
                key={p.title}
                className="flex items-start gap-4 border-l-4 border-gold bg-white/5 px-5 py-4"
              >
                <p.icon className="mt-0.5 h-6 w-6 shrink-0 text-gold" />
                <div>
                  <p className="font-display text-base font-bold uppercase tracking-wide text-white">
                    {p.title}
                  </p>
                  <p className="text-sm text-white/55">{p.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="min-h-[320px] bg-white p-6 text-ink">
            <GiftUp />
          </div>
        </div>
      </Container>
    </section>
  );
}
