"use client";

import { motion } from "framer-motion";
import { Wrench, Cpu, Smartphone, Settings, Shield, Hammer } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";

interface PremiumHeroBackgroundProps {
  backgroundImage: string;
  dividerColor?: string;
}

const floatingIcons = [
  { Icon: Wrench, top: "15%", left: "8%", size: 28, delay: 0, duration: 20 },
  { Icon: Cpu, top: "25%", right: "10%", size: 36, delay: 2, duration: 25 },
  { Icon: Smartphone, bottom: "35%", left: "12%", size: 32, delay: 4, duration: 22 },
  { Icon: Settings, bottom: "25%", right: "15%", size: 24, delay: 1, duration: 18 },
  { Icon: Shield, top: "45%", right: "50%", size: 20, delay: 3, duration: 24 },
  { Icon: Hammer, top: "12%", right: "30%", size: 22, delay: 5, duration: 21 },
];

// Generate deterministic particles to avoid hydration mismatches
const particles = Array.from({ length: 15 }).map((_, i) => {
  const seed = (i + 1) * 123.456;
  return {
    id: i,
    size: (Math.sin(seed) * 2 + 3), // Size between 1px and 5px
    x: ((Math.sin(seed * 2) * 0.5 + 0.5) * 100), // percentage x
    y: ((Math.cos(seed * 3) * 0.5 + 0.5) * 100), // percentage y
    duration: (Math.sin(seed * 4) * 5 + 15), // duration 10s to 20s
    delay: (Math.cos(seed * 5) * 4 + 4), // delay 0s to 8s
  };
});

export default function PremiumHeroBackground({
  backgroundImage,
  dividerColor = "text-white",
}: PremiumHeroBackgroundProps) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Blurred Workshop Background Image */}
      <div className="absolute inset-0 w-full h-full opacity-20 filter blur-[3px] mix-blend-luminosity">
        <ImageWithFallback
          src={backgroundImage}
          alt="Repair Background"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Navy Blue Gradient Overlay for depth and text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B192C]/90 via-[#0B192C]/95 to-[#0B192C] z-0" />

      {/* Digital Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] z-0" />

      {/* Soft Animated Mesh Glows */}
      <div className="absolute top-1/4 left-1/10 w-[450px] h-[450px] bg-[#00b8ff]/6 rounded-full blur-[110px] animate-blob z-0" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-[#19F0B5]/6 rounded-full blur-[110px] animate-blob [animation-delay:2.5s] z-0" />

      {/* Floating low-opacity repair items */}
      {floatingIcons.map((item, index) => {
        const { Icon, top, left, right, bottom, size, delay, duration } = item;
        return (
          <motion.div
            key={index}
            style={{
              position: "absolute",
              top,
              left,
              right,
              bottom,
            }}
            initial={{ y: 0, rotate: 0 }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 360],
            }}
            transition={{
              y: {
                duration: duration / 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration,
                repeat: Infinity,
                ease: "linear",
              },
              delay,
            }}
            className="text-white/5 opacity-40 hidden sm:block"
          >
            <Icon style={{ width: size, height: size }} strokeWidth={1.5} />
          </motion.div>
        );
      })}

      {/* Slowly floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          initial={{ opacity: 0.1, y: 0 }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            y: [0, -60, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
          className="rounded-full bg-accent/20"
        />
      ))}

      {/* Bottom curved shape transition banner */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`relative block w-full h-[40px] md:h-[70px] ${dividerColor} fill-current`}
        >
          <path d="M1200 120L0 120L0 0C300 60 900 60 1200 0L1200 120Z"></path>
        </svg>
      </div>
    </div>
  );
}
