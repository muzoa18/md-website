"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Container, Eyebrow, Heading } from "@/components/ui";
import { faqs } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper py-24">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Vanliga frågor</Eyebrow>
          <Heading className="mt-3 text-navy">
            Har du en fråga? Vi har svaret.
          </Heading>
        </div>

        <div className="reveal mt-10 grid gap-x-10 md:grid-cols-2">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-lg font-bold uppercase tracking-wide text-navy transition-colors hover:text-blue"
                >
                  {item.q}
                  <Plus
                    className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-relaxed text-steel">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
