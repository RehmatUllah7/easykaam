import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import shieldVideo from "../assets/safety.mp4";

export const Working = () => {
  const themeColor = "#8ac9f4";

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* SECTION HEADER - NOW OUTSIDE THE CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 leading-tight">
            How to{" "}
            <span 
              className="px-4 py-2 rounded-xl"
              style={{ backgroundColor: themeColor, color: "white" }}
            >
              get started
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Follow these simple steps to find the perfect professional for your needs
          </p>
        </motion.div>

        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ backgroundColor: themeColor }}
        >
          <div className="flex flex-col lg:flex-row min-h-[500px] md:min-h-[550px]">
            
            {/* LEFT HALF — VIDEO */}
            <div className="flex-1 flex items-center justify-center p-4 md:p-6">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="h-full w-full max-w-2xl mx-auto"
              >
                <div
                  className="relative h-full w-full rounded-r-2xl overflow-hidden 
                             shadow-2xl border-4 border-white border-r-0"
                >
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

            {/* RIGHT HALF — STEPS WITH FOCUSED NUMBERS */}
            <div className="flex-1 flex flex-col justify-center py-10 md:py-12 px-8 md:px-12 lg:px-16">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="max-w-md mx-auto lg:mx-0"
              >
                <div className="space-y-6 mb-8">
                  
                  {/* STEP 1 */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <span className="font-bold text-xl md:text-2xl" style={{ color: themeColor }}>1</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg md:text-xl text-white mb-1">
                        Download EasyKaam
                      </h3>
                      <p className="font-semibold text-black leading-relaxed">
                        Install the EasyKaam app and sign up using your mobile number to get started.
                      </p>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <span className="font-bold text-xl md:text-2xl" style={{ color: themeColor }}>2</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg md:text-xl text-white mb-1">
                        Choose a Service
                      </h3>
                      <p className="font-semibold text-black leading-relaxed">
                        Select your city (Islamabad) and pick the service you need—electrician, plumber,
                        AC technician, carpenter, handyman, and more.
                      </p>
                    </div>
                  </div>

                  {/* STEP 3 */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <span className="font-bold text-xl md:text-2xl" style={{ color: themeColor }}>3</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg md:text-xl text-white mb-1">
                        Post Your Job Request
                      </h3>
                      <p className="font-semibold text-black leading-relaxed">
                        Describe the task, set your preferred time, and receive responses from verified professionals.
                      </p>
                    </div>
                  </div>

                  {/* STEP 4 */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <span className="font-bold text-xl md:text-2xl" style={{ color: themeColor }}>4</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg md:text-xl text-white mb-1">
                        Choose the Best Worker
                      </h3>
                      <p className="font-semibold text-black leading-relaxed">
                        Review each professional's price, ratings, and past reviews, then select the one that fits your needs.
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>

              <Link to="/download">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3 rounded-xl font-semibold text-base md:text-lg text-black 
                             shadow-xl bg-white hover:bg-gray-50 transition-colors w-fit mt-4"
                >
                  Download App
                </motion.button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};