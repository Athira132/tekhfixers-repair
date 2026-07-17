"use client";

import { useRef, useState } from "react";
import { Phone, Calendar, ShieldCheck, Sparkles } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt effect for the 3D phone mockup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 md:pb-28 flex items-center justify-center overflow-hidden gradient-bg-dark"
    >
      {/* Blurred Workshop Background (20% Opacity) */}
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=1920')`,
        }}
      />

      {/* Layered SVG Blobs & Shapes */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-blob pointer-events-none [animation-delay:2s]" />

      {/* Premium Curve/Diagonal White Cut at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] md:h-[100px] text-white fill-current"
        >
          <path d="M1200 120L0 120L0 0C300 80 900 80 1200 0L1200 120Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 text-left space-y-6 md:space-y-8"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card border-accent/20">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-xs md:text-sm font-semibold text-accent uppercase tracking-wider">
              #1 Device Repair Shop in Town
            </span>
          </div>

          <h1 className="font-space text-4xl sm:text-5xl md:text-[4.5rem] leading-[1.05] font-extrabold text-white tracking-tight">
            Repairing Your <br />
            <span className="gradient-text-accent">Broken Devices</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl font-normal leading-relaxed">
            Get premium, certified repairs for your smartphones, tablets, and smartwatches. Same-day service with a lifetime warranty.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="px-8 py-4 bg-accent hover:bg-accent-hover text-navy font-bold rounded-xl text-center transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 flex items-center justify-center space-x-2 hover:scale-105 active:scale-95"
            >
              <Calendar className="w-5 h-5 stroke-[2.5]" />
              <span>Book Repair</span>
            </a>
            <a
              href="tel:+18005550199"
              className="px-8 py-4 border border-white/20 hover:border-accent hover:text-accent text-white font-bold rounded-xl text-center transition-all duration-300 flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>

          <div className="flex items-center space-x-6 pt-4 text-gray-400">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Certified Technicians</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Genuine Parts</span>
            </div>
          </div>
        </motion.div>

        {/* Right 3D Interactive Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center items-center"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d",
            }}
            transition={{
              type: "spring",
              stiffness: isHovered ? 400 : 150,
              damping: isHovered ? 30 : 25,
            }}
            className="relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] cursor-pointer"
          >
            {/* Phone Base Shadow */}
            <div className="absolute -bottom-10 left-1/10 right-1/10 h-10 bg-black/40 blur-2xl rounded-full pointer-events-none" />

            {/* Glowing Backdrop Layer */}
            <div className="absolute inset-0 bg-accent/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Smartphone Outer Bezel */}
            <div className="absolute inset-0 bg-[#0c1524] rounded-[2.5rem] p-3 shadow-2xl border-2 border-white/10 flex flex-col justify-between overflow-hidden">
              
              {/* Camera punch-hole notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-30 flex items-center justify-between px-2">
                <div className="w-2.5 h-2.5 bg-zinc-800 rounded-full" />
                <div className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
              </div>

              {/* Glowing Screen Layout */}
              <div className="relative w-full h-full bg-[#072A57] rounded-[2rem] overflow-hidden flex flex-col justify-between p-6 z-20">
                {/* Screen background mesh */}
                <div className="absolute inset-0 bg-gradient-to-tr from-navy to-darkblue pointer-events-none" />
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl" />

                {/* Status bar mock */}
                <div className="flex justify-between items-center text-[10px] text-white/60 font-semibold z-20">
                  <span>9:41 AM</span>
                  <div className="flex space-x-1.5 items-center">
                    <span className="w-3.5 h-2 border border-white/40 rounded-sm relative flex items-center">
                      <span className="w-2.5 h-full bg-accent rounded-2xs absolute left-0" />
                    </span>
                  </div>
                </div>

                {/* Screen Content: Visual Repair Diagnostics Dashboard */}
                <div className="flex-1 flex flex-col justify-center space-y-6 my-6 z-20 relative">
                  {/* Smartphone wireframe graphic */}
                  <div className="flex justify-center py-2 relative">
                    <div className="w-20 h-36 border-2 border-dashed border-accent/30 rounded-xl relative flex items-center justify-center animate-pulse-slow">
                      <div className="w-12 h-20 bg-accent/10 rounded-lg border border-accent/40 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-accent" />
                      </div>
                    </div>
                  </div>

                  {/* Diagnosing state card */}
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-2.5 h-2.5 bg-accent rounded-full animate-ping" />
                      <span className="text-[11px] uppercase tracking-wider text-accent font-bold">Diagnosing Device</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white font-space">iPhone 15 Pro Max</h3>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-3">
                      <div className="bg-accent h-full rounded-full w-4/5 animate-[pulse_1.5s_infinite]" />
                    </div>
                  </div>

                  {/* Completed metrics tag */}
                  <div className="flex justify-between gap-3">
                    <div className="flex-1 p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                      <p className="text-[10px] text-gray-400 font-medium">Health</p>
                      <p className="text-sm font-bold text-accent font-space">98%</p>
                    </div>
                    <div className="flex-1 p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                      <p className="text-[10px] text-gray-400 font-medium">Warranty</p>
                      <p className="text-sm font-bold text-accent font-space">Lifetime</p>
                    </div>
                  </div>
                </div>

                {/* Secure Brand Seal */}
                <div className="text-center z-20">
                  <span className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase">
                    TekhFixers Premium
                  </span>
                </div>
              </div>

              {/* Glass Glare Overlay Effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none z-30 transition-transform duration-500"
                style={{
                  transform: isHovered ? "skewX(-15deg) translateX(10%)" : "skewX(-15deg) translateX(-100%)",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
