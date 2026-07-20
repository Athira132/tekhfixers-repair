"use client";

import { useState } from "react";
import { Play, Volume2, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoCardProps {
  videoId: string;
  title: string;
  coverImg: string;
  category: string;
}

function CruiseVideoCard({ videoId, title, coverImg, category }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden bg-[#06201B] border border-emerald-800/40 shadow-2xl group cursor-pointer"
    >
      <AnimatePresence mode="wait">
        {!isPlaying ? (
          <motion.div
            key="cover"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 z-20 flex flex-col justify-between p-6 cursor-pointer"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${coverImg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06201B] via-[#06201B]/40 to-black/50 z-10" />

            {/* Top Tag */}
            <div className="relative z-20 flex justify-between items-center text-white">
              <span className="px-3 py-1 bg-[#06201B]/80 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wider uppercase text-amber-300 border border-emerald-500/30">
                {category}
              </span>
              <div className="flex items-center space-x-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-bold text-gray-200">
                <Volume2 className="w-3 h-3 text-amber-400 animate-pulse" />
                <span>Tap to Play Video</span>
              </div>
            </div>

            {/* Centered Play Button */}
            <div className="relative z-20 my-auto flex justify-center">
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 rounded-full bg-amber-400 text-[#06201B] flex items-center justify-center shadow-xl shadow-amber-400/30 transition-all duration-300"
              >
                <Play className="w-7 h-7 fill-[#06201B] ml-1" />
              </motion.div>
            </div>

            {/* Bottom Title */}
            <div className="relative z-20 text-left space-y-1">
              <h3 className="font-space text-lg sm:text-xl font-extrabold text-white tracking-tight">
                {title}
              </h3>
              <p className="text-[10px] text-amber-300 font-semibold tracking-widest uppercase">
                Phoenix Cruise Experience
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
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function WatchOurStory() {
  return (
    <section className="py-24 md:py-32 bg-[#041613] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-3">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-widest bg-emerald-950 px-4 py-1.5 rounded-full border border-emerald-500/30">
            Watch Phoenix Cruise
          </span>
          <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            See Phoenix Cruise in Action
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Take a closer look at our luxury houseboats, backwater scenery, and dining moments.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <CruiseVideoCard
            videoId="MzhgjZpTAjs"
            title="Sailing Through Alappuzha Backwater Canals"
            coverImg="https://i.ibb.co/krcscFQ/image.png"
            category="Backwater Voyage"
          />

          <CruiseVideoCard
            videoId="ZmJTCc_9HlM"
            title="Inside Our Houseboat Suites &amp; Dining Deck"
            coverImg="https://i.ibb.co/gbts7Rrj/image.png"
            category="Luxury Interiors"
          />
        </div>

      </div>
    </section>
  );
}
