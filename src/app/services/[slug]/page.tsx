import { notFound } from "next/navigation";
import ImageWithFallback from "@/components/ImageWithFallback";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumHeroBackground from "@/components/PremiumHeroBackground";
import { cruisesData } from "@/data/cruisesData";
import {
  Check,
  ChevronRight,
  ShieldCheck,
  Star,
  Phone,
  MessageSquare,
  Compass,
  Clock,
  Users,
  HelpCircle,
} from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(cruisesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cruise = cruisesData[slug];
  if (!cruise) return { title: "Package Not Found" };

  return {
    title: cruise.metaTitle,
    description: cruise.metaDesc,
    alternates: {
      canonical: `https://iphonix.in/services/${slug}`,
    },
    openGraph: {
      title: cruise.metaTitle,
      description: cruise.metaDesc,
      url: `https://iphonix.in/services/${slug}`,
      images: [
        {
          url: cruise.image,
          width: 800,
          height: 600,
          alt: `${cruise.title} - Phoenix Cruise Alappuzha`,
        },
      ],
    },
  };
}

export default async function CruiseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cruise = cruisesData[slug];

  if (!cruise) {
    notFound();
  }

  const schemas = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristAttraction",
        "name": cruise.title,
        "description": cruise.metaDesc,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Phoenix Cruise",
          "image": "https://i.ibb.co/v4FnnCRs/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Punnamada Lake",
            "addressLocality": "Alappuzha",
            "addressRegion": "Kerala",
            "postalCode": "688006",
            "addressCountry": "IN"
          },
          "telephone": "+917306243424"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://iphonix.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Cruises",
            "item": "https://iphonix.in/#cruises"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": cruise.title,
            "item": `https://iphonix.in/services/${slug}`
          }
        ]
      }
    ]
  };

  return (
    <>
      <Navbar />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <main className="flex-grow bg-white">
        
        {/* Banner Section */}
        <section className="relative py-28 md:py-36 overflow-hidden bg-[#06201B] text-white flex items-center justify-center text-center">
          <PremiumHeroBackground backgroundImage={cruise.bannerImage} />

          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4 md:space-y-6">
            <nav className="flex justify-center items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-300">Cruises</span>
              <span>/</span>
              <span className="text-amber-400">{cruise.title}</span>
            </nav>

            <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              {cruise.title}
            </h1>
            
            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              {cruise.subtitle}
            </p>
          </div>
        </section>

        {/* Content Layout Grid */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Details & Overview */}
              <div className="lg:col-span-8 space-y-16">
                
                {/* Image & Overview */}
                <div className="space-y-8">
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-[#06201B]">
                    <ImageWithFallback
                      src={cruise.image}
                      alt={cruise.title}
                      fill
                      sizes="(max-width: 1200px) 100vw, 66vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Key Package Details Bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-[#FAFBF8] rounded-2xl border border-gray-200/60 text-[#06201B]">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest">Duration</span>
                      <p className="font-space text-sm font-bold">{cruise.duration}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest">Capacity</span>
                      <p className="font-space text-sm font-bold">{cruise.capacity}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest">Departure</span>
                      <p className="font-space text-sm font-bold">{cruise.timing}</p>
                    </div>
                  </div>

                  {/* Clean Feature Tags (NO ICONS inside tags) */}
                  <div className="flex flex-wrap gap-2">
                    {cruise.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 bg-emerald-50 text-emerald-900 border border-emerald-200/60 text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h2 className="font-space text-2xl md:text-3xl font-extrabold text-[#06201B]">Experience Overview</h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {cruise.overview}
                    </p>
                  </div>
                </div>

                {/* Package Highlights */}
                <div className="space-y-8 border-t border-gray-100 pt-16">
                  <h2 className="font-space text-2xl md:text-3xl font-extrabold text-[#06201B]">Package Highlights</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cruise.highlights.map((point, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                        <div className="w-6 h-6 rounded-full bg-emerald-200/60 text-emerald-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4" />
                        </div>
                        <span className="text-gray-700 text-xs font-semibold leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Itinerary */}
                {cruise.itinerary && cruise.itinerary.length > 0 && (
                  <div className="space-y-8 border-t border-gray-100 pt-16">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100/60 px-4 py-1.5 rounded-full">
                        Cruise Schedule
                      </span>
                      <h2 className="font-space text-2xl md:text-3xl font-extrabold text-[#06201B]">Sample Itinerary</h2>
                    </div>
                    
                    <div className="space-y-4">
                      {cruise.itinerary.map((item, index) => (
                        <div key={index} className="p-6 bg-[#FAFBF8] rounded-2xl border border-gray-200/60 space-y-2">
                          <div className="flex items-center space-x-3">
                            <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full font-space">{item.time}</span>
                            <h4 className="font-space text-base font-bold text-[#06201B]">{item.title}</h4>
                          </div>
                          <p className="text-gray-600 text-xs leading-relaxed pl-1">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* FAQs */}
                {cruise.faqs && cruise.faqs.length > 0 && (
                  <div className="space-y-8 border-t border-gray-100 pt-16">
                    <h2 className="font-space text-2xl md:text-3xl font-extrabold text-[#06201B]">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                      {cruise.faqs.map((faq, index) => (
                        <div key={index} className="p-6 bg-[#FAFBF8] rounded-2xl border border-gray-200/60 space-y-2">
                          <div className="flex items-start space-x-3">
                            <HelpCircle className="w-5 h-5 text-emerald-800 flex-shrink-0 mt-0.5" />
                            <h4 className="font-space text-base font-bold text-[#06201B]">{faq.q}</h4>
                          </div>
                          <p className="text-gray-600 text-xs pl-8 leading-relaxed">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reviews */}
                <div className="space-y-8 border-t border-gray-100 pt-16">
                  <h2 className="font-space text-2xl md:text-3xl font-extrabold text-[#06201B]">Guest Experiences</h2>
                  <div className="space-y-6">
                    {cruise.reviews.map((rev, index) => (
                      <div key={index} className="p-8 bg-[#FAFBF8] rounded-3xl border border-gray-200/60 space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-space text-base font-bold text-[#06201B]">{rev.author}</h4>
                            <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">{rev.location} • {rev.date}</p>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 text-xs italic leading-relaxed">&ldquo;{rev.text}&rdquo;</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Cruises */}
                <div className="space-y-8 border-t border-gray-100 pt-16">
                  <h2 className="font-space text-2xl md:text-3xl font-extrabold text-[#06201B]">Other Cruise Experiences</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {cruise.relatedSlugs.map((rSlug) => {
                      const relPkg = cruisesData[rSlug];
                      if (!relPkg) return null;
                      return (
                        <Link
                          key={rSlug}
                          href={`/services/${rSlug}`}
                          className="group p-6 bg-[#FAFBF8] hover:bg-[#06201B] hover:text-white rounded-2xl border border-gray-200/60 hover:border-[#06201B] transition-all duration-300 flex flex-col justify-between h-48 shadow-sm"
                        >
                          <div>
                            <span className="text-[9px] font-bold text-emerald-800 uppercase tracking-widest group-hover:text-amber-400">Phoenix Fleet</span>
                            <h4 className="font-space text-base font-bold mt-2 text-[#06201B] group-hover:text-white">{relPkg.title}</h4>
                          </div>
                          <div className="flex items-center justify-between pt-4">
                            <span className="text-xs font-semibold text-gray-500 group-hover:text-amber-300">View Details</span>
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-transform group-hover:translate-x-1" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Right Column: Sticky Booking CTA Card */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
                
                <div className="p-8 bg-[#06201B] text-white rounded-3xl border border-emerald-800/40 shadow-2xl space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest bg-emerald-950 px-3 py-1 rounded-full border border-emerald-500/30">
                      Reserve Cruise
                    </span>
                    <h3 className="font-space text-xl font-bold pt-2">Book Your Cruise Today</h3>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      Reserve your dates for {cruise.title} in Alappuzha. Instant booking confirmation &amp; custom dietary arrangements.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <Link
                      href="/book"
                      className="w-full py-3.5 bg-amber-400 hover:bg-amber-500 text-[#06201B] text-center font-bold rounded-xl transition-all duration-300 shadow-lg block text-sm"
                    >
                      Book Online Now
                    </Link>
                    
                    <a
                      href="tel:7306243424"
                      className="w-full py-3.5 bg-emerald-950/80 hover:bg-emerald-900/80 text-white border border-emerald-700/40 text-center font-bold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                    >
                      <Phone className="w-4 h-4 text-amber-400" />
                      <span>Call 7306243424</span>
                    </a>
                    
                    <a
                      href="https://wa.me/917306243424?text=Hi%20Phoenix%20Cruise%2C%20I%20would%20like%20to%20inquire%20about%20booking%20the%20"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3.5 bg-emerald-900/40 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 text-center font-bold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-[#FAFBF8] rounded-3xl border border-gray-200/60 space-y-3">
                  <div className="flex items-center space-x-3">
                    <ShieldCheck className="w-6 h-6 text-emerald-800" />
                    <h4 className="font-space text-sm font-bold text-[#06201B]">Phoenix Safety Guarantee</h4>
                  </div>
                  <p className="text-gray-600 text-[11px] leading-relaxed">
                    Certified life jackets, trained captains, full insurance coverage, and silent environmental navigation on all cruises.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}
