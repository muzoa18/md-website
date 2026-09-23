"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site, nav } from "@/lib/site";
import { trackBooking } from "@/lib/track";
import { PhoneLink } from "./phone-link";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_24px_rgba(0,0,0,0.28)]" : ""
      }`}
    >
      <nav className="flex h-[70px] items-center justify-between bg-navy px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} — startsida`}>
          <span className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-sm bg-cream">
            <Image
              src="/images/logo.png"
              alt={site.name}
              width={44}
              height={44}
              className="h-11 w-11 object-cover"
              priority
            />
          </span>
          <span className="font-display text-xl font-black uppercase tracking-wide text-white">
            MD <span className="text-gold">Bil</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium tracking-wide text-white/85 transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackBooking("nav")}
            className="hidden bg-gold px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-gold-bright sm:inline-block"
          >
            Boka tid
          </a>
          <button
            type="button"
            aria-label={open ? "Stäng meny" : "Öppna meny"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t-[3px] border-gold bg-ink lg:hidden">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-white/10">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-6 py-4 font-display text-lg font-bold uppercase tracking-wide text-white/90 hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="px-6 py-4">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackBooking("mobile_menu");
                  setOpen(false);
                }}
                className="flex items-center justify-center gap-2 bg-gold px-5 py-3 font-display text-base font-bold uppercase tracking-wide text-ink"
              >
                Boka tid online
              </a>
              <PhoneLink
                label="mobile_menu"
                showIcon
                className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-white/70"
              />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
