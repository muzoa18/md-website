import { Container, Eyebrow, Heading } from "@/components/ui";
import { Icon, type IconName } from "@/components/icon";
import { vehicles } from "@/lib/site";

export function Vehicles() {
  return (
    <section className="bg-navy py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow light>Vad vi servar</Eyebrow>
          <Heading className="mt-3 text-white">Alla typer av fordon</Heading>
          <p className="mt-4 text-white/60">
            Oavsett om det rullar, flyter eller cyklar – vi har kompetensen att
            ta hand om det.
          </p>
        </div>

        <div className="reveal mt-12 grid grid-cols-2 gap-px overflow-hidden bg-white/10 md:grid-cols-3">
          {vehicles.map((v) => (
            <div
              key={v.name}
              className="flex flex-col items-center gap-4 bg-navy px-6 py-12 text-center transition-colors hover:bg-navy-700"
            >
              <Icon name={v.icon as IconName} className="h-10 w-10 text-gold" />
              <span className="font-display text-lg font-bold uppercase tracking-wide">
                {v.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
