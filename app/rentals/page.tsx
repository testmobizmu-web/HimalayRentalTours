// app/rentals/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Scooter, Motorbike & Car Rentals in Mauritius – Himalay Rental Tours",
  description:
    "Rent scooters, motorbikes and cars in Mauritius with Himalay Rental Tours. Clear rental conditions, local support and easy WhatsApp booking from a Mauritius-based tour operator."
};

const WHATSAPP_LINK =
  "https://wa.me/23057014922?text=Hello%20Himalay%20Rental%20Tours%2C%20I%20would%20like%20to%20book%20a%20scooter%2C%20motorbike%20or%20car%20rental%20in%20Mauritius.%20Please%20share%20availability%2C%20prices%20and%20rental%20conditions.";

export default function RentalsPage() {
  const rentalsSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Scooter, Motorbike & Car Rentals in Mauritius",
    serviceType: "Vehicle rental",
    provider: {
      "@type": "TravelAgency",
      name: "Himalay Rental Tours",
      telephone: "+23057014922",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Petit Paquet, Montagne Blanche",
        addressLocality: "Montagne Blanche",
        addressCountry: "MU"
      }
    },
    areaServed: {
      "@type": "Country",
      name: "Mauritius"
    }
  };

  return (
    <div className="pb-16 bg-white">
      {/* JSON-LD structured data for rentals */}
      <Script
        id="rentals-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rentalsSchema) }}
      />

      {/* INTRO HERO + BREADCRUMBS */}
      <ScrollReveal>
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
                <span className="text-slate-500">Rentals</span>
              </div>
              <Link
                href="/"
                className="text-sky-700 font-semibold hover:text-sky-900"
              >
                ← Back to homepage
              </Link>
            </div>

            {/* Hero layout: text left, hero image right */}
            <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] md:items-center">
              {/* Left – SEO-rich text */}
              <div className="space-y-5">
                <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-800">
                  Rentals • Scooters • Motorbikes • Cars – Mauritius
                </span>
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                  Scooter, motorbike &amp; car rentals in{" "}
                  <span className="bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                    Mauritius
                  </span>{" "}
                  with a local tour operator.
                </h1>
                <p className="text-sm sm:text-base text-slate-700">
                  Himalay Rental Tours is a Mauritius-based tour operator
                  offering practical scooter, motorbike and car rentals for
                  visitors and locals. Our goal is to make it easy to move
                  around the island, discover beaches and villages, and connect
                  your rentals with excursions and lagoon boat trips – all with
                  one contact on WhatsApp.
                </p>
                <p className="text-sm text-slate-700">
                  Whether you are staying in a hotel, guesthouse or private
                  villa, we help you choose the right type of vehicle for your
                  comfort level. We focus on clear rental conditions, realistic
                  advice about distances and roads, and friendly support in
                  English or French.
                </p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Scooters for short trips, beach days and light traffic</li>
                  <li>• Motorbikes for experienced riders who want more power</li>
                  <li>• Compact and family cars for comfort, AC and luggage</li>
                  <li>• Simple WhatsApp booking and written confirmations</li>
                </ul>
              </div>

              {/* Right – premium hero image card */}
              <div className="flex justify-center">
                <div className="rounded-3xl border border-sky-200 bg-white/80 shadow-xl p-4 max-w-xl w-full">
                  <div className="relative w-full aspect-[12/7] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/rentalspageimg/herorentals.png"
                      alt="Scooter, motorbike and car rental hero image for Himalay Rental Tours in Mauritius"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 32rem, 100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION: 5 RENTAL TYPES – image left, text right, WhatsApp button */}
      <ScrollReveal delay={100}>
        <section className="border-b border-slate-200 bg-white">
          <div className="mbz-container py-10 space-y-12">
            {[
              {
                title: "Standard scooters",
                text: "Easy 110–125cc automatic scooters ideal for short distances, beaches, markets and light traffic around Mauritius. Perfect for couples and solo travellers looking for a simple and economical way to explore nearby villages and lagoon areas.",
                img: "/images/rentals/1.png"
              },
              {
                title: "Comfort scooters",
                text: "Comfortable scooters with more suspension, storage space and riding stability — excellent for full-day lagoon exploration, sightseeing routes and longer distances. Recommended for guests who want better comfort and smoother rides.",
                img: "/images/rentals/2.png"
              },
              {
                title: "Motorbikes",
                text: "For experienced riders who want more power on the road. A great option for scenic coastal drives, mountainside viewpoints and flexible island exploration. Mauritius roads are smooth — this is the adventurous way to discover the island.",
                img: "/images/rentals/3.png"
              },
              {
                title: "Compact cars",
                text: "Ideal for couples, friends or solo travellers who prefer air-conditioning, comfort and luggage space. Compact cars are perfect for long sightseeing days, south-coast road trips and visiting different lagoon regions in one day.",
                img: "/images/rentals/4.png"
              },
              {
                title: "Family cars",
                text: "Spacious cars for families or small groups travelling with luggage. This option is perfect for comfortable long-distance travel, airport transfers, and full-day island tours with multiple stops such as waterfalls, viewpoints and beaches.",
                img: "/images/rentals/5.png"
              }
            ].map((item) => (
              <div
                key={item.title}
                className="grid gap-8 md:grid-cols-2 md:items-center"
              >
                {/* LEFT IMAGE */}
                <div className="flex items-center justify-center">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 shadow-md p-4 max-w-md w-full">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 28rem, 100vw"
                      />
                    </div>
                  </div>
                </div>

                {/* RIGHT TEXT */}
                <div className="space-y-4 text-sm text-slate-700">
                  <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                    {item.title}
                  </h2>

                  <p>{item.text}</p>

                  <ul className="space-y-1">
                    <li>• Daily &amp; multi-day rentals available</li>
                    <li>• Clear prices with no hidden charges</li>
                    <li>• Fast WhatsApp support during your stay</li>
                    <li>
                      • Ideal for exploring beaches, villages &amp; lagoon areas
                    </li>
                  </ul>

                  {/* BOOK NOW BUTTON */}
                  <div className="flex flex-wrap gap-3 pt-2 items-center">
                    <a
                      href="https://wa.me/23057014922?text=Hello%20Himalay%20Rental%20Tours%2C%20I%20would%20like%20to%20book%20a%20rental.%20Please%20share%20availability%20and%20prices."
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
                      Quick response, clear rates, full details before you
                      confirm.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* RENTAL CONDITIONS */}
      <ScrollReveal delay={150}>
        <section className="border-b border-slate-200 bg-white">
          <div className="mbz-container py-10 space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Rental conditions (summary)
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              Here is a general summary of typical scooter, motorbike and car
              rental conditions in Mauritius. Exact details may vary depending
              on the vehicle and provider, and will always be confirmed in
              writing before you decide.
            </p>

            <div className="grid gap-6 md:grid-cols-2 text-sm">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900 mb-2 text-base">
                  Basic requirements
                </h3>
                <ul className="space-y-1 text-xs text-slate-700">
                  <li>• Valid driving licence (national or international).</li>
                  <li>
                    • Minimum age usually between 18–23+ depending on vehicle
                    and insurance.
                  </li>
                  <li>• Passport or ID copy and sometimes proof of stay.</li>
                  <li>
                    • Security deposit (cash or card) as specified in the offer.
                  </li>
                  <li>• Respect of Mauritius road rules and speed limits.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900 mb-2 text-base">
                  What is usually included
                </h3>
                <ul className="space-y-1 text-xs text-slate-700">
                  <li>• Vehicle for the agreed rental period.</li>
                  <li>• Basic insurance according to the package shared.</li>
                  <li>• One helmet per rider for scooters and motorbikes.</li>
                  <li>• Simple briefing about routes, rules and safety.</li>
                  <li>• WhatsApp contact for questions or small adjustments.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900 mb-2 text-base">
                  Important notes
                </h3>
                <ul className="space-y-1 text-xs text-slate-700">
                  <li>
                    • Fuel is normally not included and should be managed by the
                    renter.
                  </li>
                  <li>
                    • Fines, tickets or damage caused by negligence remain at
                    the renter&apos;s charge.
                  </li>
                  <li>
                    • Off-road driving, beach driving or dangerous behaviour is
                    not allowed.
                  </li>
                  <li>
                    • Extra drivers or higher insurance can sometimes be
                    arranged in advance.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900 mb-2 text-base">
                  Before you confirm
                </h3>
                <ul className="space-y-1 text-xs text-slate-700">
                  <li>
                    • We always send the conditions in writing on WhatsApp
                    before you say yes.
                  </li>
                  <li>
                    • You can ask us to re-explain anything that feels unclear
                    or too technical.
                  </li>
                  <li>
                    • If your plans or the weather change, we try to adapt where
                    possible.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* HOW TO RENT – STEP-BY-STEP PROCESS */}
      <ScrollReveal delay={200}>
        <section className="bg-white">
          <div className="mbz-container py-10 space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              How to rent with Himalay Rental Tours
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              The rental process is kept simple and transparent, mostly managed
              on WhatsApp so you can keep everything in one conversation. Here
              is how it usually works:
            </p>

            <div className="grid gap-4 md:grid-cols-4 text-xs text-slate-700">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-[11px] font-semibold text-sky-700 mb-1">
                  Step 1
                </div>
                <h3 className="font-semibold mb-1 text-slate-900 text-sm">
                  Send your request
                </h3>
                <p>
                  Message us on WhatsApp with your dates, accommodation area and
                  if you prefer a scooter, motorbike or car.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-[11px] font-semibold text-sky-700 mb-1">
                  Step 2
                </div>
                <h3 className="font-semibold mb-1 text-slate-900 text-sm">
                  Receive options &amp; prices
                </h3>
                <p>
                  We reply with available vehicles, daily rates and a summary of
                  rental conditions, including deposit and insurance.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-[11px] font-semibold text-sky-700 mb-1">
                  Step 3
                </div>
                <h3 className="font-semibold mb-1 text-slate-900 text-sm">
                  Confirm &amp; share documents
                </h3>
                <p>
                  Once you are happy, you confirm the option and share your
                  licence / ID so we can prepare the rental and timing.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-[11px] font-semibold text-sky-700 mb-1">
                  Step 4
                </div>
                <h3 className="font-semibold mb-1 text-slate-900 text-sm">
                  Check vehicle &amp; enjoy
                </h3>
                <p>
                  You meet at the agreed place and time, check the vehicle
                  together, finalise the paperwork and start exploring
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
                Start a rental enquiry on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}




