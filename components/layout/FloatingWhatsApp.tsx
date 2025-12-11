"use client";

import Image from "next/image";

const WHATSAPP_NUMBER = "+23057014922";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I would like to chat with Himalay Rental Tours about rentals, excursions or boat trips in Mauritius."
);

export default function FloatingWhatsApp() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER.replace(
    /[^0-9]/g,
    ""
  )}?text=${WHATSAPP_MESSAGE}`;

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-center gap-1">
      {/* Label above icon */}
      <div className="rounded-full bg-slate-900/80 text-[10px] px-2 py-1 text-white shadow-md">
        Chat with us
      </div>

      {/* WhatsApp icon button with gentle bounce */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Himalay Rental Tours on WhatsApp"
        className="relative h-14 w-14 rounded-full bg-white shadow-xl border border-emerald-300 flex items-center justify-center animate-bounce hover:animate-none hover:scale-[1.03] transition"
      >
        <Image
          src="/images/social/whatsapp.png"
          alt="WhatsApp icon"
          fill
          className="object-contain p-2"
          sizes="56px"
        />
        {/* subtle glow ring */}
        <span className="pointer-events-none absolute inset-0 rounded-full border border-emerald-400/60 ring-2 ring-emerald-300/40" />
      </a>
    </div>
  );
}

