"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Play } from "lucide-react";

const galleryImages = [
  {
    src: "https://i.ibb.co/rKf19074/Whats-App-Image-2026-07-14-at-4-01-59-PM.jpg",
    title: "Precision Micro-soldering Workstation",
    category: "Logic Board",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://i.ibb.co/qYdTpnyy/Chat-GPT-Image-Jul-16-2026-05-37-12-PM.png",
    title: "Diagnostic Equipment & Calibration",
    category: "Diagnostics",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://i.ibb.co/twrp24qK/Chat-GPT-Image-Jul-16-2026-05-45-19-PM.png",
    title: "TrueDepth Face ID Sensor Recovery",
    category: "Face ID",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    src: "https://i.ibb.co/tpPKNHV3/image.png",
    title: "On-site Doorstep Repair Spares",
    category: "Doorstep",
    span: "md:col-span-2 md:row-span-1",
  },
];

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const openLightbox = (idx: number) => {
    setActiveIdx(idx);
  };

  const closeLightbox = () => {
    setActiveIdx(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx + 1) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-xs md:text-sm font-semibold text-darkblue uppercase tracking-widest bg-darkblue/5 px-4 py-2 rounded-full">
            Our Work
          </span>
          <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight mt-2">
            Inside Our Precision <br />
            <span className="gradient-text-navy">Repair Workshop</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            View our state-of-the-art diagnostic gear, micro-soldering labs, and doorstep repair setups.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px] mb-24">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              onClick={() => openLightbox(index)}
              className={`relative group overflow-hidden rounded-3xl cursor-pointer bg-navy/5 shadow-md shadow-gray-100 ${img.span}`}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Hover Dark Overlay Overlay */}
              <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

              {/* Floating zoom indicator */}
              <div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-md rounded-full text-white scale-0 group-hover:scale-100 transition-transform duration-300">
                <ZoomIn className="w-5 h-5" />
              </div>

              {/* Text Label on Hover */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <span className="text-[10px] uppercase font-bold text-accent tracking-widest bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {img.category}
                </span>
                <h3 className="font-space text-lg font-bold mt-3 leading-tight">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Section Below Grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-darkblue uppercase tracking-widest bg-darkblue/5 px-4 py-1.5 rounded-full">
              Video Showcase
            </span>
            <h3 className="font-space text-2xl md:text-3xl font-extrabold text-navy">
              Watch Our Technicians in Action
            </h3>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Get an insider look at our motherboard micro-soldering, repair setups, and premium parts inspection.
            </p>
          </div>

          {/* Premium Video Card */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-navy/10 border border-gray-100 group bg-black">
            {isVideoPlaying ? (
              <iframe
                src="https://www.youtube.com/embed/spiDMgLnYLY?autoplay=1"
                title="iPhonix Repair Lab Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-none"
              />
            ) : (
              <div className="absolute inset-0 w-full h-full relative cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                {/* Unsplash Background to represent the cover */}
                <Image
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1200"
                  alt="Video Cover"
                  fill
                  className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-navy/40 transition-opacity duration-300 group-hover:bg-navy/30" />

                {/* Pulse Play button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                  <div className="w-20 h-20 bg-accent hover:bg-accent-hover text-navy rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 scale-100 group-hover:scale-110 active:scale-95 z-10">
                    <Play className="w-8 h-8 fill-navy stroke-none ml-1" />
                  </div>
                  <span className="font-space text-white font-bold text-sm tracking-wider uppercase drop-shadow-md">
                    Click to Play Video
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-colors z-55"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav Button */}
            <button
              onClick={showPrev}
              className="absolute left-6 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-colors z-55"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring" as const, stiffness: 120, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[80vh] relative flex flex-col items-center"
            >
              <div className="relative w-[90vw] md:w-[70vw] h-[50vh] md:h-[65vh]">
                <Image
                  src={galleryImages[activeIdx].src}
                  alt={galleryImages[activeIdx].title}
                  fill
                  className="rounded-3xl object-contain border border-white/10"
                  sizes="(max-width: 1200px) 100vw, 80vw"
                  priority
                />
              </div>
              <div className="text-center mt-4 space-y-1">
                <span className="text-[11px] font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                  {galleryImages[activeIdx].category}
                </span>
                <h3 className="font-space text-lg md:text-xl font-bold text-white mt-2">
                  {galleryImages[activeIdx].title}
                </h3>
              </div>
            </motion.div>

            {/* Right Nav Button */}
            <button
              onClick={showNext}
              className="absolute right-6 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-colors z-55"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
