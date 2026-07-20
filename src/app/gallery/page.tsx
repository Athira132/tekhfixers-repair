import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import PremiumHeroBackground from "@/components/PremiumHeroBackground";
import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import { ArrowRight, Compass, Phone, MessageSquare } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Houseboat Photo & Video Gallery | Phoenix Cruise Alappuzha",
  description: "Explore the Phoenix Cruise photo and video gallery. View our luxury houseboat interiors, Kerala cuisine, sunset lagoons, and backwater scenery in Alappuzha.",
  alternates: {
    canonical: "https://iphonix.in/gallery",
  },
  openGraph: {
    title: "Houseboat Photo & Video Gallery | Phoenix Cruise Alappuzha",
    description: "Explore the Phoenix Cruise photo and video gallery. View our luxury houseboat interiors, Kerala cuisine, sunset lagoons, and backwater scenery.",
    url: "https://iphonix.in/gallery",
    siteName: "Phoenix Cruise",
  },
};

const newExperiencePhotos = [
  {
    src: "https://i.ibb.co/gbts7Rrj/image.png",
    title: "Air-conditioned Master Suite with Panoramic Lagoon Window",
    tag: "Luxury Interior",
  },
  {
    src: "https://i.ibb.co/7Jg6tygh/image.png",
    title: "Authentic Karimeen & Traditional Kerala Seafood Feast",
    tag: "Onboard Dining",
  },
  {
    src: "https://i.ibb.co/krcscFQ/image.png",
    title: "Cruising Through Serene Canals during Sunset",
    tag: "Scenic Voyage",
  },
  {
    src: "https://i.ibb.co/XrBDdjpg/image.png",
    title: "Overnight Anchorage under Starry Skies in Lake Vembanad",
    tag: "Overnight Stay",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        
        {/* Premium Gallery Hero Banner */}
        <section className="relative py-28 md:py-36 overflow-hidden bg-[#06201B] text-white flex items-center justify-center text-center">
          <PremiumHeroBackground backgroundImage="https://i.ibb.co/v4FnnCRs/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4 md:space-y-6">
            <nav className="flex justify-center items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-300">Gallery</span>
            </nav>

            <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Phoenix Cruise <span className="text-amber-400">Gallery</span>
            </h1>
            
            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Experience the tranquility of Kerala backwaters through our curated visual collection.
            </p>
          </div>
        </section>

        {/* Section 1: Main Interactive Photo & Video Gallery */}
        <Gallery />

        {/* Section 2: Featured New Experience Showcase Grid */}
        <section className="py-24 bg-[#FAFBF8] border-t border-gray-200/60">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100/60 px-4 py-1.5 rounded-full">
                Boat &amp; Dining Highlights
              </span>
              <h2 className="font-space text-3xl sm:text-4xl font-extrabold text-[#06201B] tracking-tight">
                Moments On Board
              </h2>
              <p className="text-gray-600 text-sm max-w-lg mx-auto">
                Explore real moments captured across our fleet, bedrooms, and dining decks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {newExperiencePhotos.map((item, index) => (
                <div
                  key={index}
                  className="group relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border border-gray-200/80 bg-[#06201B]"
                >
                  <ImageWithFallback
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06201B]/90 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="px-3 py-1 bg-emerald-950/80 backdrop-blur-md rounded-full text-[10px] font-bold text-amber-300 uppercase tracking-wider border border-emerald-500/30 inline-block">
                      {item.tag}
                    </span>
                    <h3 className="font-space text-lg sm:text-xl font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Contact Banner */}
        <section className="py-20 bg-[#06201B] text-white relative">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <h2 className="font-space text-3xl sm:text-4xl font-extrabold">
              Ready for Your Backwater Adventure?
            </h2>
            <p className="text-gray-300 text-sm max-w-lg mx-auto leading-relaxed">
              Book online or call our Alappuzha reservation desk to customize your cruise itinerary.
            </p>
            <div className="flex justify-center space-x-4 pt-2">
              <Link
                href="/book"
                className="px-8 py-3.5 bg-amber-400 hover:bg-amber-500 text-[#06201B] font-bold rounded-xl shadow-lg transition-all duration-200"
              >
                Book a Houseboat
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
