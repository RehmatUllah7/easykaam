import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">EasyKaam</h2>
          <p className="text-gray-400">
            EasyKaam provides verified professionals for all your home and office services with reliable, fast, and quality support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-500 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500 transition">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-500 transition">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/privacy-policy" className="hover:text-blue-500 transition">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-blue-500 transition">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact & Updates</h3>
          <p className="mb-2">123 EasyKaam Street, City, Country</p>
          <p className="mb-2">Phone: +123 456 7890</p>
          <p className="mb-4">Email: support@easykaam.com</p>

          <div className="flex space-x-3 mb-4">
            <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition">
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition">
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition">
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition">
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div>

          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-l-lg focus:outline-none text-gray-800 flex-1"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg text-white font-semibold transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} EasyKaam. All rights reserved.
      </div>
    </footer>
  );
};
