import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Doorstep Repair | iPhonix Specialists",
  description: "Schedule your premium doorstep smartphone repair in Karamana, Trivandrum. Fast, secure, and fully certified technician dispatch.",
  alternates: {
    canonical: "https://tekhfixers-repair.vercel.app/book",
  },
};

export default function BookRepairPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 bg-white">
        {/* Simple top intro section specifically for the standalone booking page */}
        <div className="pt-16 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-darkblue uppercase tracking-widest bg-darkblue/5 px-4 py-1.5 rounded-full">
            Online Scheduling
          </span>
          <h1 className="font-space text-4xl sm:text-5xl font-extrabold text-navy tracking-tight mt-2">
            Book Your Doorstep Repair
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto">
            Fill out the form below to generate a repair ticket and schedule a certified hardware technician dispatch to your location.
          </p>
        </div>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
