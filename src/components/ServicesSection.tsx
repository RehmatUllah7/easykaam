import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import electricianImg from "../assets/electrician.png";
import plumbingImg from "../assets/plumber.png";
import carpenterImg from "../assets/carpenter.png";
import painterImg from "../assets/Outdoor house paint.png";
import cleaningImg from "../assets/Room cleaning.png";

import { Hammer, Plug, PaintRoller, Droplet, Sparkles } from "lucide-react";

interface ServiceType {
  title: string;
  icon: any;
  img: string;
  list: string[];
}

export default function ServicesSection() {
  const theme = "#8ac9f4";
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services: ServiceType[] = [
    {
      title: "Electrician",
      icon: Plug,
      img: electricianImg,
      list: [
        "Electric geyser work",
        "House electrical work",
        "Ceiling fan work",
        "Electric heater work",
        "Automatic washing machine work",
        "Generator work",
        "UPS work",
        "Switch & socket work",
        "Decorative lights / lamps",
        "LCD & LED TV work",
        "Earth meter / Single phase / 3 phase",
        "Short circuit repair",
        "Ceiling wiring work",
      ],
    },
    {
      title: "Plumber",
      icon: Droplet,
      img: plumbingImg,
      list: [
        "Gas geyser work",
        "House plumbing",
        "Bath shower installation",
        "Muslim shower installation",
        "Commode installation / repair",
        "Drain pipe installation",
        "Valve work",
        "Hot & cold water piping",
        "Pipe leakage / replacement",
        "Mixer tap work",
        "Washbasin installation",
        "Water motor work",
        "Water tank cleaning",
        "Oven range service",
        "Kitchen sink work",
        "Automatic washing machine work",
      ],
    },
    {
      title: "Carpenter",
      icon: Hammer,
      img: carpenterImg,
      list: [
        "Wardrobe repair",
        "Furniture repair",
        "General carpenter work",
        "Door lock work",
        "Door installation / repair",
        "Catcher replacement",
        "Furniture polish",
      ],
    },
    {
      title: "Painter",
      icon: PaintRoller,
      img: painterImg,
      list: ["Gray structure paint", "Indoor house paint", "Outdoor house paint"],
    },
    {
      title: "Cleaning Services",
      icon: Sparkles,
      img: cleaningImg,
      list: [
        "Kitchen cleaning",
        "Washroom cleaning",
        "Room cleaning",
        "Window / glass cleaning",
        "Fan cleaning",
        "Floor cleaning",
        "Deep home cleaning",
      ],
    },
  ];

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative py-10 sm:py-14 md:py-20 bg-linear-to-br from-[#eaf6ff] via-white to-[#f3fbff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-14 px-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Our{" "}
            <span className="relative inline-block" style={{ color: theme }}>
              Services
              <span
                className="absolute left-0 -bottom-1 sm:-bottom-2 w-full h-1 sm:h-2 rounded-full opacity-40"
                style={{ backgroundColor: theme }}
              />
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 md:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 px-2">
            Explore our wide range of home services — from electricians and plumbers to carpenters and cleaners, all verified and trusted professionals ready to help.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white shadow-md sm:shadow-lg rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl sm:hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                {/* IMAGE */}
                <div className="relative h-32 sm:h-36 md:h-40 lg:h-44 overflow-hidden">
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    loading="lazy"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-5">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" style={{ color: theme }} />
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  {/* BUTTON WITH ANIMATION */}
                  <motion.button
                    onClick={() => toggle(index)}
                    initial={{
                      background: "transparent",
                      color: theme,
                      borderColor: theme,
                    }}
                    whileHover={{
                      background: theme,
                      color: "#000",
                      scale: 1.03,
                    }}
                    transition={{ duration: 0.25 }}
                    className="w-full py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg sm:rounded-lg border mt-1 sm:mt-2"
                  >
                    {openIndex === index ? "Hide Details" : "View Details"}
                  </motion.button>

                  {/* DROP DOWN LIST */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-3 sm:mt-4 md:mt-5 space-y-1.5 sm:space-y-2 text-gray-700 text-xs sm:text-sm">
                          {service.list.map((item, i) => (
                            <li key={i} className="flex gap-1.5 sm:gap-2 items-start">
                              <span className="mt-0.5" style={{ color: theme }}>•</span>
                              <span className="flex-1">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}