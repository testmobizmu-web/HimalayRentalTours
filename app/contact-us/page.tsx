import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookingForm } from "@/components/home/BookingForm";

export const metadata: Metadata = {
  title: "Contact Himalay Rental Tours – WhatsApp, Email & Booking Form",
  description:
    "Contact Himalay Rental Tours in Mauritius for scooter and car rentals, excursions and lagoon boat trips. Fast WhatsApp replies, clear information and a simple booking form.",
};

const WHATSAPP_LINK =
  "https://wa.me/23057014922?text=Hello%20Himalay%20Rental%20Tours%2C%20I%20would%20like%20more%20information%20about%20rentals%20and%20tours%20in%20Mauritius.";

export default function ContactPage() {
  return (
    <div className="pb-16 bg-white">
      {/* HERO + BREADCRUMBS */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-sky-100 via-teal-50 to-emerald-50">
        <div className="mbz-container py-8 md:py-10 space-y-6">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-between text-[11px] text-slate-600">
            <div className="flex items-center gap-1">
              <Link
                href="/"
                className="text-sky-700 font-medium hover:text-sky-900"
              >
                Home
              </Link>
              <span>›</span>
              <span className="text-slate-500">Contact Us</span>
            </div>
            <Link
              href="/"
              className="text-sky-700 font-semibold hover:text-sky-900"
            >
              ← Back to homepage
            </Link>
          </div>

          {/* Hero text */}
          <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-center">
            <div className="space-y-4 text-sm sm:text-base text-slate-700 max-w-2xl">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                Contact{" "}
                <span className="bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  Himalay Rental Tours
                </span>{" "}
                in Mauritius.
              </h1>
              <p>
                Reach us instantly on WhatsApp or send a booking request using
                the form. We help you organise scooter and car rentals,
                excursions and lagoon boat trips with clear, written
                information.
              </p>
              <p>
                Most guests prefer WhatsApp because it is quick, easy to share
                dates and locations, and all details stay in one conversation.
              </p>
            </div>

            {/* Mini contact accent card */}
            <div className="rounded-3xl border border-sky-200 bg-white/80 shadow-md p-4 sm:p-5 text-xs sm:text-sm text-slate-700 space-y-3">
              <h2 className="font-semibold text-slate-900 text-sm sm:text-base">
                Quick contact overview
              </h2>
              <div className="space-y-1">
                <p>
                  <span className="font-semibold text-slate-900">WhatsApp:</span>{" "}
                  +230 5701 4922
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Phone:</span>{" "}
                  +230 5701 4922 / +230 5758 1799
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Email:</span>{" "}
                  himalayrentaltours@outlook.com
                </p>
                <p>
                  <span className="font-semibold text-slate-900">
                    Location:
                  </span>{" "}
                  Petit Paquet, Montagne Blanche, Mauritius
                </p>
                <p>
                  <span className="font-semibold text-slate-900">
                    Assistance hours:
                  </span>{" "}
                  Mon–Sun · 10:00 – 17:00 (Mauritius time)
                </p>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 px-4 py-2 text-[11px] font-semibold text-white shadow-md hover:opacity-90 transition"
              >
                <span className="relative h-4 w-4">
                  <Image
                    src="/images/social/whatsapp.png"
                    alt="WhatsApp icon"
                    fill
                    className="object-contain"
                    sizes="16px"
                  />
                </span>
                Chat on WhatsApp now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT LAYOUT – CONTACT CARDS + FORM (same BookingForm as homepage) */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mbz-container py-10 space-y-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,1.2fr]">
            {/* LEFT – contact methods & map */}
            <div className="space-y-6 text-xs sm:text-sm text-slate-700">
              {/* Contact cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                {/* WhatsApp card */}
                <div className="rounded-2xl border border-sky-100 bg-sky-50/70 p-4 flex flex-col justify-between shadow-sm">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="relative h-6 w-6">
                        <Image
                          src="/images/social/whatsapp.png"
                          alt="WhatsApp icon"
                          fill
                          sizes="24px"
                          className="object-contain"
                        />
                      </div>
                      <h3 className="font-semibold text-slate-900 text-sm">
                        WhatsApp (fastest)
                      </h3>
                    </div>
                    <p className="text-slate-700">
                      Send us your dates, hotel or villa area and what you want
                      to book. We reply with clear options and prices.
                    </p>
                    <p className="mt-1 font-medium text-slate-900">
                      +230 5701 4922
                    </p>
                  </div>
                  <div className="pt-3">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-sky-700 border border-sky-200 hover:bg-sky-50 transition"
                    >
                      <span>Open WhatsApp chat</span>
                      <span className="text-[12px]">➜</span>
                    </a>
                  </div>
                </div>

                {/* Email card */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col justify-between shadow-sm">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-slate-900 text-sm">
                      Email & formal enquiries
                    </h3>
                    <p>
                      For longer stays, corporate groups or formal proposals,
                      you can email us with your requirements.
                    </p>
                    <p className="mt-1 font-medium text-slate-900 break-all">
                      himalayrentaltours@outlook.com
                    </p>
                  </div>
                  <p className="pt-3 text-[11px] text-slate-500">
                    We usually answer within 24 hours on working days.
                  </p>
                </div>
              </div>

              {/* Location & map style block */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 space-y-3">
                <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                  Where we are based in Mauritius
                </h3>
                <p>
                  Himalay Rental Tours is based in Petit Paquet, Montagne
                  Blanche – in the central region of Mauritius, with easy access
                  to the island&apos;s main roads and different coasts.
                </p>
                <div className="mt-2 rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-100 via-teal-50 to-emerald-50 p-3 text-[11px] text-slate-700">
                  <p className="font-semibold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-[11px] text-white">
                      📍
                    </span>
                    Service area
                  </p>
                  <p>
                    We mainly serve guests staying in Grand Baie, Trou-aux-Biches,
                    Flic-en-Flac, the East coast and central regions, but we can
                    often organise services in other areas as well. Share your
                    hotel or villa location and we will confirm.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT – Booking form (same as homepage) */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                  Send a booking request
                </h2>
                <p className="text-sm text-slate-600">
                  This is the same instant WhatsApp form as on the homepage. It
                  helps you summarise your plans: dates, number of people and
                  what you want to book in Mauritius.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6 shadow-sm">
                <BookingForm />
              </div>
              <p className="text-[11px] text-slate-500">
                When you submit, your details appear in a WhatsApp message so
                you can review and send. No account or login needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & BOOKING FAQ */}
      <section className="bg-white">
        <div className="mbz-container py-10 space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
            FAQ – contact & bookings
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl">
            A few quick answers about response time, payments, last-minute
            bookings and how we handle different requests for rentals, tours and
            boat trips.
          </p>

          <div className="grid gap-4 md:grid-cols-2 text-xs sm:text-sm text-slate-700">
            {/* Column 1 */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  How fast do you usually reply?
                </h3>
                <p>
                  During assistance hours (10:00–17:00 Mauritius time), we try
                  to reply to WhatsApp messages within a few hours. In busy
                  periods or evenings it may be a bit longer, but we always
                  answer as soon as possible and in the same conversation.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Can I make last-minute bookings?
                </h3>
                <p>
                  For scooters and cars, same-day or next-day bookings are
                  sometimes possible depending on availability. For excursions
                  and boat trips, it is better to contact us a few days in
                  advance, but you can still message us and we will check what
                  is realistic.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Which languages do you speak?
                </h3>
                <p>
                  Communication is mainly in English and French, with local
                  Mauritian Creole when needed. If your written English or
                  French is simple, no problem – short sentences are perfect for
                  WhatsApp.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  How do payments usually work?
                </h3>
                <p>
                  Payment methods can vary depending on the service (rental,
                  excursion, boat trip). Common options are cash, local bank
                  transfer or mobile payment in Mauritius. We always explain the
                  exact payment method and timing in writing before you confirm.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  What information should I send in my first message?
                </h3>
                <p>
                  To help us reply clearly, send your travel dates, where you
                  will stay in Mauritius, how many people and what you are
                  interested in (scooters, cars, excursions, boat trips, or a
                  mix). A short message is enough – we will ask follow-up
                  questions if needed.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Can you help me combine rentals, tours &amp; boat trips?
                </h3>
                <p>
                  Yes. Many guests ask us to combine scooter or car rentals with
                  a few organised excursions and one or two lagoon boat days. If
                  you tell us how many days you stay, we can suggest a simple
                  plan with free days and organised days.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:opacity-90 transition"
            >
              <span className="relative h-4 w-4">
                <Image
                  src="/images/social/whatsapp.png"
                  alt="WhatsApp icon"
                  fill
                  className="object-contain"
                  sizes="16px"
                />
              </span>
              Start a WhatsApp conversation now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
