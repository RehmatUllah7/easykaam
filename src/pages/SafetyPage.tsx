import { Header } from "../components/Header";
import { motion } from "framer-motion";
import { useRef } from "react";
import safetyBg from "../assets/bs1.jpg"; // your image
import { Tips } from "../components/Tips";
import { SafetyFeatures } from "../components/SafetyFeatures ";
import { Footer } from "../components/Footer";

export default function SafetyPage() {
  const safetyRef = useRef<HTMLDivElement>(null);
  const tipsRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER */}
      <Header />

      {/* SAFETY HERO */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
        {/* Background Image */}
        <motion.img
          src={safetyBg}
          alt="Safety Background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/30" />

        {/* LEFT SIDE TEXT */}
        <div className="absolute left-8 md:left-40 top-1/2 -translate-y-1/2 z-30 max-w-md flex flex-col gap-6">
          <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight">
            Safety You Can Trust
            <br />
            Protection You Deserve
          </h1>
        </div>

        {/* BUTTONS AT BOTTOM */}
        <div className="absolute bottom-10 left-8 md:left-40 z-30 flex gap-4">
          <button
            className="font-semibold rounded-xl inline-flex items-center justify-center px-6 py-3 text-lg bg-[#8ac9f4] text-black"
            onClick={() => scrollToRef(safetyRef)}
          >
            Safety Features
          </button>
          <button
            className="font-semibold rounded-xl inline-flex items-center justify-center px-6 py-3 text-lg bg-white text-black border border-gray-300"
            onClick={() => scrollToRef(tipsRef)}
          >
            Safety Tips
          </button>
        </div>
      </section>

      {/* SAFETY FEATURES SECTION */}
      <div ref={safetyRef}>
        <SafetyFeatures />
      </div>

      {/* TIPS SECTION */}
      <div ref={tipsRef}>
        <Tips />
      </div>
      <Footer   />
    </div>
  );
}
