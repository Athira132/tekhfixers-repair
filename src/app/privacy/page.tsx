import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumHeroBackground from "@/components/PremiumHeroBackground";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Phoenix Cruise Alappuzha, Kerala",
  description: "Privacy Policy for Phoenix Cruise. Learn how we protect guest information, reservation records, and privacy during houseboat cruises in Alappuzha, Kerala.",
  alternates: {
    canonical: "https://iphonix.in/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-white">
        <section className="relative py-28 md:py-36 overflow-hidden bg-[#06201B] text-white flex items-center justify-center text-center">
          <PremiumHeroBackground backgroundImage="https://i.ibb.co/v4FnnCRs/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg" />
          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
            <nav className="flex justify-center items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-300">Privacy Policy</span>
            </nav>
            <h1 className="font-space text-4xl sm:text-5xl font-extrabold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-sm max-w-lg mx-auto">
              Your guest privacy and personal data protection are fundamental to our houseboat hospitality.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-600 text-sm leading-relaxed">
            <div className="space-y-3">
              <h2 className="font-space text-2xl font-bold text-[#06201B]">1. Information Collection</h2>
              <p>
                When you reserve a houseboat package with Phoenix Cruise, we collect guest details including full names, contact phone numbers, email addresses, travel dates, guest counts, and special dietary requests. This information is used solely to manage your reservation, onboard catering, and captain dispatch.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-space text-2xl font-bold text-[#06201B]">2. Guest Confidentiality</h2>
              <p>
                Phoenix Cruise respects customer privacy and does not sell, trade, or share your contact details with external third-party advertisers. Your information is retained securely for booking verification and port safety manifests.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-space text-2xl font-bold text-[#06201B]">3. Contact &amp; Reservations Desk</h2>
              <p>
                For questions regarding privacy practices or active houseboat reservations, please contact us at{" "}
                <a href="mailto:phoenixcruisekerala@gmail.com" className="text-[#06201B] font-bold underline">
                  phoenixcruisekerala@gmail.com
                </a>{" "}
                or call{" "}
                <a href="tel:7306243424" className="text-[#06201B] font-bold underline">
                  +91 7306243424
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
