import { MapPin, Phone, Clock } from "lucide-react";
import { Container, Eyebrow, Heading } from "@/components/ui";
import { BookingButton } from "@/components/booking-button";
import { EmailLink } from "@/components/email-link";
import { site } from "@/lib/site";

export function MapSection() {
  return (
    <section id="hitta-hit" className="bg-ink py-24 text-white">
      <Container>
        <Eyebrow light>Hitta hit</Eyebrow>
        <Heading className="mt-3 text-white">
          Vi finns i Eskilstuna
        </Heading>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div className="flex flex-col gap-6">
            <Detail icon={<MapPin className="h-5 w-5 text-gold" />} label="Adress">
              {site.address}
              <br />
              {site.postal} {site.city}
            </Detail>
            <Detail icon={<Phone className="h-5 w-5 text-gold" />} label="Telefon">
              <a href={site.phoneHref} className="hover:text-gold">
                {site.phone}
              </a>
            </Detail>
            <Detail icon={<Clock className="h-5 w-5 text-gold" />} label="Öppettider">
              {site.openingHours.map((o) => (
                <span key={o.day} className="block">
                  {o.day}: {o.hours}
                </span>
              ))}
            </Detail>
            <div className="pt-2">
              <EmailLink className="text-sm text-white/80 hover:text-gold" iconClassName="text-gold" />
            </div>
            <BookingButton label="map">Boka tid online</BookingButton>
          </div>

          <div className="min-h-[380px] overflow-hidden">
            <iframe
              src={site.mapsEmbed}
              title="MD Bil & Motor – karta"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[380px] w-full border-0 [filter:grayscale(20%)_contrast(1.05)]"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Detail({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0">{icon}</span>
      <div>
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-gold">
          {label}
        </p>
        <div className="mt-1 text-sm leading-relaxed text-white/80">
          {children}
        </div>
      </div>
    </div>
  );
}
