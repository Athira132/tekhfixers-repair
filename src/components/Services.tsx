"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Smartphone,
  Layers,
  BatteryCharging,
  Zap,
  Droplet,
  Camera,
  Cpu,
  Volume2,
  ArrowRight,
  Mic,
  Settings,
  Eye,
  Fingerprint,
  Database,
  Search,
} from "lucide-react";

const services = [
  {
    slug: "screen-replacement",
    icon: Layers,
    title: "Screen Replacement",
    desc: "OEM-grade glass replacements to resolve cracked, scratched, or shattered front glass modules.",
    color: "from-blue-500/10 to-indigo-500/10",
    iconColor: "text-blue-500",
  },
  {
    slug: "display-replacement",
    icon: Smartphone,
    title: "Display Replacement",
    desc: "Cracked or bleeding displays replaced with OEM-grade OLED & LCD panels in under 30 minutes.",
    color: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-500",
  },
  {
    slug: "battery-replacement",
    icon: BatteryCharging,
    title: "Battery Replacement",
    desc: "Restore your device's original battery life with premium, certified lithium-ion replacements.",
    color: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-500",
  },
  {
    slug: "charging-port-repair",
    icon: Zap,
    title: "Charging Port Repair",
    desc: "Fix connection issues, slow charging speeds, and loose ports with complete board repairs.",
    color: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-500",
  },
  {
    slug: "camera-repair",
    icon: Camera,
    title: "Camera Repair",
    desc: "Replace scratched lenses, broken sensors, and non-functioning focus systems on front and back cameras.",
    color: "from-rose-500/10 to-red-500/10",
    iconColor: "text-rose-500",
  },
  {
    slug: "speaker-repair",
    icon: Volume2,
    title: "Speaker Repair",
    desc: "Fix crackling sounds, quiet speakers, and broken audio modules for clear calls and media.",
    color: "from-yellow-500/10 to-amber-500/10",
    iconColor: "text-yellow-500",
  },
  {
    slug: "speaker-repair", // Map microphone to speaker repair page
    icon: Mic,
    title: "Microphone Repair",
    desc: "Resolve low caller volume, mic statics, and complete audio recording failures on your device.",
    color: "from-indigo-500/10 to-blue-500/10",
    iconColor: "text-indigo-500",
  },
  {
    slug: "motherboard-repair",
    icon: Cpu,
    title: "Motherboard Repair",
    desc: "Micro-soldering, chip level repairs, and custom diagnostic logic for complex boards.",
    color: "from-violet-500/10 to-purple-500/10",
    iconColor: "text-violet-500",
  },
  {
    slug: "water-damage-repair",
    icon: Droplet,
    title: "Water Damage Repair",
    desc: "Ultrasonic cleaning and moisture extraction to recover water-damaged components and data.",
    color: "from-sky-500/10 to-blue-500/10",
    iconColor: "text-sky-500",
  },
  {
    slug: "software-repair",
    icon: Settings,
    title: "Software Issues",
    desc: "Resolve boot loops, system crashes, storage blocks, and perform complete OS recovery.",
    color: "from-cyan-500/10 to-teal-500/10",
    iconColor: "text-cyan-500",
  },
  {
    slug: "face-id-repair",
    icon: Eye,
    title: "Face ID Repair",
    desc: "Repair biometric sensors, dot projectors, and true-depth camera logic safely.",
    color: "from-emerald-500/10 to-green-500/10",
    iconColor: "text-emerald-500",
  },
  {
    slug: "motherboard-repair", // Map touch IC to motherboard repair page
    icon: Fingerprint,
    title: "Touch IC Repair",
    desc: "Precision soldering to restore unresponsive touchscreen controllers and display chips.",
    color: "from-fuchsia-500/10 to-pink-500/10",
    iconColor: "text-fuchsia-500",
  },
  {
    slug: "data-recovery",
    icon: Database,
    title: "Data Recovery",
    desc: "Retrieve contacts, precious photos, and critical documents from bricked or broken devices.",
    color: "from-rose-500/10 to-orange-500/10",
    iconColor: "text-rose-500",
  },
  {
    slug: "", // Map generic diagnosis to booking form
    icon: Search,
    title: "Complete Device Diagnosis",
    desc: "Thorough multi-point sweep to identify hard-to-detect signal, sensor, or power leakage issues.",
    color: "from-neutral-500/10 to-slate-500/10",
    iconColor: "text-slate-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#F7F8FB] relative">
      {/* Decorative Background Blob */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-navy/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-xs md:text-sm font-semibold text-darkblue uppercase tracking-widest bg-darkblue/5 px-4 py-2 rounded-full">
            Our Services
          </span>
          <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight mt-2">
            Professional Repairs For <br />
            <span className="gradient-text-navy">Every Diagnostic Need</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            From cracked screens to advanced micro-soldering, our certified technicians use premium parts to restore your devices to factory condition.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const targetUrl = service.slug ? `/services/${service.slug}` : "/book";
            return (
              <motion.div
                key={`${service.title}-${index}`}
                variants={cardVariants}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-md shadow-gray-200/50 hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 hover:-translate-y-2 glow-card-navy overflow-hidden"
              >
                {/* Background Accent Gradient Card */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                {/* Card Icon Header */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 bg-[#F7F8FB] group-hover:bg-white rounded-2xl flex items-center justify-center shadow-inner transition-all duration-300">
                    <Icon className={`w-7 h-7 ${service.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                  </div>
                </div>

                {/* Card Body */}
                <h3 className="font-space text-xl font-bold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                  {service.desc}
                </p>

                {/* Link */}
                <Link
                  href={targetUrl}
                  className="inline-flex items-center text-xs font-bold text-navy group-hover:text-darkblue transition-colors duration-200"
                >
                  <span className="mr-2 uppercase tracking-wider">Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
