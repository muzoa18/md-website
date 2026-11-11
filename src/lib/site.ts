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

  /**
   * Trust details. Each is rendered ONLY when filled in — a `null` hides the
   * line entirely, so nothing unverified ever reaches the live site.
   * TODO(owner): fill these in — see TODO.md.
   */
  /** Organisationsnummer, e.g. "556123-4567". Shown in the footer. */
  orgNr: null as string | null,
  /** true once confirmed "Godkänd för F-skatt". Shown in the footer. */
  fSkatt: null as boolean | null,
  /** Set to true only if a courtesy car (lånebil) is offered. */
  courtesyCar: false,
  /** Reply-time promise under the contact form, e.g. "Vi svarar samma arbetsdag." */
  replyPromise: null as string | null,

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

export type Review = {
  stars: number;
  text: string;
  author: string;
  /** When it was posted on Google, e.g. "mars 2026". Shown when set. */
  date?: string;
};

// TODO(owner): add the month each review was posted (`date`) — dated reviews
// read as real; undated ones can look invented.
export const reviews: Review[] = [
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

export const googleScore = {
  rating: 4.7,
  /**
   * Total number of Google reviews behind `rating`. Shown as "· 63 omdömen"
   * and used for the structured-data rating. While null, the count is hidden
   * and no aggregate rating is sent to Google (a wrong count is worse than none).
   * TODO(owner): copy the number from your Google Business Profile.
   */
  count: null as number | null,
  label: "Baserat på Google-recensioner",
};

/**
 * Prices shown on /priser and on matching service pages.
 *
 * Confirmed by the owner 2026-11-11, except where marked UNCONFIRMED.
 * Under Swedish price-marking rules a "från"-pris must be a price you
 * actually charge — keep these in step with the counter price.
 */
export type PriceItem = {
  name: string;
  /** Lowest price in SEK incl. moms, or null for "Ring för pris". */
  from: number | null;
  /** true = a set price ("700 kr"), not a starting price ("från 700 kr"). */
  fixed?: boolean;
  note?: string;
};

export type PriceGroup = {
  title: string;
  /** Slug of the matching service — its page shows these prices too. */
  service?: Service["slug"];
  items: PriceItem[];
};

export const prices: PriceGroup[] = [
  {
    title: "Däck & hjul",
    service: "dack-och-hjul",
    items: [
      { name: "Hjulskifte (säsongsbyte)", from: 350, note: "Fälgar med däck, 4 hjul" },
      { name: "Däckhotell", from: 800, note: "Per säsong, inkl. tvätt av hjul" },
      // UNCONFIRMED: balansering and punktering were not in the owner's answer.
      { name: "Balansering", from: 495, note: "4 hjul" },
      { name: "Punkteringslagning", from: 295 },
      { name: "Däckbyte på fälg", from: 800, note: "4 däck inkl. balansering, exkl. däck" },
    ],
  },
  {
    title: "Diagnostik & felsökning",
    service: "diagnostik",
    items: [
      { name: "Felkodsavläsning", from: 700, fixed: true, note: "Avläsning av samtliga styrenheter" },
      { name: "Felsökning", from: 1200, note: "Du får besked om vad som är fel innan vi går vidare" },
      { name: "Batteritest elbil/hybrid", from: 800, note: "Inkl. battericertifikat" },
    ],
  },
  {
    title: "Service",
    service: "reparation-service",
    items: [
      { name: "Liten service", from: 1995, note: "Olja, filter och kontroll enligt tillverkarens program" },
      { name: "Stor service", from: 3495, note: "Enligt tillverkarens program – nybilsgarantin behålls" },
    ],
  },
  {
    title: "AC & klimat",
    service: "ac-och-klimat",
    items: [
      { name: "AC-service", from: 1400, note: "Kontroll, påfyllning och läcktest" },
    ],
  },
];

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
  { href: "/priser", label: "Priser" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/garanti", label: "Garanti" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

// Legal / informational pages — shown in the footer.
export const legalNav = [
  { href: "/garanti", label: "Garanti" },
  { href: "/villkor", label: "Villkor & dina rättigheter" },
] as const;
