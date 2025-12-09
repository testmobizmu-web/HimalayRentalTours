import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";

export const metadata: Metadata = {
  title: "About Us – Himalay Rental Tours | Mauritius Tour Operator",
  description:
    "Learn more about Himalay Rental Tours, a Mauritius-based tour operator offering scooter and car rentals, island excursions and lagoon boat trips with friendly local service."
};

export default function AboutPage() {
  return (
    <div className="pb-16 bg-white">
      {/* HERO / INTRO ABOUT SECTION */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-sky-100 via-teal-50 to-emerald-50">
        <div className="mbz-container py-8 md:py-10 space-y-6">
          {/* Breadcrumbs row */}
          <div className="flex items-center justify-between text-[11px] text-slate-600">
            <div className="flex items-center gap-1">
              <Link
                href="/"
                className="text-sky-700 font-medium hover:text-sky-900"
              >
                Home
              </Link>
              <span>›</span>
              <span className="text-slate-500">About Us</span>
            </div>
            <Link
              href="/"
              className="text-sky-700 font-semibold hover:text-sky-900"
            >
              ← Back to homepage
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/* Text */}
            <div className="space-y-5">
              <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-800">
                About Himalay Rental Tours • Mauritius
              </span>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                Local Mauritius tour operator for{" "}
                <span className="bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  lagoon days, rentals &amp; island discovery
                </span>
                .
              </h1>
              <p className="text-sm sm:text-base text-slate-700 max-w-xl">
                Himalay Rental Tours is a Mauritius-based tour operator focused
                on simple, honest and flexible travel services. We help visitors
                and locals combine scooter and car rentals, daily excursions,
                airport transfers and lagoon boat trips under one contact, mostly
                through fast WhatsApp conversations.
              </p>
              <p className="text-sm text-slate-700 max-w-xl">
                Our team is based in Mauritius, near Petit Paquet, Montagne
                Blanche. We understand the island roads, the weather and the
                best ways to enjoy the lagoon without stress or over-complicated
                packages.
              </p>

              {/* Small info badges */}
              <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-700 max-w-lg">
                <div className="rounded-xl border border-sky-200 bg-white/80 px-3 py-2 shadow-sm">
                  <p className="font-semibold text-slate-900">
                    Registered local business
                  </p>
                  <p className="text-slate-500">
                    Operating in Mauritius with local knowledge and real
                    availability on the island.
                  </p>
                </div>
                <div className="rounded-xl border border-teal-200 bg-white/80 px-3 py-2 shadow-sm">
                  <p className="font-semibold text-slate-900">
                    Personal WhatsApp contact
                  </p>
                  <p className="text-slate-500">
                    We answer directly, without bots, and adapt to your dates,
                    group and interests.
                  </p>
                </div>
              </div>
            </div>

            {/* Logo / photo side – 1:1 logo card */}
            <div className="flex items-center justify-center">
              <div className="rounded-3xl border border-sky-200 bg-white/80 shadow-xl p-6 max-w-sm w-full">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 mb-4">
                  <Image
                    src="/images/logo/logohimalayrentaltours.jpg"
                    alt="Himalay Rental Tours logo"
                    fill
                    className="object-contain p-4"
                    sizes="(min-width: 1024px) 26rem, 100vw"
                  />
                </div>
                <div className="space-y-1 text-xs text-slate-700">
                  <p className="font-semibold text-slate-900 text-sm">
                    Himalay Rental Tours Limited
                  </p>
                  <p>
                    Mauritius tour operator offering rentals, excursions and
                    lagoon boat trips with a focus on clear information and
                    friendly service.
                  </p>
                  <p className="text-slate-500">
                    Base area: Petit Paquet, Montagne Blanche, Mauritius.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mbz-container py-10 space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Our vision &amp; mission
          </h2>
          <div className="grid gap-4 md:grid-cols-2 text-sm">
            {/* Vision */}
            <div className="rounded-3xl bg-gradient-to-br from-sky-200 via-teal-200 to-emerald-200 p-[1px]">
              <div className="h-full rounded-3xl bg-white p-5 shadow-sm">
                <h3 className="font-semibold mb-2 text-slate-900 text-base">
                  Vision
                </h3>
                <p className="text-xs text-slate-600">
                  Our vision is to become a trusted reference for lagoon-focused
                  travel in Mauritius – where guests can organise everything
                  from rentals to boat trips with one reliable local operator,
                  without pressure or confusing offers.
                </p>
                <p className="text-xs text-slate-600 mt-2">
                  We want visitors to feel that organising a Mauritius holiday
                  can be simple, transparent and adapted to their rhythm, not
                  just to generic tour schedules.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="rounded-3xl bg-gradient-to-br from-sky-200 via-teal-200 to-emerald-200 p-[1px]">
              <div className="h-full rounded-3xl bg-white p-5 shadow-sm">
                <h3 className="font-semibold mb-2 text-slate-900 text-base">
                  Mission
                </h3>
                <p className="text-xs text-slate-600">
                  Our mission is to connect guests with practical and enjoyable
                  services: well-maintained scooters and cars, realistic
                  excursions and safe catamaran or boat trips that respect both
                  the lagoon and local communities.
                </p>
                <p className="text-xs text-slate-600 mt-2">
                  We do this by listening carefully on WhatsApp, explaining
                  clearly what is included, and adapting every programme to the
                  guest&apos;s time, budget and comfort level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK / APPROACH */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mbz-container py-10 space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
            How we work with guests
          </h2>
          <div className="grid gap-4 md:grid-cols-3 text-xs text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="font-semibold mb-1 text-slate-900 text-sm">
                1. Simple WhatsApp conversation
              </h3>
              <p>
                You share your travel dates, hotel or villa location and ideas
                for rentals, excursions or lagoon days. We respond directly and
                suggest options step by step.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="font-semibold mb-1 text-slate-900 text-sm">
                2. Clear, written confirmations
              </h3>
              <p>
                Once you choose what you like, we confirm details in writing:
                meeting points, times, prices and what is included, so there are
                no surprises.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="font-semibold mb-1 text-slate-900 text-sm">
                3. Support during your stay
              </h3>
              <p>
                During your stay in Mauritius we stay reachable on WhatsApp for
                questions, changes, extra days or suggestions if the weather
                changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS – same style as homepage */}
      <section className="bg-white">
        <div className="mbz-container py-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative h-5 w-5">
              <Image
                src="/images/google.png"
                alt="Google reviews style icon for Himalay Rental Tours"
                fill
                className="object-contain"
                sizes="20px"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              What guests say about us
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-2xl">
            Here are a few comments from guests who used Himalay Rental Tours
            for rentals, excursions and lagoon boat trips in Mauritius. We work
            hard so that every stay feels organised, relaxed and honest.
          </p>
          <ReviewsCarousel />
        </div>
      </section>
    </div>
  );
}

