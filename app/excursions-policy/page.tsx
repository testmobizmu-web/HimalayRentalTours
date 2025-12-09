import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Excursions Policy – Himalay Rental Tours Mauritius",
  description:
    "Official excursions policy of Himalay Rental Tours: bookings, payments, cancellations, weather changes and guest responsibilities for guided tours in Mauritius.",
};

export default function ExcursionsPolicyPage() {
  return (
    <div className="pb-16 bg-white">
      {/* HEADER + BREADCRUMBS */}
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
              <span className="text-slate-500">Excursions Policy</span>
            </div>
            <Link
              href="/excursions"
              className="text-sky-700 font-semibold hover:text-sky-900"
            >
              ← Back to excursions
            </Link>
          </div>

          {/* Animated badge + intro */}
          <div className="space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-[11px] font-medium text-teal-800 animate-pulse">
              <span>🧭</span>
              <span>Excursions policy • Guided tours &amp; day trips</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Excursions Policy – Himalay Rental Tours
            </h1>
            <p className="text-sm sm:text-base text-slate-700">
              This excursions policy explains how bookings, payments,
              cancellations and changes are managed for guided tours organised
              through Himalay Rental Tours in Mauritius.
            </p>
          </div>
        </div>
      </section>

      {/* POLICY SECTIONS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mbz-container py-10 space-y-8 text-sm text-slate-700">
          {/* Bookings & payments */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                1. Bookings & payments
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  • Excursions are usually booked in advance through WhatsApp,
                  email or the contact form.
                </li>
                <li>
                  • A deposit or full prepayment may be required to confirm a
                  tour depending on season and activity.
                </li>
                <li>
                  • Prices, inclusions and timings are shared in writing before
                  you confirm your booking.
                </li>
                <li>
                  • Remaining balances (where applicable) are normally paid on
                  the day of the excursion in the agreed method.
                </li>
              </ul>
            </div>

            {/* Cancellations by client */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                2. Cancellations by the guest
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  • Free or reduced cancellation is possible up to a certain
                  number of hours or days before the excursion, depending on the
                  activity and supplier.
                </li>
                <li>
                  • Late cancellations, last-minute changes or no-show may lead
                  to partial or full loss of the deposit or full payment.
                </li>
                <li>
                  • Cancellation terms will always be stated clearly during
                  booking so that you can decide with full information.
                </li>
              </ul>
            </div>
          </div>

          {/* Weather & itinerary */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                3. Weather, safety & changes by organiser
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  • Safety is always the priority. Excursions may be adjusted,
                  shortened, postponed or cancelled if conditions are not
                  suitable (weather, road closures, strikes, etc.).
                </li>
                <li>
                  • When possible, an alternative date or similar experience
                  will be offered. If this is not possible, a partial or full
                  refund may be made according to the conditions of the
                  excursion provider.
                </li>
                <li>
                  • Small itinerary changes (order of stops, timing adjustments)
                  can occur without compensation as long as the core experience
                  remains similar.
                </li>
              </ul>
            </div>

            {/* Guest responsibilities */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                4. Guest responsibilities
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  • Be ready at the agreed meeting time and place. Delays may
                  reduce the total time of the excursion.
                </li>
                <li>
                  • Inform us in advance of any health conditions, mobility
                  issues or dietary restrictions that may affect the trip.
                </li>
                <li>
                  • Follow instructions from drivers and guides, especially
                  regarding safety, swimming, hiking or wildlife.
                </li>
                <li>
                  • Respect local customs, religious sites and the environment
                  during visits.
                </li>
              </ul>
            </div>
          </div>

          {/* Liability & insurance */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                5. Liability & insurance
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  • Himalay Rental Tours acts as a coordinator between guests
                  and excursion providers (drivers, boats, activity centres).
                </li>
                <li>
                  • Each provider is responsible for the safe operation of their
                  service and must comply with local regulations.
                </li>
                <li>
                  • We strongly recommend that guests travel with their own
                  personal travel insurance covering medical care, accidents,
                  trip interruption and personal belongings.
                </li>
              </ul>
            </div>

            {/* Children & special cases */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                6. Children & special activities
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  • Some excursions may not be suitable for very young children,
                  pregnant women or guests with reduced mobility.
                </li>
                <li>
                  • Age limits, height limits or health restrictions are
                  communicated in advance whenever applicable.
                </li>
                <li>
                  • Children must remain under the supervision of a responsible
                  adult at all times.
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
            Excursions policy – FAQ
          </h2>
          <div className="grid gap-4 md:grid-cols-2 text-xs sm:text-sm text-slate-700">
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  What happens if it rains on the day of my excursion?
                </h3>
                <p>
                  Light rain usually does not cancel a tour, but strong wind,
                  heavy rain or unsafe conditions may lead to changes. We will
                  try to re-schedule or offer an alternative. If that is not
                  possible, we follow the provider&apos;s refund policy, which is
                  always shared in advance.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Can I change my excursion date after booking?
                </h3>
                <p>
                  Date changes depend on availability and the notice given. The
                  earlier you contact us, the easier it is to adapt without
                  extra cost. Late changes may be treated as a cancellation.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Are meals and entrance fees always included?
                </h3>
                <p>
                  Not always. Some excursions include lunch and all entrance
                  fees, others keep them separate to give you more flexibility.
                  We always list inclusions and exclusions in writing before you
                  confirm.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Can you organise private tours?
                </h3>
                <p>
                  Yes, many routes can be arranged as private excursions with a
                  dedicated driver or guide. Ask us on WhatsApp for options and
                  pricing based on your group size.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
