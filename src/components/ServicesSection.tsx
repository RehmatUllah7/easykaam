import { motion } from "framer-motion";

export const ServicesSection = () => {
  const themeColor = "#8ac9f4";

  const services = [
    { title: "Home Cleaning", desc: "Professional and reliable home cleaning services." },
    { title: "Electrician", desc: "Certified experts for all electrical repairs and setups." },
    { title: "Plumbing", desc: "Quick and trusted plumbing solutions for your home." },
    { title: "AC Repair", desc: "Fast and affordable AC installation and repair." },
    { title: "Carpentry", desc: "Skilled carpenters for custom furniture and fixes." },
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-20 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Our <span style={{ color: themeColor }}>Services</span>
        </h2>
        <p className="text-lg opacity-80 mt-4 max-w-2xl mx-auto">
          Choose from a variety of trusted and high‑quality services designed for your comfort.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="p-8 rounded-2xl shadow-xl backdrop-blur-md border border-black/10"
            style={{ background: "rgba(0,0,0,0.05)" }}
          >
            <h3 className="text-2xl font-bold mb-3" style={{ color: themeColor }}>
              {service.title}
            </h3>
            <p className="opacity-80 mb-6">{service.desc}</p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2 rounded-xl font-semibold text-black"
              style={{ backgroundColor: themeColor }}
            >
              Explore
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
