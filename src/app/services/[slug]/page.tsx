import { notFound } from "next/navigation";
import ImageWithFallback from "@/components/ImageWithFallback";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumHeroBackground from "@/components/PremiumHeroBackground";
import { servicesData } from "@/data/servicesData";
import {
  Check,
  ChevronRight,
  ShieldCheck,
  Star,
  Phone,
  MessageSquare,
  Wrench,
  HelpCircle,
  Home,
} from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static routes for all 11 services for fast prerendering
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

// Dynamic SEO metadata generator
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | iPhonix Smartphone Repair`,
    description: service.metaDesc,
    alternates: {
      canonical: `https://tekhfixers-repair.vercel.app/services/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDesc,
      url: `https://tekhfixers-repair.vercel.app/services/${slug}`,
      images: [
        {
          url: service.image,
          width: 800,
          height: 600,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  // Create JSON-LD Service Schema dynamically
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "serviceType": "Smartphone Hardware Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "iPhonix",
      "image": "https://tekhfixers-repair.vercel.app/logo.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Karamana",
        "addressLocality": "Trivandrum",
        "addressRegion": "Kerala",
        "postalCode": "695002",
        "addressCountry": "IN"
      },
      "telephone": "7306243424"
    },
    "description": service.metaDesc,
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Trivandrum"
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Breadcrumb Schema Integration */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow bg-white">
        
        {/* Premium Dynamic Hero Banner */}
        <section className="relative py-28 md:py-36 overflow-hidden bg-navy text-white flex items-center justify-center text-center">
          <PremiumHeroBackground backgroundImage={service.bannerImage} />

          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4 md:space-y-6 animate-fade-in">
            {/* Breadcrumbs UI */}
            <nav className="flex justify-center items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-accent/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-400">Services</span>
              <span>/</span>
              <span className="text-accent">{service.title}</span>
            </nav>

            <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              {service.title}
            </h1>
            
            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              {service.shortDesc}
            </p>
          </div>
        </section>

        {/* Content Layout Grid */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Details, Process, Why Choose Us, FAQs */}
              <div className="lg:col-span-8 space-y-16">
                
                {/* Image & Overview */}
                <div className="space-y-8">
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1200px) 100vw, 66vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <h2 className="font-space text-2xl md:text-3xl font-extrabold text-navy">Service Overview</h2>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                      {service.overview}
                    </p>
                  </div>
                </div>

                {/* Repair Process Steps */}
                <div className="space-y-8 border-t border-gray-100 pt-16">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-darkblue uppercase tracking-widest bg-darkblue/5 px-4 py-1.5 rounded-full">
                      Workflow
                    </span>
                    <h2 className="font-space text-2xl md:text-3xl font-extrabold text-navy">How We Fix It</h2>
                    <p className="text-gray-400 text-xs">Our micro-level step-by-step diagnostic and hardware repair process.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {service.process.map((step) => (
                      <div key={step.step} className="p-6 bg-navy/5 rounded-2xl border border-gray-100 space-y-4 flex flex-col justify-between">
                        <div className="flex items-start justify-between">
                          <span className="font-space text-2xl font-black text-navy/20">{step.step}</span>
                          <span className="p-2 bg-accent/20 text-navy rounded-xl"><Wrench className="w-5 h-5" /></span>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-space text-base font-bold text-navy">{step.title}</h4>
                          <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="space-y-8 border-t border-gray-100 pt-16">
                  <h2 className="font-space text-2xl md:text-3xl font-extrabold text-navy">Why Choose iPhonix for {service.title}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.whyChooseUs.map((point, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4" />
                        </div>
                        <span className="text-gray-600 text-xs font-semibold leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQs Accordion */}
                <div className="space-y-8 border-t border-gray-100 pt-16">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-darkblue uppercase tracking-widest bg-darkblue/5 px-4 py-1.5 rounded-full">
                      Help Desk
                    </span>
                    <h2 className="font-space text-2xl md:text-3xl font-extrabold text-navy">Frequently Asked Questions</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {service.faqs.map((faq, index) => (
                      <div key={index} className="p-6 bg-navy/5 rounded-2xl border border-gray-100 space-y-3">
                        <div className="flex items-start space-x-3">
                          <HelpCircle className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                          <h4 className="font-space text-base font-bold text-navy leading-snug">{faq.q}</h4>
                        </div>
                        <p className="text-gray-500 text-xs pl-8 leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Customer Reviews for this service */}
                <div className="space-y-8 border-t border-gray-100 pt-16">
                  <h2 className="font-space text-2xl md:text-3xl font-extrabold text-navy">Recent Customer Reviews</h2>
                  <div className="space-y-6">
                    {service.reviews.map((rev, index) => (
                      <div key={index} className="p-8 bg-white rounded-3xl border border-gray-100 space-y-4 shadow-sm relative">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-space text-base font-bold text-navy">{rev.author}</h4>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{rev.date}</p>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-500 text-xs italic leading-relaxed">&ldquo;{rev.text}&rdquo;</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Services */}
                <div className="space-y-8 border-t border-gray-100 pt-16">
                  <h2 className="font-space text-2xl md:text-3xl font-extrabold text-navy">Related Services</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {service.relatedSlugs.map((rSlug) => {
                      const relSvc = servicesData[rSlug];
                      if (!relSvc) return null;
                      return (
                        <Link
                          key={rSlug}
                          href={`/services/${rSlug}`}
                          className="group p-6 bg-navy/5 hover:bg-navy hover:text-white rounded-2xl border border-gray-100 hover:border-navy transition-all duration-300 flex flex-col justify-between h-48 shadow-sm"
                        >
                          <div>
                            <span className="text-[9px] font-bold text-darkblue uppercase tracking-widest group-hover:text-accent">iPhonix Lab</span>
                            <h4 className="font-space text-base font-bold mt-2 leading-tight text-navy group-hover:text-white">{relSvc.title}</h4>
                          </div>
                          <div className="flex items-center justify-between pt-4">
                            <span className="text-xs font-semibold text-gray-400 group-hover:text-accent">View Details</span>
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-accent transition-transform group-hover:translate-x-1" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Right Column: Sticky Booking CTA card */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
                
                {/* Fast Booking CTA Card */}
                <div className="p-8 bg-[#072A57] text-white rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden space-y-6">
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/20 rounded-full blur-xl pointer-events-none" />
                  
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                      Live Scheduling
                    </span>
                    <h3 className="font-space text-xl font-bold pt-2">Book Your Doorstep Repair</h3>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      Need your {service.title} resolved today? Book a certified dispatch repair engineer to your location in Trivandrum.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4">
                    <Link
                      href="/book"
                      className="w-full py-3.5 bg-accent hover:bg-accent-hover text-navy text-center font-bold rounded-xl transition-all duration-300 shadow-md shadow-accent/20 block hover:scale-102"
                    >
                      Book Online Now
                    </Link>
                    
                    <a
                      href="tel:7306243424"
                      className="w-full py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-center font-bold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call 7306243424</span>
                    </a>
                    
                    <a
                      href="https://wa.me/917306243424"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 text-center font-bold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>
                </div>

                {/* Safety Promise Badge Card */}
                <div className="p-6 bg-white rounded-3xl border border-gray-100 space-y-4 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h4 className="font-space text-sm font-bold text-navy">Authenticity Promise</h4>
                  </div>
                  <p className="text-gray-500 text-[11px] leading-relaxed">
                    We use exclusively OEM-grade replacement parts, fully programmed and serialized to match your smartphone&apos;s secure hardware configurations.
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
