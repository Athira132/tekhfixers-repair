import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "iPhonix | Mobile Phone Repair Service in Kerala & Trivandrum",
    template: "%s | iPhonix Mobile Service Centre",
  },
  description: "iPhonix is a premier mobile phone repair service centre in Karamana, Trivandrum & Kerala. Expert doorstep smartphone screen replacement, display repair, battery replacement, charging port repair, motherboard repair, and software troubleshooting.",
  keywords: [
    "Mobile phone repair service",
    "Mobile phone repair in Kerala",
    "Mobile service centre in Kerala",
    "Phone repair service near me",
    "Smartphone repair service",
    "iPhone repair service",
    "Android phone repair",
    "Mobile screen replacement",
    "Mobile battery replacement",
    "Mobile charging port repair",
    "Mobile software repair",
    "Water damage phone repair",
    "iPhonix",
    "Mobile repair Trivandrum",
    "Doorstep mobile repair"
  ],
  authors: [{ name: "iPhonix Mobile Service Centre", url: "https://iphonix.in" }],
  creator: "iPhonix Mobile Service Centre",
  publisher: "iPhonix Mobile Service Centre",
  metadataBase: new URL("https://iphonix.in"),
  alternates: {
    canonical: "https://iphonix.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
  openGraph: {
    title: "iPhonix | Mobile Phone Repair Service in Kerala & Trivandrum",
    description: "Doorstep smartphone repair in Karamana & Trivandrum with certified technicians, genuine spare parts, quick turnaround, and support for iPhone and Android devices.",
    url: "https://iphonix.in",
    siteName: "iPhonix Mobile Service Centre",
    images: [
      {
        url: "https://iphonix.in/logo.jpg",
        width: 800,
        height: 800,
        alt: "iPhonix Mobile Phone Repair Service Centre"
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iPhonix | Mobile Phone Repair Service in Kerala & Trivandrum",
    description: "Doorstep smartphone repair in Trivandrum & Kerala with certified technicians, genuine spare parts, quick turnaround, and support for all major mobile brands.",
    images: ["https://iphonix.in/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness, MobilePhoneStore, Organization, and WebSite JSON-LD schemas
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MobilePhoneStore", "LocalBusiness"],
        "@id": "https://iphonix.in/#localbusiness",
        "name": "iPhonix",
        "legalName": "iPhonix Mobile Service Centre",
        "image": "https://iphonix.in/logo.jpg",
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
        "url": "https://iphonix.in",
        "priceRange": "$$",
        "paymentAccepted": "Cash, UPI, Credit Card, Debit Card",
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
        "@id": "https://iphonix.in/#organization",
        "name": "iPhonix Mobile Service Centre",
        "url": "https://iphonix.in",
        "logo": "https://iphonix.in/logo.jpg",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+917306243424",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["en", "ml"]
        },
        "sameAs": [
          "https://www.facebook.com/share/1FXiJWsKGv/",
          "https://www.instagram.com/iphonix_mobile_service?igsh=YnVib2hoamZ5ZDBi"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://iphonix.in/#website",
        "url": "https://iphonix.in",
        "name": "iPhonix Mobile Service Centre",
        "publisher": {
          "@id": "https://iphonix.in/#organization"
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
