// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { BookingForm } from "@/components/home/BookingForm";
import { FAQSection } from "@/components/home/FAQSection";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { RentalsRow } from "@/components/home/RentalsRow";
import { ExploreRow } from "@/components/home/ExploreRow";
import { BoatTripsRow } from "@/components/home/BoatTripsRow";
import { BlogPreviewGrid } from "@/components/home/BlogPreviewGrid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function HomePage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Himalay Rental Tours",
    url: "https://www.himalayrentaltours.mu/",
    telephone: "+23057581799",
    email: "himalayrentaltours@outlook.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Petit Paquet, Montagne Blanche",
      addressLocality: "Montagne Blanche",
      addressRegion: "Flacq",
      postalCode: "40901",
      addressCountry: "MU"
    },
    areaServed: {
      "@type": "Country",
      name: "Mauritius"
    },
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.tiktok.com/"
    ]
  };

  return (
    <div className="pb-16 bg-white">
      {/* JSON-LD structured data */}
      <Script
        id="org-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* HERO – lagoon gradient background */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-sky-100 via-teal-50 to-emerald-50">
        <div className="mbz-container grid gap-10 py-10 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-800">
              Mauritius tour operator • Rentals • Excursions • Boat trips
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Himalay Rental Tours –{" "}
              <span className="bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Mauritius lagoon holidays
              </span>{" "}
              with one local partner.
            </h1>
            <p className="text-sm sm:text-base text-slate-700 max-w-xl">
              Plan your Mauritius holiday with a local tour operator based on
              the island: scooter and car rentals, guided excursions, airport
              transfers and lagoon boat trips with transparent prices and fast
              WhatsApp support.
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-[11px] text-slate-700">
              <div className="rounded-xl border border-sky-200 bg-white/80 px-3 py-2 shadow-sm">
                <p className="font-semibold">Mauritius-based</p>
                <p className="text-slate-500">
                  Local team for quick responses and real island knowledge.
                </p>
              </div>
              <div className="rounded-xl border border-teal-200 bg-white/80 px-3 py-2 shadow-sm">
                <p className="font-semibold">Tourist &amp; expat-friendly</p>
                <p className="text-slate-500">
                  Options for couples, families, friends and long-stays.
                </p>
              </div>
              <div className="rounded-xl border border-emerald-200 bg-white/80 px-3 py-2 shadow-sm">
                <p className="font-semibold">WhatsApp booking</p>
                <p className="text-slate-500">
                  Simple messages instead of complicated forms and portals.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/rentals"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:opacity-90 transition"
              >
                View rentals
              </Link>
              <Link
                href="/boat-trips"
                className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-sky-800 hover:bg-sky-50 transition"
              >
                Lagoon boat trips
              </Link>
            </div>
          </div>

          {/* Right column – carousel */}
          <HeroCarousel />
        </div>
      </section>

      <ScrollReveal delay={100}>
        {/* WHY CHOOSE – gradient borders, 3D hover */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mbz-container py-10 space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Why choose Himalay Rental Tours?
            </h2>
            <div className="grid gap-4 md:grid-cols-3 text-sm">
              {[
                {
                  title: "One Mauritius tour operator for everything",
                  text: "Scooter and car rentals, excursions, airport transfers and lagoon boat trips – all planned with one local contact."
                },
                {
                  title: "Lagoon-focused itineraries",
                  text: "We design days around Mauritius lagoons, viewpoints, markets and authentic stops instead of only tourist traps."
                },
                {
                  title: "Fast WhatsApp support & clear prices",
                  text: "You receive options, availability and conditions directly in WhatsApp with no hidden extras or confusing packages."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-gradient-to-br from-sky-200 via-teal-200 to-emerald-200 p-[1px]"
                >
                  <div className="h-full rounded-3xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:bg-sky-50/40">
                    <h3 className="font-semibold mb-1 text-slate-900 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        {/* RENTALS SECTION */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mbz-container py-10 space-y-6">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                Rentals – scooters, motorbikes &amp; cars
              </h2>
              <Link
                href="/rentals"
                className="hidden sm:inline-flex text-xs font-semibold text-sky-700 hover:text-sky-900"
              >
                View all rentals →
              </Link>
            </div>
            <RentalsRow />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        {/* EXPLORE SECTION */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mbz-container py-10 space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Explore Mauritius with us
            </h2>
            <ExploreRow />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        {/* BOAT TRIPS SECTION */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mbz-container py-10 space-y-6">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                Catamaran &amp; boat trips
              </h2>
              <Link
                href="/boat-trips"
                className="hidden sm:inline-flex text-xs font-semibold text-sky-700 hover:text-sky-900"
              >
                View all boat trips →
              </Link>
            </div>
            <BoatTripsRow />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        {/* INSTANT BOOKING FORM */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mbz-container py-10 space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Instant WhatsApp booking
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              Share your dates, hotel or villa and what you would like to do in
              Mauritius. This form creates a full booking request and opens it
              directly in WhatsApp so you can review and send.
            </p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
              <BookingForm />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mbz-container py-10 space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Frequently asked questions
          </h2>
          <FAQSection />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-white border-b border-slate-200">
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
              Guest reviews
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-2xl">
            A selection of comments from guests who booked scooter and car
            rentals, excursions and catamaran or boat trips with Himalay Rental
            Tours in Mauritius.
          </p>
          <ReviewsCarousel />
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="bg-white">
        <div className="mbz-container py-10 space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Our Mauritius travel blog
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl">
            Short articles to help you plan scooter and car rentals, excursions
            and lagoon days in Mauritius with realistic expectations and local
            tips.
          </p>
          <BlogPreviewGrid />
        </div>
      </section>
    </div>
  );
}



