import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precision Repair Gallery | iPhonix",
  description: "Explore our dynamic workshop gallery containing real micro-soldering repairs, doorstep repair setups, and dynamic play-responsive video logs.",
  alternates: {
    canonical: "https://tekhfixers-repair.vercel.app/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
