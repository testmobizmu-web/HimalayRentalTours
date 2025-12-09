// app/boat-trips/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Mauritius Catamaran & Boat Trips – Himalay Rental Tours",
  description:
    "Book catamaran cruises and lagoon boat trips in Mauritius with Himalay Rental Tours. Full-day lagoon sailing, island-hopping speedboats and sunset cruises with easy WhatsApp booking."
};

const WHATSAPP_LINK =
  "https://wa.me/23057581799?text=Hello%20Himalay%20Rental%20Tours%2C%20I%20would%20like%20to%20book%20a%20catamaran%20or%20lagoon%20boat%20trip%20in%20Mauritius.%20Please%20share%20available%20options%2C%20prices%20and%20details.";

export default function BoatTripsPage() {
  const boatTripsSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Catamaran & Boat Trips in Mauritius",
    description:
      "Full-day catamaran cruises, island-hopping speedboats and sunset lagoon cruises in Mauritius with Himalay Rental Tours.",
    provider: {
      "@type": "TravelAgency",
      name: "Himalay Rental Tours"
    },
    areaServed: {
      "@type": "Country",
      name: "Mauritius"
    }
  };

  return (
    <div className="pb-16 bg-white">
      {/* JSON-LD structured data for boat trips */}
      <Script
        id="boat-trips-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(boatTripsSchema) }}
      />

      {/* HERO + BREADCRUMBS */}
      <ScrollReveal>
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
                <span className="text-slate-500">Boat Trips</span>
              </div>
              <Link
                href="/"
                className="text-sky-700 font-semibold hover:text-sky-900"
              >
                ← Back to homepage
              </Link>
            </div>

            {/* Hero banner – 16:9 */}
            <div className="rounded-3xl overflow-hidden border border-sky-200 bg-slate-50 shadow-lg">
              <div className="relative w-full aspect-video">
                <Image
                  src="/images/boattripimg/hero-boattrips.png"
                  alt="Mauritius lagoon catamaran and boat trips with Himalay Rental Tours"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>

            {/* SEO-rich description under hero */}
            <div className="space-y-3 text-sm sm:text-base text-slate-700 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                Lagoon catamaran &amp; boat trips in{" "}
                <span className="bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  Mauritius
                </span>
                .
              </h1>
              <p>
                Himalay Rental Tours helps you plan relaxed lagoon days in
                Mauritius with trusted catamaran and speedboat partners. Enjoy
                full-day sailing, island-hopping, snorkelling and sunset cruises
                with simple WhatsApp planning and clear information.
              </p>
              <p>
                Whether you are travelling as a couple, family, group of friends
                or celebrating a special moment, we adapt the lagoon trip to
                your mood: quiet and scenic, more active with snorkelling, or a
                mix of islands and sandbanks.
              </p>
              <ul className="space-y-1">
                <li>
                  • Full-day catamaran cruises with lagoon swimming and BBQ
                </li>
                <li>
                  • Speedboats for island-hopping, dolphins and sandbanks
                </li>
                <li>• Sunset lagoon cruises to end the day in a calm way</li>
                <li>• WhatsApp-based planning with written confirmation</li>
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* MAIN BOAT TRIPS – 3 ROWS (IMAGE LEFT, TEXT RIGHT, WHATSAPP BUTTON) */}
      <ScrollReveal delay={100}>
        <section className="border-b border-slate-200 bg-white">
          <div className="mbz-container py-10 space-y-8">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                Catamaran &amp; boat trips
              </h2>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 px-4 py-2 text-[11px] font-semibold text-white shadow-md hover:opacity-90 transition"
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
                Ask for lagoon availability
              </a>
            </div>

            <p className="text-sm text-slate-600 max-w-2xl">
              These are the three main lagoon trip styles we usually arrange.
              Exact itinerary can change depending on the season, sea
              conditions and your departure point in Mauritius.
            </p>

            <div className="space-y-10">
              {[
                {
                  key: "catamaran",
                  title: "Full-day catamaran cruise",
                  img: "/images/boattrips/1.png",
                  text: "A relaxed full-day lagoon cruise with swimming, snorkelling and a barbecue on board or on the beach. Ideal for couples, families or groups who want to enjoy the lagoon without rushing.",
                  bullets: [
                    "Full-day catamaran on the lagoon",
                    "Swimming and snorkelling stops",
                    "Barbecue lunch (depending on package)",
                    "Perfect for relaxed, social days on the water"
                  ]
                },
                {
                  key: "speedboat",
                  title: "Island-hopping speedboat",
                  img: "/images/boattrips/2.png",
                  text: "A more active day by speedboat visiting small islands, sandbanks and snorkelling spots. Good for guests who like a bit of adrenaline and want to see several lagoon areas in one trip.",
                  bullets: [
                    "Speedboat to islands and sandbanks",
                    "Possible dolphin watching (depending on area)",
                    "Snorkelling in clear lagoon spots",
                    "Ideal for active couples, friends and small groups"
                  ]
                },
                {
                  key: "sunset",
                  title: "Sunset lagoon cruise",
                  img: "/images/boattrips/3.png",
                  text: "A shorter end-of-day cruise on the lagoon to enjoy the light, colours and calm sea. Perfect as a romantic moment or a peaceful family outing before dinner.",
                  bullets: [
                    "Late afternoon departure on the lagoon",
                    "Golden light and sunset views from the water",
                    "Calm and slower pace than full-day trips",
                    "Great for couples and families"
                  ]
                }
              ].map((trip) => (
                <div
                  key={trip.key}
                  className="grid gap-8 md:grid-cols-2 md:items-center"
                >
                  {/* LEFT IMAGE */}
                  <div className="flex items-center justify-center">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 shadow-md p-4 max-w-md w-full">
                      <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                        <Image
                          src={trip.img}
                          alt={trip.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 28rem, 100vw"
                        />
                      </div>
                    </div>
                  </div>

                  {/* RIGHT TEXT */}
                  <div className="space-y-4 text-sm text-slate-700">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                      {trip.title}
                    </h3>
                    <p>{trip.text}</p>
                    <ul className="space-y-1 text-xs">
                      {trip.bullets.map((b) => (
                        <li key={b}>• {b}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3 pt-2 items-center">
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
                        Book this boat trip on WhatsApp
                      </a>
                      <p className="text-[11px] text-slate-600 max-w-xs">
                        Tell us your dates, number of people and preferred
                        departure area. We reply with options, prices and what
                        is included.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* HOW TO BOOK A LAGOON BOAT TRIP */}
      <ScrollReveal delay={150}>
        <section className="border-b border-slate-200 bg-white">
          <div className="mbz-container py-10 space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              How to book a lagoon boat trip
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              We organise all boat trips through WhatsApp, so you can receive
              clear, written information about timing, price and what is
              included before you decide.
            </p>

            <div className="grid gap-4 md:grid-cols-4 text-xs text-slate-700">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-[11px] font-semibold text-sky-700 mb-1">
                  Step 1
                </div>
                <h3 className="font-semibold mb-1 text-slate-900 text-sm">
                  Share your dates &amp; group
                </h3>
                <p>
                  Tell us your dates, hotel or villa area, number of people and
                  if you prefer catamaran, speedboat or sunset option.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-[11px] font-semibold text-sky-700 mb-1">
                  Step 2
                </div>
                <h3 className="font-semibold mb-1 text-slate-900 text-sm">
                  Receive available options
                </h3>
                <p>
                  We share available departures, approximate itinerary, price
                  per person or per boat, and what is included (BBQ, drinks,
                  etc.).
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-[11px] font-semibold text-sky-700 mb-1">
                  Step 3
                </div>
                <h3 className="font-semibold mb-1 text-slate-900 text-sm">
                  Confirm &amp; receive details
                </h3>
                <p>
                  When you are happy with an option, you confirm on WhatsApp and
                  we send a written summary with meeting point and time.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-[11px] font-semibold text-sky-700 mb-1">
                  Step 4
                </div>
                <h3 className="font-semibold mb-1 text-slate-900 text-sm">
                  Enjoy the lagoon
                </h3>
                <p>
                  On the day, you simply meet at the pier or beach, board your
                  catamaran or boat and enjoy your Mauritius lagoon experience.
                </p>
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
                Start a boat trip enquiry on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* BOAT TRIPS – FAQ SECTION */}
      <ScrollReveal delay={200}>
        <section className="bg-white">
          <div className="mbz-container py-10 space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Boat trip FAQ – practical details
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              A few common questions about Mauritius lagoon boat trips with
              Himalay Rental Tours: weather, cancellations, what to bring and
              safety on board.
            </p>

            <div className="grid gap-4 md:grid-cols-2 text-xs sm:text-sm text-slate-700">
              {/* Column 1 */}
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900 mb-1">
                    What happens if the weather is bad?
                  </h3>
                  <p>
                    Safety always comes first. If sea or wind conditions are not
                    good, the captain may adjust the route, delay the departure
                    or cancel the trip. In case of official cancellation due to
                    weather, we usually propose another date or alternative
                    option. Exact conditions depend on the boat partner and will
                    be explained on WhatsApp before booking.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900 mb-1">
                    What should we bring on the boat?
                  </h3>
                  <p>
                    We recommend: swimsuit, towel, light clothes, hat or cap,
                    sunglasses, reef-friendly sunscreen, flip-flops and a light
                    jacket if you get cold easily. If you have your own snorkel
                    mask, you can bring it, otherwise equipment is normally
                    provided depending on the package.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Is it suitable for children and families?
                  </h3>
                  <p>
                    Yes, most lagoon cruises are very family-friendly. Please
                    let us know the age of the children so we can suggest the
                    most suitable boat and route (for example calmer lagoon
                    areas, shade on board, shorter trips, etc.).
                  </p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900 mb-1">
                    What is the cancellation policy?
                  </h3>
                  <p>
                    Cancellation rules depend on the exact partner and type of
                    boat (shared or private). As a general rule, last-minute
                    cancellations on the same day are not refundable unless it
                    is due to weather or safety reasons. We will always share
                    the exact cancellation terms in writing on WhatsApp before
                    you confirm.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900 mb-1">
                    What about safety and life jackets?
                  </h3>
                  <p>
                    All boats we work with must respect standard safety rules,
                    including life jackets on board. Please inform us if anyone
                    in your group cannot swim or needs extra assistance so that
                    the crew is aware in advance.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900 mb-1">
                    I get seasick – is a boat trip still possible?
                  </h3>
                  <p>
                    If you are sensitive to sea sickness, we recommend lagoon
                    routes that stay in more protected areas and avoiding very
                    windy days. You can also speak to your pharmacist about
                    sea-sickness tablets before travelling. Tell us about this
                    on WhatsApp so we can suggest the calmest options.
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
                Ask a question about boat trips on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}

