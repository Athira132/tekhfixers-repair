"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const servicesList = [
  { name: "Screen Replacement", href: "/services/screen-replacement" },
  { name: "Display Replacement", href: "/services/display-replacement" },
  { name: "Battery Replacement", href: "/services/battery-replacement" },
  { name: "Charging Port Repair", href: "/services/charging-port-repair" },
  { name: "Camera Repair", href: "/services/camera-repair" },
  { name: "Motherboard Repair", href: "/services/motherboard-repair" },
  { name: "Speaker Repair", href: "/services/speaker-repair" },
  { name: "Water Damage Repair", href: "/services/water-damage-repair" },
  { name: "Software Repair", href: "/services/software-repair" },
  { name: "Face ID Repair", href: "/services/face-id-repair" },
  { name: "Data Recovery", href: "/services/data-recovery" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page transitions
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    if (isDropdownOpen) setIsDropdownOpen(false);
    if (isMobileDropdownOpen) setIsMobileDropdownOpen(false);
  }, [pathname, isMobileMenuOpen, isDropdownOpen, isMobileDropdownOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-4 shadow-lg shadow-black/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Container - Fix cropping using object-contain & equal padding */}
          <Link
            href="/"
            className="flex items-center space-x-3 text-white font-space text-2xl font-bold tracking-tight group"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-white flex items-center justify-center p-1 transition-transform group-hover:scale-105">
              <Image
                src="/logo.jpg"
                alt="iPhonix Logo"
                fill
                sizes="48px"
                priority
                className="object-contain p-1"
              />
            </div>
            <span>
              iPhonix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              <li>
                <Link
                  href="/"
                  className={`font-medium text-sm transition-colors duration-200 ${
                    isActive("/") ? "text-accent" : "text-gray-300 hover:text-accent"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`font-medium text-sm transition-colors duration-200 ${
                    isActive("/about") ? "text-accent" : "text-gray-300 hover:text-accent"
                  }`}
                >
                  About
                </Link>
              </li>
              
              {/* Dropdown Menu for Services */}
              <li
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center space-x-1 font-medium text-sm transition-colors duration-200 focus:outline-none ${
                    pathname.startsWith("/services") ? "text-accent" : "text-gray-300 hover:text-accent"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-64 rounded-2xl bg-navy/95 border border-white/10 backdrop-blur-xl p-3 shadow-xl shadow-black/30"
                    >
                      <ul className="space-y-1">
                        {servicesList.map((svc) => (
                          <li key={svc.name}>
                            <Link
                              href={svc.href}
                              className={`block px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
                                isActive(svc.href)
                                  ? "bg-accent text-navy"
                                  : "text-gray-300 hover:bg-white/5 hover:text-white"
                              }`}
                            >
                              {svc.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link
                  href="/about#gallery"
                  className={`font-medium text-sm transition-colors duration-200 ${
                    pathname === "/gallery" ? "text-accent" : "text-gray-300 hover:text-accent"
                  }`}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`font-medium text-sm transition-colors duration-200 ${
                    isActive("/contact") ? "text-accent" : "text-gray-300 hover:text-accent"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link
              href="/book"
              className="px-6 py-2.5 bg-accent hover:bg-accent-hover text-navy font-semibold text-sm rounded-xl transition-all duration-300 shadow-md shadow-accent/20 hover:scale-105 active:scale-95"
            >
              Book Repair
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
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
            className="fixed inset-0 z-40 bg-navy/98 backdrop-blur-lg pt-28 px-8 flex flex-col space-y-6 lg:hidden overflow-y-auto"
          >
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/"
                  className={`font-space text-lg font-medium block border-b border-white/5 pb-2 transition-colors duration-200 ${
                    isActive("/") ? "text-accent" : "text-gray-200 hover:text-accent"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`font-space text-lg font-medium block border-b border-white/5 pb-2 transition-colors duration-200 ${
                    isActive("/about") ? "text-accent" : "text-gray-200 hover:text-accent"
                  }`}
                >
                  About
                </Link>
              </li>
              
              {/* Mobile Services Accordion */}
              <li>
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className={`w-full flex items-center justify-between font-space text-lg font-medium border-b border-white/5 pb-2 transition-colors duration-200 text-left ${
                    pathname.startsWith("/services") ? "text-accent" : "text-gray-200 hover:text-accent"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isMobileDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-2 space-y-2 border-l border-white/10"
                    >
                      {servicesList.map((svc) => (
                        <li key={svc.name}>
                          <Link
                            href={svc.href}
                            className={`block py-1 text-sm font-semibold transition-colors duration-200 ${
                              isActive(svc.href) ? "text-accent" : "text-gray-400 hover:text-white"
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
                  href="/about#gallery"
                  className={`font-space text-lg font-medium block border-b border-white/5 pb-2 transition-colors duration-200 ${
                    pathname === "/gallery" ? "text-accent" : "text-gray-200 hover:text-accent"
                  }`}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`font-space text-lg font-medium block border-b border-white/5 pb-2 transition-colors duration-200 ${
                    isActive("/contact") ? "text-accent" : "text-gray-200 hover:text-accent"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link
              href="/book"
              className="w-full py-4 bg-accent hover:bg-accent-hover text-navy text-center font-bold rounded-xl transition-all duration-300 shadow-lg shadow-accent/20 block"
            >
              Book Repair
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
