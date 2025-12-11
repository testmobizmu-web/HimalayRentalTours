// app/excursions/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Mauritius Excursions & Island Tours – Himalay Rental Tours",
  description:
    "Book Mauritius excursions with Himalay Rental Tours: North Tour, South Tour, Nature & Hiking and Island Excursions like Île aux Cerfs, Île Plate and Blue Bay Marine Park. Lagoon-focused, flexible and easy to book on WhatsApp."
};

const WHATSAPP_LINK =
  "https://wa.me/23057014922?text=Hello%20Himalay%20Rental%20Tours%2C%20I%20would%20like%20to%20book%20an%20excursion%20in%20Mauritius.%20Please%20share%20available%20tours%2C%20prices%20and%20details.";

export default function ExcursionsPage() {
  const excursionsSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Mauritius Island Excursions",
    description:
      "North, South, Nature & Hiking and Island lagoon excursions in Mauritius operated by Himalay Rental Tours.",
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
      {/* JSON-LD structured data for excursions */}
      <Script
        id="excursions-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(excursionsSchema) }}
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
                <span className="text-slate-500">Excursions</span>
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
                  src="/images/tours-excursionpage/hero-excursion.png"
                  alt="Mauritius excursions and island tours with Himalay Rental Tours"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>

            {/* SEO-rich description under hero */}
            <div className="space-y-3 text-sm sm:text-base text-slate-700 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                Mauritius excursions &amp; island tours with a{" "}
                <span className="bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  local tour operator
                </span>
                .
              </h1>
              <p>
                Himalay Rental Tours organises lagoon-focused excursions all
                around Mauritius: classic North and South tours, nature and
                hiking days in the mountains, and island excursions to lagoon
                spots such as Île aux Cerfs, Île Plate and Blue Bay Marine Park.
              </p>
              <p>
                We help you connect sightseeing, culture, nature and lagoon
                activities into clear, realistic day programmes. Most planning
                is done on WhatsApp, where we share timing, meeting points,
                prices and what is included in simple language.
              </p>
              <ul className="space-y-1">
                <li>
                  • North Tour – Port Louis, Pamplemousses &amp; coastal views
                </li>
                <li>
                  • South Tour – Chamarel, Grand Bassin, Black River Gorges
                  &amp; viewpoints
                </li>
                <li>
                  • Nature &amp; Hiking Tour – Black River Gorges and mountain
                  trails
                </li>
                <li>
                  • Island Excursions – Île aux Cerfs, Île Plate, Ilot
                  Benitiers, Blue Bay
                </li>
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 2 – “Explore Mauritius with us” (4 rows, image left, text right) */}
      <ScrollReveal delay={100}>
        <section className="border-b border-slate-200 bg-white">
          <div className="mbz-container py-10 space-y-8">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                Explore Mauritius with us
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl">
                Four main excursion styles to discover Mauritius – from colourful
                markets and temples to waterfalls, viewpoints and lagoon
                islands. Each tour can be adapted to your timing, pace and
                group.
              </p>
            </div>

            <div className="space-y-10">
              {[
                {
                  key: "north",
                  title: "North Tour – Port Louis, Pamplemousses & lagoon views",
                  img: "/images/tours-excursionpage/northtour.png",
                  highlights: [
                    "Port Louis (Central Market & Caudan Waterfront)",
                    "Pamplemousses Botanical Garden",
                    "Grand Baie & Pereybere Beach",
                    "Cap Malheureux (Red Roof Church)"
                  ],
                  perfect: "Sightseeing, shopping & coastal photography.",
                  duration: "Half-day or Full-day."
                },
                {
                  key: "south",
                  title:
                    "South Tour – Chamarel, Grand Bassin & scenic viewpoints",
                  img: "/images/tours-excursionpage/southtour.png",
                  highlights: [
                    "Chamarel Seven Coloured Earth",
                    "Chamarel Waterfall",
                    "Black River Gorges Viewpoint",
                    "Grand Bassin (Hindu Temple)",
                    "Trou aux Cerfs Volcano"
                  ],
                  perfect: "Nature lovers, culture & scenic drives.",
                  duration: "Full-day."
                },
                {
                  key: "nature",
                  title: "Nature & Hiking Tour – mountains & green valleys",
                  img: "/images/tours-excursionpage/hiking.png",
                  highlights: [
                    "Black River Gorges National Park trails",
                    "Waterfalls & panoramic mountain views",
                    "Optional picnic or photo stops"
                  ],
                  perfect: "Adventure seekers & nature enthusiasts.",
                  duration: "Half-day or Full-day."
                },
                {
                  key: "islands",
                  title: "Island Excursions – lagoon islands & marine parks",
                  img: "/images/tours-excursionpage/boatexcursion.png",
                  highlights: [
                    "Île aux Cerfs – Lagoon swimming, parasailing & beach BBQ",
                    "Île Plate / Gabriel Island – Catamaran cruise & snorkeling",
                    "Ilot Benitiers – Dolphin watching & sandbank picnic",
                    "Blue Bay Marine Park – Coral reef snorkeling & glass-bottom boat"
                  ],
                  perfect: "Relaxation, family trips & couples’ getaways.",
                  duration: "Half-day or Full-day."
                }
              ].map((tour) => (
                <div
                  key={tour.key}
                  className="grid gap-8 md:grid-cols-2 md:items-center"
                >
                  {/* Image left */}
                  <div className="flex items-center justify-center">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 shadow-md p-4 max-w-md w-full">
                      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                          src={tour.img}
                          alt={tour.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 28rem, 100vw"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text right */}
                  <div className="space-y-4 text-sm text-slate-700">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                      {tour.title}
                    </h3>
                    <div className="space-y-1 text-xs">
                      <p className="font-semibold text-slate-900">
                        Highlights:
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        {tour.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-xs text-slate-700">
                      <span className="font-semibold">Perfect for: </span>
                      {tour.perfect}
                    </p>
                    <p className="text-xs text-slate-700">
                      <span className="font-semibold">Duration: </span>
                      {tour.duration}
                    </p>

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
                        Book now on WhatsApp
                      </a>
                      <p className="text-[11px] text-slate-600 max-w-xs">
                        Tell us your dates, hotel or villa, and which excursion
                        you prefer. We reply with timing, price and what is
                        included.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 3 – Homepage-style Explore cards with SAME text as homepage */}
      <ScrollReveal delay={150}>
        <section className="border-b border-slate-200 bg-white">
          <div className="mbz-container py-10 space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Choose your Mauritius excursion style
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              Select the type of day you want to enjoy in Mauritius — lagoon
              scenery, viewpoints, markets or a mix of everything with one local
              operator.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {[
                {
                  title: "North coast lagoon",
                  text: "Grand Baie and nearby beaches with turquoise water and island views.",
                  img: "/images/excursions/1.png",
                  alt: "North coast lagoon excursion in Mauritius",
                  href: "/excursions"
                },
                {
                  title: "South & Chamarel",
                  text: "Scenic South coast routes with Chamarel and viewpoints.",
                  img: "/images/excursions/2.png",
                  alt: "South Mauritius and Chamarel excursion views",
                  href: "/excursions"
                },
                {
                  title: "Markets & culture",
                  text: "Port Louis, Central Market and local cultural stops.",
                  img: "/images/excursions/3.png",
                  alt: "Mauritius market and cultural excursion highlight",
                  href: "/excursions"
                },
                {
                  title: "Full lagoon days",
                  text: "Combine rentals, tours and boat trips for full lagoon days.",
                  img: "/images/excursions/4.png",
                  alt: "Mauritius lagoon day excursion combination",
                  href: "/boat-trips"
                }
              ].map((item) => (
                <article
                  key={item.title}
                  className="group relative rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                >
                  <div className="relative w-full aspect-square overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      sizes="(min-width: 1024px) 18vw, 50vw"
                    />
                  </div>
                  <div className="p-3 sm:p-4 space-y-2 text-xs flex-1 flex flex-col">
                    <h3 className="font-semibold text-slate-900 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 flex-1">{item.text}</p>

                    <div className="pt-1">
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-sky-700 border border-sky-200 group-hover:bg-sky-50 transition"
                      >
                        <span>Book now</span>
                        <span className="text-[12px]">➜</span>
                      </a>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-emerald-300/60 transition-all duration-500" />
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 4 – How to book an excursion */}
      <ScrollReveal delay={200}>
        <section className="bg-white">
          <div className="mbz-container py-10 space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              How to book an excursion with Himalay Rental Tours
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              We keep the process simple and WhatsApp-based so you can organise
              your days quickly and keep all information in one conversation.
            </p>

            <div className="grid gap-4 md:grid-cols-4 text-xs text-slate-700">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-[11px] font-semibold text-sky-700 mb-1">
                  Step 1
                </div>
                <h3 className="font-semibold mb-1 text-slate-900 text-sm">
                  Share your dates &amp; ideas
                </h3>
                <p>
                  Message us on WhatsApp with your travel dates, hotel or villa
                  area and which excursion types interest you (North, South,
                  hiking, islands).
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-[11px] font-semibold text-sky-700 mb-1">
                  Step 2
                </div>
                <h3 className="font-semibold mb-1 text-slate-900 text-sm">
                  Receive suggestions &amp; prices
                </h3>
                <p>
                  We propose realistic day plans with suggested timing, key
                  stops, prices and what is included, adapted to weather and
                  season.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-[11px] font-semibold text-sky-700 mb-1">
                  Step 3
                </div>
                <h3 className="font-semibold mb-1 text-slate-900 text-sm">
                  Confirm your excursion
                </h3>
                <p>
                  Once you are happy, you confirm by WhatsApp and we send you a
                  written summary with meeting point, time and payment details.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-[11px] font-semibold text-sky-700 mb-1">
                  Step 4
                </div>
                <h3 className="font-semibold mb-1 text-slate-900 text-sm">
                  Enjoy your Mauritius day
                </h3>
                <p>
                  On the day, you meet your driver or boat at the agreed place
                  and enjoy a lagoon-focused, organised but relaxed excursion in
                  Mauritius.
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
                Start an excursion enquiry on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}


