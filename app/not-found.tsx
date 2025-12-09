// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-sky-100 via-teal-50 to-emerald-50 flex items-center">
      <div className="mbz-container py-10 grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-800">
            404 • Page not found
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            This page drifted away from the lagoon.
          </h1>
          <p className="text-sm sm:text-base text-slate-700 max-w-xl">
            The link you tried to open does not exist anymore or was typed with
            a small mistake. No stress — you can return to the homepage or
            contact us on WhatsApp and we’ll guide you.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:opacity-90 transition"
            >
              Back to homepage
            </Link>
            <a
              href="https://wa.me/23057581799?text=Hello%20Himalay%20Rental%20Tours%2C%20I%20found%20a%20404%20page%20and%20need%20some%20help."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-sky-800 hover:bg-sky-50 transition"
            >
              WhatsApp support
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-4 rounded-[32px] bg-gradient-to-br from-sky-300/30 via-teal-200/20 to-emerald-200/30 blur-2xl" />
          <div className="relative rounded-[32px] border border-sky-200 bg-white/80 shadow-xl p-6 space-y-4">
            <p className="text-xs font-semibold text-sky-800 uppercase tracking-wide">
              Himalay Rental Tours
            </p>
            <p className="text-sm text-slate-700">
              “If a link is wrong, the island is still here.” Use the buttons on
              the left to continue your Mauritius holiday planning with us.
            </p>
            <p className="text-xs text-slate-500">
              Petit Paquet, Montagne Blanche • Mauritius tour operator • Scooter
              & car rentals • Excursions • Catamaran & boat trips
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
