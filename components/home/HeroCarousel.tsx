"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = {
  src: string;
  alt: string;
};

const slides: Slide[] = [
  {
    src: "/images/boattrips/1.png",
    alt: "Catamaran cruise in the Mauritius lagoon with Himalay Rental Tours"
  },
  {
    src: "/images/boattrips/2.png",
    alt: "Speedboat island-hopping tour in Mauritius"
  },
  {
    src: "/images/boattrips/3.png",
    alt: "Sunset boat trip over the Mauritius lagoon"
  }
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  // Auto-rotate every 1 second (1000ms)
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const current = slides[index];

  return (
    <div className="relative h-64 sm:h-80 md:h-96">
      <div className="absolute inset-0 rounded-3xl border border-sky-100 bg-sky-50 shadow-xl overflow-hidden">
        <div className="relative h-2/3 w-full">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            className="object-cover transition-opacity duration-500"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="h-1/3 p-3 flex flex-col justify-between text-[11px] text-slate-800 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <span className="font-semibold">
              Mauritius lagoon tours &amp; boat trips
            </span>
            <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[10px] text-sky-800 border border-sky-200">
              Tour operator • Mauritius
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="rounded-xl border border-slate-200 bg-white p-2">
              <div className="font-semibold text-xs">Scooters &amp; cars</div>
              <div className="text-slate-500">
                Rentals and airport transfers to move easily across Mauritius.
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-2">
              <div className="font-semibold text-xs">
                Excursions &amp; lagoon days
              </div>
              <div className="text-slate-500">
                Full-day tours and catamaran or boat trips with trusted
                partners.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
