import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import PremiumHeroBackground from "@/components/PremiumHeroBackground";
import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import { ArrowRight, Wrench, Shield, CheckCircle, Phone, MessageSquare, Layers, BatteryCharging, Zap, Camera, Cpu, Droplet } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Repair Gallery & Workshop Photos in Trivandrum | iPhonix",
  description: "Explore the iPhonix mobile repair workshop gallery in Karamana, Trivandrum & Kerala. Real technician photos displaying screen replacements, motherboard diagnostics, and professional repair tools.",
  alternates: {
    canonical: "https://iphonix.in/gallery",
  },
  openGraph: {
    title: "Mobile Repair Gallery & Workshop Photos in Trivandrum | iPhonix",
    description: "Explore the iPhonix mobile repair workshop gallery in Karamana, Trivandrum & Kerala.",
    url: "https://iphonix.in/gallery",
    siteName: "iPhonix Mobile Service Centre",
  },
};

const repairExpertise = [
  {
    title: "Screen Replacement",
    desc: "OEM-grade glass replacements to resolve cracked, scratched, or shattered front glass modules.",
    img: "https://i.ibb.co/rLg9D5h/image.png",
    icon: Layers,
    slug: "screen-replacement",
  },
  {
    title: "Battery Replacement",
    desc: "Restore your device's original battery life with premium, certified lithium-ion replacements.",
    img: "https://i.ibb.co/MyPYqZ3j/image.png",
    icon: BatteryCharging,
    slug: "battery-replacement",
  },
  {
    title: "Charging Port Repair",
    desc: "Fix connection issues, slow charging speeds, and loose ports with complete board repairs.",
    img: "https://i.ibb.co/QRwLj07/image.png",
    icon: Zap,
    slug: "charging-port-repair",
  },
  {
    title: "Camera Repair",
    desc: "Replace scratched lenses, broken sensors, and non-functioning focus systems on front and back cameras.",
    img: "https://i.ibb.co/Q7JSyDRz/image.png",
    icon: Camera,
    slug: "camera-repair",
  },
  {
    title: "Motherboard Repair",
    desc: "Micro-soldering, chip level repairs, and custom diagnostic logic for complex boards.",
    img: "https://i.ibb.co/KxmBknMz/image.png",
    icon: Cpu,
    slug: "motherboard-repair",
  },
  {
    title: "Water Damage Repair",
    desc: "Ultrasonic cleaning and moisture extraction to recover water-damaged components and data.",
    img: "https://i.ibb.co/bMG8Nnqr/image.png",
    icon: Droplet,
    slug: "water-damage-repair",
  },
];

const extraWorkshopPhotos = [
  {
    src: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&q=80&w=800",
    title: "Mobile repair signal analyzer diagnostics in Karamana Trivandrum",
    category: "RF Testing",
  },
  {
    src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    title: "ESD-safe smartphone calibration workbench at iPhonix Trivandrum",
    category: "Environment",
  },
];

const customerRepairs = [
  {
    src: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=800",
    title: "iPhone chassis and frame realignment service in Trivandrum",
    category: "Chassis",
  },
  {
    src: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&q=80&w=800",
    title: "Post-repair face ID and sensor calibration in Karamana lab",
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

        {/* Section 2: Our Repair Expertise */}
        <section className="py-24 bg-[#F7F8FB] relative">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
              <span className="text-xs md:text-sm font-semibold text-darkblue uppercase tracking-widest bg-darkblue/5 px-4 py-2 rounded-full">
                Expert Showcase
              </span>
              <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight mt-2">
                Our Repair Expertise
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
                Explore our main smartphone repair specialties, executed with clinical precision and OEM-grade parts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repairExpertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md shadow-gray-200/50 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Image Layer */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <ImageWithFallback 
                        src={item.img} 
                        alt={item.title} 
                        fill 
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      
                      {/* Icon overlay */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl text-navy shadow-sm group-hover:bg-accent group-hover:text-navy transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-space text-xl font-bold text-navy">{item.title}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed mt-2">{item.desc}</p>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                        <Link 
                          href={`/services/${item.slug}`}
                          className="inline-flex items-center text-xs font-bold text-navy hover:text-darkblue transition-colors duration-200"
                        >
                          <span className="mr-2 uppercase tracking-wider">Learn More</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-full">
                          Certified
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
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
                    <ImageWithFallback 
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
                    <ImageWithFallback 
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
