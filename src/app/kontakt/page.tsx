import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Contact } from "@/components/sections/contact";
import { MapSection } from "@/components/sections/map-section";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakta MD Bil & Motor i Eskilstuna – ring, mejla eller skicka ett meddelande via formuläret. Adress, öppettider och karta.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kom i kontakt"
        title="Kontakta oss"
        lead="Ring, mejla eller skicka ett meddelande så återkommer vi så snart vi kan."
        crumbs={[{ label: "Kontakt" }]}
      />
      <Contact />
      <MapSection />
    </>
  );
}
