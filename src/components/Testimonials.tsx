"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";

const testimonials = [
  {
    name: "Anjali Nair",
    device: "iPhone 14 Pro Screen Repair (Trivandrum)",
    rating: 5,
    text: "Excellent doorstep service in Trivandrum. My iPhone screen was shattered, and they replaced it in 20 minutes at my office. Highly professional and very convenient!",
    img: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Akhil Menon",
    device: "Samsung S23 Ultra Board Repair (Kochi)",
    rating: 5,
    text: "Highly recommended! Other shops told me my Samsung motherboard was unfixable. iPhonix repaired it at the chip level and recovered all my photos. Great job!",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Meera Suresh",
    device: "Google Pixel 8 Battery Swap (Karamana)",
    rating: 5,
    text: "The doorstep pickup and delivery in Karamana was very prompt. They swapped my Pixel battery and resolved the rapid drainage issue on the same day. Extremely satisfied.",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Vishnu Prasad",
    device: "OnePlus 11 Charging Issue (Kozhikode)",
    rating: 5,
    text: "Professional service at a reasonable price. The technician repaired my loose charging connector quickly and explained the repair step-by-step. Excellent work!",
    img: "https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?auto=format&fit=crop&q=80&w=150",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000);
  }, [handleNext]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current, resetTimer]);

  // Animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section id="reviews" className="py-24 md:py-32 gradient-bg-dark relative overflow-hidden">
      {/* Background Layered Gradients */}
      <div className="absolute top-1/3 left-1/10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] md:h-[100px] text-white fill-current"
        >
          <path d="M1200 120L0 120L0 0C300 80 900 80 1200 0L1200 120Z"></path>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs md:text-sm font-semibold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
            Reviews
          </span>
          <h2 className="font-space text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            What Our Customers Say
          </h2>
        </div>

        {/* Carousel Slider Panel */}
        <div className="relative min-h-[380px] sm:min-h-[320px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full glass-card rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col sm:flex-row gap-8 items-center relative"
            >
              {/* Quote Mark Decoration */}
              <Quote className="absolute top-6 right-8 w-16 h-16 text-white/5 pointer-events-none stroke-[1.5]" />

              {/* Customer Photo Column */}
              <div className="flex-shrink-0 text-center sm:text-left">
                <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-accent to-blue-500 shadow-xl shadow-accent/10 mx-auto sm:mx-0 overflow-hidden flex items-center justify-center">
                  <ImageWithFallback
                    src={testimonials[current].img}
                    alt={testimonials[current].name}
                    width={88}
                    height={88}
                    className="rounded-full object-cover border-2 border-navy"
                  />
                </div>
                <div className="mt-4 flex justify-center sm:justify-start space-x-1">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>

              {/* Text Column */}
              <div className="flex-1 space-y-4 text-center sm:text-left">
                <p className="text-gray-200 text-base sm:text-lg italic font-medium leading-relaxed">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="space-y-0.5">
                  <h3 className="font-space text-xl font-bold text-white">
                    {testimonials[current].name}
                  </h3>
                  <p className="text-accent text-xs font-bold uppercase tracking-wider">
                    {testimonials[current].device}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Control Bar */}
        <div className="flex items-center justify-between mt-8">
          {/* Bullet indicators */}
          <div className="flex space-x-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-accent" : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Nav arrow buttons */}
          <div className="flex space-x-3">
            <button
              onClick={handlePrev}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-colors"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-colors"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] md:h-[100px] text-[#F7F8FB] fill-current"
        >
          <path d="M1200 120L0 120L0 0C300 80 900 80 1200 0L1200 120Z"></path>
        </svg>
      </div>
    </section>
  );
}
