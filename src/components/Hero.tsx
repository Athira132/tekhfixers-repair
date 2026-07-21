"use client";

import { useRef, useState } from "react";
import { Phone, Calendar, ShieldCheck, Sparkles } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import ImageWithFallback from "@/components/ImageWithFallback";

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
      {/* Cinematic YouTube Video Background (Autoplay, Loop, Muted, No controls, Scaled 1.5x to hide branding) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <iframe
          src="https://www.youtube.com/embed/spiDMgLnYLY?autoplay=1&mute=1&loop=1&playlist=spiDMgLnYLY&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&enablejsapi=1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-150"
          style={{
            width: "100vw",
            height: "56.25vw",
            minHeight: "100vh",
            minWidth: "177.77vh",
          }}
          allow="autoplay; encrypted-media; picture-in-picture"
          title="iPhonix Cinematic Background"
        />
        {/* Premium Dark Blue/Black Gradient Overlay (65% opacity) + subtle blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B192C]/65 via-[#0B192C]/75 to-[#0B192C] backdrop-blur-[2px] z-10" />
      </div>

      {/* Floating subtle geometric items */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/12 w-6 h-6 border-2 border-white/5 rounded-lg"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-1/12 w-8 h-8 border border-white/5 rounded-full"
        />
      </div>

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
              # Door-to-Door Repair Service
            </span>
          </div>

          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="font-space text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem] leading-[1] font-extrabold text-white tracking-tight"
            >
              iPhonix
            </motion.h1>
            
            <p className="text-accent text-lg sm:text-xl md:text-2xl font-bold font-space tracking-wide uppercase pt-2">
              Mobile Phone Repair Service in Kerala &amp; Trivandrum
            </p>
          </div>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed">
            Professional mobile phone repair service in Karamana, Trivandrum &amp; Kerala. Certified technicians offering doorstep screen replacement, battery swap, charging port repair, and smartphone service for iPhone and Android devices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="px-8 py-4 bg-accent hover:bg-accent-hover text-navy font-bold rounded-xl text-center transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 flex items-center justify-center space-x-2 hover:scale-105 active:scale-95"
            >
              <Calendar className="w-5 h-5 stroke-[2.5]" />
              <span>Book a Repair</span>
            </a>
            <a
              href="tel:7306243424"
              className="px-8 py-4 border border-white/20 hover:border-accent hover:text-accent text-white font-bold rounded-xl text-center transition-all duration-300 flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10"
            >
              <Phone className="w-5 h-5" />
              <span>7306243424</span>
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
            className="relative w-[330px] h-[580px] sm:w-[400px] sm:h-[680px] md:w-[460px] md:h-[780px] lg:w-[480px] lg:h-[820px] xl:w-[520px] xl:h-[860px] cursor-pointer flex items-center justify-center"
          >
            {/* Phone Base Shadow */}
            <div className="absolute -bottom-6 left-1/12 right-1/12 h-12 bg-black/60 blur-3xl rounded-full pointer-events-none" />

            {/* Glowing Backdrop Layer */}
            <div className="absolute inset-2 bg-accent/25 rounded-[3rem] blur-3xl opacity-65 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Real Phone Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <ImageWithFallback
                src="https://i.ibb.co/sdq8xPjK/image-removebg-preview-1.png"
                alt="iPhonix Premium Smartphone Repair Showcase"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-out group-hover:scale-105"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
