import { motion } from "framer-motion";
import visionImage from "../assets/bs1.jpg"; // Replace with your vision image
import { useNavigate } from "react-router-dom";

export const OurVision = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-10 md:py-16 lg:py-20 bg-linear-to-br from-[#eaf6ff] via-white to-[#f3fbff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN CONTAINER */}
        <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-white shadow-lg md:shadow-xl">
          {/* FLEX CONTAINER */}
          <div className="flex flex-col lg:flex-row min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[550px]">
            {/* LEFT HALF - IMAGE - Mobile: Bottom, Desktop: Left */}
            <div className="flex-1 flex items-center justify-center p-4 sm:p-5 md:p-6 order-2 lg:order-first">
              <motion.div
                initial={{ opacity: 0, y: 20, x: 0 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="h-full w-full max-w-2xl mx-auto"
              >
                <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-full w-full rounded-xl md:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl border-4 border-gray-200 lg:border-r-0">
                  <img
                    src={visionImage}
                    alt="Our Vision"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>

            {/* RIGHT HALF - TEXT - Mobile: Top, Desktop: Right */}
            <div className="flex-1 flex flex-col justify-center py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 order-1 lg:order-last">
              <motion.div
                initial={{ opacity: 0, y: -20, x: 0 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="max-w-md mx-auto lg:mx-0 w-full"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-4 sm:mb-5 md:mb-6 leading-tight">
                  Our Vision
                </h2>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <p className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
                    We envision a world where every household can access trusted professionals with ease, 
                    ensuring convenience, reliability, and peace of mind for all your home service needs.
                  </p>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
                    Our goal is to become the most trusted platform for connecting people with verified service providers, 
                    creating a safer and more efficient home service experience.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate("/contact")}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base md:text-lg text-white 
                           shadow-lg md:shadow-xl bg-black hover:bg-gray-800 transition-colors w-full sm:w-fit mt-4"
                >
                  Contact Us
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};