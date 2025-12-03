import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import electricianImg from "../assets/bs1.jpg";
import plumbingImg from "../assets/bs2.jpg";
import carpenterImg from "../assets/bs1.jpg";
import painterImg from "../assets/bs2.jpg";
import cleaningImg from "../assets/bs1.jpg";

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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our{" "}
            <span className="relative inline-block" style={{ color: theme }}>
              Services
              <span
                className="absolute left-0 -bottom-2 w-full h-2 rounded-full opacity-40"
                style={{ backgroundColor: theme }}
              />
            </span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            Explore our wide range of home services — from electricians and plumbers to carpenters and cleaners, all verified and trusted professionals ready to help.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                {/* IMAGE */}
                <div className="relative h-44 overflow-hidden">
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <Icon className="w-10 h-10" style={{ color: theme }} />
                    <h3 className="text-xl font-semibold text-gray-900">
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
                    className="w-full py-2 text-sm font-medium rounded-lg border mt-2"
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
                        <ul className="mt-5 space-y-2 text-gray-700 text-sm">
                          {service.list.map((item, i) => (
                            <li key={i} className="flex gap-2">
                              <span style={{ color: theme }}>•</span>
                              {item}
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
