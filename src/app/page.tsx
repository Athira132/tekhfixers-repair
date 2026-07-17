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
