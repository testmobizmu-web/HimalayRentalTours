"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Review = {
  name: string;
  country: string;
  comment: string;
  avatar: string;
  flag: string;
};

const reviews: Review[] = [
  {
    name: "Elena (Couple trip)",
    country: "France",
    comment:
      "We rented a scooter and booked a South & Chamarel excursion. Everything was organised by WhatsApp and felt very easy.",
    avatar: "/images/womanprofileimages/profilefrance.png",
    flag: "/images/flags/france.png"
  },
  {
    name: "Rahul & Priya",
    country: "India",
    comment:
      "Himalay Rental Tours helped us combine airport transfer, car rental and a catamaran day. Good communication and flexible options.",
    avatar: "/images/womanprofileimages/profileindia.png",
    flag: "/images/flags/india.png"
  },
  {
    name: "Irina",
    country: "Russia",
    comment:
      "They answered quickly to all questions and suggested a mix of excursions according to the weather. Very friendly and helpful.",
    avatar: "/images/womanprofileimages/profilerussia.png",
    flag: "/images/flags/russia.png"
  },
  {
    name: "Sarah",
    country: "United Kingdom",
    comment:
      "Nice scooter, clear conditions and easy pick-up. Perfect way to explore the north of Mauritius on our own schedule.",
    avatar: "/images/womanprofileimages/profileengland.png",
    flag: "/images/flags/english.png"
  },
  {
    name: "Megan",
    country: "South Africa",
    comment:
      "We booked a family car and a lagoon boat trip. Kids loved it and the team was patient and organised.",
    avatar: "/images/womanprofileimages/profilesouthafrica.png",
    flag: "/images/flags/southafrica.png"
  },
  {
    name: "Lucas",
    country: "France",
    comment:
      "Good scooter, honest explanations and no hidden charges. I recommend them for solo travellers who want independence.",
    avatar: "/images/manprofileimages/profilefrance.png",
    flag: "/images/flags/france.png"
  },
  {
    name: "James",
    country: "United Kingdom",
    comment:
      "We did a full-day north tour and a sunset boat cruise. Communication before and after booking was excellent.",
    avatar: "/images/manprofileimages/profileenglish.png",
    flag: "/images/flags/english.png"
  },
  {
    name: "Thabo",
    country: "South Africa",
    comment:
      "They helped us plan several days with a car, excursions and a boat trip. We always felt safe and informed.",
    avatar: "/images/manprofileimages/profileafrican.png",
    flag: "/images/flags/southafrica.png"
  },
  {
    name: "Arjun",
    country: "India",
    comment:
      "Great service, especially with WhatsApp updates. We appreciated the honest advice about which days were best for the lagoon.",
    avatar: "/images/manprofileimages/profileindia.png",
    flag: "/images/flags/india.png"
  },
  {
    name: "Wei",
    country: "Singapore",
    comment:
      "Responsive, organised and friendly. We combined a scooter rental with a boat trip and it worked perfectly with our schedule.",
    avatar: "/images/manprofileimages/profilesingapore.png",
    flag: "/images/flags/singapore.png"
  }
];

export function ReviewsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const current = reviews[index];

  return (
    <div className="space-y-4">
      {/* Row of small circular avatars */}
      <div className="flex flex-wrap gap-2">
        {reviews.map((review, i) => (
          <button
            key={review.name}
            type="button"
            onClick={() => setIndex(i)}
            className={`relative h-9 w-9 rounded-full border ${
              i === index
                ? "border-sky-400 shadow-sm"
                : "border-slate-200 opacity-70 hover:opacity-100"
            } overflow-hidden bg-slate-100`}
            aria-label={`Show review from ${review.name}`}
          >
            <Image
              src={review.avatar}
              alt={`Guest avatar – ${review.country}`}
              fill
              className="object-cover"
              sizes="36px"
            />
          </button>
        ))}
      </div>

      {/* Main review card */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-700">
        {/* Avatar + flag */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative h-14 w-14 rounded-full overflow-hidden border border-sky-200 bg-slate-100">
            <Image
              src={current.avatar}
              alt={`Guest from ${current.country}`}
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <div className="relative h-4 w-6 rounded-sm overflow-hidden border border-slate-300">
              <Image
                src={current.flag}
                alt={`${current.country} flag`}
                fill
                className="object-cover"
                sizes="24px"
              />
            </div>
            <span>{current.country}</span>
          </div>
          <div className="flex items-center gap-0.5 text-amber-400 text-[12px]">
            ★★★★★
          </div>
        </div>

        {/* Comment */}
        <div className="flex-1 space-y-2">
          <p className="text-[11px] text-slate-500 uppercase tracking-wide">
            Guest review
          </p>
          <p className="text-sm text-slate-800">&ldquo;{current.comment}&rdquo;</p>
          <p className="text-[11px] text-slate-500">
            {current.name} • {current.country}
          </p>
        </div>
      </div>
    </div>
  );
}
