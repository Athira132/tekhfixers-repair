import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import RepairProcess from "@/components/RepairProcess";
import WhyChooseUs from "@/components/WhyChooseUs";
import PremiumHeroBackground from "@/components/PremiumHeroBackground";
import { ShieldCheck, Award, Eye } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About iPhonix | Mobile Repair Specialists in Trivandrum",
  description: "Learn about iPhonix, the leading mobile repair service in Karamana & Trivandrum. Our certified technicians offer doorstep smartphone repairs with warranty support.",
  alternates: {
    canonical: "https://tekhfixers-repair.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        
        {/* Premium About Hero Banner */}
        <section className="relative py-28 md:py-36 overflow-hidden bg-navy text-white flex items-center justify-center text-center">
          <PremiumHeroBackground backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4 md:space-y-6">
            {/* Breadcrumbs */}
            <nav className="flex justify-center items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-accent/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-400">About</span>
            </nav>

            <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              About <span className="gradient-text-accent">iPhonix</span>
            </h1>
            
            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Trivandrum&apos;s premium doorstep smartphone repair specialists, combining laboratory precision with standard convenience.
            </p>
          </div>
        </section>

        {/* Overview & History */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="font-space text-3xl sm:text-4xl font-extrabold text-navy">
                  Revolutionizing Smart Repair <br />
                  <span className="gradient-text-navy">Right At Your Doorstep</span>
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  iPhonix was founded to eliminate the stress and security risks of traditional mobile repair stores. We believed smartphone repair should fit into your schedule, not take you out of it. 
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Today, we deploy certified hardware engineers directly to homes, offices, and cafes in Trivandrum. Working inside customized, secure mobile work kits, our technicians execute screens, displays, charging docks, and battery repairs with maximum transparency and zero diagnostic overhead.
                </p>
                
                {/* Stats Highlights */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                  <div>
                    <h4 className="font-space text-3xl font-extrabold text-navy">20k+</h4>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">Repairs Done</p>
                  </div>
                  <div>
                    <h4 className="font-space text-3xl font-extrabold text-navy">100%</h4>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">Genuine Parts</p>
                  </div>
                  <div>
                    <h4 className="font-space text-3xl font-extrabold text-navy">5.0</h4>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">Star Rating</p>
                  </div>
                </div>
              </div>
              
              {/* Illustration / Brand Values Glass Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 bg-navy/5 rounded-3xl border border-gray-100 space-y-4">
                  <ShieldCheck className="w-10 h-10 text-navy" />
                  <h3 className="font-space text-lg font-bold text-navy">Our Mission</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    To deliver uncompromised hardware repair quality directly to consumers, combining authentic parts, cryptographic chip calibration, and ultimate convenience.
                  </p>
                </div>
                
                <div className="p-8 bg-navy/5 rounded-3xl border border-gray-100 space-y-4">
                  <Eye className="w-10 h-10 text-navy" />
                  <h3 className="font-space text-lg font-bold text-navy">Our Vision</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    To create a seamless smartphone ecosystem where repair is prioritized over replacement, reducing electronic waste and maximizing device lifespans.
                  </p>
                </div>
                
                <div className="p-8 bg-[#072A57] text-white rounded-3xl border border-white/5 space-y-4 sm:col-span-2 shadow-xl">
                  <Award className="w-10 h-10 text-accent" />
                  <h3 className="font-space text-lg font-bold">Premium Repair Promise</h3>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    We stand behind every microscopic reball, glass calibration, and replacement component. All repairs are backed by our industry-leading warranty support, handled directly by certified engineers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us & Doorstep Process */}
        <WhyChooseUs />
        <RepairProcess />

        {/* Testimonials & FAQs */}
        <Testimonials />
        <Faq />

        {/* Contact CTA Banner */}
        <section className="py-16 bg-[#F7F8FB] border-t border-gray-100 relative">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <h2 className="font-space text-2xl md:text-3xl font-extrabold text-navy">
              Have Questions About Our Smartphone Repairs?
            </h2>
            <p className="text-gray-600 text-sm max-w-lg mx-auto leading-relaxed">
              Our technicians in Karamana, Trivandrum are ready to help you with diagnostics, motherboard schematics, or screen replacements.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-navy hover:bg-[#072A57] text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-navy/15 flex items-center space-x-2"
              >
                <span>Contact iPhonix Mobile Repair</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
