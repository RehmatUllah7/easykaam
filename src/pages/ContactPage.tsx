import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { Header } from "../components/Header";
import { ContactForm } from "../components/ContactForm";
import { ContactInfo } from "../components/ContactInfo";
import contactImg from "../assets/contactus.png";
import { Footer } from "../components/Footer";

export const Contact: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const contactFormRef = useRef<HTMLElement | null>(null);

  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 300], [0, 80]);
  const [roundedY, setRoundedY] = useState(0);

  const themeColor = "#8ac9f4";

  useMotionValueEvent(parallax, "change", (latest) => {
    setRoundedY(Math.round(latest));
  });

  return (
    <div className="w-full h-full bg-gray-50">
      <Header />

      {/* ✅ HERO SECTION */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Parallax Background Image */}
        <motion.img
          src={contactImg}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: `translate3d(0, ${roundedY}px, 0)` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Hero Content */}
        <div className="absolute left-6 sm:left-10 md:left-40 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-6 md:gap-8 max-w-xs sm:max-w-md md:max-w-xl">
          <div className="relative inline-block">
            <div
              className="absolute inset-0 rounded-md -z-10"
              style={{
                background: "rgba(138, 201, 244, 0.6)",
                transform: "skewX(-6deg) translateY(6px)",
                padding: "0.2em 0.4em",
              }}
            />
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Get in Touch With Us
            </p>
          </div>

          {/* ✅ BUTTON → SMOOTH SCROLL TO CONTACT FORM */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => {
                contactFormRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="font-semibold rounded-xl inline-flex items-center justify-center whitespace-nowrap px-6 py-3 text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
              style={{ backgroundColor: themeColor, color: "black" }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* ✅ CONTACT SECTION */}
      <section
        ref={contactFormRef}
        className="container mx-auto px-6 py-20 scroll-mt-24"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

      <Footer />
    </div>
  );
};
