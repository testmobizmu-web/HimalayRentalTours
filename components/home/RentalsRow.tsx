"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type RentalCard = {
  title: string;
  text: string;
  img: string;
  alt: string;
};

const initialCards: RentalCard[] = [
  {
    title: "Standard scooters",
    text: "Easy 110–125cc automatic scooters for beach and village rides.",
    img: "/images/rentals/1.png",
    alt: "Standard scooter rental in Mauritius with Himalay Rental Tours"
  },
  {
    title: "Comfort scooters",
    text: "More comfort and storage space for full lagoon days.",
    img: "/images/rentals/2.png",
    alt: "Comfort scooter near the Mauritius lagoon"
  },
  {
    title: "Motorbikes",
    text: "For experienced riders who want a bit more power.",
    img: "/images/rentals/3.png",
    alt: "Motorbike rental in Mauritius"
  },
  {
    title: "Compact cars",
    text: "Perfect for couples or friends who prefer AC and space.",
    img: "/images/rentals/4.png",
    alt: "Compact rental car near Mauritius coastline"
  },
  {
    title: "Family cars",
    text: "Ideal for families and small groups with luggage.",
    img: "/images/rentals/5.png",
    alt: "Family rental car for tours in Mauritius"
  }
];

export function RentalsRow() {
  const [cards, setCards] = useState(initialCards);

  // Every 5 seconds, rotate card positions
  useEffect(() => {
    const id = setInterval(() => {
      setCards((prev) => [...prev.slice(1), prev[0]]);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {cards.map((item) => (
        <article
          key={item.title}
          className="group relative rounded-2xl border border-slate-200 bg-slate-50 hover:-translate-y-1 hover:shadow-md transition flex flex-col"
        >
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl">
            <Image
              src={item.img}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 18vw, 50vw"
            />
            {/* Centered gradient button */}
            <div className="absolute inset-x-0 bottom-2 flex justify-center">
              <Link
                href="/rentals"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 to-teal-400 px-3 py-1 text-[11px] font-bold text-white shadow-sm hover:opacity-90 transition"
              >
                View
              </Link>
            </div>
          </div>
          <div className="relative space-y-2 text-xs p-3 flex-1 flex flex-col">
            <h3 className="font-semibold text-slate-900 text-sm">
              {item.title}
            </h3>
            <p className="text-slate-600 flex-1">{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
