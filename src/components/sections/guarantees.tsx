import { Container, Eyebrow, Heading } from "@/components/ui";
import { Icon, type IconName } from "@/components/icon";
import { guarantees } from "@/lib/site";

export function Guarantees() {
  return (
    <section className="bg-cream py-24">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Eyebrow className="mx-auto">Trygghet</Eyebrow>
          <Heading className="mt-3 text-navy">Våra garantier</Heading>
          <p className="mt-4 text-steel">
            Vi levererar inte förrän vi är nöjda – och du ska vara nöjd långt
            efter att du lämnat verkstaden.
          </p>
        </div>

        <div className="reveal mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="flex items-start gap-5 bg-white p-7 shadow-[0_8px_24px_rgba(13,27,42,0.05)]"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                <Icon name={g.icon as IconName} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-navy">
                  {g.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-steel">
                  {g.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
