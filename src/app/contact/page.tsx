import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import PremiumHeroBackground from "@/components/PremiumHeroBackground";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | iPhonix Smartphone Repair Labs",
  description: "Get in touch with iPhonix for premium doorstep smartphone repair services in Karamana, Trivandrum. Fast response, direct call, WhatsApp redirection, and live booking.",
  alternates: {
    canonical: "https://tekhfixers-repair.vercel.app/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        
        {/* Premium Contact Hero Banner */}
        <section className="relative py-28 md:py-36 overflow-hidden bg-navy text-white flex items-center justify-center text-center">
          <PremiumHeroBackground backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1920" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4 md:space-y-6">
            {/* Breadcrumbs */}
            <nav className="flex justify-center items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-accent/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-400">Contact</span>
            </nav>

            <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Contact <span className="gradient-text-accent">iPhonix</span>
            </h1>
            
            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Fast, reliable, and secure hardware support. Schedule a doorstep dispatch or call us directly.
            </p>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
