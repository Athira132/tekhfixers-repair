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
import WatchOurStory from "@/components/WatchOurStory";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iPhonix | Mobile Phone Repair Service in Kerala & Trivandrum",
  description: "iPhonix is a professional mobile phone repair service centre in Karamana, Trivandrum & Kerala offering screen replacement, display repair, battery replacement, charging port repair, motherboard repair, software repair, and doorstep phone service.",
  alternates: {
    canonical: "https://iphonix.in",
  },
  openGraph: {
    title: "iPhonix | Mobile Phone Repair Service in Kerala & Trivandrum",
    description: "Professional doorstep mobile phone repair service in Karamana, Trivandrum & Kerala for iPhone and Android smartphones.",
    url: "https://iphonix.in",
    siteName: "iPhonix Mobile Service Centre",
    images: [{ url: "https://iphonix.in/logo.jpg", width: 800, height: 800, alt: "iPhonix Mobile Phone Repair Service" }],
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
        <WatchOurStory />
        <Testimonials />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
