"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Truck,
  ShieldAlert,
  Wrench,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: CalendarDays,
    title: "Book Repair",
    desc: "Schedule your repair online or call us to reserve a time slot that works best for you.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    step: "02",
    icon: Truck,
    title: "Device Pickup",
    desc: "Drop off your device or choose our secure pickup service. We cover all local areas.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    step: "03",
    icon: ShieldAlert,
    title: "Full Diagnosis",
    desc: "Certified techs run diagnostics to isolate issues and provide an upfront quote.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    step: "04",
    icon: Wrench,
    title: "Expert Repair",
    desc: "We replace broken parts with original components and micro-solder logic boards.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    step: "05",
    icon: Sparkles,
    title: "Fast Delivery",
    desc: "Your repaired, fully-tested device is returned with our lifetime warranty seal.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
    },
  },
};

export default function RepairProcess() {
  return (
    <section id="repairs" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28 space-y-4">
          <span className="text-xs md:text-sm font-semibold text-darkblue uppercase tracking-widest bg-darkblue/5 px-4 py-2 rounded-full">
            Our Process
          </span>
          <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight mt-2">
            How It Works: Our <br />
            <span className="gradient-text-navy">Streamlined Repair Path</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
            From scheduling your booking to receiving your pristine device back, we make repairs stress-free and fast.
          </p>
        </div>

        {/* Horizontal & Vertical Timeline Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 relative"
        >
          {/* Timeline Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-100 via-purple-100 to-accent/30 -z-10" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Circle Indicator & Icon */}
                <div className="relative mb-6">
                  {/* Step counter tag */}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-navy text-white text-[10px] font-bold flex items-center justify-center border border-white z-20 shadow-md">
                    {step.step}
                  </span>

                  {/* Outer Pulsing Glow (Active/Hover States) */}
                  <div className="absolute inset-0 rounded-full scale-100 group-hover:scale-120 bg-gray-100 group-hover:bg-accent/10 blur-md transition-all duration-300 -z-10" />

                  {/* Icon Circle */}
                  <div className={`w-20 h-20 rounded-full ${step.bg} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white relative z-10`}>
                    <Icon className={`w-8 h-8 ${step.color} transition-transform duration-300 group-hover:rotate-[15deg]`} />
                  </div>
                </div>

                {/* Arrow Connector between steps (Desktop Only) */}
                {index < 4 && (
                  <div className="hidden lg:block absolute top-[60px] -right-[15px] translate-x-1/2 text-gray-300 group-hover:text-accent transition-colors duration-300 -z-10">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}

                {/* Step Title & Details */}
                <div className="space-y-2 max-w-[220px]">
                  <h3 className="font-space text-lg font-bold text-navy group-hover:text-darkblue transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
