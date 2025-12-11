import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        bg-linear-to-br from-[#8ac9f4] to-[#4a90e2]
        px-5 sm:px-6 md:px-8 lg:px-12 
        py-8 sm:py-9 md:py-10
        rounded-2xl sm:rounded-3xl 
        shadow-[0_10px_30px_rgba(74,144,226,0.25)] sm:shadow-[0_20px_40px_rgba(74,144,226,0.35)]
        space-y-6 sm:space-y-8 md:space-y-9
        text-white 
        relative 
        overflow-hidden
        w-full
        mx-auto
      "
    >
      {/* Decorative Blur */}
      <div className="absolute -top-10 sm:-top-16 -right-10 sm:-right-16 w-32 h-32 sm:w-40 sm:h-40 bg-white/20 rounded-full blur-2xl sm:blur-3xl" />
      <div className="absolute bottom-0 -left-10 sm:-left-16 w-32 h-32 sm:w-40 sm:h-40 bg-white/10 rounded-full blur-2xl sm:blur-3xl" />

      <div className="mb-2 sm:mb-4">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold">Contact Information</h2>
        <p className="text-white/80 text-xs sm:text-sm mt-1 sm:mt-2">
          Reach out to us anytime — we're always here to help.
        </p>
      </div>

      <div className="space-y-4 sm:space-y-5">
        <div className="flex items-start gap-3 sm:gap-4 bg-white/15 p-3 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-md">
          <div className="shrink-0">
            <MapPin className="text-white w-5 h-5 sm:w-6 sm:h-6 mt-0.5" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm sm:text-base">Address</p>
            <p className="text-white/90 text-xs sm:text-sm mt-0.5">
              Office #20, Crown Business Center, E/11-2, Islamabad, Pakistan
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 sm:gap-4 bg-white/15 p-3 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-md">
          <div className="shrink-0">
            <Phone className="text-white w-5 h-5 sm:w-6 sm:h-6 mt-0.5" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm sm:text-base">Phone</p>
            <p className="text-white/90 text-xs sm:text-sm mt-0.5">+923156192920</p>
          </div>
        </div>

        <div className="flex items-start gap-3 sm:gap-4 bg-white/15 p-3 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-md">
          <div className="shrink-0">
            <Mail className="text-white w-5 h-5 sm:w-6 sm:h-6 mt-0.5" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm sm:text-base">Email</p>
            <p className="text-white/90 text-xs sm:text-sm mt-0.5">easykaam2025@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start gap-3 sm:gap-4 bg-white/15 p-3 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-md">
          <div className="shrink-0">
            <Clock className="text-white w-5 h-5 sm:w-6 sm:h-6 mt-0.5" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm sm:text-base">Working Hours</p>
            <p className="text-white/90 text-xs sm:text-sm mt-0.5">
              Mon - Sat: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};