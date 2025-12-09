import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions – Himalay Rental Tours Mauritius",
  description:
    "General terms and conditions for using Himalay Rental Tours services and website: bookings, payments, liability, data protection and governing law.",
};

export default function TermsAndConditionsPage() {
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
              <span className="text-slate-500">Terms &amp; Conditions</span>
            </div>
            <Link
              href="/"
              className="text-sky-700 font-semibold hover:text-sky-900"
            >
              ← Back to homepage
            </Link>
          </div>

          {/* Animated badge + intro */}
          <div className="space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-800 animate-pulse">
              <span>📄</span>
              <span>General terms • Website &amp; services</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Terms &amp; Conditions – Himalay Rental Tours
            </h1>
            <p className="text-sm sm:text-base text-slate-700">
              These terms and conditions apply when you use the services and
              website of Himalay Rental Tours, including rentals, excursions,
              boat trips and related support.
            </p>
          </div>
        </div>
      </section>

      {/* TERMS BODY */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mbz-container py-10 space-y-8 text-sm text-slate-700">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
              1. Definitions
            </h2>
            <p className="text-xs">
              In this document, &quot;we&quot;, &quot;us&quot; and
              &quot;our&quot; refer to Himalay Rental Tours. &quot;You&quot;
              and &quot;guest&quot; refer to the person or people using our
              services or browsing our website. &quot;Services&quot; refers to
              vehicle rentals, excursions, boat trips and any related products
              or advice.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Bookings & prices */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                2. Bookings &amp; confirmations
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  • Bookings are usually made via WhatsApp, email or the
                  contact form on our website.
                </li>
                <li>
                  • A booking is considered confirmed once you receive written
                  confirmation with key details (date, time, service, price and
                  conditions) and, where applicable, once a deposit is received.
                </li>
                <li>
                  • It is your responsibility to check the confirmation and
                  inform us quickly if something is incorrect.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                3. Prices &amp; payments
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  • All prices are quoted in Mauritian Rupees (Rs) unless stated
                  otherwise.
                </li>
                <li>
                  • Quotes are based on the information provided at the time of
                  enquiry and can change if details such as dates, number of
                  people or services requested change.
                </li>
                <li>
                  • We may require deposits or full prepayment depending on the
                  service and season.
                </li>
                <li>
                  • Any additional charges (extra hours, fuel, entrance fees,
                  etc.) will be explained whenever possible before they apply.
                </li>
              </ul>
            </div>
          </div>

          {/* Cancellations & changes */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                4. Cancellations &amp; modifications
              </h2>
              <p className="text-xs">
                Each type of service (rental, excursion, boat trip) may have
                specific cancellation rules which are shared during booking. As
                a general principle:
              </p>
              <ul className="space-y-1 text-xs">
                <li>
                  • Cancelling well in advance usually allows more flexibility
                  for re-booking or refund.
                </li>
                <li>
                  • Very late cancellations or no-show may result in retaining
                  part or all of the deposit.
                </li>
                <li>
                  • Any modification to dates, times or services is subject to
                  availability and may affect prices.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                5. Use of website &amp; content
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  • The content of our website (text, images, branding and
                  layout) is for information and marketing purposes.
                </li>
                <li>
                  • You may not copy, reproduce or reuse website content for
                  commercial purposes without written permission.
                </li>
                <li>
                  • While we aim to keep information accurate and up to date,
                  minor differences can exist between website descriptions and
                  the exact service on the day (for example due to weather or
                  operational constraints).
                </li>
              </ul>
            </div>
          </div>

          {/* Liability & data */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                6. Limitation of liability
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  • We act in good faith when selecting partners (drivers, boat
                  operators, guides) but cannot guarantee every aspect of their
                  performance.
                </li>
                <li>
                  • To the extent permitted by law, Himalay Rental Tours is not
                  liable for indirect or consequential losses such as missed
                  flights, lost business opportunities or emotional distress.
                </li>
                <li>
                  • Nothing in these terms limits liability in cases where it
                  cannot be excluded under Mauritian law.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                7. Personal data & privacy
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  • We use your contact details and booking information only to
                  manage your enquiry and reservations and, where relevant, to
                  follow up with you about your stay.
                </li>
                <li>
                  • We do not sell your data to third parties. Information is
                  shared only with partners directly involved in your booking
                  (for example, driver or boat operator).
                </li>
                <li>
                  • You can request that we correct or delete your basic contact
                  details after your trip, except where we must retain certain
                  records for legal or accounting reasons.
                </li>
              </ul>
            </div>
          </div>

          {/* Law & changes */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                8. Governing law & disputes
              </h2>
              <p className="text-xs">
                These terms are governed by the laws of Mauritius. Any dispute
                that cannot be resolved amicably may be submitted to the
                competent Mauritian courts.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                9. Updates to these terms
              </h2>
              <p className="text-xs">
                We may update these terms and conditions from time to time.
                Changes will apply from the date they are published on this
                page. The version in force at the time of your booking will be
                the one that applies to that service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mbz-container py-10 space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Terms &amp; conditions – FAQ
          </h2>
          <div className="grid gap-4 md:grid-cols-2 text-xs sm:text-sm text-slate-700">
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Do these terms replace rental and excursion policies?
                </h3>
                <p>
                  No. These are general terms that apply to all services and use
                  of the website. The specific Rental Policy, Excursions Policy
                  and Boat Trips Policy provide extra details for those
                  activities and should be read together.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  How will I know if the terms change?
                </h3>
                <p>
                  The latest version will always appear on this page. For
                  confirmed bookings we apply the terms that were valid on the
                  date you made your reservation.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  What if part of the terms is not valid?
                </h3>
                <p>
                  If a court finds that a specific clause is invalid or
                  unenforceable, the rest of the terms remain in force as long
                  as the overall agreement still makes sense.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Who should I contact if I have a question?
                </h3>
                <p>
                  You can contact Himalay Rental Tours on WhatsApp, by phone or
                  by email. We prefer written communication for anything
                  important so that everyone keeps a clear record.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
