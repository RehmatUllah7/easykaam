import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        bg-linear-to-br from-[#8ac9f4] to-[#4a90e2]
        px-8 py-10 md:px-12
        rounded-3xl 
        shadow-[0_20px_40px_rgba(74,144,226,0.35)]
        space-y-9 
        text-white 
        relative 
        overflow-hidden
        mr-0 md:mr-6 lg:mr-10
      "
    >
      {/* Decorative Blur */}
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-16 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

      <h2 className="text-3xl font-bold">Contact Information</h2>
      <p className="text-white/80 text-sm">
        Reach out to us anytime — we’re always here to help.
      </p>

      <div className="flex items-start gap-4 bg-white/15 p-4 rounded-2xl backdrop-blur-md">
        <MapPin className="text-white mt-1 shrink-0" />
        <div>
          <p className="font-semibold">Address</p>
          <p className="text-white/90 text-sm">
            Office #20, Crown Business Center, E/11-2, Islamabad, Pakistan
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 bg-white/15 p-4 rounded-2xl backdrop-blur-md">
        <Phone className="text-white mt-1 shrink-0" />
        <div>
          <p className="font-semibold">Phone</p>
          <p className="text-white/90 text-sm">+923156192920</p>
        </div>
      </div>

      <div className="flex items-start gap-4 bg-white/15 p-4 rounded-2xl backdrop-blur-md">
        <Mail className="text-white mt-1 shrink-0" />
        <div>
          <p className="font-semibold">Email</p>
          <p className="text-white/90 text-sm">easykaam2025@gmail.com</p>
        </div>
      </div>

      <div className="flex items-start gap-4 bg-white/15 p-4 rounded-2xl backdrop-blur-md">
        <Clock className="text-white mt-1 shrink-0" />
        <div>
          <p className="font-semibold">Working Hours</p>
          <p className="text-white/90 text-sm">
            Mon - Sat: 9:00 AM - 6:00 PM
          </p>
        </div>
      </div>
    </motion.div>
  );
};
