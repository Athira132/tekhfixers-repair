import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import PremiumHeroBackground from "@/components/PremiumHeroBackground";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Reservation Desk | Phoenix Cruise Alappuzha, Kerala",
  description: "Contact Phoenix Cruise for luxury houseboat bookings in Alappuzha, Kerala. Reach out via call or WhatsApp for day cruises, overnight stays & group charters.",
  alternates: {
    canonical: "https://iphonix.in/contact",
  },
  openGraph: {
    title: "Contact & Reservation Desk | Phoenix Cruise Alappuzha, Kerala",
    description: "Contact Phoenix Cruise for luxury houseboat bookings in Alappuzha, Kerala.",
    url: "https://iphonix.in/contact",
    siteName: "Phoenix Cruise",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        
        <section className="relative py-28 md:py-36 overflow-hidden bg-[#06201B] text-white flex items-center justify-center text-center">
          <PremiumHeroBackground backgroundImage="https://i.ibb.co/v4FnnCRs/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4 md:space-y-6">
            <nav className="flex justify-center items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-300">Contact</span>
            </nav>

            <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Contact <span className="text-amber-400">Phoenix Cruise</span>
            </h1>
            
            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Connect with our Alappuzha reservation desk for instant houseboat bookings and itinerary customization.
            </p>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
