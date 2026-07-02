import type { Metadata } from "next";
import Link from "next/link";
import { Info, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Villkor & dina rättigheter",
  description:
    "Som privatperson skyddas du av konsumenttjänstlagen när du lämnar bilen hos oss. Här förklarar vi reglerna: pris, tilläggsarbete, reklamation, ARN och Godkänd Bilverkstad.",
  alternates: { canonical: "/villkor" },
};

type Section = { id: string; title: string; body: React.ReactNode };

const sections: Section[] = [
  {
    id: "konsumenttjanstlagen",
    title: "Konsumenttjänstlagen",
    body: (
      <>
        <p>
          När du som privatperson lämnar in din bil för service eller reparation
          skyddas du av <strong>konsumenttjänstlagen (1985:716)</strong>. Lagen är
          tvingande till din fördel – vi får alltså aldrig ge dig sämre villkor än
          vad lagen säger.
        </p>
        <p>
          Arbetet ska utföras <strong>fackmässigt</strong>, det vill säga på det
          sätt som kan förväntas av en seriös fackman, och följa tillverkarens
          anvisningar för fordonet. Vi har också en <strong>omsorgsplikt</strong>:
          om en reparation inte är värd kostnaden eller inte ligger i ditt
          intresse ska vi avråda dig.
        </p>
      </>
    ),
  },
  {
    id: "pris",
    title: "Pris och prisuppgift",
    body: (
      <>
        <p>
          Har vi lämnat en <strong>ungefärlig prisuppgift</strong> får slutpriset
          inte överstiga den med mer än <strong>15 %</strong>, om vi inte kommit
          överens om något annat. Har inget pris avtalats betalar du ett{" "}
          <strong>skäligt pris</strong> utifrån arbetets art och omfattning.
        </p>
        <p>
          Du har alltid rätt till en <strong>specificerad räkning</strong> så att
          du kan se vad du betalar för i form av arbete och material.
        </p>
      </>
    ),
  },
  {
    id: "tillaggsarbete",
    title: "Tilläggsarbete",
    body: (
      <p>
        Upptäcker vi under arbetets gång att ytterligare åtgärder behövs{" "}
        <strong>kontaktar vi dig först</strong> och kommer överens innan vi
        fortsätter. Tilläggsarbete kan utföras utan att vi frågar endast om
        priset är obetydligt i förhållande till det avtalade, eller om det finns
        särskilda skäl att anta att du vill få det utfört. Du ska aldrig behöva
        betala för arbete du inte godkänt.
      </p>
    ),
  },
  {
    id: "garanti-reklamation",
    title: "Garanti och reklamation",
    body: (
      <>
        <p>
          Utöver din lagstadgade reklamationsrätt lämnar vi{" "}
          <strong>1 års garanti på utfört arbete</strong> och{" "}
          <strong>3 års garanti på reservdelar</strong>. Mer om detta finns på vår{" "}
          <Link href="/garanti" className="text-blue underline">
            garantisida
          </Link>
          .
        </p>
        <p>
          Enligt lagen ska du reklamera <strong>inom skälig tid</strong> efter
          att du upptäckt felet – ett meddelande inom <strong>två månader</strong>{" "}
          räknas alltid som i rätt tid. Reklamationsrätten gäller i upp till{" "}
          <strong>tre år</strong>.
        </p>
        <p>
          Ett fel föreligger om resultatet inte motsvarar det vi kommit överens
          om, inte är fackmässigt utfört, eller om vi inte avrått när vi borde.
          Vid fel har du rätt att hålla inne betalning samt kräva{" "}
          <strong>avhjälpande, prisavdrag eller hävning</strong> och i vissa fall{" "}
          <strong>skadestånd</strong>.
        </p>
      </>
    ),
  },
  {
    id: "arn",
    title: "Om vi inte är överens",
    body: (
      <p>
        Skulle vi inte komma överens i ett ärende kan du vända dig till{" "}
        <strong>Allmänna reklamationsnämnden (ARN)</strong>, som prövar tvisten
        kostnadsfritt och lämnar en rekommendation. Som ansluten verkstad följer
        vi ARN:s beslut. Tvisten kan i sista hand även prövas i allmän domstol.
      </p>
    ),
  },
  {
    id: "godkand-bilverkstad",
    title: "Godkänd Bilverkstad",
    body: (
      <>
        <p>
          Vi är en <strong>Godkänd Bilverkstad</strong> – en kvalitetsstandard
          som bygger på branschöverenskommelsen{" "}
          <em>Reparationsvillkoren</em>, framtagen tillsammans med Konsumentverket.
          Standarden omfattar åtta huvudområden: kvalitetsledningssystem,
          organisation, avtal, lagar och regler, ekonomi, personal, teknik och
          rutiner samt kontroll av verkstadens verksamhet.
        </p>
        <p>
          Verkstaden granskas <strong>årligen av oberoende tredjepart</strong>{" "}
          och genom oanmälda stickprov, så att standarden verkligen upprätthålls.
          Läs mer på{" "}
          <a
            href="https://www.godkandbilverkstad.se"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue underline"
          >
            godkandbilverkstad.se
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "personuppgifter",
    title: "Personuppgifter",
    body: (
      <p>
        De uppgifter du lämnar – exempelvis namn, kontaktuppgifter och
        fordonsinformation – använder vi enbart för att utföra och dokumentera
        det arbete du beställt, samt för att kunna kontakta dig om ditt ärende.
        Vi säljer aldrig dina uppgifter vidare. Vill du veta vilka uppgifter vi
        har om dig är du välkommen att kontakta oss.
      </p>
    ),
  },
];

const sources = [
  {
    label: "Konsumenttjänstlagen – Konsumentverket",
    url: "https://www.konsumentverket.se/lagar/konsumenttjanstlagen-konsument/",
  },
  {
    label: "Reklamera när bilverkstaden gjort fel – Konsumentverket",
    url: "https://www.konsumentverket.se/varor-och-tjanster-process/reklamera-nar-bilverkstaden-gjort-fel/",
  },
  {
    label: "MRF:s reparationsvillkor",
    url: "https://www.mrf.se/privatperson/mrfs-reparationsvillkor/",
  },
  {
    label: "Godkänd Bilverkstad",
    url: "https://www.godkandbilverkstad.se",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trygg verkstad"
        title="Villkor & dina rättigheter"
        lead="Som privatperson skyddas du av konsumenttjänstlagen när du lämnar bilen hos oss. Här förklarar vi reglerna vi arbetar efter."
        crumbs={[{ label: "Villkor & dina rättigheter" }]}
      />

      <section className="bg-paper py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_2.4fr] lg:gap-14">
          {/* Sticky table of contents */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-blue">
              Innehåll
            </p>
            <nav className="mt-4 flex flex-col gap-2 text-sm">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-steel hover:text-navy"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          <div>
            {/* Disclaimer */}
            <div className="mb-10 flex items-start gap-3 border-l-4 border-gold bg-cream px-5 py-4 text-sm text-steel">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
              <p>
                Sammanfattningen nedan är förenklad och utgör inte juridisk
                rådgivning. Vid eventuell avvikelse gäller alltid gällande
                lagtext.
              </p>
            </div>

            <div className="space-y-12">
              {sections.map((s) => (
                <article key={s.id} id={s.id} className="scroll-mt-24">
                  <h2 className="font-display text-2xl font-black uppercase text-navy">
                    {s.title}
                  </h2>
                  <div className="mt-4 space-y-4 leading-relaxed text-steel">
                    {s.body}
                  </div>
                </article>
              ))}
            </div>

            {/* Sources */}
            <div className="mt-14 border-t border-line pt-6">
              <p className="font-display text-sm font-bold uppercase tracking-[0.15em] text-navy">
                Källor & läs mer
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {sources.map((src) => (
                  <li key={src.url}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-blue underline"
                    >
                      {src.label}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
