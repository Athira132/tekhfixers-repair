import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import RepairProcess from "@/components/RepairProcess";
import WhyChooseUs from "@/components/WhyChooseUs";
import PremiumHeroBackground from "@/components/PremiumHeroBackground";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Phoenix Cruise | Luxury Houseboat Cruises in Alappuzha, Kerala",
  description: "Learn about Phoenix Cruise, Alappuzha's premier luxury houseboat operator offering day cruises, overnight stays, and authentic Kerala dining.",
  alternates: {
    canonical: "https://iphonix.in/about",
  },
  openGraph: {
    title: "About Phoenix Cruise | Luxury Houseboat Cruises in Alappuzha, Kerala",
    description: "Learn about Phoenix Cruise, Alappuzha's premier luxury houseboat operator.",
    url: "https://iphonix.in/about",
    siteName: "Phoenix Cruise",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        
        {/* About Hero */}
        <section className="relative py-28 md:py-36 overflow-hidden bg-[#06201B] text-white flex items-center justify-center text-center">
          <PremiumHeroBackground backgroundImage="https://i.ibb.co/v4FnnCRs/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4 md:space-y-6">
            <nav className="flex justify-center items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-300">About</span>
            </nav>

            <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              About <span className="text-amber-400">Phoenix Cruise</span>
            </h1>
            
            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Crafting unforgettable backwater memories in Alappuzha, Kerala with luxury houseboats and authentic hospitality.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100/60 px-4 py-1.5 rounded-full">
                  Our Legacy
                </span>
                <h2 className="font-space text-3xl sm:text-4xl font-extrabold text-[#06201B]">
                  Pioneering Backwater Tourism <br />
                  <span className="text-emerald-800">In Alappuzha, Kerala</span>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Phoenix Cruise was established to share the timeless magic of Kerala&apos;s lagoons with travelers from around the globe. Combining traditional wooden Kettuvalam craftsmanship with modern air-conditioned luxury suites, we provide an unparalleled floating resort experience.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our fleet is operated by licensed local captains, experienced chefs, and hospitality staff dedicated to safety, sustainability, and authentic Kerala culture.
                </p>
                
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                  <div>
                    <h3 className="font-space text-3xl font-extrabold text-[#06201B]">15k+</h3>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Happy Guests</p>
                  </div>
                  <div>
                    <h3 className="font-space text-3xl font-extrabold text-[#06201B]">100%</h3>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Safety Record</p>
                  </div>
                  <div>
                    <h3 className="font-space text-3xl font-extrabold text-[#06201B]">5.0</h3>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Star Rating</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-8 bg-[#FAFBF8] rounded-3xl border border-gray-200/60 space-y-3">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100/80 px-2.5 py-1 rounded-full inline-block">
                    Our Mission
                  </span>
                  <h3 className="font-space text-lg font-bold text-[#06201B]">Authentic Kerala Hospitality</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    To offer peaceful, eco-friendly backwater voyages featuring fresh organic cuisine, luxury accommodations, and genuine local warmth.
                  </p>
                </div>
                
                <div className="p-8 bg-[#06201B] text-white rounded-3xl border border-emerald-800/40 space-y-3 shadow-xl">
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-500/30 inline-block">
                    Our Guarantee
                  </span>
                  <h3 className="font-space text-lg font-bold text-white">Unmatched Backwater Luxury</h3>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    Every Phoenix Cruise vessel undergoes routine safety audits, life-jacket inspections, and deep sanitization before every voyage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <RepairProcess />
        <Testimonials />
        <Faq />

        {/* Contact Banner */}
        <section className="py-16 bg-[#FAFBF8] border-t border-gray-200/60 relative">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <h2 className="font-space text-2xl md:text-3xl font-extrabold text-[#06201B]">
              Have Questions About Booking a Cruise?
            </h2>
            <p className="text-gray-600 text-sm max-w-lg mx-auto leading-relaxed">
              Our reservation team in Alappuzha is available to assist you with custom itineraries, group rates, and menu choices.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-[#06201B] hover:bg-[#041613] text-amber-400 font-bold rounded-xl transition-all duration-200 shadow-lg"
              >
                <span>Contact Phoenix Cruise Reservation Desk</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
