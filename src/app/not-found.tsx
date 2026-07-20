import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Compass, Home, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found (404) | Phoenix Cruise Kerala",
  description: "The page you are looking for could not be found. Return to Phoenix Cruise for luxury houseboat cruises in Alappuzha, Kerala.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex items-center justify-center min-h-[70vh] bg-[#FAFBF8] py-24 px-6 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="w-20 h-20 bg-[#06201B] border border-emerald-800/40 rounded-3xl flex items-center justify-center mx-auto text-amber-400">
            <Compass className="w-10 h-10 animate-spin-slow" />
          </div>

          <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest bg-[#06201B] px-4 py-1.5 rounded-full border border-emerald-500/30">
            404 - Page Not Found
          </span>

          <h1 className="font-space text-4xl sm:text-5xl font-extrabold text-[#06201B] tracking-tight">
            Off Course Page
          </h1>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            The cruise endpoint or page you requested does not exist or has moved. Return to Phoenix Cruise home or explore our luxury houseboat packages.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <Link
              href="/"
              className="px-6 py-3.5 bg-[#06201B] hover:bg-[#041613] text-amber-400 font-bold rounded-xl transition-all duration-200 shadow-md flex items-center justify-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>

            <Link
              href="/book"
              className="px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-[#06201B] font-bold rounded-xl transition-all duration-200 shadow-md flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Houseboat</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-gray-200/60">
            <p className="text-xs text-gray-500">
              Need immediate assistance? Call our Alappuzha booking desk directly at{" "}
              <a href="tel:7306243424" className="font-bold text-[#06201B] underline">
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
