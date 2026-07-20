"use client";

import { motion } from "framer-motion";
import ImageWithFallback from "@/components/ImageWithFallback";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const whyUsPoints = [
  {
    title: "Licensed Local Captains & Crew",
    desc: "Decades of backwater navigation experience navigating narrow canals and open lakes safely.",
    tag: "Certified Crew",
  },
  {
    title: "Onboard Gourmet Kerala Chefs",
    desc: "Fresh Karimeen fish fry, tiger prawns, and traditional vegetarian banana-leaf sadhya cooked live.",
    tag: "Fresh Cuisine",
  },
  {
    title: "Glass-Wall Luxury Bedroom Suites",
    desc: "Air-conditioned bedrooms featuring full panoramic views of the water from your private bed.",
    tag: "Panoramic Comfort",
  },
  {
    title: "100% Safety & Environmental Compliance",
    desc: "Fully equipped with life jackets, fire safety systems, and eco-friendly silent engines.",
    tag: "Safety First",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image-First Showcase */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 shadow-2xl group bg-[#06201B]">
              <ImageWithFallback
                src="https://i.ibb.co/gbts7Rrj/image.png"
                alt="Phoenix Cruise Houseboat Interior & Deck"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06201B]/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30 inline-block">
                  Luxury Backwater Interior
                </span>
                <h3 className="font-space text-xl font-bold text-white">
                  Designed for Ultimate Backwater Comfort
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Features (No icon clutter) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100/60 px-4 py-1.5 rounded-full">
                The Phoenix Difference
              </span>
              <h2 className="font-space text-3xl sm:text-4xl font-extrabold text-[#06201B] tracking-tight">
                Why Travel With Phoenix Cruise?
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We combine traditional Kettuvalam craftsmanship with modern luxury, personalized dining, and strict safety standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyUsPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#FAFBF8] rounded-2xl border border-gray-200/60 space-y-3 hover:border-emerald-300 transition-colors"
                >
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100/80 px-2.5 py-1 rounded-full inline-block">
                    {item.tag}
                  </span>
                  <h4 className="font-space text-base font-bold text-[#06201B]">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center text-xs font-bold text-[#06201B] hover:text-emerald-700 uppercase tracking-wider transition-colors"
              >
                <span className="mr-2">Learn More About Phoenix Cruise</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
