"use client";

import { Anchor } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Phoenix Cruise", href: "/about" },
  { name: "Cruise Showcase Gallery", href: "/gallery" },
  { name: "Contact & Booking Hub", href: "/contact" },
  { name: "Book a Cruise", href: "/book" },
];

const footerServicesList = [
  { name: "Alappuzha Day Cruise", href: "/services/day-cruise" },
  { name: "Luxury Overnight Stay", href: "/services/overnight-stay" },
  { name: "Sunset Special Cruise", href: "/services/sunset-cruise" },
  { name: "Executive Luxury Suite", href: "/services/executive-suite" },
  { name: "Kerala Cuisine Dining", href: "/services/kerala-dining" },
  { name: "Corporate Charters", href: "/services/corporate-event" },
];

export default function Footer() {
  return (
    <footer className="bg-[#041613] text-gray-300 border-t border-emerald-950/60 pt-20 pb-12 relative overflow-hidden">
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-emerald-900/30 pb-16 relative z-10">
        
        {/* Left Column: Brand Info */}
        <div className="lg:col-span-5 space-y-6">
          <Link
            href="/"
            className="flex items-center space-x-3 text-white font-space text-2xl font-bold tracking-tight group"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-900/60 border border-emerald-400/40 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-105 transition-transform duration-300">
              <Anchor className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-space font-extrabold text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
                Phoenix Cruise
              </span>
              <span className="text-[9px] font-bold text-amber-300/80 tracking-widest uppercase -mt-1">
                Kerala Backwaters
              </span>
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Experience the serene beauty of Kerala&apos;s palm-fringed backwaters, luxury houseboat stays, authentic traditional dining, and golden hour sunsets in Alappuzha.
          </p>
          
          {/* Social Profiles */}
          <div className="flex space-x-4">
            {[
              {
                name: "Facebook",
                icon: (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                ),
                href: "https://www.facebook.com/share/1FXiJWsKGv/",
              },
              {
                name: "Instagram",
                icon: (
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                ),
                href: "https://www.instagram.com/iphonix_mobile_service?igsh=YnVib2hoamZ5ZDBi",
              },
            ].map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noreferrer"
                aria-label={soc.name}
                className="w-10 h-10 bg-emerald-950/60 hover:bg-amber-400 hover:text-[#06201B] border border-emerald-800/30 rounded-xl flex items-center justify-center text-gray-300 transition-all duration-300 hover:scale-105"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-3 space-y-6">
          <h4 className="font-space text-base font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
          <ul className="space-y-3 text-xs">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Cruises Column */}
        <div className="lg:col-span-4 space-y-6">
          <h4 className="font-space text-base font-bold text-white uppercase tracking-wider">Cruises &amp; Experiences</h4>
          <ul className="space-y-3 text-xs">
            {footerServicesList.map((srv) => (
              <li key={srv.name}>
                <Link
                  href={srv.href}
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  {srv.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 space-y-4 md:space-y-0 relative z-10">
        <div>
          <p>© {new Date().getFullYear()} Phoenix Cruise. All rights reserved. Alappuzha Backwaters, Kerala.</p>
        </div>
        <div className="flex space-x-6">
          <Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
