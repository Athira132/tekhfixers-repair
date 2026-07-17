"use client";

import { useState, useEffect } from "react";
import { Menu, X, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Repairs", href: "#repairs" },
  { name: "Why Us", href: "#why-us" },
  { name: "Pricing", href: "#pricing" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-2 text-white font-space text-2xl font-bold tracking-tight"
          >
            <div className="p-2 bg-accent rounded-xl text-navy flex items-center justify-center shadow-lg shadow-accent/20">
              <Smartphone className="w-6 h-6 stroke-[2.5]" />
            </div>
            <span>
              Tekh<span className="text-accent">Fixers</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-gray-300 hover:text-accent font-medium text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="px-6 py-2.5 bg-accent hover:bg-accent-hover text-navy font-semibold text-sm rounded-xl transition-all duration-300 shadow-md shadow-accent/20 hover:scale-105 active:scale-95"
            >
              Book Repair
            </a>
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
            className="fixed inset-0 z-40 bg-navy/98 backdrop-blur-lg pt-28 px-8 flex flex-col space-y-6 lg:hidden"
          >
            <ul className="flex flex-col space-y-5">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-gray-200 hover:text-accent font-space text-xl font-medium block border-b border-white/5 pb-2 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="w-full py-4 bg-accent hover:bg-accent-hover text-navy text-center font-bold rounded-xl transition-all duration-300 shadow-lg shadow-accent/20 block"
            >
              Book Repair
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
