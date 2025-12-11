import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  PlayCircle,
  PauseCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import safetyVideo1 from "../assets/ec.mp4";
import safetyVideo2 from "../assets/safety.mp4";
import safetyVideo3 from "../assets/ec.mp4";

const VIDEO_POSITION = "top center";

const PHONE_WIDTH_SMALL = "w-[160px] sm:w-[180px]";
const PHONE_WIDTH_MD = "md:w-[220px]";
const PHONE_WIDTH_LG = "lg:w-[280px] xl:w-[320px]";

export const SafetyFeatures = () => {
  const SCREEN_HEIGHT_SMALL = "h-[220px] sm:h-[250px]";
  const SCREEN_HEIGHT_MD = "md:h-[320px]";
  const SCREEN_HEIGHT_LG = "lg:h-[400px] xl:h-[500px]";

  const themeColor = "#8ac9f4";

  const slides = [
    {
      video: safetyVideo1,
      title: "Emergency Contact",
      text: "Choose a trusted person from your contacts. If anything goes wrong, they can call or reach you immediately.",
    },
    {
      video: safetyVideo2,
      title: "Call Emergency",
      text: "Quick access to ambulance, police or fire brigade from inside the app. Just tap once and help is on the way.",
    },
    {
      video: safetyVideo3,
      title: "Report Issue",
      text: "Tell us if something feels unsafe or suspicious. Our team reviews it instantly to keep everyone secure.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.play();
    else videoRef.current.pause();
  }, [isPlaying, current]);

  const togglePlay = () => setIsPlaying((prev) => !prev);
  const nextSlide = () => { 
    setCurrent((prev) => (prev + 1) % slides.length); 
    setProgress(0); 
    setIsPlaying(true); 
  };
  const prevSlide = () => { 
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length); 
    setProgress(0); 
    setIsPlaying(true); 
  };

  useEffect(() => {
    if (!isPlaying || isHovering) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { nextSlide(); return 0; }
        return prev + 0.5;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [isPlaying, isHovering]);

  useEffect(() => setProgress(0), [current]);

  const currentSlide = slides[current];

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-linear-to-br from-[#eaf6ff] via-white to-[#f3fbff] overflow-hidden">
      {/* Styled Heading */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
          Safety{" "}
          <span className="relative inline-block" style={{ color: themeColor }}>
            Features
            <span
              className="absolute left-0 -bottom-1 sm:-bottom-2 w-full h-1 sm:h-2 rounded-full opacity-40"
              style={{ backgroundColor: themeColor }}
            />
          </span>
        </h2>
        <p className="mt-2 sm:mt-3 md:mt-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-600 px-2 sm:px-4">
          Connecting homes with trusted professionals — fast, safe, and reliable.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-md sm:shadow-lg md:shadow-xl lg:shadow-2xl border border-[#8ac9f4]/20"
        >
          {/* Side-by-side layout for all screen sizes */}
          <div className="flex flex-row items-start gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-12 min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[400px]">
            
            {/* Video Section */}
            <div className="shrink-0">
              <div
                className={`relative ${PHONE_WIDTH_SMALL} ${PHONE_WIDTH_MD} ${PHONE_WIDTH_LG}`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className={`relative overflow-hidden rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl shadow-sm sm:shadow-md md:shadow-lg ${SCREEN_HEIGHT_SMALL} ${SCREEN_HEIGHT_MD} ${SCREEN_HEIGHT_LG}`}>
                  <video
                    ref={videoRef}
                    src={currentSlide.video}
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ objectPosition: VIDEO_POSITION }}
                  />

                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 md:h-2 bg-gray-200 rounded-b-md sm:rounded-b-lg md:rounded-b-xl lg:rounded-b-2xl overflow-hidden">
                    <motion.div
                      className="h-full bg-[#8ac9f4]"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col justify-between min-h-[220px] sm:min-h-[250px]">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-black leading-tight sm:leading-snug line-clamp-2">
                  {currentSlide.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-medium leading-relaxed mt-2 sm:mt-3 md:mt-4 line-clamp-3 sm:line-clamp-4">
                  {currentSlide.text}
                </p>
              </div>

              {/* Control buttons */}
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6">
                <button
                  onClick={prevSlide}
                  className="p-2 sm:p-2.5 md:p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-sm sm:shadow-md shrink-0"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
                </button>

                <button
                  onClick={togglePlay}
                  className="flex items-center gap-1.5 sm:gap-2 md:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-lg bg-[#8ac9f4] text-white hover:scale-105 transition-transform shadow-sm sm:shadow-md flex-1 sm:flex-initial justify-center min-w-[100px]"
                >
                  {isPlaying ? (
                    <>
                      <PauseCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">Pause</span>
                    </>
                  ) : (
                    <>
                      <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">Play</span>
                    </>
                  )}
                </button>

                <button
                  onClick={nextSlide}
                  className="p-2 sm:p-2.5 md:p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-sm sm:shadow-md shrink-0"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};