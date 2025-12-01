import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import logoImage from "../assets/logo.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const { scrollY } = useScroll();

  // Header background transition
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.98)"]
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Safety", href: "#safety" },
    { label: "About Us", href: "#about" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact Us", href: "#contact" },
  ];

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
    const section = document.getElementById("get-started");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      style={{ backgroundColor: headerBg }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "shadow-lg backdrop-blur-lg py-4"
          : "py-6 backdrop-blur-0 shadow-none"
      }`}
    >
<div className="relative flex items-center h-20 px-8 lg:px-20 justify-between mr-0 lg:mr-[70px]">

        {/* LOGO */}
        <motion.a 
          href="#home" 
          className="flex items-center gap-4 select-none group ml-0 lg:ml-[70px]"

          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div 
            className="relative"
            whileHover={{ rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-[#8ac9f4] to-[#4a90e2] rounded-2xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            <img
              src={logoImage}
              alt="EK Logo"
              className="relative w-14 h-14 object-contain drop-shadow-sm"
            />
          </motion.div>
          <span className={`font-bold text-2xl tracking-wide transition-colors duration-300 ${
            isScrolled 
              ? "text-black group-hover:text-black" 
              : "text-white group-hover:text-white"
          }`}>
            Easykaam
          </span>
        </motion.a>

        {/* CENTER NAV FOR PC */}
        <nav className="hidden lg:flex flex-1 justify-center items-center gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.a
                href={item.href}
                className={`relative font-semibold text-lg tracking-wide transition-all duration-300 group ${
                  isScrolled ? "text-black" : "text-white"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                    isScrolled ? "bg-[#8ac9f4]" : "bg-white/80"
                  } group-hover:w-full transition-all duration-300`}
                />
                {!isScrolled && (
                  <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                )}
                <span className="relative">{item.label}</span>
              </motion.a>
            </motion.div>
          ))}
        </nav>

        {/* DOWNLOAD BUTTON */}
        <motion.button
          onClick={handleButtonClick}
          className={`hidden lg:flex items-center gap-2 px-8 py-3 rounded-2xl font-semibold uppercase 
            text-sm tracking-wide transition-all duration-500 hover:shadow-2xl hover:scale-[1.05]
            relative overflow-hidden group border ${
              isScrolled 
                ? "border-[#8ac9f4]/30 text-white" 
                : "border-white/30 text-black"
            } ${
              isButtonClicked
                ? "bg-linear-to-r from-[#8ac9f4] to-[#6bb5e8]"
                : "bg-linear-to-r from-[#8ac9f4] to-[#7abef0]"
            }`}
          whileHover={{ 
            boxShadow: isScrolled 
              ? "0 10px 30px rgba(138, 201, 244, 0.4)" 
              : "0 10px 30px rgba(255, 255, 255, 0.3)",
            y: -2
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent 
                        -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <Download size={18} className="relative z-10" />
          <span className="relative z-10">Download App</span>
        </motion.button>

      {/* MOBILE MENU ICON */}
        <motion.button
          className={`lg:hidden rounded-2xl p-2 backdrop-blur-sm border ${
            isScrolled 
              ? "text-black bg-white/80 border-white/50" 
              : "text-white bg-white/20 border-white/30"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1, backgroundColor: isScrolled ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.3)" }}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-white/20 shadow-2xl"
        >
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-4 items-start">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`px-6 py-4 rounded-xl font-semibold text-lg tracking-wide 
                         transition-all duration-300 flex items-center gap-3 group border-b border-gray-100 w-full ${
                           isScrolled ? "text-black" : "text-gray-800"
                         } hover:text-black`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-2 h-2 bg-[#8ac9f4] rounded-full group-hover:scale-150 transition-transform duration-300" />
                {item.label}
              </motion.a>
            ))}

            <motion.button
              onClick={() => {
                handleButtonClick();
                setIsMobileMenuOpen(false);
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="px-6 py-4 rounded-2xl font-semibold uppercase text-sm tracking-wide 
                       bg-linear-to-r from-[#8ac9f4] to-[#7abef0] text-white mt-4 
                       shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]
                       transition-all duration-300 flex items-center justify-center gap-2 w-full"
            >
              <Download size={18} />
              Download the App
            </motion.button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};