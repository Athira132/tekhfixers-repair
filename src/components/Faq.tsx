"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does a screen replacement take?",
    a: "Most screen replacements are completed in under 30 minutes. You can relax in our premium lounge with free Wi-Fi and coffee while we perform the repair, or drop the device off and collect it at your convenience.",
  },
  {
    q: "What kind of warranty do you provide on repairs?",
    a: "We offer an industry-leading lifetime warranty on all replacement parts and labor. If the replaced component experiences any structural issues or performance bugs, we will replace it free of charge. Please note this does not cover physical drops or new liquid damage.",
  },
  {
    q: "Do you use original OEM parts?",
    a: "Yes, we use OEM-grade (Original Equipment Manufacturer) components that match original factory specifications, brightness, touch sensitivity, and durability. This ensures your device operates exactly as the manufacturer intended.",
  },
  {
    q: "Can you fix a device that fell in water?",
    a: "Yes, we have an 80% recovery rate for water-damaged devices. We perform a deep ultrasonic chemical bath to remove mineral deposits, followed by board-level baking and diagnostics. We advise that you do not power on or charge the device after it falls in liquid.",
  },
  {
    q: "How does the pickup and delivery service work?",
    a: "Simply choose the Pickup & Delivery option during booking. Our secure courier will collect the device from your address, transport it to our lab for repairs, and deliver it back to you fully tested. All collections are fully insured.",
  },
  {
    q: "Are my device contents and data secure?",
    a: "Absolutely. We adhere to strict privacy guidelines and do not access your personal folders. In almost all cases, your files, pictures, and contacts remain completely intact. We still recommend backing up your data regularly as a best practice.",
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F7F8FB] relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="text-xs md:text-sm font-semibold text-darkblue uppercase tracking-widest bg-darkblue/5 px-4 py-2 rounded-full">
            FAQ
          </span>
          <h2 className="font-space text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            Find answers to common questions about our device repairs, warranties, pricing, and services.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-darkblue shadow-lg shadow-navy/5"
                    : "border-gray-100 shadow-sm hover:border-gray-200"
                }`}
              >
                {/* Header Button */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 md:py-6 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-4 pr-4">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? "text-darkblue" : "text-gray-400"}`} />
                    <span className="font-space text-base md:text-lg font-bold text-navy">
                      {faq.q}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-full bg-gray-50 transition-transform duration-300 ${isOpen ? "rotate-180 bg-navy text-white" : "text-gray-400"}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Animated Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-gray-50 text-gray-500 text-sm md:text-base font-medium leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
