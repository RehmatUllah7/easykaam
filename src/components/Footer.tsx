import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const THEME_COLOR = "#8ac9f4";

export const Footer = () => {
  const openInNewTab = (path: string) => {
    const url = `${window.location.origin}${path}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-10 pb-6">
      <div className="container mx-auto px-5">
        {/* Mobile Layout - Stacked vertically with better spacing */}
        <div className="flex flex-col space-y-10">
          
          {/* Logo & About - Top section */}
          <div className="text-center md:text-left">
            <div className="flex flex-col items-center md:items-start mb-6">
              <img src={logo} alt="EasyKaam Logo" className="w-36 mb-4" />
              <p className="text-gray-400 text-sm leading-relaxed max-w-md md:max-w-xs">
                EasyKaam provides verified professionals for all your home and office
                services with reliable, fast, and quality support.
              </p>
            </div>
          </div>

          {/* Links Grid for mobile - 2 columns */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700" style={{ color: THEME_COLOR }}>
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="hover:text-[#8ac9f4] transition text-sm md:text-base block py-1">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#8ac9f4] transition text-sm md:text-base block py-1">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#8ac9f4] transition text-sm md:text-base block py-1">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#8ac9f4] transition text-sm md:text-base block py-1">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700" style={{ color: THEME_COLOR }}>
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => openInNewTab("/privacy-policy")}
                    className="hover:text-[#8ac9f4] transition text-sm md:text-base text-left block py-1 w-full"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openInNewTab("/terms")}
                    className="hover:text-[#8ac9f4] transition text-sm md:text-base text-left block py-1 w-full"
                  >
                    Terms & Conditions
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact & Social - Full width on mobile, spans columns */}
            <div className="col-span-2 md:col-span-1 lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700" style={{ color: THEME_COLOR }}>
                Contact
              </h3>
              <div className="space-y-3 mb-6">
                <p className="text-sm md:text-base">Islamabad, Pakistan</p>
                <p className="text-sm md:text-base">Phone: +92 300 1234567</p>
                <p className="text-sm md:text-base">Email: support@easykaam.com</p>
              </div>

              <div>
                <p className="text-sm font-medium mb-3" style={{ color: THEME_COLOR }}>
                  Follow Us
                </p>
                <div className="flex space-x-4">
                  {[
                    { Icon: Facebook, link: "#", label: "Facebook" },
                    { Icon: Twitter, link: "#", label: "Twitter" },
                    { Icon: Instagram, link: "#", label: "Instagram" },
                    { Icon: Linkedin, link: "#", label: "LinkedIn" },
                  ].map(({ Icon, link, label }, index) => (
                    <a
                      key={index}
                      href={link}
                      className="p-2 rounded-full transition hover:scale-110 hover:opacity-90"
                      style={{ backgroundColor: THEME_COLOR }}
                      aria-label={`Follow us on ${label}`}
                    >
                      <Icon className="w-5 h-5 text-black" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-6">
            {/* Bottom Bar */}
            <div className="text-center text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} EasyKaam. All rights reserved.</p>
              <p className="mt-2 text-xs text-gray-600">
                Serving Islamabad with trusted professionals
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};