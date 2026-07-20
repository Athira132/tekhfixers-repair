"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import { cruisesData } from "@/data/cruisesData";

const cruisePackagesList = Object.values(cruisesData);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 15,
    },
  },
};

export default function Services() {
  return (
    <section id="cruises" className="py-24 md:py-32 bg-[#FAFBF8] relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Minimal Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-3">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100/60 px-4 py-1.5 rounded-full border border-emerald-200/50">
            Cruises &amp; Experiences
          </span>
          <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#06201B] tracking-tight">
            Kerala Backwater Packages
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Discover Alappuzha&apos;s finest houseboats, custom culinary experiences, and peaceful evening lagoon journeys.
          </p>
        </div>

        {/* Image-First Cruise Cards Grid (Spacious, Minimal Text, NO ICONS inside tags) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {cruisePackagesList.map((cruise) => (
            <motion.div
              key={cruise.slug}
              variants={cardVariants}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200/60 shadow-lg shadow-gray-200/40 hover:shadow-2xl hover:shadow-emerald-950/10 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Large Dominant Image Area */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#06201B]">
                <ImageWithFallback
                  src={cruise.image}
                  alt={cruise.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-[#06201B]/90 backdrop-blur-md px-3 py-1 rounded-full text-amber-300 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/30">
                  {cruise.duration}
                </div>
              </div>

              {/* Clean Content Area */}
              <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                
                <div className="space-y-3">
                  <h3 className="font-space text-xl font-bold text-[#06201B] group-hover:text-emerald-800 transition-colors">
                    {cruise.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal">
                    {cruise.shortDesc}
                  </p>
                </div>

                {/* Clean Feature Tags (NO ICONS inside tags per design requirement) */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cruise.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-emerald-50 text-emerald-900 border border-emerald-200/60 text-[10px] font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/services/${cruise.slug}`}
                    className="inline-flex items-center text-xs font-bold text-[#06201B] group-hover:text-emerald-700 transition-colors duration-200"
                  >
                    <span className="mr-2 uppercase tracking-wider">Explore Package</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/50">
                    Alappuzha
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
