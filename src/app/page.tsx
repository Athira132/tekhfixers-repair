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
import Gallery from "@/components/Gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phoenix Cruise | Luxury Houseboat & Backwater Cruises in Alappuzha, Kerala",
  description: "Phoenix Cruise offers luxury houseboat stays, day cruises, sunset specials, and authentic Kerala seafood dining on the serene backwaters of Alappuzha, Kerala.",
  alternates: {
    canonical: "https://iphonix.in",
  },
  openGraph: {
    title: "Phoenix Cruise | Luxury Houseboat & Backwater Cruises in Alappuzha, Kerala",
    description: "Experience the serene beauty of Kerala's palm-fringed backwaters, luxury houseboat stays, and authentic traditional dining in Alappuzha.",
    url: "https://iphonix.in",
    siteName: "Phoenix Cruise",
    images: [{ url: "https://i.ibb.co/v4FnnCRs/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg", width: 1200, height: 800, alt: "Phoenix Cruise Houseboat" }],
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
        <Gallery />
        <WatchOurStory />
        <Brands />
        <Testimonials />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
