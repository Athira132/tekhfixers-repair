import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Phoenix Cruise | Luxury Houseboat & Backwater Cruises in Alappuzha, Kerala",
    template: "%s | Phoenix Cruise Kerala",
  },
  description: "Phoenix Cruise offers luxury houseboat stays, day cruises, sunset specials, and authentic Kerala seafood dining on the serene backwaters of Alappuzha, Kerala.",
  keywords: [
    "Phoenix Cruise",
    "Kerala houseboat",
    "Alappuzha houseboat",
    "Alleppey backwater cruise",
    "Day cruise Alappuzha",
    "Overnight houseboat stay",
    "Sunset houseboat cruise",
    "Executive houseboat suite",
    "Kerala seafood dining",
    "Karimeen pollichathu"
  ],
  authors: [{ name: "Phoenix Cruise", url: "https://iphonix.in" }],
  creator: "Phoenix Cruise",
  publisher: "Phoenix Cruise",
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
  openGraph: {
    title: "Phoenix Cruise | Luxury Houseboat & Backwater Cruises in Alappuzha, Kerala",
    description: "Experience the serene beauty of Kerala's palm-fringed backwaters, luxury houseboat stays, and authentic traditional dining in Alappuzha.",
    url: "https://iphonix.in",
    siteName: "Phoenix Cruise",
    images: [
      {
        url: "https://i.ibb.co/v4FnnCRs/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
        width: 1200,
        height: 800,
        alt: "Phoenix Cruise Houseboat Alappuzha"
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phoenix Cruise | Luxury Houseboat & Backwater Cruises in Alappuzha, Kerala",
    description: "Experience the serene beauty of Kerala's palm-fringed backwaters, luxury houseboat stays, and authentic traditional dining in Alappuzha.",
    images: ["https://i.ibb.co/v4FnnCRs/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "TouristAttraction"],
        "@id": "https://iphonix.in/#localbusiness",
        "name": "Phoenix Cruise",
        "legalName": "Phoenix Cruise Kerala",
        "image": "https://i.ibb.co/v4FnnCRs/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
        "telephone": "+917306243424",
        "email": "phoenixcruisekerala@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Punnamada Lake Jetty",
          "addressLocality": "Alappuzha",
          "addressRegion": "Kerala",
          "postalCode": "688006",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 9.4981,
          "longitude": 76.3384
        },
        "url": "https://iphonix.in",
        "priceRange": "$$",
        "paymentAccepted": "Cash, UPI, Credit Card, Debit Card",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "08:00",
            "closes": "20:00"
          }
        ],
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Alappuzha"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Alleppey"
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
        "name": "Phoenix Cruise",
        "url": "https://iphonix.in",
        "logo": "https://i.ibb.co/v4FnnCRs/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
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
        "name": "Phoenix Cruise",
        "publisher": {
          "@id": "https://iphonix.in/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
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
