import { site, googleScore } from "@/lib/site";
import { getEmail } from "@/lib/email";

/**
 * Schema.org AutoRepair structured data for rich results in Google.
 * Rendered as a server component so it's in the static HTML for crawlers.
 */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phone,
    email: getEmail(),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      postalCode: site.postal,
      addressLocality: site.city,
      addressCountry: "SE",
    },
    geo: { "@type": "GeoCoordinates", latitude: 59.3707, longitude: 16.5077 },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    // Only with the real Google review count. Previously this sent
    // reviews.length (the 3 quotes on the page) as the count — a mismatch
    // with the 4.7 Google rating that can look like inflated self-reviews.
    ...(googleScore.count
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: googleScore.rating,
            reviewCount: googleScore.count,
            bestRating: 5,
          },
        }
      : {}),
    ...(site.orgNr ? { taxID: site.orgNr } : {}),
    areaServed: "Eskilstuna",
    brand: "MECA",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
