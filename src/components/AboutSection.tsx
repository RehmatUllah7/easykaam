import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

import about1 from "../assets/bs1.jpg";
import about2 from "../assets/bs2.jpg";
import about3 from "../assets/bs1.jpg";

export const AboutSection = () => {
  const navigate = useNavigate();
  const themeColor = "#8ac9f4";

  const features: string[] = [
    "Verified & Background Checked Professionals",
    "Service Within 60 Minutes",
    "Agreed Pricing",
    "Satisfaction Guaranteed",
  ];

  return (
    <section className="relative py-10 md:py-20 bg-linear-to-br from-[#eaf6ff] via-white to-[#f3fbff] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-10 md:-top-20 -left-10 md:-left-20 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#8ac9f4]/20 rounded-full blur-[70px] md:blur-[140px]" />
        <div className="absolute -bottom-10 md:-bottom-20 -right-10 md:-right-20 w-[180px] md:w-[360px] h-[180px] md:h-[360px] bg-[#4a90e2]/20 rounded-full blur-[70px] md:blur-[140px]" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-20 px-4"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
          About{" "}
          <span className="relative inline-block" style={{ color: themeColor }}>
            EasyKaam
            <span
              className="absolute left-0 -bottom-1 md:-bottom-2 w-full h-1 md:h-2 rounded-full opacity-40"
              style={{ backgroundColor: themeColor }}
            />
          </span>
        </h2>

        <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-lg text-gray-600 px-4">
          Connecting homes with trusted professionals — fast, safe, and reliable.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            <div className="relative bg-white/90 backdrop-blur-xl p-6 md:p-8 lg:p-10 rounded-2xl lg:rounded-3xl shadow-lg lg:shadow-xl border border-gray-100">
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                EasyKaam makes hiring skilled workers simple, reliable, and
                completely hassle-free. From electricians and plumbers to
                carpenters and cleaners, we connect you with trained and verified
                professionals you can trust.
                <br />
                <br />
                Now operating exclusively in{" "}
                <span className="font-semibold">Islamabad</span>, EasyKaam ensures
                you get qualified experts for home repair, installation, and
                maintenance needs.
              </p>

              {/* Features */}
              <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full flex items-center justify-center bg-[#8ac9f4]/20 shrink-0 mt-0.5">
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: themeColor }}
                      />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* ✅ Optimized CTA Button */}
              <motion.button
                onMouseEnter={() => import("../pages/ServicesPage")}
                onClick={() => navigate("/services")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex justify-center mt-8 md:mt-10 px-6 md:px-8 py-3 rounded-xl font-semibold shadow-md transition text-sm sm:text-base"
                style={{ backgroundColor: themeColor, color: "#000" }}
              >
                Explore Our Services →
              </motion.button>
            </div>
          </motion.div>

          {/* Right Images - Only main image visible on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 mb-10 lg:mb-0"
          >
            {/* Main Image - Always visible */}
            <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl">
              <img
                src={about2}
                alt="Service in action"
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[420px] object-cover"
                loading="lazy"
              />

              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow text-sm sm:text-base">
                <p className="font-semibold">Serving Islamabad</p>
              </div>
            </div>

            {/* Floating Image 1 - Only visible on medium screens and above */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -top-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-lg md:rounded-xl overflow-hidden shadow-lg border-4 border-white hidden md:block"
            >
              <img
                src={about1}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Floating Image 2 - Only visible on medium screens and above */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-4 w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-lg md:rounded-xl overflow-hidden shadow-lg border-4 border-white hidden md:block"
            >
              <img
                src={about3}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};