"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MessageSquare,
  Clock,
  MapPin,
  CheckCircle,
  Anchor,
} from "lucide-react";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  packageType: z.string().min(1, "Please select a cruise package"),
  guests: z.string().min(1, "Please select guest count"),
  date: z.string().min(1, "Please pick a preferred date"),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formDataSummary, setFormDataSummary] = useState<BookingFormValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setFormDataSummary(data);
    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    if (!formDataSummary) return;
    const text = `Hi Phoenix Cruise! I'd like to inquire about a houseboat booking:
- Name: ${formDataSummary.name}
- Package: ${formDataSummary.packageType}
- Guests: ${formDataSummary.guests}
- Preferred Date: ${formDataSummary.date}
- Phone: ${formDataSummary.phone}
- Email: ${formDataSummary.email}
- Special Notes: ${formDataSummary.message || "None"}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/917306243424?text=${encodedText}`, "_blank");
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormDataSummary(null);
    reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100/60 px-4 py-1.5 rounded-full">
            Reservation Desk
          </span>
          <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#06201B] tracking-tight">
            Reserve Your Phoenix Cruise
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Get instant booking confirmation and personalized assistance from our Alappuzha houseboat reservation desk.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Interactive Booking Form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="p-8 md:p-10 bg-[#FAFBF8] rounded-3xl border border-gray-200/60 flex-1 relative flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-[#06201B] uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          {...register("name")}
                          type="text"
                          placeholder="e.g. Anand Varma"
                          className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm text-[#06201B] focus:outline-none focus:border-emerald-600 transition-colors"
                        />
                        {errors.name && (
                          <p className="text-xs text-rose-500 font-semibold">{errors.name.message}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-[#06201B] uppercase tracking-wider">
                          Phone Number *
                        </label>
                        <input
                          {...register("phone")}
                          type="tel"
                          placeholder="e.g. 9845012345"
                          className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm text-[#06201B] focus:outline-none focus:border-emerald-600 transition-colors"
                        />
                        {errors.phone && (
                          <p className="text-xs text-rose-500 font-semibold">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-[#06201B] uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="e.g. anand@example.com"
                          className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm text-[#06201B] focus:outline-none focus:border-emerald-600 transition-colors"
                        />
                        {errors.email && (
                          <p className="text-xs text-rose-500 font-semibold">{errors.email.message}</p>
                        )}
                      </div>

                      {/* Package Select */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-[#06201B] uppercase tracking-wider">
                          Cruise Package *
                        </label>
                        <select
                          {...register("packageType")}
                          className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm text-[#06201B] focus:outline-none focus:border-emerald-600 transition-colors"
                        >
                          <option value="">Select Package</option>
                          <option value="Alappuzha Day Cruise">Alappuzha Day Cruise</option>
                          <option value="Luxury Overnight Houseboat Stay">Luxury Overnight Stay</option>
                          <option value="Sunset Special Cruise">Sunset Special Cruise</option>
                          <option value="Executive Luxury Suite">Executive Luxury Suite</option>
                          <option value="Kerala Cuisine Dining Cruise">Kerala Cuisine Dining Cruise</option>
                          <option value="Corporate & Event Charter">Corporate &amp; Event Charter</option>
                        </select>
                        {errors.packageType && (
                          <p className="text-xs text-rose-500 font-semibold">{errors.packageType.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Guest Count */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-[#06201B] uppercase tracking-wider">
                          Number of Guests *
                        </label>
                        <select
                          {...register("guests")}
                          className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm text-[#06201B] focus:outline-none focus:border-emerald-600 transition-colors"
                        >
                          <option value="">Select Guest Count</option>
                          <option value="2 Guests (Couple)">2 Guests (Couple)</option>
                          <option value="3-5 Guests (Family)">3-5 Guests (Family)</option>
                          <option value="6-10 Guests (Group)">6-10 Guests (Group)</option>
                          <option value="11-25 Guests (Large Group)">11-25 Guests (Large Group)</option>
                          <option value="25+ Corporate Event">25+ Corporate Event</option>
                        </select>
                        {errors.guests && (
                          <p className="text-xs text-rose-500 font-semibold">{errors.guests.message}</p>
                        )}
                      </div>

                      {/* Date */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-[#06201B] uppercase tracking-wider">
                          Preferred Travel Date *
                        </label>
                        <input
                          {...register("date")}
                          type="date"
                          className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm text-[#06201B] focus:outline-none focus:border-emerald-600 transition-colors"
                        />
                        {errors.date && (
                          <p className="text-xs text-rose-500 font-semibold">{errors.date.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#06201B] uppercase tracking-wider">
                        Special Requests &amp; Dietary Preferences
                      </label>
                      <textarea
                        {...register("message")}
                        rows={3}
                        placeholder="e.g. Vegetarian SADHYA meal preference, birthday decoration..."
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm text-[#06201B] focus:outline-none focus:border-emerald-600 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-amber-400 hover:bg-amber-500 text-[#06201B] font-bold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                    >
                      {isSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <Anchor className="w-4 h-4" />
                          <span>Submit Reservation Inquiry</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6 py-6"
                  >
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-space text-2xl font-bold text-[#06201B]">
                        Reservation Request Received!
                      </h3>
                      <p className="text-gray-600 text-xs max-w-md mx-auto leading-relaxed">
                        Thank you, {formDataSummary?.name}. Our Alappuzha booking desk has received your request for{" "}
                        <strong className="text-[#06201B]">{formDataSummary?.packageType}</strong> on{" "}
                        <strong className="text-[#06201B]">{formDataSummary?.date}</strong>.
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        onClick={handleWhatsAppRedirect}
                        className="w-full sm:w-auto px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-2 shadow-md"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Confirm via WhatsApp Direct</span>
                      </button>

                      <button
                        onClick={handleResetForm}
                        className="w-full sm:w-auto px-6 py-3.5 bg-gray-200 hover:bg-gray-300 text-[#06201B] font-bold rounded-xl text-xs"
                      >
                        Book Another Cruise
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Right Column: Verified Contact Cards & Alappuzha Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              {/* Phone Card */}
              <a
                href="tel:7306243424"
                className="p-6 bg-[#FAFBF8] hover:bg-emerald-50 rounded-2xl border border-gray-200/60 transition-colors flex items-start space-x-4 group"
              >
                <div className="p-3 bg-[#06201B] text-amber-400 rounded-xl group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-space text-sm font-bold text-[#06201B]">Reservation Hotline</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Speak with our Alappuzha captain</p>
                  <p className="text-sm font-bold text-amber-600 font-space mt-1">7306243424</p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:phoenixcruisekerala@gmail.com"
                className="p-6 bg-[#FAFBF8] hover:bg-emerald-50 rounded-2xl border border-gray-200/60 transition-colors flex items-start space-x-4 group"
              >
                <div className="p-3 bg-[#06201B] text-amber-400 rounded-xl group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-space text-sm font-bold text-[#06201B]">Email Booking Desk</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Custom group rates &amp; itineraries</p>
                  <p className="text-xs font-bold text-emerald-800 font-space mt-1 break-all">
                    phoenixcruisekerala@gmail.com
                  </p>
                </div>
              </a>

              {/* Operating Hours */}
              <div className="p-6 bg-[#FAFBF8] rounded-2xl border border-gray-200/60 flex items-start space-x-4">
                <div className="p-3 bg-[#06201B] text-amber-400 rounded-xl">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-space text-sm font-bold text-[#06201B]">Operating Hours</h4>
                  <p className="text-xs text-gray-600 mt-1 font-semibold">
                    Monday – Sunday: 8:00 AM – 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Alappuzha Backwaters Map Embed */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-gray-200/60 shadow-md">
              <iframe
                title="Phoenix Cruise Alappuzha Jetty Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.253456891!2d76.3384!3d9.4981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0884ef12345678%3A0x123456789abcdef!2sPunnamada%20Lake%2C%20Alappuzha%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-none"
                loading="lazy"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
