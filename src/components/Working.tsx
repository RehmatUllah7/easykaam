import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import shieldVideo from "../assets/safety.mp4";

export const Working = () => {
  const themeColor = "#8ac9f4";

  return (
    <section className="relative py-8 md:py-12 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER - TITLE + SUBTITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16 px-2"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            How to{" "}
            <span className="relative inline-block" style={{ color: themeColor }}>
              Get Started
              <span
                className="absolute left-0 -bottom-1 sm:-bottom-2 w-full h-1 sm:h-2 rounded-full opacity-40"
                style={{ backgroundColor: themeColor }}
              />
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 md:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 px-2">
            Follow these simple steps to quickly connect with trusted professionals for all your home service needs.
          </p>
        </motion.div>

        <div className="relative rounded-xl md:rounded-2xl overflow-hidden" style={{ backgroundColor: themeColor }}>
          <div className="flex flex-col lg:flex-row min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[550px]">
            {/* LEFT HALF — VIDEO - Hidden on mobile, visible on lg+ */}
            <div className="hidden lg:flex flex-1 items-center justify-center p-4 sm:p-5 md:p-6 order-1 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="h-full w-full max-w-2xl mx-auto"
              >
                <div className="relative h-full w-full rounded-r-2xl overflow-hidden shadow-2xl border-4 border-white border-r-0">
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

            {/* RIGHT HALF — STEPS - Full width on mobile, half width on desktop */}
            <div className="flex-1 flex flex-col justify-center py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 order-2 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="max-w-md mx-auto lg:mx-0 w-full"
              >
                <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-8">
                  {/* STEP 1 */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="shrink-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-md sm:shadow-lg">
                        <span className="font-bold text-lg sm:text-xl md:text-2xl" style={{ color: themeColor }}>1</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-base sm:text-lg md:text-xl text-white mb-1">Download EasyKaam</h3>
                      <p className="font-semibold text-black text-xs sm:text-sm md:text-base leading-relaxed">
                        Install the EasyKaam app and sign up using your mobile number to get started.
                      </p>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="shrink-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-md sm:shadow-lg">
                        <span className="font-bold text-lg sm:text-xl md:text-2xl" style={{ color: themeColor }}>2</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-base sm:text-lg md:text-xl text-white mb-1">Choose a Service</h3>
                      <p className="font-semibold text-black text-xs sm:text-sm md:text-base leading-relaxed">
                        Pick the service you need—electrician, plumber, AC technician, carpenter, handyman, and more.
                      </p>
                    </div>
                  </div>

                  {/* STEP 3 */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="shrink-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-md sm:shadow-lg">
                        <span className="font-bold text-lg sm:text-xl md:text-2xl" style={{ color: themeColor }}>3</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-base sm:text-lg md:text-xl text-white mb-1">Post Your Job Request</h3>
                      <p className="font-semibold text-black text-xs sm:text-sm md:text-base leading-relaxed">
                        Describe the task, set your preferred time, and receive responses from verified professionals.
                      </p>
                    </div>
                  </div>

                  {/* STEP 4 */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="shrink-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-md sm:shadow-lg">
                        <span className="font-bold text-lg sm:text-xl md:text-2xl" style={{ color: themeColor }}>4</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-base sm:text-lg md:text-xl text-white mb-1">Choose the Best Worker</h3>
                      <p className="font-semibold text-black text-xs sm:text-sm md:text-base leading-relaxed">
                        Review each professional's price, ratings, and past reviews, then select the one that fits your needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6">
                  <Link to="/download" className="block w-full sm:w-fit">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base md:text-lg text-black shadow-lg sm:shadow-xl bg-white hover:bg-gray-50 transition-colors w-full sm:w-fit"
                    >
                      Download App
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};