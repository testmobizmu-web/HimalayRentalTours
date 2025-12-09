// components/layout/Footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-8">
      {/* Main footer – lagoon gradient */}
      <div className="bg-gradient-to-r from-sky-200 via-teal-100 to-emerald-200 border-t border-sky-300">
        <div className="mbz-container py-8 grid gap-8 md:grid-cols-3 text-sm text-sky-900">
          {/* Column 1 – Get in touch */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-sky-950">
              Get in touch
            </h3>
            <div className="flex items-start gap-2 text-xs">
              <span className="mt-0.5 text-lg">📍</span>
              <p>
                Petit Paquet, Montagne Blanche
                <br />
                Mauritius
              </p>
            </div>
            <div className="text-xs space-y-1">
              <p>
                WhatsApp / Phone:{" "}
                <span className="font-semibold text-sky-950">
                  +230 5701 4922 &nbsp;/&nbsp; +230 758 1799
                </span>
              </p>
              <p>
                Email:{" "}
                <span className="font-semibold text-sky-950">
                  himalayrentaltours@outlook.com
                </span>
              </p>
              <p>
                Assistance hours:{" "}
                <span className="font-semibold text-sky-950">
                  Mon – Sun, 10:00 – 17:00
                </span>
              </p>
            </div>
          </div>

          {/* Column 2 – Quick links */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-sky-950">
              Quick links
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/" className="hover:text-sky-800">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-sky-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/rentals" className="hover:text-sky-800">
                  Rentals
                </Link>
              </li>
              <li>
                <Link href="/excursions" className="hover:text-sky-800">
                  Excursions
                </Link>
              </li>
              <li>
                <Link href="/boat-trips" className="hover:text-sky-800">
                  Boat Trips
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-sky-800">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-sky-800">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 – Policies */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-sky-950">Policies</h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/rental-policy" className="hover:text-sky-800">
                  Rental Policy
                </Link>
              </li>
              <li>
                <Link href="/excursions-policy" className="hover:text-sky-800">
                  Excursions Policy
                </Link>
              </li>
              <li>
                <Link href="/boat-trips-policy" className="hover:text-sky-800">
                  Boat Trips Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-sky-800"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
            <p className="text-[11px] text-sky-800/80 mt-2">
              Please read our policies carefully before confirming your rental,
              excursion or boat trip.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar – dark blue */}
      <div className="bg-sky-950 text-white">
        <div className="mbz-container py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px]">
          <p>
            © {new Date().getFullYear()} Himalay Rental Tours Limited. All
            rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Website by{" "}
            <a
              href="https://mobiz.mu"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-100 hover:text-sky-300"
            >
              MoBiz.mu
            </a>
            <span className="text-red-400 text-sm">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
