"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cruiseSteps = [
  {
    step: "01",
    title: "Select Package & Timing",
    desc: "Choose between Day Cruises, Luxury Overnight Stays, or Sunset Specials according to your travel plans.",
  },
  {
    step: "02",
    title: "Instant Booking Confirmation",
    desc: "Lock in your preferred dates with our quick online booking form or direct WhatsApp concierge.",
  },
  {
    step: "03",
    title: "Alappuzha Jetty Welcome",
    desc: "Arrive at Punnamada Lake jetty, receive a traditional tender coconut welcome drink, and board.",
  },
  {
    step: "04",
    title: "Unwind & Cruise Serenely",
    desc: "Relax on the upper deck as our crew navigates calm lagoons, serving fresh seafood & hot tea.",
  },
];

export default function RepairProcess() {
  return (
    <section className="py-24 md:py-32 bg-[#06201B] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-3">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-widest bg-emerald-950 px-4 py-1.5 rounded-full border border-emerald-500/30">
            How It Works
          </span>
          <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Your Backwater Journey
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            4 simple steps from reservation to sailing across Alappuzha&apos;s emerald lagoons.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cruiseSteps.map((item) => (
            <div
              key={item.step}
              className="p-8 bg-emerald-950/60 rounded-3xl border border-emerald-800/40 space-y-4 flex flex-col justify-between hover:border-amber-400/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-space text-3xl font-black text-amber-400">{item.step}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-900/80 px-2.5 py-1 rounded-full border border-emerald-600/30">
                  Easy Booking
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-space text-lg font-bold text-white">{item.title}</h3>
                <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/book"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-[#06201B] font-bold rounded-xl shadow-xl shadow-amber-400/20 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>Book Your Cruise Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
