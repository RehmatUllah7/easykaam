import { motion } from "framer-motion";
import about1 from "../assets/bs1.jpg";
import about2 from "../assets/bs2.jpg";
import about3 from "../assets/bs1.jpg";

export const AboutSection = () => {
  const themeColor = "#8ac9f4";

  return (
    <section className="relative bg-white py-28 overflow-hidden">
      
      {/* Soft Glowing Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8ac9f4]/20 blur-3xl rounded-full opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8ac9f4]/10 blur-2xl rounded-full opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-40 grid md:grid-cols-2 gap-20 relative z-20">

        {/* LEFT TEXT */}
        <div className="flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          >
            About <span style={{ color: themeColor }}>EasyKaam</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed max-w-xl"
          >
            EasyKaam makes hiring skilled workers effortless, secure, and
            completely transparent. Our <span className="font-semibold">escrow model</span>
            ensures your payment stays safe and is released only after the job
            is completed exactly as promised.
            <br /><br />
            Now operating exclusively in{" "}
            <span className="font-semibold">Islamabad</span>,
            EasyKaam connects you with trained, verified, and reliable
            professionals for all your home and technical services.
          </motion.p>

          <motion.a
            href="/services"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 inline-block px-8 py-3 rounded-xl shadow-md font-semibold text-black hover:opacity-90"
            style={{ backgroundColor: themeColor }}
          >
            Explore Our Services
          </motion.a>
        </div>

        {/* RIGHT SIDE IMAGE COLLAGE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative grid grid-cols-2 gap-4"
        >
          {/* Top-left small image */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src={about1} className="w-full h-48 object-cover" />
          </div>

          {/* Tall image */}
          <div className="row-span-2 rounded-2xl overflow-hidden shadow-lg">
            <img src={about2} className="w-full h-full object-cover" />
          </div>

          {/* Bottom-left image */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src={about3} className="w-full h-48 object-cover" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
