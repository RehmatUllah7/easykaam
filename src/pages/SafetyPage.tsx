import { Header } from "../components/Header";
import { motion } from "framer-motion";
import { useRef } from "react";
import safetyBg from "../assets/download1.jpg";
import { Tips } from "../components/Tips";
import { SafetyFeatures } from "../components/SafetyFeatures ";
import { Footer } from "../components/Footer";

export default function SafetyPage() {
  const safetyRef = useRef<HTMLDivElement | null>(null);
  const tipsRef = useRef<HTMLDivElement | null>(null);

  const themeColor = "#8ac9f4";

  const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;

    window.scrollTo({
      top: ref.current.offsetTop - 80,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* ✅ HEADER */}
      <Header />

      {/* ✅ HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <motion.img
          src={safetyBg}
          alt="Safety Background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* ✅ HERO CONTENT — SAME AS CONTACT PAGE */}
        <div className="absolute left-6 sm:left-10 md:left-40 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-6 md:gap-8 max-w-xs sm:max-w-md md:max-w-xl">
          {/* Highlighted Heading */}
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
              Safety You Can Trust
              <br />
              Protection You Deserve
            </p>
          </div>

          {/* ✅ BUTTONS */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => scrollToRef(safetyRef)}
              className="font-semibold rounded-xl inline-flex items-center justify-center whitespace-nowrap px-6 py-3 text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
              style={{ backgroundColor: themeColor, color: "black" }}
            >
              Safety Features
            </button>

            <button
              onClick={() => scrollToRef(tipsRef)}
              className="font-semibold rounded-xl inline-flex items-center justify-center whitespace-nowrap px-6 py-3 text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all bg-white text-black border border-gray-300"
            >
              Safety Tips
            </button>
          </div>
        </div>
      </section>

      {/* ✅ SAFETY FEATURES SECTION */}
      <section ref={safetyRef} className="scroll-mt-24">
        <SafetyFeatures />
      </section>

      {/* ✅ TIPS SECTION */}
      <section ref={tipsRef} className="scroll-mt-24">
        <Tips />
      </section>

      {/* ✅ FOOTER */}
      <Footer />
    </div>
  );
}
