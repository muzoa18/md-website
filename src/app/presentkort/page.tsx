import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Wrench, ShieldCheck, Smartphone } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/ui";
import { GiftUp } from "@/components/gift-up";

export const metadata: Metadata = {
  title: "Presentkort",
  description:
    "Köp presentkort till MD Bil & Motor i Eskilstuna. Levereras direkt via e-post och gäller alla våra tjänster – service, däck, diagnostik och mer.",
  alternates: { canonical: "/presentkort" },
};

const points = [
  { icon: Mail, title: "Levereras direkt", text: "Mottagaren får presentkortet via e-post direkt efter köpet – eller schemalägg det till ett speciellt datum." },
  { icon: Wrench, title: "Gäller alla tjänster", text: "Används för service, däckbyte, diagnostik och alla andra tjänster vi erbjuder." },
  { icon: ShieldCheck, title: "Säker betalning", text: "Betalning sker säkert via Stripe med kort, Apple Pay eller Google Pay." },
  { icon: Smartphone, title: "Enkelt att lösa in", text: "Ta med koden till verkstaden eller ange den när du bokar tid online." },
];

export default function PresentkortPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ge bort något speciellt"
        title="Presentkort"
        lead="Perfekt present för bilägaren. Välj ett belopp så skickar vi presentkortet direkt till mottagaren via e-post."
        crumbs={[{ label: "Presentkort" }]}
      />

      <section className="bg-paper py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <div className="relative aspect-[4/3] overflow-hidden border border-line">
              <Image
                src="/images/gift-card.png"
                alt="Presentkort MD Bil & Motor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
            <div className="mt-6 space-y-4">
              {points.map((p) => (
                <div key={p.title} className="flex items-start gap-4 border-l-4 border-gold bg-cream px-5 py-4">
                  <p.icon className="mt-0.5 h-6 w-6 shrink-0 text-navy" />
                  <div>
                    <p className="font-display text-base font-bold uppercase tracking-wide text-navy">
                      {p.title}
                    </p>
                    <p className="text-sm text-steel">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 shadow-[0_8px_30px_rgba(13,27,42,0.08)] sm:p-8">
            <GiftUp />
          </div>
        </Container>
      </section>
    </>
  );
}
