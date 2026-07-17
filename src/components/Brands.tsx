"use client";

import { motion } from "framer-motion";

const brands = [
  {
    name: "Apple iPhone",
    description: "iPhone 12, 13, 14, 15, 16 Pro Max repairs",
    accent: "group-hover:border-neutral-400 group-hover:shadow-neutral-500/5",
    logo: (
      <svg className="w-12 h-12 text-black fill-current" viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94 1.07.08 2.15-.52 2.81-1.33z" />
      </svg>
    ),
  },
  {
    name: "Samsung",
    description: "Galaxy S, Note, A, Fold & Flip repairs",
    accent: "group-hover:border-blue-500/30 group-hover:shadow-blue-500/5",
    logo: (
      <div className="bg-[#072A57] text-white font-space font-extrabold px-5 py-2.5 rounded-full text-base tracking-widest border border-white/10 uppercase shadow-md">
        SAMSUNG
      </div>
    ),
  },
  {
    name: "OnePlus",
    description: "OnePlus Nord, Pro & Ace repairs",
    accent: "group-hover:border-red-600/30 group-hover:shadow-red-600/5",
    logo: (
      <div className="flex items-center space-x-1.5 font-space font-extrabold text-red-600 text-3xl tracking-tighter">
        <span className="border-4 border-red-600 px-1 rounded-sm">1</span>
        <span className="text-2xl font-bold">+</span>
      </div>
    ),
  },
  {
    name: "Google Pixel",
    description: "Pixel 6, 7, 8, 9 & Fold repairs",
    accent: "group-hover:border-red-500/30 group-hover:shadow-red-500/5",
    logo: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <path
          d="M12.24 10.285h9.45c.165.57.255 1.185.255 1.86 0 2.58-.705 4.755-1.935 6.36C18.27 20.22 15.54 21.2 12.24 21.2c-5.085 0-9.24-4.155-9.24-9.2s4.155-9.2 9.24-9.2c2.475 0 4.545.915 6.135 2.4l-2.475 2.475c-.675-.645-1.86-1.395-3.66-1.395-3.15 0-5.715 2.61-5.715 5.82s2.565 5.82 5.715 5.82c3.645 0 5.01-2.61 5.235-3.96h-5.235v-3.175z"
          fill="#4285F4"
        />
      </svg>
    ),
  },
  {
    name: "Nothing",
    description: "Phone (1), Phone (2), CMF repairs",
    accent: "group-hover:border-neutral-500/30 group-hover:shadow-neutral-500/5",
    logo: (
      <div className="font-space text-navy text-xs font-black tracking-[0.4em] uppercase border-y border-navy/20 py-2 px-1">
        NOTHING
      </div>
    ),
  },
  {
    name: "Motorola",
    description: "Edge, Moto G, Razr flip repairs",
    accent: "group-hover:border-cyan-500/30 group-hover:shadow-cyan-500/5",
    logo: (
      <svg className="w-12 h-12 text-cyan-600 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3.5-5.5l1.5-4 2 2.5 2-2.5 1.5 4-1.5.5-1-2.5-1 1.5-1-1.5-1 2.5-1.5-.5z" />
      </svg>
    ),
  },
  {
    name: "Redmi",
    description: "Redmi, Redmi Note & K-series repairs",
    accent: "group-hover:border-orange-500/30 group-hover:shadow-orange-500/5",
    logo: (
      <div className="font-space font-black text-[#FF6700] text-2xl tracking-tighter">
        Redmi
      </div>
    ),
  },
  {
    name: "Oppo",
    description: "Find, Reno, A-series smartphone repairs",
    accent: "group-hover:border-emerald-500/30 group-hover:shadow-emerald-500/5",
    logo: (
      <div className="font-space font-bold text-emerald-600 text-3xl tracking-tight">
        OPPO
      </div>
    ),
  },
  {
    name: "Vivo",
    description: "X-series, V-series & Y-series repairs",
    accent: "group-hover:border-blue-500/30 group-hover:shadow-blue-500/5",
    logo: (
      <div className="font-space font-black text-blue-600 text-3xl tracking-tight italic">
        vivo
      </div>
    ),
  },
  {
    name: "Realme",
    description: "Realme GT, Narzo, C-series repairs",
    accent: "group-hover:border-yellow-500/30 group-hover:shadow-yellow-500/5",
    logo: (
      <div className="font-space font-black text-navy text-xl tracking-tight flex items-center">
        realme<span className="w-2.5 h-2.5 rounded-full bg-yellow-400 ml-1" />
      </div>
    ),
  },
  {
    name: "Nokia",
    description: "Nokia G-series, C-series & classic repairs",
    accent: "group-hover:border-blue-800/30 group-hover:shadow-blue-800/5",
    logo: (
      <div className="font-space font-black text-blue-800 text-2xl tracking-widest uppercase">
        NOKIA
      </div>
    ),
  },
  {
    name: "iQOO",
    description: "iQOO Neo, Z-series & flagship repairs",
    accent: "group-hover:border-yellow-600/30 group-hover:shadow-yellow-600/5",
    logo: (
      <div className="font-space font-black text-black text-3xl tracking-tight italic bg-yellow-400 px-4 py-1.5 rounded-xl shadow-sm">
        iQOO
      </div>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Brands() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F8FB] border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs md:text-sm font-semibold text-darkblue uppercase tracking-widest bg-darkblue/5 px-4 py-2 rounded-full">
            Supported Brands
          </span>
          <h2 className="font-space text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mt-2">
            We Repair All Major Brands
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto">
            Our certified specialists have brand-specific training and diagnostic tools to service any device type.
          </p>
        </div>

        {/* Brands Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {brands.map((brand) => {
            return (
              <motion.div
                key={brand.name}
                variants={cardVariants}
                className={`group p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 flex flex-col items-center justify-center text-center ${brand.accent}`}
              >
                {/* Logo Frame */}
                <div className="h-16 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105">
                  {brand.logo}
                </div>
                
                {/* Title and Description */}
                <h3 className="font-space text-lg font-bold text-navy mb-1">
                  {brand.name}
                </h3>
                <p className="text-gray-400 text-xs font-semibold leading-relaxed max-w-[180px]">
                  {brand.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
