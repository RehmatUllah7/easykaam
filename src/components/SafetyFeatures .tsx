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

const PHONE_WIDTH_SMALL = "w-[220px]";
const PHONE_WIDTH_MD = "md:w-[280px]";
const PHONE_WIDTH_LG = "lg:w-[320px]";

export const SafetyFeatures = () => {
  const SCREEN_HEIGHT_SMALL = "h-[380px]";
  const SCREEN_HEIGHT_MD = "md:h-[440px]";
  const SCREEN_HEIGHT_LG = "lg:h-[500px]";

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
  const nextSlide = () => { setCurrent((prev) => (prev + 1) % slides.length); setProgress(0); setIsPlaying(true); };
  const prevSlide = () => { setCurrent((prev) => (prev - 1 + slides.length) % slides.length); setProgress(0); setIsPlaying(true); };

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
    <section className="relative py-20 bg-linear-to-br from-[#eaf6ff] via-white to-[#f3fbff] overflow-hidden">
      
      {/* Styled Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
          Safety{" "}
          <span className="relative inline-block" style={{ color: themeColor }}>
            Features
            <span
              className="absolute left-0 -bottom-2 w-full h-2 rounded-full opacity-40"
              style={{ backgroundColor: themeColor }}
            />
          </span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          Connecting homes with trusted professionals — fast, safe, and reliable.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur rounded-3xl p-6 md:p-10 shadow-2xl border border-[#8ac9f4]/30"
        >
          {/* Grid: video left, content right (mirrored spacing of previous Tips) */}
          <div className="grid lg:grid-cols-[2fr_3fr] gap-12 items-start relative min-h-[500px]">

            {/* Left Video (mirrored indentation like right in Tips) */}
            <div className="flex justify-start">
              <div
                className={`relative ${PHONE_WIDTH_SMALL} ${PHONE_WIDTH_MD} ${PHONE_WIDTH_LG}`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className={`relative overflow-hidden rounded-2xl shadow-lg ${SCREEN_HEIGHT_SMALL} ${SCREEN_HEIGHT_MD} ${SCREEN_HEIGHT_LG}`}>
                  <video
                    ref={videoRef}
                    src={currentSlide.video}
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ objectPosition: VIDEO_POSITION }}
                  />

                  {/* Slide info */}
                  <div className="absolute bottom-12 left-0 p-4 flex justify-between items-center text-white w-full">
                    <div>
                    
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-200 rounded-b-2xl overflow-hidden">
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

            {/* Right Content (mirrored indentation like left in Tips) */}
            <div className="flex flex-col justify-between pr-8 space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-snug">
                  {currentSlide.title}
                </h3>
                <p className="text-lg  font-semibold md:text-lg text-gray-800 leading-relaxed mt-4">
                  {currentSlide.text}
                </p>
              </div>

              {/* Control buttons at bottom of content */}
              <div className="flex gap-4 mt-6 justify-start">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-md"
                >
                  <ChevronLeft className="w-6 h-6 text-black" />
                </button>

                <button
                  onClick={togglePlay}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#8ac9f4] text-white hover:scale-105 transition-transform shadow-md"
                >
                  {isPlaying ? (
                    <>
                      <PauseCircle className="w-6 h-6" />
                      <span className="text-base md:text-lg font-medium">Pause</span>
                    </>
                  ) : (
                    <>
                      <PlayCircle className="w-6 h-6" />
                      <span className="text-base md:text-lg font-medium">Play</span>
                    </>
                  )}
                </button>

                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-md"
                >
                  <ChevronRight className="w-6 h-6 text-black" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
