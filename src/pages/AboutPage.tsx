// AboutPage.tsx
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { OurMission } from "../components/OurMission";
import { OurVision } from "../components/OurVision";

import heroImage from "../assets/bs2.jpg";

export const AboutPage: React.FC = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 300], [0, 80]);
  const [roundedY, setRoundedY] = useState(0);
  const navigate = useNavigate();

  useMotionValueEvent(parallax, "change", (latest) => {
    setRoundedY(Math.round(latest));
  });

  const leftText = "Driven by purpose. Powered by people.";
  const themeColor = "#8ac9f4";

  return (
    <div className="w-full h-full">
      {/* Header */}
      <Header />

      {/* Hero Section (Same as Services Style) */}
      <section
        ref={ref}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <motion.img
          src={heroImage}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: `translate3d(0, ${roundedY}px, 0)` }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/30" />

        {/* Left Text + Two Buttons */}
        <div className="absolute left-10 md:left-40 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-6 md:gap-8 max-w-xs sm:max-w-md md:max-w-xl">
          {/* Skew Highlight Text */}
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

          {/* Buttons Row */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => navigate("/contact")}
              className="font-semibold rounded-xl inline-flex items-center justify-center whitespace-nowrap px-5 py-3 text-base sm:text-lg"
              style={{ backgroundColor: themeColor, color: "black" }}
            >
              Our Mission
            </button>

            <button
              onClick={() => navigate("/services")}
              className="font-semibold rounded-xl inline-flex items-center justify-center whitespace-nowrap px-5 py-3 text-base sm:text-lg border bg-white border-white text-black hover:bg-white hover:text-black transition"
            >
              Our Vision
            </button>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <AboutSection />
      <OurMission />
      <OurVision />
      <Footer />
    </div>
  );
};
