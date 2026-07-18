import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import PremiumHeroBackground from "@/components/PremiumHeroBackground";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Mobile Repair in Trivandrum | Doorstep Service",
  description: "Schedule your doorstep smartphone repair in Karamana, Trivandrum. Our mobile technicians come directly to your home or office. Book your repair today!",
  alternates: {
    canonical: "https://tekhfixers-repair.vercel.app/book",
  },
};

export default function BookRepairPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        
        {/* Premium Book Hero Banner */}
        <section className="relative py-28 md:py-36 overflow-hidden bg-navy text-white flex items-center justify-center text-center">
          <PremiumHeroBackground backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1920" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4 md:space-y-6">
            {/* Breadcrumbs */}
            <nav className="flex justify-center items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-accent/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-400">Book Repair</span>
            </nav>

            <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Book a <span className="gradient-text-accent">Repair</span>
            </h1>
            
            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Generate a doorstep dispatch request to repair your smartphone on-site in Trivandrum.
            </p>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
