
import React from "react";
import { Header } from "../components/Header";
import { AboutSection } from "../components/AboutSection";
import { motion } from "framer-motion";
import heroImage from "../assets/bs2.jpg"; // Replace with your hero image
import { Working } from "../components/Working";
import { Footer } from "../components/Footer";

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full h-full">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center bg-gray-100">
        <img
          src={heroImage}
          alt="About Hero"
          className="absolute w-full h-full object-cover top-0 left-0"
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-2xl text-white mt-4"
          >
            Learn more about our mission, vision, and team
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />
      <Working />
      <Footer />
    </div>
  );
};
