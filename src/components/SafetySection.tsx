import { motion } from "framer-motion";
import shieldVideo from "../assets/safety.mp4";

export const SafetySection = () => {
  const themeColor = "#8ac9f4";

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* MAIN CONTAINER */}
        <div className="relative rounded-2xl overflow-hidden" style={{ backgroundColor: themeColor }}>
          
          {/* FLEX CONTAINER FOR EQUAL HALVES - Reduced height */}
          <div className="flex flex-col lg:flex-row min-h-[500px] md:min-h-[550px]">
            
            {/* LEFT HALF - TEXT (50%) */}
            <div className="flex-1 flex flex-col justify-center py-10 md:py-12 px-8 md:px-12 lg:px-16">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="max-w-md mx-auto lg:mx-0"
              >
                <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6 leading-tight">
                  Your Safety is <span className="text-white">Always First</span>
                </h2>

                <div className="space-y-4 mb-8 ">
                  <p className="font-semibold  md:text-lg opacity-90 text-black leading-relaxed">
                    EasyKaam ensures every task is performed securely with fully verified
                    workers and a trusted monitoring system.
                  </p>
                  <p className=" font-semibold  md:text-lg opacity-90 text-black leading-relaxed">
                    We continuously check quality, reliability, and security to give you
                    a worry-free experience.
                  </p>
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 rounded-xl font-semibold text-base md:text-lg text-black 
                           shadow-xl bg-white hover:bg-gray-50 transition-colors w-fit mt-4"
              >
                Learn More
              </motion.button>
            </div>
            
            {/* RIGHT HALF - VIDEO (50%) */}
            <div className="flex-1 flex items-center justify-center p-4 md:p-6">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="h-full w-full max-w-2xl mx-auto"
              >
                <div className="relative h-full w-full rounded-l-2xl overflow-hidden 
                              shadow-2xl border-4 border-white border-l-0">
                  <video
                    src={shieldVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};