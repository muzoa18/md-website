import { CalendarCheck, ClipboardCheck, MessageSquareText, KeyRound } from "lucide-react";
import { Container, Eyebrow, Heading } from "@/components/ui";

/**
 * "Så går det till" — the visit, step by step.
 *
 * Takes the anxiety out of choosing a new workshop: the customer knows what
 * happens next and, above all, that nothing gets added to the bill without
 * their say-so. Every promise here is one the site already makes elsewhere
 * (FAQ, guarantees, /garanti) — keep them in sync if policy changes.
 */
const steps = [
  {
    icon: CalendarCheck,
    title: "Du bokar",
    text: "Boka online dygnet runt eller ring oss. Lämna bilen från 07:00 – eller släpp nyckeln i nyckelfacket.",
  },
  {
    icon: ClipboardCheck,
    title: "Vi undersöker och ger offert",
    text: "Vi går igenom bilen och berättar vad som behöver göras, varför och vad det kostar – innan vi börjar.",
  },
  {
    icon: MessageSquareText,
    title: "Inget extra utan ditt ja",
    text: "Hittar vi något mer ringer vi dig först. Inga kostnader utöver offerten utan ditt godkännande.",
  },
  {
    icon: KeyRound,
    title: "Du hämtar – med garanti",
    text: "Vi förklarar vad vi gjort. 1 års garanti på arbetet och 3 års garanti på reservdelar.",
  },
];

export function Process({ className }: { className?: string }) {
  return (
    <section id="sa-gar-det-till" className={className ?? "bg-cream py-24"}>
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Så går det till</Eyebrow>
          <Heading className="mt-3 text-navy">Inga överraskningar</Heading>
          <p className="mt-4 text-steel">
            Från bokning till hämtning – så här tar vi hand om dig och din bil.
          </p>
        </div>
        <ol className="reveal mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative bg-white p-7">
              <span className="font-display text-5xl font-black leading-none text-gold/40">
                {i + 1}
              </span>
              <s.icon className="mt-4 h-7 w-7 text-navy" aria-hidden />
              <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-wide text-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
