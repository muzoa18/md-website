import { Container, Eyebrow, Heading, Button } from "@/components/ui";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="tjanster" className="bg-cream py-24">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Vad vi erbjuder</Eyebrow>
          <Heading className="mt-3 text-navy">
            Helhetslösning för din bil
          </Heading>
          <p className="mt-4 text-steel">
            Från service och däckbyte till avancerad diagnostik och elbilar – vi
            har verktygen och kunskapen för alla märken och drivlinor.
          </p>
        </div>

        <div className="reveal mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>

        <div className="mt-10">
          <Button href="/tjanster" variant="ghost" withArrow className="!text-navy !border-navy/25 hover:!bg-navy/5">
            Alla tjänster
          </Button>
        </div>
      </Container>
    </section>
  );
}
