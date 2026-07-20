"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Anchor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const cruisesList = [
  { name: "Alappuzha Day Cruise", href: "/services/day-cruise" },
  { name: "Luxury Overnight Stay", href: "/services/overnight-stay" },
  { name: "Sunset Special Cruise", href: "/services/sunset-cruise" },
  { name: "Executive Luxury Suite", href: "/services/executive-suite" },
  { name: "Kerala Cuisine Dining", href: "/services/kerala-dining" },
  { name: "Corporate & Event Charters", href: "/services/corporate-event" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  
  const [isTriggerHovered, setIsTriggerHovered] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [isClickedOpen, setIsClickedOpen] = useState(false);

  const isDropdownOpen = isTriggerHovered || isDropdownHovered || isClickedOpen;
  
  const pathname = usePathname();
  const triggerTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (triggerTimeoutRef.current) {
        clearTimeout(triggerTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsTriggerHovered(false);
    setIsDropdownHovered(false);
    setIsClickedOpen(false);
    setIsMobileDropdownOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  const handleTriggerEnter = () => {
    if (triggerTimeoutRef.current) {
      clearTimeout(triggerTimeoutRef.current);
      triggerTimeoutRef.current = null;
    }
    setIsTriggerHovered(true);
  };

  const handleTriggerLeave = () => {
    triggerTimeoutRef.current = setTimeout(() => {
      setIsTriggerHovered(false);
    }, 150);
  };

  const handleDropdownEnter = () => {
    setIsDropdownHovered(true);
  };

  const handleDropdownLeave = () => {
    setIsDropdownHovered(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsTriggerHovered(false);
      setIsDropdownHovered(false);
      setIsClickedOpen(false);
      triggerRef.current?.focus();
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#06201B]/95 backdrop-blur-md py-4 shadow-xl border-b border-emerald-900/30"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Container */}
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              <li>
                <Link
                  href="/"
                  className={`font-medium text-sm transition-colors duration-200 ${
                    isActive("/") ? "text-amber-400" : "text-gray-200 hover:text-amber-400"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`font-medium text-sm transition-colors duration-200 ${
                    isActive("/about") ? "text-amber-400" : "text-gray-200 hover:text-amber-400"
                  }`}
                >
                  About
                </Link>
              </li>
              
              {/* Dropdown Menu for Cruises */}
              <li
                className="relative py-2"
                onMouseEnter={handleTriggerEnter}
                onMouseLeave={handleTriggerLeave}
                onKeyDown={handleKeyDown}
              >
                <button
                  ref={triggerRef}
                  onClick={() => setIsClickedOpen(!isClickedOpen)}
                  aria-haspopup="menu"
                  aria-expanded={isDropdownOpen}
                  aria-controls="cruises-dropdown"
                  id="cruises-trigger"
                  className={`flex items-center space-x-1 font-medium text-sm transition-colors duration-200 focus:outline-none ${
                    pathname.startsWith("/services") ? "text-amber-400" : "text-gray-200 hover:text-amber-400"
                  }`}
                >
                  <span>Cruises &amp; Packages</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full w-72 pt-3 z-50"
                      id="cruises-dropdown"
                      role="menu"
                      aria-labelledby="cruises-trigger"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="rounded-2xl bg-[#06201B]/95 border border-emerald-800/40 backdrop-blur-xl p-3 shadow-2xl">
                        <ul className="space-y-1">
                          {cruisesList.map((svc) => (
                            <li key={svc.name} role="none">
                              <Link
                                href={svc.href}
                                role="menuitem"
                                className={`block px-4 py-2.5 text-xs font-semibold rounded-xl transition-all duration-200 ${
                                  isActive(svc.href)
                                    ? "bg-amber-400 text-[#06201B]"
                                    : "text-gray-200 hover:bg-emerald-950/60 hover:text-amber-300"
                                }`}
                              >
                                {svc.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className={`font-medium text-sm transition-colors duration-200 ${
                    pathname === "/gallery" ? "text-amber-400" : "text-gray-200 hover:text-amber-400"
                  }`}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`font-medium text-sm transition-colors duration-200 ${
                    isActive("/contact") ? "text-amber-400" : "text-gray-200 hover:text-amber-400"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <Link
              href="/book"
              className="px-6 py-2.5 bg-amber-400 hover:bg-amber-500 text-[#06201B] font-bold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-amber-400/20 hover:scale-105 active:scale-95"
            >
              Book a Cruise
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-200 hover:text-amber-400 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#06201B]/98 backdrop-blur-xl pt-28 px-8 flex flex-col space-y-6 lg:hidden overflow-y-auto"
          >
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/"
                  className={`font-space text-lg font-medium block border-b border-emerald-900/40 pb-2 transition-colors duration-200 ${
                    isActive("/") ? "text-amber-400" : "text-gray-200 hover:text-amber-400"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`font-space text-lg font-medium block border-b border-emerald-900/40 pb-2 transition-colors duration-200 ${
                    isActive("/about") ? "text-amber-400" : "text-gray-200 hover:text-amber-400"
                  }`}
                >
                  About
                </Link>
              </li>
              
              <li>
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className={`w-full flex items-center justify-between font-space text-lg font-medium border-b border-emerald-900/40 pb-2 transition-colors duration-200 text-left ${
                    pathname.startsWith("/services") ? "text-amber-400" : "text-gray-200 hover:text-amber-400"
                  }`}
                >
                  <span>Cruises &amp; Packages</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isMobileDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="pl-4 mt-2 space-y-2 border-l border-emerald-800/40 overflow-hidden"
                    >
                      {cruisesList.map((svc) => (
                        <li key={svc.name}>
                          <Link
                            href={svc.href}
                            className={`block py-1.5 text-sm font-semibold transition-colors duration-200 ${
                              isActive(svc.href) ? "text-amber-400" : "text-gray-300 hover:text-white"
                            }`}
                          >
                            {svc.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className={`font-space text-lg font-medium block border-b border-emerald-900/40 pb-2 transition-colors duration-200 ${
                    pathname === "/gallery" ? "text-amber-400" : "text-gray-200 hover:text-amber-400"
                  }`}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`font-space text-lg font-medium block border-b border-emerald-900/40 pb-2 transition-colors duration-200 ${
                    isActive("/contact") ? "text-amber-400" : "text-gray-200 hover:text-amber-400"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link
              href="/book"
              className="w-full py-4 bg-amber-400 hover:bg-amber-500 text-[#06201B] text-center font-bold rounded-xl transition-all duration-300 shadow-lg shadow-amber-400/20 block"
            >
              Book a Cruise
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
