import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
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
      <main className="flex-grow pt-24">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
