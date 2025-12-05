import { motion } from "framer-motion";
import visionImage from "../assets/bs1.jpg"; // Replace with your vision image
import { useNavigate } from "react-router-dom";

export const OurVision = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              FAQ
            </span>
        {/* MAIN CONTAINER */}
        <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl">
          
          {/* FLEX CONTAINER */}
          <div className="flex flex-col lg:flex-row min-h-[500px] md:min-h-[550px]">
            
            {/* LEFT HALF - IMAGE */}
            <div className="flex-1 flex items-center justify-center p-4 md:p-6 order-last lg:order-first">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="h-full w-full max-w-2xl mx-auto"
              >
                <div className="relative h-full w-full rounded-r-2xl overflow-hidden shadow-2xl border-4 border-gray-200 border-r-0">
                  <img
                    src={visionImage}
                    alt="Our Vision"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* RIGHT HALF - TEXT */}
            <div className="flex-1 flex flex-col justify-center py-10 md:py-12 px-8 md:px-12 lg:px-16">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="max-w-md mx-auto lg:mx-0"
              >
                <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6 leading-tight">
                  Our Vision
                </h2>

                <div className="space-y-4 mb-8">
                  <p className="font-semibold md:text-lg text-gray-800 leading-relaxed">
                    We envision a world where every household can access trusted professionals with ease, 
                    ensuring convenience, reliability, and peace of mind for all your home service needs.
                  </p>
                  <p className="font-semibold md:text-lg text-gray-800 leading-relaxed">
                    Our goal is to become the most trusted platform for connecting people with verified service providers, 
                    creating a safer and more efficient home service experience.
                  </p>
                </div>
              </motion.div>

              <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => navigate("/contact")}
      className="px-8 py-3 rounded-xl font-semibold text-base md:text-lg text-white 
                 shadow-xl bg-black hover:bg-gray-800 transition-colors w-fit mt-4"
    >
      Contact Us
    </motion.button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
