// ServicesPage.tsx
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import ServicesSection from "../components/ServicesSection";
import { Footer } from "../components/Footer";

import bgImage from "../assets/2048 (3).webp";

export const ServicesPage: React.FC = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 300], [0, 80]);
  const [roundedY, setRoundedY] = useState(0);
  const navigate = useNavigate();

  useMotionValueEvent(parallax, "change", (latest) => {
    setRoundedY(Math.round(latest));
  });

  const leftText = "Quality services, right where you need them.";
  const buttonText = "Download the App";
  const themeColor = "#8ac9f4";

  return (
    <div className="w-full h-full">
      <Header />

      {/* Hero Section */}
      <section
        ref={ref}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <motion.img
          src={bgImage}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: `translate3d(0, ${roundedY}px, 0)` }}
        />

        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0 bg-linear-to-b from-black/5 to-black/20" />

        {/* Left Text + Button */}
        <div className="absolute left-10 md:left-40 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-6 md:gap-8 max-w-xs sm:max-w-md md:max-w-xl">
          <div className="relative inline-block">
            <div
              className="absolute inset-0 rounded-md -z-10"
              style={{
                background: "rgba(138, 201, 244, 0.60)",
                transform: "skewX(-6deg) translateY(6px)",
                padding: "0.2em 0.4em",
              }}
            ></div>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              {leftText}
            </p>
          </div>

          <button
            onClick={() => navigate("/download")} // app download link
            className="mt-4 sm:mt-6 font-semibold rounded-xl inline-flex items-center justify-center whitespace-nowrap px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg md:text-xl"
            style={{ backgroundColor: themeColor, color: "black", width: "fit-content" }}
          >
            {buttonText}
          </button>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />
      <Footer />
    </div>
  );
};
