import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TekhFixers | Premium Mobile & Smart Device Repair Services",
  description: "Award-winning premium mobile device repair services. Same-day screen replacement, battery replacement, and motherboard repair for Apple, Samsung, Google Pixel, and more.",
  keywords: [
    "mobile repair",
    "phone screen replacement",
    "battery replacement",
    "water damage repair",
    "iPhone repair",
    "Samsung repair",
    "certified technicians",
    "same day phone repair"
  ],
  authors: [{ name: "TekhFixers" }],
  metadataBase: new URL("https://tekhfixers-repair.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TekhFixers | Premium Mobile & Smart Device Repair Services",
    description: "Get your broken devices repaired by certified technicians with original parts, same-day delivery, and lifetime warranty.",
    url: "https://tekhfixers-repair.vercel.app",
    siteName: "TekhFixers",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TekhFixers Mobile Repair Services"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TekhFixers | Premium Mobile & Smart Device Repair",
    description: "Award-winning, same-day smartphone & tablet repair. Certified techs, premium components, lifetime warranty.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased min-h-screen bg-white text-[#171717] flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
