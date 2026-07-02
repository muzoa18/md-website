"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";
import { Container, Eyebrow, Heading } from "@/components/ui";
import { EmailLink } from "@/components/email-link";
import { site } from "@/lib/site";
import { track } from "@/lib/track";

type Status = "idle" | "sending" | "error" | "done";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    track("form_submit", { category: "contact", label: "contact_form" });
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("done");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="bg-navy py-24 text-white">
      <Container>
        <Eyebrow light>Kom i kontakt</Eyebrow>
        <Heading className="mt-3 text-white">
          Boka tid eller ställ en fråga
        </Heading>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-6">
            <Detail icon={<MapPin className="h-5 w-5 text-gold" />} label="Adress">
              {site.address}, {site.postal} {site.city}
            </Detail>
            <Detail icon={<Phone className="h-5 w-5 text-gold" />} label="Telefon">
              <a href={site.phoneHref} className="hover:text-gold">
                {site.phone}
              </a>
            </Detail>
            <Detail icon={<Clock className="h-5 w-5 text-gold" />} label="Öppettider">
              {site.openingHours.map((o) => (
                <span key={o.day} className="block">
                  {o.day}: {o.hours}
                </span>
              ))}
            </Detail>
            <div className="pt-1">
              <EmailLink className="text-sm text-white/85 hover:text-gold" iconClassName="text-gold" />
            </div>
          </div>

          {status === "done" ? (
            <div className="flex flex-col items-start justify-center gap-3 border border-gold/30 bg-white/5 p-8">
              <CheckCircle2 className="h-10 w-10 text-gold" />
              <p className="font-display text-2xl font-black uppercase text-white">
                Tack för ditt meddelande!
              </p>
              <p className="text-white/70">
                Vi återkommer till dig så snart vi kan. Är det brådskande är du
                välkommen att ringa oss på{" "}
                <a href={site.phoneHref} className="text-gold">
                  {site.phone}
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <Field name="fornamn" placeholder="Förnamn" required />
                <Field name="efternamn" placeholder="Efternamn" required />
              </div>
              <Field name="email" type="email" placeholder="E-postadress" required />
              <Field name="telefon" type="tel" placeholder="Telefonnummer" />
              <Field name="fordon" placeholder="Bilmärke & modell" />
              <textarea
                name="meddelande"
                placeholder="Beskriv ditt ärende eller ställ en fråga…"
                rows={5}
                className="w-full border border-white/15 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/35 outline-none transition-colors focus:border-gold"
              />
              {status === "error" && (
                <p className="text-sm text-red-300">
                  Något gick fel – försök igen eller ring oss.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1 self-start bg-gold px-8 py-3.5 font-display font-bold uppercase tracking-wide text-ink transition-colors hover:bg-gold-bright disabled:opacity-60"
              >
                {status === "sending" ? "Skickar…" : "Skicka meddelande"}
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full border border-white/15 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/35 outline-none transition-colors focus:border-gold"
    />
  );
}

function Detail({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0">{icon}</span>
      <div>
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-gold">
          {label}
        </p>
        <div className="mt-1 text-sm leading-relaxed text-white/80">
          {children}
        </div>
      </div>
    </div>
  );
}
