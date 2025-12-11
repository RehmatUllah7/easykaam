import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import shieldVideo from "../assets/safety.mp4";

export const SafetySection = () => {
  const themeColor = "#8ac9f4";

  return (
    <section className="relative py-8 md:py-12 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN CONTAINER */}
        <div className="relative rounded-xl md:rounded-2xl overflow-hidden" style={{ backgroundColor: themeColor }}>
          {/* FLEX CONTAINER */}
          <div className="flex flex-col lg:flex-row min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[500px] xl:min-h-[550px]">
            {/* LEFT HALF - TEXT - Takes full width on mobile, half on desktop */}
            <div className="flex-1 flex flex-col justify-center py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 order-1 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="max-w-md mx-auto lg:mx-0 w-full"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-4 sm:mb-5 md:mb-6 leading-tight">
                  Your Safety is <span className="text-white">Always First</span>
                </h2>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <p className="font-semibold text-black text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
                    EasyKaam ensures every task is performed securely with fully verified
                    workers and a trusted monitoring system.
                  </p>
                  <p className="font-semibold text-black text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
                    We continuously check quality, reliability, and security to give you
                    a worry-free experience.
                  </p>
                </div>

                {/* LEARN MORE → SAFETY PAGE */}
                <div className="mt-4 sm:mt-6">
                  <Link to="/safety" className="block w-full sm:w-fit">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base md:text-lg text-black 
                               shadow-lg md:shadow-xl bg-white hover:bg-gray-50 transition-colors w-full sm:w-fit"
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* RIGHT HALF - VIDEO - Hidden on mobile, visible on lg+ */}
            <div className="hidden lg:flex flex-1 items-center justify-center p-4 sm:p-5 md:p-6 order-2 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
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