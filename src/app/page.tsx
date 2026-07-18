import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import RepairProcess from "@/components/RepairProcess";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iPhonix | Mobile Repair Shop in Trivandrum & Karamana",
  description: "iPhonix is a professional mobile repair shop in Karamana, Trivandrum offering screen replacement, display repair, battery replacement, charging port repair, motherboard repair, camera repair, data recovery, and doorstep mobile service.",
  alternates: {
    canonical: "https://tekhfixers-repair.vercel.app",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyChooseUs />
        <RepairProcess />
        <Brands />
        <Testimonials />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
