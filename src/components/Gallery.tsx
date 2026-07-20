"use client";

import { useState } from "react";
import ImageWithFallback from "@/components/ImageWithFallback";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Play } from "lucide-react";

export interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  videoUrl?: string;
  title: string;
  category: "Fleet & Exterior" | "Interiors & Suites" | "Kerala Cuisine" | "Backwater Scenery";
  span?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    type: "image",
    src: "https://i.ibb.co/v4FnnCRs/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
    title: "Phoenix Cruise Luxury Houseboat Fleet on Alappuzha Waters",
    category: "Fleet & Exterior",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: "g2",
    type: "image",
    src: "https://i.ibb.co/gbts7Rrj/image.png",
    title: "Air-conditioned Luxury Bedroom Suite with Water Views",
    category: "Interiors & Suites",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g3",
    type: "image",
    src: "https://i.ibb.co/7Jg6tygh/image.png",
    title: "Authentic Kerala Seafood & Karimeen Pollichathu Dining",
    category: "Kerala Cuisine",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g4",
    type: "video",
    src: "https://i.ibb.co/krcscFQ/image.png",
    videoUrl: "https://www.youtube.com/embed/MzhgjZpTAjs?autoplay=1",
    title: "Sailing Through Palm-Fringed Backwater Canals",
    category: "Backwater Scenery",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: "g5",
    type: "image",
    src: "https://i.ibb.co/XrBDdjpg/image.png",
    title: "Overnight Anchorage under Starry Skies in Lake Vembanad",
    category: "Fleet & Exterior",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g6",
    type: "image",
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800",
    title: "Spacious Upper Sun Deck Lounge & Viewing Area",
    category: "Interiors & Suites",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g7",
    type: "video",
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/embed/ZmJTCc_9HlM?autoplay=1",
    title: "Houseboat Tour & Chef's Special Preparation",
    category: "Kerala Cuisine",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
];

const categories = ["All", "Fleet & Exterior", "Interiors & Suites", "Kerala Cuisine", "Backwater Scenery"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (idx: number) => {
    setActiveIdx(idx);
  };

  const closeLightbox = () => {
    setActiveIdx(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx + 1) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100/60 px-4 py-1.5 rounded-full">
            Visual Showcase
          </span>
          <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#06201B] tracking-tight">
            The Phoenix Cruise Experience
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Explore our luxury houseboats, interior suites, traditional Kerala cuisine, and sunset moments.
          </p>
        </div>

        {/* Category Filters (Clean pill buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[#06201B] text-amber-400 shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Modern Masonry / Editorial Image & Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => openLightbox(index)}
              className={`relative group overflow-hidden rounded-3xl cursor-pointer bg-[#06201B] shadow-lg shadow-gray-200/60 ${item.span || "col-span-1 row-span-1"}`}
            >
              <ImageWithFallback
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06201B]/90 via-[#06201B]/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Media Type Icon Badge */}
              <div className="absolute top-4 right-4 bg-[#06201B]/80 backdrop-blur-md p-2.5 rounded-full text-amber-300 border border-emerald-500/30">
                {item.type === "video" ? <Play className="w-4 h-4 fill-amber-300" /> : <ZoomIn className="w-4 h-4" />}
              </div>

              {/* Category tag */}
              <div className="absolute top-4 left-4 bg-emerald-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-emerald-200 uppercase tracking-wider border border-emerald-500/30">
                {item.category}
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 transform transition-transform duration-300 group-hover:-translate-y-1">
                <h3 className="font-space text-base md:text-lg font-bold text-white leading-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              aria-label="Close Lightbox"
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={showPrev}
              aria-label="Previous Item"
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={showNext}
              aria-label="Next Item"
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Media Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center space-y-4"
            >
              {filteredItems[activeIdx].type === "video" && filteredItems[activeIdx].videoUrl ? (
                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    src={filteredItems[activeIdx].videoUrl}
                    title={filteredItems[activeIdx].title}
                    className="w-full h-full border-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-[16/10] max-h-[75vh] rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={filteredItems[activeIdx].src}
                    alt={filteredItems[activeIdx].title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
              )}

              <div className="text-center text-white space-y-1">
                <h3 className="font-space text-lg font-bold">
                  {filteredItems[activeIdx].title}
                </h3>
                <p className="text-xs text-amber-300 font-semibold uppercase tracking-wider">
                  {filteredItems[activeIdx].category}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
