// Contact.tsx
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import contactImg from "../assets/bs1.jpg"; // Hero Image

export const Contact: React.FC = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 300], [0, 80]);
  const [roundedY, setRoundedY] = useState(0);
  const navigate = useNavigate();
  const themeColor = "#8ac9f4";

  useMotionValueEvent(parallax, "change", (latest) => {
    setRoundedY(Math.round(latest));
  });

  return (
    <div className="w-full h-full bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        ref={ref}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <motion.img
          src={contactImg}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: `translate3d(0, ${roundedY}px, 0)` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Left Text + Button */}
        <div className="absolute left-10 md:left-40 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-6 md:gap-8 max-w-xs sm:max-w-md md:max-w-xl">
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

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => navigate("#contact-form")}
              className="font-semibold rounded-xl inline-flex items-center justify-center whitespace-nowrap px-5 py-3 text-base sm:text-lg shadow-lg hover:shadow-xl transition"
              style={{ backgroundColor: themeColor, color: "black" }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgba(138,201,244,0.15)]"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Send Us a Message</h2>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition shadow-md"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgba(138,201,244,0.15)] space-y-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Information</h2>
            <div className="flex items-start gap-4">
              <span className="text-blue-500 text-2xl mt-1">📍</span>
              <div>
                <p className="font-semibold text-gray-700">Address</p>
                <p className="text-gray-600">123 EasyKaam Street, City, Country</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-blue-500 text-2xl mt-1">📞</span>
              <div>
                <p className="font-semibold text-gray-700">Phone</p>
                <p className="text-gray-600">+123 456 7890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-blue-500 text-2xl mt-1">✉️</span>
              <div>
                <p className="font-semibold text-gray-700">Email</p>
                <p className="text-gray-600">support@easykaam.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-blue-500 text-2xl mt-1">⏰</span>
              <div>
                <p className="font-semibold text-gray-700">Working Hours</p>
                <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
