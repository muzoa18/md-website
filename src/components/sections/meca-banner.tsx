import { Container } from "@/components/ui";
import { BookingButton } from "@/components/booking-button";

export function MecaBanner() {
  return (
    <section className="bg-blue py-14">
      <Container className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div className="flex flex-col items-center gap-5 md:flex-row">
          <span className="bg-gold px-6 py-3 font-display text-3xl font-black tracking-wide text-navy">
            MECA
          </span>
          <div>
            <p className="font-display text-xl font-black uppercase text-white">
              Stolt partner i MECA-koncernen
            </p>
            <p className="text-sm text-white/80">
              En auktoriserad MECA-verkstad med tillgång till hela koncernens
              kompetens och sortiment.
            </p>
          </div>
        </div>
        <BookingButton label="banner">Boka tid online</BookingButton>
      </Container>
    </section>
  );
}
