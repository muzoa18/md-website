import { Star } from "lucide-react";
import { Container, Eyebrow, Heading, Button } from "@/components/ui";
import { reviews, googleScore, site } from "@/lib/site";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-gold" aria-label={`${n} av 5 stjärnor`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="recensioner" className="bg-ink py-24 text-white">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Eyebrow light>Kundrecensioner</Eyebrow>
            <Heading className="mt-3 text-white">Vad våra kunder säger</Heading>
            <p className="mt-4 text-white/60">
              Riktiga omdömen från Google – vi låter resultaten tala för sig
              själva.
            </p>
          </div>

          <div className="flex items-center gap-5 border border-white/10 bg-white/5 px-7 py-5">
            <span className="font-display text-6xl font-black leading-none text-gold">
              {googleScore.rating.toLocaleString("sv-SE")}
            </span>
            <div>
              <Stars n={5} />
              <p className="mt-1 text-xs text-white/45">{googleScore.label}</p>
              <p className="mt-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/40">
                <span className="inline-flex gap-0.5">
                  <span className="h-2 w-2 rounded-full bg-[#4285F4]" />
                  <span className="h-2 w-2 rounded-full bg-[#EA4335]" />
                  <span className="h-2 w-2 rounded-full bg-[#FBBC05]" />
                  <span className="h-2 w-2 rounded-full bg-[#34A853]" />
                </span>
                Google Reviews
              </p>
            </div>
          </div>
        </div>

        <div className="reveal mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.author}
              className="border border-white/10 border-t-[3px] border-t-gold bg-white/5 p-7 transition-colors hover:bg-white/[0.08]"
            >
              <Stars n={r.stars} />
              <blockquote className="mt-4 text-[0.95rem] italic leading-relaxed text-white/75">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 font-display text-sm font-bold uppercase tracking-wider text-white/45">
                — {r.author}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href={site.googleReviewsUrl} external variant="ghost" withArrow>
            Läs alla recensioner på Google
          </Button>
        </div>
      </Container>
    </section>
  );
}
