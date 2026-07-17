import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import PremiumHeroBackground from "@/components/PremiumHeroBackground";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wrench, Shield, CheckCircle, Phone, MessageSquare } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precision Repair Gallery | iPhonix Specialists",
  description: "Explore our dynamic workshop gallery containing real micro-soldering repairs, doorstep repair setups, and before-and-after diagnostics.",
  alternates: {
    canonical: "https://tekhfixers-repair.vercel.app/gallery",
  },
};

const beforeAfterRepairs = [
  {
    title: "iPhone Screen Replacement",
    desc: "Complete screen restoration using OEM-grade display modules, fully programmed and serialized.",
    beforeImg: "https://images.unsplash.com/photo-1574756587643-f54856c5476c?auto=format&fit=crop&q=80&w=800",
    afterImg: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Logic Board Corrosion Cleanup",
    desc: "Microscopic board cleaning and reballing following extensive water exposure.",
    beforeImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    afterImg: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Battery Diagnostic & Swap",
    desc: "Replacing degraded, swollen cells with genuine safety-certified lithium-ion batteries.",
    beforeImg: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800",
    afterImg: "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=800",
  },
];

const extraWorkshopPhotos = [
  {
    src: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&q=80&w=800",
    title: "Signal Analyzer Diagnostics",
    category: "RF Testing",
  },
  {
    src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    title: "ESD-Safe Clean Bench",
    category: "Environment",
  },
];

