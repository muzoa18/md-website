/**
 * Single source of truth for all business data (NAP, links, services,
 * reviews, FAQ). Both the homepage sections and the standalone subpages
 * read from here so content never drifts between pages.
 *
 * NOTE: phone/email/address/reviews were migrated verbatim from the
 * original index.html. Reviews are confirmed real by the owner.
 */

export const site = {
  name: "MD Bil",
  legalName: "MD Bilreparationer AB",
  url: "https://mdbilreparationer.se",
  tagline: "MECA-verkstad i Eskilstuna",

  // Contact (NAP)
  phone: "016 - 51 94 97",
  phoneHref: "tel:+4616519497",
  // Email is assembled at render time to deter scrapers (see lib/email.ts)
  emailUser: "mdbilreparationer",
  emailDomain: "gmail.com",
  address: "Ägirgatan 6",
  postal: "633 52",
  city: "Eskilstuna",

  openingHours: [
    { day: "Måndag–Fredag", hours: "07:00–17:00" },
    { day: "Lördag", hours: "09:00–14:00" },
    { day: "Söndag", hours: "Stängt" },
  ],

  // External integrations (kept from original)
  gaId: "G-P83FC802R4",
  bookingUrl:
    "https://boka.meca.se/?workshop=9d4c3438-4990-e611-80e9-5065f38b3531",
  googleReviewsUrl: "https://share.google/8bIpiiwRNdfxGrs0r",
  formspreeId: "xbdzvpbo",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000!2d16.5077!3d59.3707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465e665f0a4f9e75%3A0x1!2s%C3%84girgatan%206%2C%20Eskilstuna!5e0!3m2!1ssv!2sse!4v1",
} as const;

export type Service = {
  slug: string;
  /** lucide-react icon name */
  icon:
    | "Wrench"
    | "ScanLine"
    | "CircleDot"
    | "Disc3"
    | "BatteryCharging"
    | "Snowflake";
  title: string;
  short: string;
  /** intro paragraph on the detail page */
  intro: string;
  bullets: string[];
  image?: string;
};

export const services: Service[] = [
  {
    slug: "reparation-service",
    icon: "Wrench",
    title: "Reparation & Service",
    short:
      "Fullständig service och reparation av alla system i fordonet – med certifierade mekaniker och MECA-godkänd kvalitet.",
    intro:
      "Oavsett om det gäller en planerad service eller en oväntad reparation tar vi hand om hela fordonet. Som MECA-verkstad följer vi tillverkarens serviceprogram, vilket innebär att din nybilsgaranti behålls.",
    bullets: [
      "Liten och stor service enligt tillverkarens program",
      "Behåller nybilsgarantin – godkänt enligt MECA Nybilsgaranti",
      "Felsökning och reparation av motor, växellåda och kringsystem",
      "Tydlig offert innan arbetet påbörjas – inga dolda avgifter",
    ],
    image: "/images/nybilsgaranti.jpg",
  },
  {
    slug: "diagnostik",
    icon: "ScanLine",
    title: "Diagnostik & Felsökning",
    short:
      "Avancerad elektronisk felsökning för moderna fordon, inklusive hybrider och elbilar.",
    intro:
      "Tänd varningslampa eller ett fel du inte hittar? Med professionell diagnosutrustning läser vi av fordonets styrenheter och spårar grundorsaken – inte bara symptomen.",
    bullets: [
      "Avläsning av felkoder i samtliga styrenheter",
      "Diagnos av motor, ABS, airbag och komfortsystem",
      "Batteri- och högvoltstest för el- och hybridbilar",
      "Konkret åtgärdsförslag med prisuppskattning",
    ],
    image: "/images/batteritest.jpg",
  },
  {
    slug: "dack-och-hjul",
    icon: "CircleDot",
    title: "Däck & Hjul",
    short:
      "Säsongsbyte, balansering och hjullagring. Brett sortiment av däck för alla fordon.",
    intro:
      "Vi hjälper dig med allt kring däck och hjul – från säsongsbyte och balansering till nya däck ur MECA:s breda sortiment. Behöver du förvara dina däck hjälper vi med det också.",
    bullets: [
      "Säsongsbyte och hjulinställning",
      "Balansering och punkteringslagning",
      "Däckhotell – vi förvarar dina däck tryggt",
      "Nya däck för alla märken via MECA:s sortiment",
    ],
  },
  {
    slug: "bromsar-och-fjadring",
    icon: "Disc3",
    title: "Bromsar & Fjädring",
    short:
      "Säkerheten först – vi kontrollerar, justerar och byter alla komponenter i broms- och fjädringssystem.",
    intro:
      "Bromsar och fjädring är direkt avgörande för säkerheten. Vi kontrollerar slitage, byter slitna komponenter och säkerställer att bilen beter sig som den ska – på torr väg och i halka.",
    bullets: [
      "Kontroll och byte av bromsskivor, belägg och bromsvätska",
      "Stötdämpare, fjädrar och länkarmar",
      "Hjullager och styrleder",
      "Säkerhetskontroll inför resa eller besiktning",
    ],
  },
  {
    slug: "elbil-och-hybrid",
    icon: "BatteryCharging",
    title: "Elbil & Hybrid",
    short:
      "Specialkompetens för elbilar och hybridfordon – batteritest, laddningssystem och högvoltssäkerhet.",
    intro:
      "Elbilar och hybrider är välkomna hos oss. Vi är utbildade för arbete med högvoltssystem och utför service, diagnostik och däckbyten på moderna eldrivna fordon – tryggt och fackmannamässigt.",
    bullets: [
      "Service och underhåll av el- och hybridbilar",
      "Batteritest och hälsokontroll av högvoltsbatteri",
      "Felsökning av laddningssystem",
      "Däckbyte och allmän service",
    ],
    image: "/images/meca-elbil.jpg",
  },
  {
    slug: "ac-och-klimat",
    icon: "Snowflake",
    title: "AC & Klimat",
    short:
      "Service av klimatanläggning – så att kupén håller rätt temperatur året om.",
    intro:
      "En AC som inte kyler kostar både komfort och bränsle. Vi servar och fyller på klimatanläggningen, byter pollenfilter och letar läckor så att luften i kupén håller sig frisk.",
    bullets: [
      "AC-service och påfyllning av köldmedium",
      "Läcksökning i klimatsystemet",
      "Byte av pollen-/kupéfilter",
      "Rengöring och desinfektion av AC-system",
    ],
    image: "/images/ac-service.jpg",
  },
];

