import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import about1 from "../assets/bs1.jpg";
import about2 from "../assets/bs2.jpg";
import about3 from "../assets/bs1.jpg";

export const AboutSection = () => {
  const themeColor = "#8ac9f4";

  const features: string[] = [
    "Verified & Background Checked Professionals",
    "Service Within 60 Minutes",
    "Agreed Pricing",
    "Satisfaction Guaranteed",
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#8ac9f4]/20 rounded-full blur-[140px]" />
        <div className="absolute -bottom-20 -right-20 w-[360px] h-[360px] bg-[#4a90e2]/20 rounded-full blur-[140px]" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          About{" "}
          <span className="relative inline-block" style={{ color: themeColor }}>
            EasyKaam
            <span
              className="absolute left-0 -bottom-2 w-full h-2 rounded-full opacity-40"
              style={{ backgroundColor: themeColor }}
            />
          </span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          Connecting homes with trusted professionals — fast, safe, and reliable.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="relative bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-gray-100">
              <p className="text-gray-700 text-lg leading-relaxed">
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
              <div className="mt-8 space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full flex items-center justify-center bg-[#8ac9f4]/20">
                      <CheckCircle className="w-4 h-4" style={{ color: themeColor }} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex mt-10 px-8 py-3 rounded-xl font-semibold shadow-md transition"
                style={{ backgroundColor: themeColor, color: "#000" }}
              >
                Explore Our Services →
              </motion.a>
            </div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={about2}
                alt="Service in action"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <p className="font-semibold">Serving Islamabad</p>
                <p className="text-sm text-gray-600">Since 2025</p>
              </div>
            </div>

            {/* Floating Images */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -top-6 -left-6 w-40 h-40 rounded-xl overflow-hidden shadow-lg border-4 border-white"
            >
              <img src={about1} className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-10 -right-6 w-48 h-48 rounded-xl overflow-hidden shadow-lg border-4 border-white"
            >
              <img src={about3} className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};