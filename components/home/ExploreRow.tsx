"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ExploreCard = {
  title: string;
  text: string;
  href: string;
  img: string;
  alt: string;
};

const initialExplores: ExploreCard[] = [
  {
    title: "North coast lagoon",
    text: "Grand Baie and nearby beaches with turquoise water.",
    href: "/excursions",
    img: "/images/excursions/1.png",
    alt: "North coast lagoon excursion in Mauritius"
  },
  {
    title: "South & Chamarel",
    text: "South coast viewpoints, Chamarel and nature stops.",
    href: "/excursions",
    img: "/images/excursions/2.png",
    alt: "South Mauritius and Chamarel sightseeing"
  },
  {
    title: "Markets & culture",
    text: "Port Louis, markets and cultural heritage visits.",
    href: "/excursions",
    img: "/images/excursions/3.png",
    alt: "Market and cultural excursion in Mauritius"
  },
  {
    title: "Full lagoon days",
    text: "Combine rentals, tours and boat trips in one plan.",
    href: "/boat-trips",
    img: "/images/excursions/4.png",
    alt: "Day combining Mauritius lagoon tours and boat trips"
  }
];

export function ExploreRow() {
  const [cards, setCards] = useState(initialExplores);

  useEffect(() => {
    const id = setInterval(() => {
      setCards((prev) => [...prev.slice(1), prev[0]]);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
      {cards.map((item) => (
        <article
          key={item.title}
          className="group relative rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-md transition flex flex-col"
        >
          <div className="relative w-full aspect-square overflow-hidden rounded-t-2xl">
            <Image
              src={item.img}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 18vw, 50vw"
            />
            <div className="absolute inset-x-0 bottom-2 flex justify-center">
              <Link
                href={item.href}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 to-teal-400 px-3 py-1 text-[11px] font-bold text-white shadow-sm hover:opacity-90 transition"
              >
                Explore
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
