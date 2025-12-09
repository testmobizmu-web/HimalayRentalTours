"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type BoatCard = {
  title: string;
  text: string;
  img: string;
  alt: string;
};

const initialBoats: BoatCard[] = [
  {
    title: "Full-day catamaran cruise",
    text: "Full-day lagoon sailing with swimming, snorkelling and lunch.",
    img: "/images/boattrips/1.png",
    alt: "Full-day catamaran cruise in Mauritius lagoon"
  },
  {
    title: "Island-hopping speedboat",
    text: "Hop between small islands, sandbanks and clear-water spots.",
    img: "/images/boattrips/2.png",
    alt: "Speedboat island-hopping in Mauritius"
  },
  {
    title: "Sunset lagoon cruise",
    text: "End the day with a gentle lagoon cruise at sunset.",
    img: "/images/boattrips/3.png",
    alt: "Sunset lagoon cruise in Mauritius"
  }
];

export function BoatTripsRow() {
  const [cards, setCards] = useState(initialBoats);

  useEffect(() => {
    const id = setInterval(() => {
      setCards((prev) => [...prev.slice(1), prev[0]]);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((item) => (
        <article
          key={item.title}
          className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden hover:shadow-md transition flex flex-col"
        >
          <div className="relative w-full aspect-video">
            <Image
              src={item.img}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 30vw, 100vw"
            />
            <div className="absolute inset-x-0 bottom-2 flex justify-center">
              <Link
                href="/boat-trips"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 to-teal-400 px-3 py-1 text-[11px] font-bold text-white shadow-sm hover:opacity-90 transition"
              >
                View
              </Link>
            </div>
          </div>
          <div className="p-4 space-y-2 text-xs flex-1 flex flex-col">
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
