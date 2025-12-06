import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  PlayCircle,
  PauseCircle,
  ChevronLeft,
  ChevronRight,
  
} from "lucide-react";

import tipsVideo1 from "../assets/ec.mp4";
import tipsVideo2 from "../assets/safety.mp4";
import tipsVideo3 from "../assets/ec.mp4";

const VIDEO_POSITION = "top center";

const PHONE_WIDTH_SMALL = "w-[220px]";
const PHONE_WIDTH_MD = "md:w-[280px]";
const PHONE_WIDTH_LG = "lg:w-[320px]";

export const Tips = () => {
  const SCREEN_HEIGHT_SMALL = "h-[380px]";
  const SCREEN_HEIGHT_MD = "md:h-[440px]";
  const SCREEN_HEIGHT_LG = "lg:h-[500px]";

  const themeColor = "#8ac9f4";

  const slides = [
    {
      video: tipsVideo1,
      title: "Choose Worker",
      text: "Always check how many tasks they’ve finished and what rating they have before accepting.",
      
    },
    {
      video: tipsVideo2,
      title: "Verify Before Entry",
      text: "Always check the worker’s ID and profile before letting them inside your home.",
    
    },
    {
      video: tipsVideo3,
      title: "In-App Chat & Calls",
      text: "Avoid sharing personal phone numbers. Keep all communication within the app for safety tracking.",
     
    },
  ];

  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
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
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 0.5;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isPlaying, isHovering]);

  useEffect(() => setProgress(0), [current]);

  const currentSlide = slides[current];
  

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      
      {/* Styled Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
          Safety{" "}
          <span className="relative inline-block" style={{ color: themeColor }}>
            Tips
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
          className="bg-[#8ac9f4] backdrop-blur rounded-3xl p-6 md:p-10 shadow-2xl "
        >
          {/* Grid: left content larger than video */}
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start relative min-h-[500px]">

            {/* Left Content */}
            <div className="flex flex-col justify-between relative space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-snug">
                  {currentSlide.title}
                </h3>
                <p className="text-lg  font-semibold md:text-lg text-gray-800 leading-relaxed mt-4">
                  {currentSlide.text}
                </p>
              </div>

              {/* Control buttons at bottom of left content */}
              <div className="flex gap-4 mt-6 justify-start">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-md"
                >
                  <ChevronLeft className="w-6 h-6 text-black" />
                </button>

                <button
                  onClick={togglePlay}
                  className="flex rounded-xl font-semibold text-base md:text-lg text-white 
                 shadow-xl bg-black hover:bg-gray-800 items-center gap-3 px-4 py-2  transition-transform "
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

            {/* Right Video */}
            <div className="relative">
              <div
                className={`relative ${PHONE_WIDTH_SMALL} ${PHONE_WIDTH_MD} ${PHONE_WIDTH_LG} mx-auto`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl shadow-lg ${SCREEN_HEIGHT_SMALL} ${SCREEN_HEIGHT_MD} ${SCREEN_HEIGHT_LG}`}
                >
                  {/* Video now normal brightness */}
                  <video
                    ref={videoRef}
                    src={currentSlide.video}
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ objectPosition: VIDEO_POSITION }}
                  />

                  {/* Bottom-right slide word & icon */}
                  <div className="absolute bottom-12 right-0 p-4 flex justify-between items-center text-white">
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

          </div>
        </motion.div>
      </div>
    </section>
  );
};
