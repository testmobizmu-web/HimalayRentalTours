"use client";

import { useState, FormEvent } from "react";

const WHATSAPP_NUMBER = "+23057581799";

export function BookingForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [bookingType, setBookingType] = useState("Scooter / Motorbike Rental");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const baseText = `New booking request from Himalay Rental Tours website:

Full name: ${fullName}
WhatsApp / Phone: ${phone}
Booking type: ${bookingType}
Date: ${date}

Message:
${message}`;

    const encoded = encodeURIComponent(baseText);
    const waLink = `https://wa.me/${WHATSAPP_NUMBER.replace(
      /[^0-9]/g,
      ""
    )}?text=${encoded}`;

    window.open(waLink, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 text-xs text-slate-700"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="block text-[11px] font-semibold text-slate-800">
            Full name
          </label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-[11px] font-semibold text-slate-800">
            WhatsApp / Phone number
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="block text-[11px] font-semibold text-slate-800">
            Booking type
          </label>
          <select
            value={bookingType}
            onChange={(e) => setBookingType(e.target.value)}
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200"
          >
            <option>Scooter / Motorbike Rental</option>
            <option>Car Rental</option>
            <option>Excursion &amp; Island Tour</option>
            <option>Catamaran &amp; Boat Trip</option>
            <option>Airport Transfer</option>
            <option>Other request</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="block text-[11px] font-semibold text-slate-800">
            Date
          </label>
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="block text-[11px] font-semibold text-slate-800">
          Short message
        </label>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Number of people, hotel/villa, preferred time, etc."
          className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-[11px] text-slate-500">
          Your request will open directly in WhatsApp with all details filled
          in. You can still edit the message before sending.
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 px-5 py-2 text-[11px] font-semibold text-white shadow-sm hover:opacity-90 transition"
        >
          Send booking via WhatsApp
        </button>
      </div>
    </form>
  );
}
