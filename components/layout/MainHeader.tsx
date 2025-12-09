// components/layout/MainHeader.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/rentals", label: "Rentals" },
  { href: "/excursions", label: "Excursions" },
  { href: "/boat-trips", label: "Boat Trips" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" }
];

export function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40">
      {/* Announcement bar */}
      <div className="bg-gradient-to-r from-sky-600 via-teal-500 to-emerald-500 text-[11px] text-white">
        <div className="mbz-container flex items-center justify-between gap-3 py-1.5">
          <p className="flex-1 truncate">
            🌴 Mauritius lagoon holidays • Rentals, excursions & boat trips with
            one local tour operator.
          </p>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-white/80">Follow us:</span>
            <div className="flex items-center gap-1.5">
              <a
                href="#"
                className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-[13px]"
              >
                <Image
                  src="/images/social/facebook.png"
                  alt="Facebook"
                  width={14}
                  height={14}
                />
              </a>
              <a
                href="#"
                className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-[13px]"
              >
                <Image
                  src="/images/social/instagram.png"
                  alt="Instagram"
                  width={14}
                  height={14}
                />
              </a>
              <a
                href="#"
                className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-[13px]"
              >
                <Image
                  src="/images/social/tiktok.png"
                  alt="TikTok"
                  width={14}
                  height={14}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mbz-container flex items-center justify-between gap-4 py-3">
          {/* Logo + brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-sky-200 bg-slate-50 overflow-hidden">
              <Image
                src="/images/logo/logohimalayrentaltours.jpg"
                alt="Himalay Rental Tours logo"
                fill
                className="object-contain p-1.5"
                sizes="48px"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-semibold text-slate-900">
                Himalay Rental Tours
              </span>
              <span className="text-[11px] text-slate-500">
                Mauritius rentals • excursions • lagoon trips
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-700">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative pb-1 hover:text-sky-800 transition ${
                    active ? "text-sky-800" : ""
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute left-0 -bottom-0.5 h-[2px] w-full rounded-full bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/23057581799?text=Hello%20Himalay%20Rental%20Tours%2C%20I%20would%20like%20to%20plan%20my%20Mauritius%20holiday."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 px-4 py-2 text-xs font-semibold text-white shadow-md hover:opacity-90 transition"
            >
              <span className="relative h-4 w-4">
                <Image
                  src="/images/social/whatsapp.png"
                  alt="WhatsApp"
                  fill
                  className="object-contain"
                />
              </span>
              WhatsApp booking
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="space-y-1.5">
              <span
                className={`block h-[2px] w-4 rounded-full bg-slate-800 transition-transform ${
                  menuOpen ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-4 rounded-full bg-slate-800 transition-opacity ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-4 rounded-full bg-slate-800 transition-transform ${
                  menuOpen ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`md:hidden border-t border-slate-200 bg-white/95 backdrop-blur transform transition-all duration-300 origin-top ${
            menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
        >
          <div className="mbz-container py-3 flex flex-col gap-2 text-sm">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-1.5 ${
                    active ? "text-sky-800 font-semibold" : "text-slate-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <a
              href="https://wa.me/23057581799?text=Hello%20Himalay%20Rental%20Tours%2C%20I%20would%20like%20to%20plan%20my%20Mauritius%20holiday."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 px-4 py-2 text-xs font-semibold text-white shadow-md hover:opacity-90 transition"
            >
              <span className="relative h-4 w-4">
                <Image
                  src="/images/social/whatsapp.png"
                  alt="WhatsApp"
                  fill
                  className="object-contain"
                />
              </span>
              WhatsApp booking
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
