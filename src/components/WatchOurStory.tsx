"use client";

import { useState } from "react";
import { Play, Volume2, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoMockupProps {
  videoId: string;
  title: string;
  coverImg: string;
  isShort?: boolean;
}

function PhoneVideoMockup({ videoId, title, coverImg, isShort = false }: VideoMockupProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Embed URL with optimized flags to hide UI elements as much as possible
  const embedUrl = isShort
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&loop=1`
    : `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="perspective-1000 flex justify-center"
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          rotateY: 8,
          rotateX: 4,
          scale: 1.03,
          boxShadow: "0 25px 50px -12px rgba(25, 240, 181, 0.25)",
        }}
        className="relative w-[280px] h-[560px] sm:w-[310px] sm:h-[620px] bg-[#1a1a1a] rounded-[3rem] p-[10px] shadow-2xl border-4 border-gray-800/80 transition-all duration-300 group cursor-pointer"
      >
        {/* Black Screen Border/Bezel */}
        <div className="absolute inset-0 rounded-[2.8rem] border-[12px] border-black pointer-events-none z-30" />

        {/* Dynamic Island Notch */}
        <div className="absolute top-[22px] left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-40 flex items-center justify-center">
          {/* Camera lens reflection */}
          <div className="absolute left-4 w-2 h-2 bg-gray-900 rounded-full border border-blue-900/40" />
          <div className="w-12 h-1 bg-gray-900 rounded-full" />
        </div>

        {/* Screen Content Area */}
        <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-navy z-20">
          <AnimatePresence mode="wait">
            {!isPlaying ? (
              <motion.div
                key="cover"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 z-20 flex flex-col justify-between p-6 cursor-pointer"
              >
                {/* Background Image and dark overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${coverImg})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-black/60 z-10" />

                {/* Top Info */}
                <div className="relative z-20 flex justify-between items-center text-white/90">
                  <div className="flex items-center space-x-1 bg-black/35 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase border border-white/5">
                    <Volume2 className="w-3 h-3 text-accent animate-pulse" />
                    <span>Click to Play</span>
                  </div>
                  <Shield className="w-4 h-4 text-accent" />
                </div>

                {/* Centered Play Button */}
                <div className="relative z-20 my-auto flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 rounded-full bg-accent text-navy flex items-center justify-center shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300"
                  >
                    <Play className="w-7 h-7 fill-navy ml-1 stroke-[2.5]" />
                  </motion.div>
                </div>

                {/* Bottom Title */}
                <div className="relative z-20 text-left space-y-1">
                  <h4 className="font-space text-lg font-extrabold text-white tracking-tight">
                    {title}
                  </h4>
                  <p className="text-[10px] text-accent font-semibold tracking-widest uppercase">
                    iPhonix Lab Tour
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full h-full"
              >
                <iframe
                  src={embedUrl}
                  title={title}
                  className="w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function WatchOurStory() {
  return (
    <section className="py-24 md:py-32 bg-navy text-white relative overflow-hidden">
      {/* Decorative radial gradients */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[radial-gradient(circle,rgba(25,240,181,0.04),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-[radial-gradient(circle,rgba(25,240,181,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-semibold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full border border-accent/20"
          >
            Watch Our Story
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            See iPhonix in Action
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          >
            Take a closer look at our work, service, and repair expertise.
          </motion.p>
        </div>

        {/* Mockups Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 justify-center items-center max-w-4xl mx-auto">
          
          {/* Video Mockup 1: Standard Youtube Video */}
          <PhoneVideoMockup
            videoId="MzhgjZpTAjs"
            title="Professional iPhone Restoration Process"
            coverImg="https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&q=80&w=600"
          />

          {/* Video Mockup 2: Shorts Youtube Video */}
          <PhoneVideoMockup
            videoId="ZmJTCc_9HlM"
            title="Inside Our Micro-soldering Laboratory"
            coverImg="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=600"
            isShort={true}
          />

        </div>

      </div>
    </section>
  );
}
