"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anjali Nair",
    location: "Trivandrum, Kerala",
    review: "The day cruise with Phoenix Cruise was an unforgettable experience for our family. The houseboat was pristine, and the Karimeen Pollichathu served on a fresh banana leaf was out of this world!",
  },
  {
    name: "Akhil Menon",
    location: "Kochi, Kerala",
    review: "Booked an overnight stay for our wedding anniversary. Watching the sunset over Lake Vembanad from the private upper deck while sipping hot tea was purely magical. 10/10 hospitality!",
  },
  {
    name: "Sreeram Krishnan",
    location: "Karamana, Trivandrum",
    review: "Exceptional service by Captain and the onboard chef. The glass-wall bedroom was spotless, AC was cool all night, and waking up to backwater lily lagoons was surreal.",
  },
  {
    name: "Meera Suresh",
    location: "Kozhikode, Kerala",
    review: "We reserved the executive suite for a family reunion. The food, safety standards, and peaceful canal navigation exceeded all our expectations. Highly recommended!",
  },
  {
    name: "Vishnu Prasad",
    location: "Thrissur, Kerala",
    review: "The sunset cruise was breathtaking. The boat moved gently, the refreshments were delicious, and the evening lights over the water made for incredible photos.",
  },
  {
    name: "Neha Nair",
    location: "Bengaluru, Karnataka",
    review: "Very professional booking process. Everything promised was delivered — clean linen, delicious Kerala sadhya, and a tranquil overnight anchorage.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-3">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100/60 px-4 py-1.5 rounded-full">
            Guest Testimonials
          </span>
          <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#06201B] tracking-tight">
            Guest Experiences
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Real stories from travelers who sailed through Kerala&apos;s backwaters with Phoenix Cruise.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-8 bg-[#FAFBF8] rounded-3xl border border-gray-200/60 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-emerald-800/20" />
                </div>

                <p className="text-gray-600 text-xs sm:text-sm italic leading-relaxed">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-space text-sm font-bold text-[#06201B]">{item.name}</h4>
                  <p className="text-[10px] font-semibold text-emerald-800 uppercase tracking-wider">{item.location}</p>
                </div>
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-full">
                  Verified Guest
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
