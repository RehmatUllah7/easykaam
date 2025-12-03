import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import bgImage from "../assets/bs1.jpg";
import bgImage2 from "../assets/bs2.jpg";
import bgImage3 from "../assets/bs1.jpg";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 300], [0, 80]);

  const [roundedY, setRoundedY] = useState(0);
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [bgImage, bgImage2, bgImage3];
  const [loaded, setLoaded] = useState(false);
const navigate = useNavigate();

  useEffect(() => {
    Promise.all(
      slides.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
          })
      )
    ).then(() => setLoaded(true));
  }, []);

  useMotionValueEvent(parallax, "change", (latest) => {
    setRoundedY(Math.round(latest));
  });

  useEffect(() => {
    const handleScroll = () => {
      setProgress((prev) => Math.min(prev + 1, 100));
    };
    window.addEventListener("scroll", handleScroll);

    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 0.5, 100));
    }, 30);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setProgress(0);
      }, 200);
    }
  }, [progress]);

  if (!loaded) return null;

  const words = ["On-Time", "Hassle-Free", "Reliable"];
  const themeColor = "#8ac9f4";

  const leftTexts = [
    "Service Within 60 Minutes – Fast, Efficient, Done!",
    "Quick Reworks, Done Right – No Hassle, No Delay",
    "Trusted Professionals Deliver Quality Work Every Time"
  ];

  const slideButtons = [
  {
    text: "Get the App",
    onClick: () => navigate("/"),
  },
  {
    text: "Check Services",
    onClick: () => navigate("/services"),
  },
  {
    text: "View Details",
    onClick: () => navigate("/about"), 
  },
];

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden top-0"
    >
      {slides.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          className="absolute inset-0 w-full h-full object-cover"
          initial={false}
          animate={{
            opacity: i === current ? 1 : 0,
            scale: i === current ? 1 : 1.02,
          }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], opacity: { duration: 1.2 } }}
          style={{ transform: `translate3d(0, ${roundedY}px, 0)` }}
        />
      ))}

      <div className="absolute inset-0 bg-black/5" />
      <div className="absolute inset-0 bg-linear-to-b from-black/5 to-black/20" />

  {/* LEFT TEXT */}
<div className="absolute left-10 md:left-40 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-6 md:gap-8 max-w-xs sm:max-w-md md:max-w-xl">

  <div className="relative inline-block">
    {/* Highlight background */}
    <div
      className="absolute inset-0 rounded-md -z-10"
      style={{
        background: "rgba(138, 201, 244, 0.60)", // light blue highlight
        transform: "skewX(-6deg) translateY(6px)", // slight tilt like marker
        padding: "0.2em 0.4em",
      }}
    ></div>

    <p
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight wrap-break-word relative"
      style={{ wordSpacing: "0.2rem" }}
    >
      {(() => {
        const fullText = leftTexts[current];
        const midpoint = Math.ceil(fullText.length / 2);
        const firstHalf = fullText.slice(0, midpoint);
        const secondHalf = fullText.slice(midpoint);
        return (
          <>
            <span className="text-white">{firstHalf}</span>
            <span className="text-white">{secondHalf}</span>
          </>
        );
      })()}
    </p>
  </div>

  <button
    onClick={slideButtons[current].onClick}
    className="mt-4 sm:mt-6 font-semibold rounded-xl inline-flex items-center justify-center whitespace-nowrap px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg md:text-xl"
    style={{
      backgroundColor: themeColor,
      color: "black",
      width: "fit-content",
      maxWidth: "100%",
    }}
  >
    {slideButtons[current].text}
  </button>
</div>



      {/* RIGHT WORDS */}
      <div className="hidden lg:flex absolute right-10 md:right-40 top-1/2 -translate-y-1/2 z-30 flex-col gap-4 md:gap-8">
        {words.map((word, i) => {
          const isActive = i === current;
          return (
            <p
              key={i}
              className="text-xl sm:text-2xl md:text-3xl font-bold"
              style={{
                color: isActive ? themeColor : "white",
                background: isActive
                  ? `linear-gradient(to right, ${themeColor} 0%, ${themeColor} ${progress}%, transparent ${progress}%)`
                  : "none",
                WebkitBackgroundClip: isActive ? "text" : "unset",
                WebkitTextFillColor: isActive ? "black" : undefined,
                transition: "background 0.1s linear, color 0.3s ease",
              }}
            >
              {word}
            </p>
          );
        })}
      </div>
    </section>
  );
};
