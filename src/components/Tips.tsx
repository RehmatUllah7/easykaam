import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { PlayCircle, PauseCircle, ChevronLeft, ChevronRight, Shield, Zap, Flame } from "lucide-react";

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

  const slides = [
    {
      video: tipsVideo1,
      title: "Smart Home Safety Tips",
      text: "At EasyKaam, your safety is our priority. Follow these expert tips to maintain a safe and efficient home environment.",
      word: "Excellence",
      icon: Shield,
    },
    {
      video: tipsVideo2,
      title: "Electrical Safety Tips",
      text: "Ensure all electrical installations are safe and up to code to prevent accidents. Regular maintenance saves lives.",
      word: "Innovation",
      icon: Zap,
    },
    {
      video: tipsVideo3,
      title: "Fire Safety Tips",
      text: "Install smoke detectors and keep fire extinguishers handy for maximum protection. Prevention is key.",
      word: "Future",
      icon: Flame,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
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
  const Icon = currentSlide.icon;

  return (
    <section className="py-20 bg-white text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-200"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left Content - Top Aligned */}
            <div className="space-y-5">
              <h3 className="text-2xl md:text-3xl font-bold">{currentSlide.title}</h3>
              <p className="text-gray-700 leading-relaxed">{currentSlide.text}</p>
            </div>

            {/* Right Video */}
            <div className="relative">
              <div
                className={`relative ${PHONE_WIDTH_SMALL} ${PHONE_WIDTH_MD} ${PHONE_WIDTH_LG} mx-auto`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Video Screen */}
                <div className={`relative overflow-hidden rounded-2xl shadow-lg ${SCREEN_HEIGHT_SMALL} ${SCREEN_HEIGHT_MD} ${SCREEN_HEIGHT_LG}`}>
                  <video
                    ref={videoRef}
                    src={currentSlide.video}
                    autoPlay={isPlaying}
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover brightness-110"
                    style={{ objectPosition: VIDEO_POSITION }}
                  />
                  <div className="absolute inset-0 bg-black/20" />

                  {/* Slide info on video */}
                  <div className="absolute bottom-12 left-0 right-0 p-4 flex justify-between items-center text-white">
                    <div>
                      <h4 className="font-bold">{currentSlide.word}</h4>
                      <p className="text-sm opacity-90">Safety Tips</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Progress bar below video */}
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

          {/* Controls at Bottom */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={togglePlay}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#8ac9f4] text-white hover:scale-105 transition-transform shadow-md"
            >
              {isPlaying ? <PauseCircle className="w-5 h-5" /> : <PlayCircle className="w-5 h-5" />}
              <span>{isPlaying ? "Pause" : "Play"}</span>
            </button>

            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          </div>

         
        </motion.div>
      </div>
    </section>
  );
};
