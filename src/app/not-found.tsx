import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, Wrench, Phone, Calendar, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found (404) | iPhonix Mobile Phone Repair Service",
  description: "The page you are looking for could not be found. Return to iPhonix Mobile Service Centre for doorstep smartphone repairs in Karamana, Trivandrum & Kerala.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex items-center justify-center min-h-[70vh] bg-white py-24 px-6 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="w-20 h-20 bg-navy/5 border border-gray-100 rounded-3xl flex items-center justify-center mx-auto text-navy">
            <Wrench className="w-10 h-10 text-navy animate-bounce" />
          </div>

          <span className="text-xs font-extrabold text-accent uppercase tracking-widest bg-navy px-4 py-1.5 rounded-full">
            404 - Error
          </span>

          <h1 className="font-space text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
            Page Not Found
          </h1>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Sorry, the page or service endpoint you are looking for does not exist or has been moved. Explore our smartphone repair services or return home.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <Link
              href="/"
              className="px-6 py-3.5 bg-navy hover:bg-[#072A57] text-white font-bold rounded-xl transition-all duration-200 shadow-md flex items-center justify-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>

            <Link
              href="/book"
              className="px-6 py-3.5 bg-accent hover:bg-accent-hover text-navy font-bold rounded-xl transition-all duration-200 shadow-md flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Repair</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              Need immediate assistance? Call our hotline directly at{" "}
              <a href="tel:7306243424" className="font-bold text-navy underline">
                7306243424
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
