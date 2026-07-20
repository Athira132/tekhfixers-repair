"use client";

import ImageWithFallback from "@/components/ImageWithFallback";
import { motion } from "framer-motion";

const fleetFeatures = [
  {
    title: "Alappuzha Canals",
    subtitle: "Village Waterways",
    image: "https://i.ibb.co/krcscFQ/image.png",
  },
  {
    title: "Vembanad Lake",
    subtitle: "Open Water Sailing",
    image: "https://i.ibb.co/v4FnnCRs/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
  },
  {
    title: "Kuttanad Lagoons",
    subtitle: "Paddy Field Vistas",
    image: "https://i.ibb.co/XrBDdjpg/image.png",
  },
  {
    title: "Traditional Dining",
    subtitle: "Onboard Kerala Chefs",
    image: "https://i.ibb.co/7Jg6tygh/image.png",
  },
];

export default function Brands() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100/60 px-4 py-1.5 rounded-full">
            Backwater Destinations
          </span>
          <h2 className="font-space text-2xl sm:text-3xl font-extrabold text-[#06201B]">
            Explore Kerala&apos;s Iconic Waterways
          </h2>
        </div>

        {/* Clean Visual Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {fleetFeatures.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-[#06201B]"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06201B]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 text-white space-y-0.5">
                <h4 className="font-space text-sm font-bold text-white">{item.title}</h4>
                <p className="text-[10px] text-amber-300 font-semibold uppercase tracking-wider">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
