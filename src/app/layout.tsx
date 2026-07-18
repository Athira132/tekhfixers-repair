import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iPhonix | Professional Mobile Repair Services | Trivandrum",
  description: "Professional mobile repair services in Trivandrum with doorstep support for Apple, Samsung, OnePlus, Google Pixel, Nothing, Oppo, Vivo, Redmi, Motorola, Nokia, Realme, and more.",
  keywords: [
    "iPhonix",
    "Mobile Repair Trivandrum",
    "Doorstep Mobile Repair",
    "iPhone Repair",
    "Samsung Repair",
    "OnePlus Repair",
    "Google Pixel Repair",
    "Screen Replacement",
    "Battery Replacement",
    "Smartphone Service",
    "Mobile Service Kerala"
  ],
  authors: [{ name: "iPhonix" }],
  metadataBase: new URL("https://tekhfixers-repair.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "iPhonix | Professional Mobile Repair Services | Trivandrum",
    description: "Door-to-door smartphone repair with professional technicians, genuine spare parts, quick turnaround, and support for all major brands.",
    url: "https://tekhfixers-repair.vercel.app",
    siteName: "iPhonix",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "iPhonix Mobile Repair Services"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iPhonix | Professional Mobile Repair Services | Trivandrum",
    description: "Door-to-door smartphone repair in Trivandrum with professional technicians, genuine spare parts, quick turnaround, and support for all major brands.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness, MobilePhoneStore, Organization, and WebSite schemas
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MobilePhoneStore",
        "@id": "https://tekhfixers-repair.vercel.app/#localbusiness",
        "name": "iPhonix",
        "image": "https://tekhfixers-repair.vercel.app/logo.jpg",
        "telephone": "+917306243424",
        "email": "iphonixmobileliveservicecentre@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Karamana",
          "addressLocality": "Trivandrum",
          "addressRegion": "Kerala",
          "postalCode": "695002",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 8.4735234,
          "longitude": 76.9649563
        },
        "url": "https://tekhfixers-repair.vercel.app",
        "priceRange": "$$",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "19:00"
          }
        ],
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Karamana"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Trivandrum"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Thiruvananthapuram"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Kerala"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://tekhfixers-repair.vercel.app/#organization",
        "name": "iPhonix",
        "url": "https://tekhfixers-repair.vercel.app",
        "logo": "https://tekhfixers-repair.vercel.app/logo.jpg",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+917306243424",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["en", "ml"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://tekhfixers-repair.vercel.app/#website",
        "url": "https://tekhfixers-repair.vercel.app",
        "name": "iPhonix",
        "publisher": {
          "@id": "https://tekhfixers-repair.vercel.app/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-white text-[#171717] flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
