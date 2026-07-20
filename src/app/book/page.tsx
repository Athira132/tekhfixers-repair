import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import PremiumHeroBackground from "@/components/PremiumHeroBackground";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Houseboat Cruise | Phoenix Cruise Alappuzha, Kerala",
  description: "Reserve your luxury houseboat cruise in Alappuzha with Phoenix Cruise. Day trips, overnight stays, executive suites & authentic Kerala seafood meals.",
  alternates: {
    canonical: "https://iphonix.in/book",
  },
  openGraph: {
    title: "Book a Houseboat Cruise | Phoenix Cruise Alappuzha, Kerala",
    description: "Reserve your luxury houseboat cruise in Alappuzha with Phoenix Cruise.",
    url: "https://iphonix.in/book",
    siteName: "Phoenix Cruise",
  },
};

export default function BookRepairPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        
        <section className="relative py-28 md:py-36 overflow-hidden bg-[#06201B] text-white flex items-center justify-center text-center">
          <PremiumHeroBackground backgroundImage="https://i.ibb.co/XrBDdjpg/image.png" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4 md:space-y-6">
            <nav className="flex justify-center items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-300">Book Cruise</span>
            </nav>

            <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Book a <span className="text-amber-400">Cruise</span>
            </h1>
            
            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Reserve your dates for a peaceful backwater voyage in Alappuzha, Kerala.
            </p>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
