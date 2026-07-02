import Image from "next/image";
import { Container, Button } from "@/components/ui";
import { BookingButton } from "@/components/booking-button";

const stats = [
  { num: "25+", label: "Års erfarenhet" },
  { num: "100%", label: "Garanterat arbete" },
  { num: "Alla", label: "Märken & modeller" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-[70px] text-white">
      <div className="absolute inset-0 bg-hatch" aria-hidden />
      {/* Gold diagonal accent */}
      <div
        className="absolute inset-y-0 right-0 hidden w-[45%] bg-blue/25 lg:block"
        style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%)" }}
        aria-hidden
      />
      {/* Workshop image, masked into the right side */}
      <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block" aria-hidden>
        <Image
          src="/images/garage-day.png"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.7) 30%, black 70%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.7) 30%, black 70%)",
          }}
        />
      </div>

      <Container className="relative z-10 flex min-h-[88vh] flex-col justify-center py-20 lg:min-h-[92vh]">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[3px] w-10 bg-gold" />
            <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">
              MECA-certifierad verkstad · Eskilstuna
            </span>
          </div>

          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] font-black uppercase leading-[0.92] tracking-tight">
            Vi fixar ditt <span className="text-gold">fordon</span>
            <br /> rätt från start.
          </h1>

          <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-white/75">
            Professionell service med garanti, högkvalitativa reservdelar och 25
            års erfarenhet. Oavsett märke, modell eller drivlina – vi tar hand om
            det.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <BookingButton label="hero">Boka tid nu</BookingButton>
            <Button href="/#kontakt" variant="outline">
              Kontakta oss
            </Button>
          </div>
        </div>

        <dl className="mt-16 flex flex-wrap gap-10 lg:absolute lg:bottom-12 lg:right-8 lg:mt-0">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dd className="font-display text-4xl font-black leading-none text-gold sm:text-5xl">
                {s.num}
              </dd>
              <dt className="mt-1.5 text-xs uppercase tracking-[0.12em] text-white/60">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>
      </Container>

      {/* Trust strip */}
      <div className="relative z-10 border-t border-white/10 bg-ink/60">
        <Container className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-sm text-white/70">
          {[
            "Garanti på arbetet",
            "Högkvalitativa reservdelar",
            "Alla märken & modeller",
            "Elbilar välkomna",
            "Under MECA-koncernen",
          ].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="text-gold">✓</span> {t}
            </span>
          ))}
        </Container>
      </div>
    </section>
  );
}
