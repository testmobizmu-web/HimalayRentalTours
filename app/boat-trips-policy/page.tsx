import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boat Trips Policy – Himalay Rental Tours Mauritius",
  description:
    "Official boat trips policy of Himalay Rental Tours: sea conditions, cancellations, lifejackets, safety rules and responsibilities for catamaran and lagoon boat excursions.",
};

export default function BoatTripsPolicyPage() {
  return (
    <div className="pb-16 bg-white">
      {/* HEADER */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-sky-100 via-teal-50 to-emerald-50">
        <div className="mbz-container py-8 md:py-10 space-y-6">
          <div className="flex items-center justify-between text-[11px] text-slate-600">
            <div className="flex items-center gap-1">
              <Link
                href="/"
                className="text-sky-700 font-medium hover:text-sky-900"
              >
                Home
              </Link>
              <span>›</span>
              <span className="text-slate-500">Boat Trips Policy</span>
            </div>
            <Link
              href="/boat-trips"
              className="text-sky-700 font-semibold hover:text-sky-900"
            >
              ← Back to boat trips
            </Link>
          </div>

          {/* Animated badge + intro */}
          <div className="space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-800 animate-pulse">
              <span>🚤</span>
              <span>Boat trips policy • Catamaran &amp; lagoon boats</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Boat Trips Policy – Himalay Rental Tours
            </h1>
            <p className="text-sm sm:text-base text-slate-700">
              This policy explains how Mauritius lagoon boat trips organised
              through Himalay Rental Tours are managed: safety rules, weather
              decisions, cancellations and guest responsibilities on board.
            </p>
          </div>
        </div>
      </section>

      {/* POLICY SECTIONS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mbz-container py-10 space-y-8 text-sm text-slate-700">
          {/* Safety & lifejackets */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                1. Safety & lifejackets
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  • All boats must carry lifejackets and basic safety equipment
                  according to local regulations.
                </li>
                <li>
                  • Guests who cannot swim, children and anyone feeling unsure
                  are encouraged to wear lifejackets during the trip.
                </li>
                <li>
                  • Instructions from the captain and crew regarding boarding,
                  moving on deck and swimming areas must be respected at all
                  times.
                </li>
              </ul>
            </div>

            {/* Weather & sea conditions */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                2. Weather & sea conditions
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  • The captain has the final decision on whether a trip can
                  depart or continue based on sea and wind conditions.
                </li>
                <li>
                  • In case of unsafe conditions, a trip may be delayed,
                  shortened, re-routed or cancelled.
                </li>
                <li>
                  • When a departure is cancelled for safety reasons, we try to
                  re-schedule or apply the refund rules of the boat operator as
                  communicated during booking.
                </li>
              </ul>
            </div>
          </div>

          {/* Behaviour & alcohol */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                3. Behaviour on board
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  • Running on deck, jumping between boats and diving from a
                  moving boat are not allowed.
                </li>
                <li>
                  • Personal belongings must be stored safely to avoid falling
                  overboard or blocking walkways.
                </li>
                <li>
                  • Rubbish should never be thrown in the sea. Please use the
                  bins provided.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                4. Alcohol & health
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  • Moderate alcohol consumption may be allowed on certain
                  cruises, but excessive drinking or behaviour that endangers
                  others will not be accepted.
                </li>
                <li>
                  • Guests who feel unwell (sea sickness, dizziness, etc.)
                  should immediately inform the crew.
                </li>
                <li>
                  • If you are pregnant, have heart or mobility issues, or any
                  other medical condition, please let us know in advance so we
                  can recommend calmer routes.
                </li>
              </ul>
            </div>
          </div>

          {/* Cancellations & children */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                5. Cancellations & changes
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  • Guest cancellations are subject to the same general rules as
                  excursions: notice periods and potential fees will be
                  communicated in advance.
                </li>
                <li>
                  • If the boat operator cancels for safety or technical
                  reasons, alternative dates or refunds are offered according to
                  their policy.
                </li>
                <li>
                  • Small changes to itinerary, swimming spots or timing may
                  happen without compensation if the overall experience remains
                  equivalent.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                6. Children, valuables & responsibility
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  • Children must be supervised by an adult at all times and may
                  be required to wear lifejackets.
                </li>
                <li>
                  • We recommend bringing only necessary items on board.
                  Passports, large amounts of cash or valuables are best left in
                  a safe place ashore.
                </li>
                <li>
                  • Himalay Rental Tours and the boat operators cannot be held
                  responsible for loss or damage to personal items not caused by
                  proven negligence.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mbz-container py-10 space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Boat trips policy – FAQ
          </h2>
          <div className="grid gap-4 md:grid-cols-2 text-xs sm:text-sm text-slate-700">
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  What should I bring on a lagoon boat trip?
                </h3>
                <p>
                  We suggest swimsuit, towel, hat or cap, sunglasses,
                  reef-friendly sunscreen, flip-flops and a light T-shirt or
                  cover-up. If you are sensitive to cold, a light jacket may be
                  useful on the way back.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Is dolphin watching guaranteed?
                </h3>
                <p>
                  No, dolphin sightings can never be guaranteed because they are
                  wild animals. We only work with partners who respect local
                  guidelines and avoid disturbing marine life.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  I get sea-sick easily. Can I still join?
                </h3>
                <p>
                  Yes, but please let us know in advance. We can suggest calmer
                  lagoon routes and you can speak to a pharmacist about
                  sea-sickness tablets before your trip.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Are boat trips cancelled often?
                </h3>
                <p>
                  Most lagoon days in Mauritius are fine, but during strong wind
                  or bad sea conditions cancellations can happen. In that case
                  we follow the re-booking or refund rules explained when you
                  book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
