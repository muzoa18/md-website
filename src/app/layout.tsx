import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { site } from "@/lib/site";

// Body face — humanist, automotive-friendly
const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Display face — condensed, used for all headings/CTAs
const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "MD Bil & Motor – MECA-verkstad i Eskilstuna",
    template: "%s | MD Bil & Motor",
  },
  description:
    "MECA-certifierad bilverkstad i Eskilstuna med 25 års erfarenhet. Service, reparation, däck, diagnostik och el-/hybridbil – med garanti på allt arbete.",
  keywords: [
    "bilverkstad Eskilstuna",
    "MECA Eskilstuna",
    "bilservice",
    "däckbyte Eskilstuna",
    "elbil service",
    "godkänd bilverkstad",
  ],
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: "MD Bil & Motor",
    title: "MD Bil & Motor – MECA-verkstad i Eskilstuna",
    description:
      "Service, reparation och däck med garanti. MECA-partner och Godkänd Bilverkstad i Eskilstuna.",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="sv"
      className={`${barlow.variable} ${barlowCondensed.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollReveal />

        {/* Google Analytics (migrated from the original site) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${site.gaId}');
          `}
        </Script>
      </body>
    </html>
  );
}
