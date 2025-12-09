import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rental Policy – Himalay Rental Tours Mauritius",
  description:
    "Read the official rental policy of Himalay Rental Tours for scooters, motorbikes and cars in Mauritius: deposits, age requirements, responsibilities and insurance summary.",
};

export default function RentalPolicyPage() {
  return (
    <div className="pb-16 bg-white">
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
              <span className="text-slate-500">Rental Policy</span>
            </div>
            <Link
              href="/rentals"
              className="text-sky-700 font-semibold hover:text-sky-900"
            >
              ← Back to rentals
            </Link>
          </div>

          {/* Animated policy badge + intro */}
          <div className="space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-800 animate-pulse">
              <span>🛡️</span>
              <span>Rental policy • Scooters • Motorbikes • Cars</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Rental Policy – Himalay Rental Tours
            </h1>
            <p className="text-sm sm:text-base text-slate-700">
              By renting a scooter, motorbike or car from Himalay Rental Tours,
              you agree to the rental conditions below. The goal of this policy
              is to protect both you and the company and to keep all rentals
              clear, safe and fair.
            </p>
          </div>
        </div>
      </section>

      {/* POLICY SECTIONS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mbz-container py-10 space-y-8 text-sm text-slate-700">
          {/* Preamble */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
              1. Preamble
            </h2>
            <p>
              Renting a vehicle from Himalay Rental Tours means you accept the
              general and specific conditions in this document. You confirm that
              all details provided to us (name, contact information, licence
              details and accommodation) are correct and that you are legally
              allowed to drive in Mauritius.
            </p>
          </div>

          {/* Deposits & deductibles */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                2. Security deposit & damage deductible
              </h2>
              <p>
                A refundable security deposit is required for every rental. The
                amount depends on the type of vehicle:
              </p>
              <ul className="space-y-1 text-xs">
                <li>• Scooters &amp; motorbikes below 250cc – security deposit</li>
                <li>• Motorbikes 250cc and above – higher security deposit</li>
                <li>• Rental cars – higher security deposit due to value</li>
              </ul>
              <p className="text-xs">
                The deposit is kept to cover possible damage, theft or loss
                according to the conditions communicated before your rental.
                Where no damage or claim exists, the deposit is returned after
                the vehicle has been checked.
              </p>
            </div>

            {/* Renter responsibilities */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                3. Renter responsibilities
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  • Take reasonable care of the vehicle and operate it
                  responsibly at all times.
                </li>
                <li>
                  • Never allow anyone without a valid driving licence to use
                  the vehicle.
                </li>
                <li>
                  • Never drive under the influence of alcohol, drugs or any
                  substance that affects your driving.
                </li>
                <li>
                  • Obey all traffic laws and settle any fines, tickets or
                  penalties incurred during the rental.
                </li>
                <li>
                  • Inform Himalay Rental Tours immediately in the event of an
                  accident, theft, breakdown or damage.
                </li>
                <li>
                  • Do not use the vehicle for racing, off-road driving or any
                  illegal activity.
                </li>
              </ul>
            </div>
          </div>

          {/* General rental terms & fuel */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                4. General rental terms
              </h2>
              <ul className="space-y-1 text-xs">
                <li>• Minimum age to rent is usually 18 years or higher.</li>
                <li>
                  • A valid national or international driving licence is
                  required for the same vehicle category.
                </li>
                <li>
                  • Rental duration, extension of rental and late return will be
                  clearly explained before you confirm.
                </li>
                <li>
                  • Extra kilometres, late return or extra drivers may result in
                  additional charges as communicated in advance.
                </li>
                <li>
                  • Helmets are supplied for scooters and motorbikes where
                  required.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                5. Fuel policy & traffic fines
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  • Fuel is normally not included. The vehicle should be
                  returned with approximately the same level as at pick-up.
                </li>
                <li>
                  • Any difference in fuel level may be charged according to the
                  rate communicated.
                </li>
                <li>
                  • All traffic fines, parking tickets and penalties during the
                  rental remain the renter&apos;s responsibility.
                </li>
                <li>
                  • Any fine or penalty received after the rental period may be
                  charged using the details provided at the time of booking.
                </li>
              </ul>
            </div>
          </div>

          {/* Damage, theft & insurance */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                6. Accidents & damage
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  • In the event of an accident, you must contact Himalay Rental
                  Tours immediately and, where required, inform the local
                  authorities.
                </li>
                <li>
                  • Do not admit liability at the scene without instructions
                  from the rental provider or insurer.
                </li>
                <li>
                  • A damage report and/or police report may be requested in
                  order to process the incident.
                </li>
                <li>
                  • The renter remains financially responsible for damage
                  according to the deductible and conditions confirmed in
                  writing.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                7. Theft & loss
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  • In case of theft or suspected theft, you must immediately
                  notify Himalay Rental Tours and the nearest police station.
                </li>
                <li>
                  • Vehicle keys, documents and any provided equipment should
                  never be left unattended.
                </li>
                <li>
                  • A deductible may apply in case of theft, according to the
                  conditions given before rental.
                </li>
                <li>
                  • The renter is responsible for replacement of lost keys or
                  documents at the actual replacement cost.
                </li>
              </ul>
            </div>
          </div>

          {/* Cancellation */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
              8. Cancellation & modification
            </h2>
            <ul className="space-y-1 text-xs">
              <li>
                • Cancellation terms will be communicated during booking and may
                differ depending on season and vehicle type.
              </li>
              <li>
                • Last-minute cancellations or no-show may result in charges or
                loss of deposit.
              </li>
              <li>
                • Changes to dates, times or vehicle categories are subject to
                availability and may affect the final price.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mbz-container py-10 space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Rental policy – FAQ
          </h2>
          <div className="grid gap-4 md:grid-cols-2 text-xs sm:text-sm text-slate-700">
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Do I need an international driving licence?
                </h3>
                <p>
                  Most visitors can drive with their normal national licence if
                  it is valid for the vehicle type and clearly written in Latin
                  characters. In some cases an international licence is
                  recommended. Ask us on WhatsApp if you are unsure.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Is insurance included in the rental price?
                </h3>
                <p>
                  Basic insurance is normally included, with a deductible in
                  case of damage or theft. Exact coverage and deductible amount
                  are always explained in writing before you confirm the
                  booking.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Can someone else drive the vehicle?
                </h3>
                <p>
                  Additional drivers must meet the same licence and age
                  requirements and must be declared before the rental. Driving
                  by undeclared persons may void insurance coverage.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  What happens if I have an accident?
                </h3>
                <p>
                  Stay safe first, then contact us immediately. We will guide
                  you on next steps, including any police report and how the
                  insurance and deductible apply to your situation.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Can I drive on the beach or off-road?
                </h3>
                <p>
                  No. Off-road, beach and dune driving are strictly prohibited
                  and may result in total loss of insurance coverage and full
                  responsibility for damage.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900 mb-1">
                  How are disputes handled?
                </h3>
                <p>
                  Any disagreement is first discussed calmly between you and
                  Himalay Rental Tours. Where required, Mauritian law and
                  competent local courts will apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
