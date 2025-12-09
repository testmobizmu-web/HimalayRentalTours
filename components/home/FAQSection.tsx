"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Do I need a driving licence to rent a scooter or car?",
    answer:
      "Yes. You need a valid driving licence (local or international). We may ask for a copy of your licence and passport/ID when confirming the booking."
  },
  {
    question: "Can you deliver the scooter or car to my hotel or villa?",
    answer:
      "In many areas we can arrange delivery or meet at a nearby location. When you send your WhatsApp request, please share where you stay so we can confirm."
  },
  {
    question: "Are helmets included with scooter or motorbike rentals?",
    answer:
      "Yes, helmets for rider and passenger are included. We strongly recommend wearing them at all times on Mauritius roads."
  },
  {
    question: "Do you offer airport transfers?",
    answer:
      "Yes, we can arrange airport pick-ups and drop-offs as a separate service or as part of a package with rentals or excursions."
  },
  {
    question: "What happens if the weather is bad for a boat trip?",
    answer:
      "Safety comes first. If sea or weather conditions are not safe, the skipper or operator may reschedule or cancel the trip. We will inform you as early as possible."
  },
  {
    question: "Are excursions private or shared?",
    answer:
      "It depends on the excursion and your budget. We can propose both private tours and shared options. Just mention your preference when you contact us."
  },
  {
    question: "Can children join the excursions and boat trips?",
    answer:
      "Yes, children are welcome on many excursions and boat trips. Please tell us the ages of the children so we can suggest the most suitable options."
  },
  {
    question: "When should I book – before arriving or on the spot?",
    answer:
      "You can book before your trip or once you are in Mauritius. However, for peak seasons or specific dates, it is better to reserve earlier to secure availability."
  },
  {
    question: "How do I confirm my booking?",
    answer:
      "Once you are happy with the plan and price, we will confirm by WhatsApp. For some services, a small deposit may be required, which will be clearly explained."
  },
  {
    question: "Can you help us plan several days of activities?",
    answer:
      "Yes. Tell us how many days you stay, your interests and your budget. We can suggest a combination of rentals, excursions and boat trips adapted to your holiday."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {faqs.map((item, index) => (
        <div
          key={item.question}
          className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2"
        >
          <button
            type="button"
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between gap-3 text-left"
          >
            <span className="text-[13px] font-semibold text-slate-900">
              {item.question}
            </span>
            <span className="text-xs text-slate-500">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[11px] text-slate-600">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