const customerRepairs = [
  {
    src: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=800",
    title: "iPhone Pro Max Frame Realignment",
    category: "Chassis",
  },
  {
    src: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&q=80&w=800",
    title: "Post-Repair Sensor Calibration",
    category: "Calibration",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        
        {/* Premium Gallery Hero Banner */}
        <section className="relative py-28 md:py-36 overflow-hidden bg-navy text-white flex items-center justify-center text-center animate-fade-in">
          <PremiumHeroBackground backgroundImage="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=1920" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4 md:space-y-6">
            {/* Breadcrumbs */}
            <nav className="flex justify-center items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-accent/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-400">Gallery</span>
            </nav>

            <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Our <span className="gradient-text-accent">Work Gallery</span>
            </h1>
            
            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Explore real smartphone repairs, diagnostic tools, and doorstep calibration setups.
            </p>
          </div>
        </section>

        {/* Gallery Introduction Section */}
        <section className="py-16 bg-white relative border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-navy/5 border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-navy mb-6">
                    <Wrench className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-space text-lg font-bold text-navy mb-2">Microscopic Precision</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    We execute sub-millimeter logic board reballing, custom solder reflows, and FPC connector replacements under high-power stereomicroscopes.
                  </p>
                </div>
              </div>
              <div className="p-8 rounded-3xl bg-navy/5 border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-navy mb-6">
                    <Shield className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-space text-lg font-bold text-navy mb-2">ESD-Safe Laboratory</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    All diagnostics and lamination procedures occur on static-dissipative mats in controlled environments to protect sensitive silicon circuits.
                  </p>
                </div>
              </div>
              <div className="p-8 rounded-3xl bg-navy/5 border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-navy mb-6">
                    <CheckCircle className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-space text-lg font-bold text-navy mb-2">Post-Repair Calibration</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Every display replacement undergoes optical alignment and serialized chip transfer validation to guarantee native features like Face ID.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Main Photo Gallery (Workshop & Diagnostics) */}
        <Gallery />

        {/* Section 2: Before & After Repairs Showcase (Interactive Hover Panels) */}
        <section className="py-24 bg-[#F7F8FB] relative">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
              <span className="text-xs md:text-sm font-semibold text-darkblue uppercase tracking-widest bg-darkblue/5 px-4 py-2 rounded-full">
                Interactive Results
              </span>
              <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight mt-2">
                Before & After Repairs
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
                Hover over each repair card to witness the transformation from damaged hardware to pristine factory-calibrated condition.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {beforeAfterRepairs.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md shadow-gray-200/50 flex flex-col justify-between"
                >
                  {/* Hover Image Slider Layer */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden group cursor-pointer">
                    {/* Before Image */}
                    <Image 
                      src={item.beforeImg} 
                      alt="Before Repair" 
                      fill 
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                    />
                    
                    {/* After Image (Visible on Hover) */}
                    <Image 
                      src={item.afterImg} 
                      alt="After Repair" 
                      fill 
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                    />

                    {/* Sliding Label Badge */}
                    <div className="absolute top-4 left-4 bg-navy/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider">
                      <span className="group-hover:hidden">Before</span>
                      <span className="hidden group-hover:inline text-accent">After</span>
                    </div>

                    {/* Interactive hover instruction overlay */}
                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm rounded-full p-2 text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                      <span className="text-[9px] uppercase tracking-widest font-bold px-2">Hover to Reveal</span>
                    </div>
                  </div>

                  {/* Card Metadata */}
                  <div className="p-8 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-space text-xl font-bold text-navy">{item.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed mt-2">{item.desc}</p>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-50 flex items-center space-x-2 text-accent-hover font-semibold text-xs uppercase tracking-wider">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>Calibrated & Guaranteed</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Extra Workshop & Calibration Photos */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <span className="text-xs md:text-sm font-semibold text-darkblue uppercase tracking-widest bg-darkblue/5 px-4 py-2 rounded-full">
                  Diagnostic Labs
                </span>
                <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight mt-4">
                  Inside Our Calibration Workshop
                </h2>
                <p className="text-gray-600 text-sm md:text-base mt-4 max-w-lg leading-relaxed">
                  We use static-free clean benches, precision signal analysis modules, and professional reballing matrices to diagnose and repair chips.
                </p>
              </div>

              {/* Spaced images grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {extraWorkshopPhotos.map((img, index) => (
                  <div key={index} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md">
                    <Image 
                      src={img.src} 
                      alt={img.title} 
                      fill 
                      sizes="30vw"
                      className="object-cover hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute bottom-4 left-4 bg-navy/85 backdrop-blur-sm px-3 py-1 rounded-full text-white text-[9px] font-bold uppercase tracking-wider">
                      {img.category}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Repairs Grid */}
            <div className="border-t border-gray-100 pt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
                {customerRepairs.map((img, index) => (
                  <div key={index} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md">
                    <Image 
                      src={img.src} 
                      alt={img.title} 
                      fill 
                      sizes="30vw"
                      className="object-cover hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute bottom-4 left-4 bg-navy/85 backdrop-blur-sm px-3 py-1 rounded-full text-white text-[9px] font-bold uppercase tracking-wider">
                      {img.category}
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-1 lg:order-2">
                <span className="text-xs md:text-sm font-semibold text-darkblue uppercase tracking-widest bg-darkblue/5 px-4 py-2 rounded-full">
                  Real Devices
                </span>
                <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight mt-4">
                  Customer Device Deliveries
                </h2>
                <p className="text-gray-600 text-sm md:text-base mt-4 max-w-lg leading-relaxed">
                  Every smartphone repaired is dynamic-tested, calibrated for Face ID alignment, verified for battery resistance, and dispatched back to clients ESD-safely.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Banner Section */}
        <section className="py-20 bg-[#F7F8FB] border-t border-gray-100 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-r from-navy to-[#072A57] text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
              {/* Decorative Mesh Circle */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-accent/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs md:text-sm font-bold text-accent uppercase tracking-widest bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full">
                  Immediate Dispatch
                </span>
                <h2 className="font-space text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Consult With a Tech Expert
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                  Have a specific question about motherboard corrosion, liquid damage, or data recovery? Get direct, transparent pricing from our laboratory.
                </p>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {/* Phone Call Card */}
                <a
                  href="tel:7306243424"
                  className="p-6 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-accent group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-3 bg-accent/20 text-accent rounded-xl group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Hotline</span>
                  </div>
                  <div>
                    <h4 className="font-space text-base font-bold text-white">Call Support</h4>
                    <p className="text-[11px] text-gray-400 mt-1">Speak to our calibration lab directly</p>
                    <p className="text-sm font-bold text-accent font-space mt-3">7306243424</p>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a
                  href="https://wa.me/917306243424"
                  target="_blank"
                  rel="noreferrer"
                  className="p-6 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-accent group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">24/7 Chat</span>
                  </div>
                  <div>
                    <h4 className="font-space text-base font-bold text-white">WhatsApp Chat</h4>
                    <p className="text-[11px] text-gray-400 mt-1">Share photos of your device damage</p>
                    <p className="text-sm font-bold text-emerald-400 font-space mt-3">Start Instant Chat</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section / Booking Banner */}
        <section className="py-20 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(25,240,181,0.06),transparent)] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-6 md:space-y-8">
            <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Ready to Restore Your Smartphone?
            </h2>
            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Book online today and get a certified doorstep technician dispatched to your Karamana or Trivandrum address with OEM parts.
            </p>
            <div className="flex justify-center pt-2">
              <Link 
                href="/book" 
                className="px-8 py-4 bg-accent hover:bg-accent-hover text-navy font-bold rounded-xl shadow-lg shadow-accent/20 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center space-x-2"
              >
                <span>Schedule Doorstep Repair</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
