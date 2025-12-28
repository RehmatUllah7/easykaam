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
    <footer className="bg-[#0f172a] text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center text-center space-y-12">

          {/* Logo & About */}
          <div className="flex flex-col items-center space-y-4 max-w-md">
            <img src={logo} alt="EasyKaam Logo" className="w-36" />
            <p className="text-gray-400 text-sm leading-relaxed">
              EasyKaam provides verified professionals for all your home and office
              services with reliable, fast, and quality support.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full max-w-4xl">

            {/* Quick Links */}
            <div className="flex flex-col items-center">
              <h3
                className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700 w-full"
                style={{ color: THEME_COLOR }}
              >
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li><Link to="/" className="hover:text-[#8ac9f4] transition">Home</Link></li>
                <li><Link to="/about" className="hover:text-[#8ac9f4] transition">About Us</Link></li>
                <li><Link to="/services" className="hover:text-[#8ac9f4] transition">Services</Link></li>
                <li><Link to="/contact" className="hover:text-[#8ac9f4] transition">Contact</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col items-center">
              <h3
                className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700 w-full"
                style={{ color: THEME_COLOR }}
              >
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => openInNewTab("/privacy-policy")}
                    className="hover:text-[#8ac9f4] transition"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openInNewTab("/terms")}
                    className="hover:text-[#8ac9f4] transition"
                  >
                    Terms & Conditions
                  </button>
                </li>
                  <li>
                  <button
                    onClick={() => openInNewTab("/delete-account")}
                    className="hover:text-[#8ac9f4] transition"
                  >
                    Delete Account
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center">
              <h3
                className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700 w-full"
                style={{ color: THEME_COLOR }}
              >
                Contact
              </h3>
              <div className="space-y-2 text-sm">
                <p>Islamabad, Pakistan</p>
                <p>Phone: +92 315 6192 920</p>
                <p>Email: easykaam2025@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm font-medium" style={{ color: THEME_COLOR }}>
              Follow Us
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, link: "https://www.facebook.com/profile.php?id=61583519567698" },
                { Icon: Twitter, link: "#" },
                { Icon: Instagram, link: "https://www.instagram.com/easykaam_/" },
                { Icon: Linkedin, link: "#" },
              ].map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition hover:scale-110"
                  style={{ backgroundColor: THEME_COLOR }}
                >
                  <Icon className="w-5 h-5 text-black" />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-gray-700 pt-6">
            <div className="text-gray-500 text-sm space-y-1">
              <p>&copy; {new Date().getFullYear()} EasyKaam. All rights reserved.</p>
              <p className="text-xs text-gray-600">
                Serving Islamabad with trusted professionals
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
