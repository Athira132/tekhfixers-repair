import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumHeroBackground from "@/components/PremiumHeroBackground";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | iPhonix Mobile Phone Repair Service",
  description: "Terms of Service for iPhonix Mobile Service Centre. Review service terms, warranty coverage, doorstep repair guidelines, and component policies in Trivandrum & Kerala.",
  alternates: {
    canonical: "https://iphonix.in/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-white">
        {/* Banner */}
        <section className="relative py-28 md:py-36 overflow-hidden bg-navy text-white flex items-center justify-center text-center">
          <PremiumHeroBackground backgroundImage="https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&q=80&w=1920" />
          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
            <nav className="flex justify-center items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-accent/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-400">Terms of Service</span>
            </nav>
            <h1 className="font-space text-4xl sm:text-5xl font-extrabold tracking-tight">
              Terms of Service
            </h1>
            <p className="text-gray-300 text-sm max-w-lg mx-auto">
              Clear, transparent guidelines governing our doorstep smartphone repairs and warranty coverage.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-600 text-sm leading-relaxed">
            <div className="space-y-3">
              <h2 className="font-space text-2xl font-bold text-navy">1. Doorstep Service Booking & Verification</h2>
              <p>
                By booking a doorstep repair through iPhonix Mobile Service Centre, you authorize our certified technicians to perform multi-point hardware diagnostics, module replacements, or micro-soldering on your designated smartphone device at your requested location in Karamana, Trivandrum, or Kerala.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-space text-2xl font-bold text-navy">2. Warranty & Component Policy</h2>
              <p>
                We use OEM-grade replacement parts for screens, displays, batteries, cameras, charging ports, and audio modules. All qualified hardware replacements include warranty protection against manufacturing defects or touch response failures. Warranty coverage excludes accidental physical drops, water intrusion after repair, or third-party tampering.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-space text-2xl font-bold text-navy">3. Data Backup Responsibility</h2>
              <p>
                While our hardware replacement procedures preserve device data, customers are advised to create cloud or local backups prior to technician dispatch when possible.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-space text-2xl font-bold text-navy">4. Contact Information</h2>
              <p>
                For questions regarding terms of service or active warranty claims, contact iPhonix Mobile Service Centre at{" "}
                <a href="tel:7306243424" className="text-navy font-bold underline">
                  +91 7306243424
                </a>{" "}
                or email{" "}
                <a href="mailto:iphonixmobileliveservicecentre@gmail.com" className="text-navy font-bold underline">
                  iphonixmobileliveservicecentre@gmail.com
                </a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
