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
  AlertTriangle,
} from "lucide-react";

// Form validation schema with Zod
const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  device: z.string().min(1, "Please select device type"),
  brand: z.string().min(1, "Please select brand"),
  issue: z.string().min(1, "Please select primary issue"),
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
    // Simulate server side email dispatch
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormDataSummary(data);
    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    if (!formDataSummary) return;
    const text = `Hi iPhonix! I'd like to book a doorstep repair:
- Name: ${formDataSummary.name}
- Device: ${formDataSummary.device} (${formDataSummary.brand})
- Issue: ${formDataSummary.issue}
- Preferred Date: ${formDataSummary.date}
- Phone: ${formDataSummary.phone}
- Notes: ${formDataSummary.message || "None"}`;

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
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-xs md:text-sm font-semibold text-darkblue uppercase tracking-widest bg-darkblue/5 px-4 py-2 rounded-full">
            Book a Service
          </span>
          <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight mt-2">
            Schedule Your Doorstep Repair
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            iPhonix provides premium doorstep smartphone repair services for Apple, Samsung, OnePlus, Google Pixel, Nothing, Motorola, Vivo, Oppo, Realme, Redmi, Nokia, and other leading brands.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Interactive Booking Form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="p-8 md:p-10 bg-[#F7F8FB] rounded-3xl border border-gray-100 flex-1 relative flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-navy">Full Name</label>
                        <input
                          type="text"
                          {...register("name")}
                          placeholder="John Doe"
                          className={`w-full px-4 py-3 bg-white rounded-xl border focus:outline-none focus:ring-2 transition-all font-medium text-sm ${
                            errors.name ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-darkblue focus:ring-blue-100"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-[10px] font-bold flex items-center space-x-1">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>{errors.name.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-navy">Email Address</label>
                        <input
                          type="email"
                          {...register("email")}
                          placeholder="johndoe@example.com"
                          className={`w-full px-4 py-3 bg-white rounded-xl border focus:outline-none focus:ring-2 transition-all font-medium text-sm ${
                            errors.email ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-darkblue focus:ring-blue-100"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-[10px] font-bold flex items-center space-x-1">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>{errors.email.message}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone Number */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-navy">Phone Number</label>
                        <input
                          type="tel"
                          {...register("phone")}
                          placeholder="+1 (800) 555-0199"
                          className={`w-full px-4 py-3 bg-white rounded-xl border focus:outline-none focus:ring-2 transition-all font-medium text-sm ${
                            errors.phone ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-darkblue focus:ring-blue-100"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-[10px] font-bold flex items-center space-x-1">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>{errors.phone.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Preferred Date */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-navy">Preferred Date</label>
                        <input
                          type="date"
                          {...register("date")}
                          className={`w-full px-4 py-3 bg-white rounded-xl border focus:outline-none focus:ring-2 transition-all font-medium text-sm ${
                            errors.date ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-darkblue focus:ring-blue-100"
                          }`}
                        />
                        {errors.date && (
                          <p className="text-red-500 text-[10px] font-bold flex items-center space-x-1">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>{errors.date.message}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      {/* Device type */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-navy">Device Type</label>
                        <select
                          {...register("device")}
                          className={`w-full px-4 py-3 bg-white rounded-xl border focus:outline-none focus:ring-2 transition-all font-medium text-sm ${
                            errors.device ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-darkblue focus:ring-blue-100"
                          }`}
                        >
                          <option value="">Select...</option>
                          <option value="Smartphone">Smartphone</option>
                          <option value="Tablet">Tablet</option>
                          <option value="Laptop">Laptop</option>
                          <option value="Smartwatch">Smartwatch</option>
                        </select>
                        {errors.device && (
                          <p className="text-red-500 text-[10px] font-bold flex items-center space-x-1">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>{errors.device.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Brand */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-navy">Brand</label>
                        <select
                          {...register("brand")}
                          className={`w-full px-4 py-3 bg-white rounded-xl border focus:outline-none focus:ring-2 transition-all font-medium text-sm ${
                            errors.brand ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-darkblue focus:ring-blue-100"
                          }`}
                        >
                          <option value="">Select...</option>
                          <option value="Apple">Apple iPhone</option>
                          <option value="Samsung">Samsung</option>
                          <option value="OnePlus">OnePlus</option>
                          <option value="Google">Google Pixel</option>
                          <option value="Nothing">Nothing</option>
                          <option value="Motorola">Motorola</option>
                          <option value="Redmi">Redmi</option>
                          <option value="Oppo">Oppo</option>
                          <option value="Vivo">Vivo</option>
                          <option value="Realme">Realme</option>
                          <option value="Nokia">Nokia</option>
                          <option value="iQOO">iQOO</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.brand && (
                          <p className="text-red-500 text-[10px] font-bold flex items-center space-x-1">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>{errors.brand.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Primary Issue */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-navy">Primary Issue</label>
                        <select
                          {...register("issue")}
                          className={`w-full px-4 py-3 bg-white rounded-xl border focus:outline-none focus:ring-2 transition-all font-medium text-sm ${
                            errors.issue ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-darkblue focus:ring-blue-100"
                          }`}
                        >
                          <option value="">Select...</option>
                          <option value="Screen Replacement">Screen Replacement</option>
                          <option value="Display Replacement">Display Replacement</option>
                          <option value="Battery Replacement">Battery Replacement</option>
                          <option value="Charging Port Repair">Charging Port Repair</option>
                          <option value="Camera Repair">Camera Repair</option>
                          <option value="Speaker Repair">Speaker Repair</option>
                          <option value="Microphone Repair">Microphone Repair</option>
                          <option value="Motherboard Repair">Motherboard Repair</option>
                          <option value="Water Damage Repair">Water Damage Repair</option>
                          <option value="Software Issues">Software Issues</option>
                          <option value="Face ID Repair">Face ID Repair</option>
                          <option value="Touch IC Repair">Touch IC Repair</option>
                          <option value="Data Recovery">Data Recovery</option>
                          <option value="Complete Device Diagnosis">Complete Device Diagnosis</option>
                        </select>
                        {errors.issue && (
                          <p className="text-red-500 text-[10px] font-bold flex items-center space-x-1">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>{errors.issue.message}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-navy">Additional Details (Optional)</label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="Describe the issue, device history, or drop details..."
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-darkblue focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all font-medium text-sm"
                      />
                    </div>

                    {/* Action button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-navy hover:bg-darkblue text-white font-bold rounded-xl text-center shadow-lg transition-all duration-300 hover:scale-[1.01] active:scale-95 disabled:opacity-75 flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <span>Request Diagnostic Booking</span>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  // Success State Box
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12 px-6 flex flex-col items-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center text-accent animate-bounce">
                      <CheckCircle className="w-12 h-12 stroke-[2.2]" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-space text-2xl font-bold text-navy">Booking Request Received!</h3>
                      <p className="text-gray-500 text-sm max-w-md font-medium">
                        Thank you for booking with iPhonix. A doorstep repair ticket has been generated. Our technical team will confirm your slot via call or email within the hour.
                      </p>
                    </div>

                    {/* Integrations Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md pt-4">
                      <button
                        onClick={handleWhatsAppRedirect}
                        className="flex-1 py-3 bg-accent hover:bg-accent-hover text-navy font-bold rounded-xl flex items-center justify-center space-x-2 transition-all shadow-md shadow-accent/20"
                      >
                        <MessageSquare className="w-5 h-5 fill-navy stroke-none" />
                        <span>Send via WhatsApp</span>
                      </button>
                      <button
                        onClick={handleResetForm}
                        className="flex-1 py-3 border border-gray-200 hover:bg-gray-50 text-navy font-bold rounded-xl transition-all"
                      >
                        Book Another Device
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Right Column: Address, Map, Hours, Actions */}
          <div className="lg:col-span-5 flex flex-col space-y-8 justify-between">
            
            {/* Interactive Channels Card */}
            <div className="p-8 bg-[#072A57] rounded-3xl border border-white/5 text-white space-y-6 shadow-2xl relative overflow-hidden">
              {/* background blob */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/15 rounded-full blur-xl pointer-events-none" />
              
              <h3 className="font-space text-xl font-bold">Contact Hub</h3>
              
              <div className="space-y-4">
                {/* Phone Call Button */}
                <a
                  href="tel:7306243424"
                  className="flex items-center space-x-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all"
                >
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Direct Hotline</p>
                    <p className="font-space text-base font-bold">7306243424</p>
                  </div>
                </a>

                {/* Email Button */}
                <a
                  href="mailto:iphonixmobileliveservicecentre@gmail.com"
                  className="flex items-center space-x-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all"
                >
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Support Mail</p>
                    <p className="font-space text-sm sm:text-base font-bold break-all">iphonixmobileliveservicecentre@gmail.com</p>
                  </div>
                </a>

                {/* Business Hours */}
                <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Business Hours</p>
                    <p className="text-sm font-semibold">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                    <p className="text-xs text-accent font-medium">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Mockup / Iframe */}
            <div className="relative rounded-3xl overflow-hidden border border-gray-100 flex-1 min-h-[250px] shadow-lg shadow-navy/5 group">
              <iframe
                title="iPhonix Repair Lab Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.0682548817684!2d76.9649563!3d8.4735234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b15be62283e7%3A0x446be06511675373!2sKaramana%2C%20Thiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-none min-h-[250px] grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                allowFullScreen={true}
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 p-3 bg-navy/90 text-white rounded-xl border border-white/10 flex items-center space-x-2 text-xs backdrop-blur-sm pointer-events-none">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="font-semibold">Karamana, Trivandrum</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
