"use client";

import { useState } from "react";
import { Send, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Gallery Showcase", href: "/about#gallery" },
  { name: "Contact Hub", href: "/contact" },
  { name: "Book doorstep repair", href: "/book" },
];

const footerServicesList = [
  { name: "Screen Replacement", href: "/services/screen-replacement" },
  { name: "Display Replacement", href: "/services/display-replacement" },
  { name: "Battery Replacement", href: "/services/battery-replacement" },
  { name: "Charging Port Repair", href: "/services/charging-port-repair" },
  { name: "Camera Repair", href: "/services/camera-repair" },
  { name: "Motherboard Repair", href: "/services/motherboard-repair" },
  { name: "Speaker Repair", href: "/services/speaker-repair" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-navy border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 border-b border-white/5 pb-16 text-gray-400">
        
        {/* Left Column: Brand & Description */}
        <div className="lg:col-span-4 space-y-6">
          <Link
            href="/"
            className="flex items-center space-x-3 text-white font-space text-2xl font-bold tracking-tight group"
          >
            {/* Logo Container - Fix cropping using object-contain & scale */}
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-white flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src="/logo.jpg"
                alt="iPhonix Logo"
                fill
                sizes="48px"
                className="object-contain scale-[1.35]"
              />
            </div>
            <span>
              iPhonix
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Professional Mobile Repair Services. Door-to-Door smartphone repair in Karamana, Trivandrum with certified technicians and genuine spare parts.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4">
            {[
              {
                icon: (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                ),
                href: "https://facebook.com",
              },
              {
                icon: (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
                href: "https://twitter.com",
              },
              {
                icon: (
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                ),
                href: "https://instagram.com",
              },
              {
                icon: (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                ),
                href: "https://youtube.com",
              },
              {
                icon: (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                ),
                href: "https://linkedin.com",
              },
            ].map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-accent hover:text-navy border border-white/5 hover:border-accent rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-105"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-2 space-y-6">
          <h4 className="font-space text-lg font-bold text-white uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-accent transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div className="lg:col-span-3 space-y-6">
          <h4 className="font-space text-lg font-bold text-white uppercase tracking-wider">Our Services</h4>
          <ul className="space-y-3 text-sm">
            {footerServicesList.map((srv) => (
              <li key={srv.name}>
                <Link
                  href={srv.href}
                  className="hover:text-accent transition-colors duration-200"
                >
                  {srv.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Subscription Column */}
        <div className="lg:col-span-3 space-y-6">
          <h4 className="font-space text-lg font-bold text-white uppercase tracking-wider">Newsletter</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Subscribe to our newsletter to receive device maintenance tips, repair coupons, and service updates.
          </p>
          <form onSubmit={handleSubscribe} className="relative mt-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent text-white text-sm transition-all pr-12 placeholder-gray-500"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 px-3 bg-accent hover:bg-accent-hover text-navy font-bold rounded-lg transition-all flex items-center justify-center"
              aria-label="Subscribe"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          {isSubscribed && (
            <p className="text-accent text-xs font-bold flex items-center space-x-1.5 animate-pulse">
              <ShieldCheck className="w-4 h-4" />
              <span>Subscribed successfully!</span>
            </p>
          )}
        </div>

      </div>

      {/* Bottom Bar: Copyright, Terms, Payment Mock */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row items-center justify-between text-xs space-y-4 md:space-y-0">
        <div>
          <p>© {new Date().getFullYear()} iPhonix Repair Labs. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
        </div>
        
        {/* Payment Mock Badges */}
        <div className="flex items-center space-x-3 opacity-60">
          <span className="font-semibold uppercase tracking-wider text-[10px]">Secure Payments:</span>
          <div className="px-2 py-1 bg-white/5 rounded border border-white/5 font-mono text-[9px] font-bold text-white">VISA</div>
          <div className="px-2 py-1 bg-white/5 rounded border border-white/5 font-mono text-[9px] font-bold text-white">AMEX</div>
          <div className="px-2 py-1 bg-white/5 rounded border border-white/5 font-mono text-[9px] font-bold text-white">APPLE PAY</div>
        </div>
      </div>
    </footer>
  );
}
