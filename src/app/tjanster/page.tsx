import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ServiceCard } from "@/components/service-card";
import { Container } from "@/components/ui";
import { BookingButton } from "@/components/booking-button";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tjänster – service, däck, diagnostik & elbil",
  description:
    "Allt vi erbjuder på MD Bil i Eskilstuna: service och reparation, diagnostik, däck & hjul, bromsar, elbil/hybrid och AC-service.",
  alternates: { canonical: "/tjanster" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Vad vi erbjuder"
        title="Våra tjänster"
        lead="Från planerad service och däckbyte till avancerad diagnostik och elbilar – allt utförs med MECA-kvalitet och garanti."
        crumbs={[{ label: "Tjänster" }]}
      />

      <section className="bg-cream py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 bg-navy px-8 py-12 text-center text-white">
            <p className="font-display text-2xl font-black uppercase">
              Osäker på vad din bil behöver?
            </p>
            <p className="max-w-xl text-white/70">
              Boka en tid så tittar vi på fordonet och ger dig en tydlig offert
              innan något arbete påbörjas.
            </p>
            <BookingButton label="tjanster_cta">Boka tid online</BookingButton>
          </div>
        </Container>
      </section>
    </>
  );
}
