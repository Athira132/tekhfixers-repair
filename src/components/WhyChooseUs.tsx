"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Clock,
  ShieldCheck,
  Truck,
  Award,
  Star,
  Users,
  Calendar,
} from "lucide-react";

// CountUp Component for premium stat counting animation
function CountUp({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * (end - startValue) + startValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="font-space font-extrabold text-5xl md:text-6xl text-white">
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 20000,
    suffix: "+",
    label: "Devices Repaired",
    icon: Users,
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
    icon: Calendar,
    color: "bg-emerald-500/10 text-emerald-400",
  },
  {
    value: 5,
    suffix: ".0",
    label: "Customer Rating",
    icon: Star,
    isFloat: true,
    color: "bg-amber-500/10 text-amber-400",
  },
];

const values = [
  {
    icon: Clock,
    title: "Same Day Repair",
    desc: "Most screen and battery replacements are completed in under 30 minutes while you wait.",
    glowColor: "group-hover:border-blue-500/30 group-hover:shadow-blue-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Warranty",
    desc: "We stand behind our work. All repairs are backed by our industry-leading lifetime warranty.",
    glowColor: "group-hover:border-emerald-500/30 group-hover:shadow-emerald-500/10",
  },
  {
    icon: Truck,
    title: "Pickup & Delivery",
    desc: "Can't make it to us? We'll pick up your device, repair it, and return it to your doorstep.",
    glowColor: "group-hover:border-purple-500/30 group-hover:shadow-purple-500/10",
  },
  {
    icon: Award,
    title: "Certified Technicians",
    desc: "Our technicians undergo rigorous training and certifications to repair the latest devices.",
    glowColor: "group-hover:border-rose-500/30 group-hover:shadow-rose-500/10",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 gradient-bg-dark relative overflow-hidden">
      {/* Decorative Blur Gradients */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Diagonal Curve Cuts */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] md:h-[100px] text-[#F7F8FB] fill-current"
        >
          <path d="M1200 120L0 120L0 0C300 80 900 80 1200 0L1200 120Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Title and Values Grid */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <span className="text-xs md:text-sm font-semibold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
                Why Choose Us
              </span>
              <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2">
                Uncompromising Quality <br />
                <span className="gradient-text-accent">For Every Device Repair</span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg max-w-xl">
                We combine industry-certified expertise, OEM-grade components, and lightning-fast turnaround times to deliver a first-class repair experience.
              </p>
            </div>

            {/* Core Values List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className={`group p-6 glass-card rounded-2xl border border-white/5 transition-all duration-300 hover:scale-[1.02] ${val.glowColor}`}
                  >
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-accent group-hover:text-navy text-accent">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <h3 className="font-space text-lg font-bold text-white mb-2">
                      {val.title}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-End Statistics Displays */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="p-8 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-between shadow-2xl relative overflow-hidden group hover:border-accent/30 transition-all duration-300"
                >
                  {/* Background Radial Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="space-y-1 relative z-10">
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={stat.isFloat ? 1.5 : 2}
                    />
                    <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                  <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center relative z-10 shadow-lg`}>
                    <Icon className="w-8 h-8 stroke-[2.2]" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Curve Cut bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] md:h-[100px] text-white fill-current"
        >
          <path d="M1200 120L0 120L0 0C300 80 900 80 1200 0L1200 120Z"></path>
        </svg>
      </div>
    </section>
  );
}
