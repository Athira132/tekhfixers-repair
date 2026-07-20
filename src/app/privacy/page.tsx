import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumHeroBackground from "@/components/PremiumHeroBackground";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | iPhonix Mobile Phone Repair Service",
  description: "Privacy Policy for iPhonix Mobile Service Centre. Learn how we handle customer data, device privacy, and data security during doorstep smartphone repairs in Trivandrum & Kerala.",
  alternates: {
    canonical: "https://iphonix.in/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-white">
        {/* Banner */}
        <section className="relative py-28 md:py-36 overflow-hidden bg-navy text-white flex items-center justify-center text-center">
          <PremiumHeroBackground backgroundImage="https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=1920" />
          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
            <nav className="flex justify-center items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-accent/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-400">Privacy Policy</span>
            </nav>
            <h1 className="font-space text-4xl sm:text-5xl font-extrabold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-sm max-w-lg mx-auto">
              Your device privacy and customer data protection are fundamental to our doorstep repair commitment.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-600 text-sm leading-relaxed">
            <div className="space-y-3">
              <h2 className="font-space text-2xl font-bold text-navy">1. Information Collection & Usage</h2>
              <p>
                When you schedule a doorstep repair service with iPhonix Mobile Service Centre, we collect essential booking details including your name, contact phone number, service address in Karamana/Trivandrum/Kerala, device brand, and model details. This information is strictly used to coordinate technician dispatch and provide warranty records.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-space text-2xl font-bold text-navy">2. Device Data Security & Confidentiality</h2>
              <p>
                We maintain strict privacy protocols during hardware diagnostics, screen replacements, battery swaps, and board repairs. Our technicians do not access, copy, alter, or transfer personal photos, messages, contacts, or application data stored on customer devices.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-space text-2xl font-bold text-navy">3. Third-Party Data Sharing</h2>
              <p>
                iPhonix does not sell, rent, or trade customer contact details or booking records to third parties. Data is shared exclusively with our internal dispatch systems and payment gateways required to fulfill your repair order.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-space text-2xl font-bold text-navy">4. Contact & Inquiries</h2>
              <p>
                If you have questions regarding our privacy practices or device data protocols, please contact us at{" "}
                <a href="mailto:iphonixmobileliveservicecentre@gmail.com" className="text-navy font-bold underline">
                  iphonixmobileliveservicecentre@gmail.com
                </a>{" "}
                or call us at{" "}
                <a href="tel:7306243424" className="text-navy font-bold underline">
                  +91 7306243424
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
