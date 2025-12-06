import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/logo.png"; // ✅ Adjust filename if needed

const THEME_COLOR = "#8ac9f4";

export const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-16">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <img src={logo} alt="EasyKaam Logo" className="w-36 mb-4" />
          <p className="text-gray-400 leading-relaxed">
            EasyKaam provides verified professionals for all your home and office
            services with reliable, fast, and quality support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className="text-xl font-semibold mb-4"
            style={{ color: THEME_COLOR }}
          >
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-[#8ac9f4] transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#8ac9f4] transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#8ac9f4] transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#8ac9f4] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3
            className="text-xl font-semibold mb-4"
            style={{ color: THEME_COLOR }}
          >
            Legal
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8ac9f4] transition"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8ac9f4] transition"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3
            className="text-xl font-semibold mb-4"
            style={{ color: THEME_COLOR }}
          >
            Contact
          </h3>
          <p className="mb-2">Islamabad, Pakistan</p>
          <p className="mb-2">Phone: +92 300 1234567</p>
          <p className="mb-4">Email: support@easykaam.com</p>

          <div className="flex space-x-3">
            {[{ Icon: Facebook, link: "#" }, { Icon: Twitter, link: "#" }, { Icon: Instagram, link: "#" }, { Icon: Linkedin, link: "#" }].map(
              ({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  className="p-2 rounded-full transition hover:scale-110"
                  style={{ backgroundColor: THEME_COLOR }}
                >
                  <Icon className="w-5 h-5 text-black" />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 py-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} EasyKaam. All rights reserved.
      </div>
    </footer>
  );
};
