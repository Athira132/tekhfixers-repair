import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumHeroBackground from "@/components/PremiumHeroBackground";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Phoenix Cruise Alappuzha, Kerala",
  description: "Terms of Service for Phoenix Cruise houseboats in Alappuzha, Kerala. Review booking terms, check-in schedules, safety guidelines, and cancellation policies.",
  alternates: {
    canonical: "https://iphonix.in/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-white">
        <section className="relative py-28 md:py-36 overflow-hidden bg-[#06201B] text-white flex items-center justify-center text-center">
          <PremiumHeroBackground backgroundImage="https://i.ibb.co/XrBDdjpg/image.png" />
          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
            <nav className="flex justify-center items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-300">Terms of Service</span>
            </nav>
            <h1 className="font-space text-4xl sm:text-5xl font-extrabold tracking-tight">
              Terms of Service
            </h1>
            <p className="text-gray-300 text-sm max-w-lg mx-auto">
              Transparent guidelines governing houseboat bookings, cruise schedules, and onboard safety.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-600 text-sm leading-relaxed">
            <div className="space-y-3">
              <h2 className="font-space text-2xl font-bold text-[#06201B]">1. Houseboat Boarding &amp; Schedules</h2>
              <p>
                Houseboat check-in for overnight packages takes place at Punnamada Lake Jetty, Alappuzha at 12:00 PM with check-out at 9:00 AM the next morning. Day Cruise packages operate between 11:30 AM and 5:30 PM.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-space text-2xl font-bold text-[#06201B]">2. Port Regulations &amp; Safety</h2>
              <p>
                In accordance with Kerala Maritime Port Trust regulations, houseboats anchor safely between 5:30 PM and 6:00 AM to preserve night lake ecology and ensure guest safety. Air-conditioned bedrooms operate continuously during overnight anchorage.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-space text-2xl font-bold text-[#06201B]">3. Contact Information</h2>
              <p>
                For inquiries regarding terms, corporate charters, or reservation modifications, please reach Phoenix Cruise at{" "}
                <a href="tel:7306243424" className="text-[#06201B] font-bold underline">
                  +91 7306243424
                </a>{" "}
                or email{" "}
                <a href="mailto:phoenixcruisekerala@gmail.com" className="text-[#06201B] font-bold underline">
                  phoenixcruisekerala@gmail.com
                </a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
