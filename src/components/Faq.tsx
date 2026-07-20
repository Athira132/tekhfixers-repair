"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Where does Phoenix Cruise board in Alappuzha?",
    a: "Our primary boarding jetty is located at Punnamada Lake, Alappuzha (Alleppey), Kerala. Detailed location pins and arrival instructions are sent to guests upon booking confirmation.",
  },
  {
    q: "What meals are included during house boat cruises?",
    a: "Depending on your package, cruises include welcome drinks, traditional Kerala banana-leaf lunch (featuring Pearl Spot / Karimeen fish fry, chicken/veg curry, and side dishes), evening tea with hot banana fritters, dinner, and morning breakfast.",
  },
  {
    q: "Are the houseboat bedrooms air-conditioned?",
    a: "Yes! All Phoenix Cruise bedrooms feature full air conditioning, private en-suite bathrooms, panoramic viewing windows, and comfortable queen-size beds.",
  },
  {
    q: "What safety equipment is available on board?",
    a: "Our vessels are certified by Kerala Maritime Board regulations, equipped with life jackets for all age groups, life buoys, fire extinguishers, first-aid kits, and operated by licensed captains.",
  },
  {
    q: "Can we customize the food menu for vegetarians or special diets?",
    a: "Absolutely! We cater to vegetarian, Jain, non-seafood, and gluten-free dietary requirements. Please specify your preference during reservation.",
  },
  {
    q: "What is the difference between a Day Cruise and an Overnight Stay?",
    a: "A Day Cruise runs from 11:30 AM to 5:30 PM with lunch and tea. An Overnight Stay runs for 21 hours (12:00 PM to 9:00 AM next day) including lunch, sunset anchorage, candlelit dinner, overnight air-conditioned room stay, and morning breakfast.",
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 md:py-32 bg-[#FAFBF8] border-t border-gray-200/60 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100/60 px-4 py-1.5 rounded-full">
            Help &amp; Information
          </span>
          <h2 className="font-space text-3xl sm:text-4xl font-extrabold text-[#06201B] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm max-w-lg mx-auto">
            Everything you need to know about booking, sailing, meals, and houseboat amenities.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200/60 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
              >
                <div className="flex items-center space-x-3">
                  <HelpCircle className="w-5 h-5 text-emerald-800 flex-shrink-0" />
                  <span className="font-space text-base font-bold text-[#06201B]">
                    {faq.q}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIdx === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-6 pt-1 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100 pl-14">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
