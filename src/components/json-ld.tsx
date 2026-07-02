import { site, googleScore, reviews } from "@/lib/site";
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: googleScore.rating,
      reviewCount: reviews.length,
      bestRating: 5,
    },
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
