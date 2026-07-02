import { Hero } from "@/components/sections/hero";
import { Reviews } from "@/components/sections/reviews";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Vehicles } from "@/components/sections/vehicles";
import { Guarantees } from "@/components/sections/guarantees";
import { MapSection } from "@/components/sections/map-section";
import { Gbv } from "@/components/sections/gbv";
import { Presentkort } from "@/components/sections/presentkort";
import { MecaBanner } from "@/components/sections/meca-banner";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { LocalBusinessJsonLd } from "@/components/json-ld";

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />
      <Reviews />
      <Services />
      <About />
      <Vehicles />
      <Guarantees />
      <Gbv />
      <Presentkort />
      <MecaBanner />
      <MapSection />
      <Faq />
      <Contact />
    </>
  );
}
