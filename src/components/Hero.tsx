"use client";

import { motion } from "framer-motion";
import { Compass, Calendar, Phone, ArrowRight } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";
import Link from "next/link";

export default function Hero() {
  const scrollToCruises = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#cruises")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-16 md:pb-24 flex items-center justify-center bg-[#06201B] text-white overflow-hidden"
    >
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-emerald-800/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[45rem] h-[45rem] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Minimal Clean Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 space-y-6 text-left"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-400/30 text-amber-300">
            <Compass className="w-4 h-4 text-amber-400 animate-spin-slow" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Alappuzha Backwaters, Kerala
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="font-space text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
              Phoenix Cruise
            </h1>
            <p className="text-amber-400 text-lg sm:text-xl md:text-2xl font-bold font-space tracking-wide uppercase">
              Kerala Houseboat &amp; Luxury Backwater Cruises
            </p>
          </div>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-lg font-normal leading-relaxed">
            Sail through serene lagoons, palm-fringed canals, and peaceful lakes aboard our luxury houseboats with authentic Kerala cuisine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#cruises"
              onClick={scrollToCruises}
              className="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-[#06201B] font-bold rounded-xl text-center transition-all duration-300 shadow-xl shadow-amber-400/20 hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
            >
              <span>Explore Cruises</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/book"
              className="px-8 py-4 bg-emerald-950/80 hover:bg-emerald-900/80 text-white font-bold rounded-xl text-center transition-all duration-300 border border-emerald-700/40 flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5 text-amber-400" />
              <span>Book Houseboat</span>
            </Link>

            <a
              href="tel:7306243424"
              className="px-6 py-4 border border-white/20 hover:border-amber-400 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>7306243424</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Full-Width Prominent Houseboat Image Showcase (COMPLETE BOAT FULLY VISIBLE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-6 flex justify-center items-center"
        >
          <div className="relative w-full aspect-[16/11] max-w-[640px] rounded-3xl overflow-hidden border-2 border-emerald-500/20 shadow-2xl shadow-black/60 group bg-[#041613]">
            {/* The Boat Image - Displayed with full containment & crisp fitting so the complete boat remains 100% visible */}
            <ImageWithFallback
              src="https://i.ibb.co/v4FnnCRs/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg"
              alt="Phoenix Cruise Luxury Kerala Houseboat"
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />
            {/* Subtle Gradient Vignette at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06201B]/70 via-transparent to-transparent pointer-events-none" />
            
            {/* Clean Floating Tag at bottom left */}
            <div className="absolute bottom-6 left-6 z-10 bg-[#06201B]/85 backdrop-blur-md px-4 py-2 rounded-2xl border border-emerald-500/30 text-white flex items-center space-x-3 shadow-lg">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <div className="flex flex-col">
                <span className="font-space text-xs font-bold text-white">Phoenix Cruise Fleet</span>
                <span className="text-[10px] text-amber-300 font-semibold">Alappuzha, Kerala</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
