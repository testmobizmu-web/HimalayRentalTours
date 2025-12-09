// app/layout.tsx
import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { MainHeader } from "@/components/layout/MainHeader";
import { Footer } from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "Himalay Rental Tours – Tours, Rentals & Boat Trips in Mauritius",
  description:
    "Premium tour operator in Mauritius offering scooter, motorcycle and car rentals, island excursions, catamaran and boat trips. Fast WhatsApp booking, lagoon vibes and friendly local service.",
  alternates: {
    canonical: "https://www.himalayrentaltours.mu/",
  },
  openGraph: {
    title: "Himalay Rental Tours – Tours, Rentals & Boat Trips in Mauritius",
    description:
      "Discover Mauritius with premium rentals, excursions and boat trips. Book instantly on WhatsApp with Himalay Rental Tours.",
    url: "https://www.himalayrentaltours.mu/",
    siteName: "Himalay Rental Tours",
    type: "website",
    locale: "en_MU",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-slate-900">
        <MainHeader />
        <main className="flex-1">
          {/* All pages wrapped here so bottom spacing is controlled globally */}
          <PageWrapper>{children}</PageWrapper>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