export const reviews = [
  {
    stars: 5,
    text: "Proffsigt bemötande och snabb service. Lämnade in bilen på morgonen och fick den tillbaka innan lunch. Rekommenderar varmt!",
    author: "Anders K.",
  },
  {
    stars: 5,
    text: "Äntligen en verkstad som förklarar vad som behöver göras och varför. Inga dolda avgifter, precis som de lovade. Kommer definitivt tillbaka.",
    author: "Sara M.",
  },
  {
    stars: 5,
    text: "Tog hand om min elbil utan problem. Kunnig personal som verkligen förstår moderna fordon. Bästa verkstaden i Eskilstuna!",
    author: "Johan L.",
  },
];

export const googleScore = { rating: 4.7, label: "Baserat på Google-recensioner" };

export const faqs = [
  {
    q: "Hur lång tid tar en service?",
    a: "En liten service tar vanligtvis 1–2 timmar. En stor service kan ta 3–5 timmar beroende på fordon och vad som behöver åtgärdas. Vi meddelar alltid en beräknad tid när du bokar.",
  },
  {
    q: "Kan jag lämna bilen på morgonen?",
    a: "Vi tar emot bilar från 07:00 på vardagar, men du kan lämna fordonet tidigare och kasta nyckeln i nyckelfacket på entrédörren. Vi kontaktar dig så snart vi påbörjat arbetet.",
  },
  {
    q: "Tar ni hand om alla bilmärken?",
    a: "Ja, vi arbetar med alla personbilsmärken – europeiska, asiatiska och amerikanska. Via MECA:s nätverk har vi tillgång till reservdelar för praktiskt taget alla märken och modeller.",
  },
  {
    q: "Har ni garanti på arbetet?",
    a: "Ja. Vi lämnar 1 års garanti på utfört arbete och 3 års garanti på reservdelar. Uppstår problem som är direkt relaterade till ett utfört arbete åtgärdar vi det utan extra kostnad.",
  },
  {
    q: "Kan ni ta hand om min elbil eller hybrid?",
    a: "Absolut. Vi är utbildade för arbete med elbilar och hybridfordon inklusive högvoltssystem. Vi utför service, däckbyten, diagnostik och batteritest på alla moderna eldrivna fordon.",
  },
  {
    q: "Behöver jag boka tid i förväg?",
    a: "Vi rekommenderar alltid att boka tid för att garantera att vi kan ta hand om ditt fordon snabbt. Du kan boka direkt online via MECA:s bokningssystem eller ringa oss.",
  },
  {
    q: "Vad händer om reparationen kostar mer än offerten?",
    a: "Vi kontaktar alltid dig innan vi utför arbete som överstiger den godkända offerten. Inga extra kostnader tillkommer utan ditt godkännande – det är vår policy.",
  },
  {
    q: "Kan jag vänta på bilen hos er?",
    a: "Ja, för kortare arbeten som däckbyten eller oljebyte är du välkommen att vänta i vår kundlounge. För längre arbeten är det praktiskare att lämna bilen och hämta den när den är klar.",
  },
];

export const vehicles = [
  { icon: "Car", name: "Personbilar" },
  { icon: "Zap", name: "Elbilar" },
  { icon: "BatteryCharging", name: "Hybridbilar" },
  { icon: "Bike", name: "Motorcyklar & MC" },
  { icon: "Sailboat", name: "Båtar" },
  { icon: "Truck", name: "Lätta transportfordon" },
] as const;

export const guarantees = [
  {
    icon: "ShieldCheck",
    title: "Garanti på arbetet",
    text: "Alla reparationer och byten garanteras. Uppstår problem relaterade till vårt arbete åtgärdar vi det utan extra kostnad.",
  },
  {
    icon: "Star",
    title: "Originalkvalitet",
    text: "Vi använder enbart högkvalitativa reservdelar från betrodda leverantörer i MECA:s nätverk – aldrig kompromisser med säkerheten.",
  },
  {
    icon: "ClipboardCheck",
    title: "Transparent pris",
    text: "Du får alltid en tydlig offert innan arbetet påbörjas. Inga dolda kostnader, inga obehagliga överraskningar.",
  },
  {
    icon: "Clock",
    title: "Leverans i tid",
    text: "Vi respekterar din tid. Bilen ska vara klar när vi kommit överens om – så du kan planera din vardag.",
  },
] as const;

export const nav = [
  { href: "/tjanster", label: "Tjänster" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/garanti", label: "Garanti" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

// Legal / informational pages — shown in the footer.
export const legalNav = [
  { href: "/garanti", label: "Garanti" },
  { href: "/villkor", label: "Villkor & dina rättigheter" },
] as const;
