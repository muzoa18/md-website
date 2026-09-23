import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/ui";
import { Icon } from "@/components/icon";
import { BookingButton } from "@/components/booking-button";
import { PhoneLink } from "@/components/phone-link";
import { services } from "@/lib/site";

// Pre-render one static page per service at build time.
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/tjanster/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: `/tjanster/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/tjanster/[slug]">) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Tjänst"
        title={service.title}
        lead={service.short}
        crumbs={[
          { label: "Tjänster", href: "/tjanster" },
          { label: service.title },
        ]}
      />

      <section className="bg-paper py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <span className="flex h-14 w-14 items-center justify-center bg-cream text-navy">
              <Icon name={service.icon} className="h-7 w-7" />
            </span>
            <p className="mt-6 text-lg leading-relaxed text-steel">
              {service.intro}
            </p>

            <h2 className="mt-10 font-display text-2xl font-black uppercase text-navy">
              Det här ingår
            </h2>
            <ul className="mt-5 space-y-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-steel">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            {service.image && (
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            )}
            <div className="bg-navy p-7 text-white">
              <p className="font-display text-xl font-black uppercase">
                Boka {service.title.toLowerCase()}
              </p>
              <p className="mt-2 text-sm text-white/65">
                Boka online dygnet runt eller ring oss så hjälper vi dig.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <BookingButton label={`service_${service.slug}`}>
                  Boka tid online
                </BookingButton>
                <PhoneLink
                  label={`service_${service.slug}`}
                  showIcon
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 px-7 py-3.5 font-display font-bold uppercase tracking-wide text-white hover:border-gold hover:text-gold"
                />
              </div>
            </div>
          </aside>
        </Container>
      </section>

      {/* Related services */}
      <section className="bg-cream py-16">
        <Container>
          <h2 className="font-display text-2xl font-black uppercase text-navy">
            Andra tjänster
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/tjanster/${o.slug}`}
                className="group flex items-center justify-between gap-3 border border-line bg-white p-5 transition-colors hover:border-gold"
              >
                <span className="flex items-center gap-3">
                  <Icon name={o.icon} className="h-5 w-5 text-navy" />
                  <span className="font-display font-bold uppercase tracking-wide text-navy">
                    {o.title}
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 text-blue transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
