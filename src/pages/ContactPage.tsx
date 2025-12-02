import { Header } from "../components/Header";
import { motion } from "framer-motion";
import contactImg from "../assets/bs1.jpg"; // Replace with your actual image

export const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-64 md:h-96">
        <img
          src={contactImg}
          alt="Contact Us"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-white font-bold text-center"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
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
            className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
          >
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div>
              <p className="font-semibold">Address:</p>
              <p>123 EasyKaam Street, City, Country</p>
            </div>
            <div>
              <p className="font-semibold">Phone:</p>
              <p>+123 456 7890</p>
            </div>
            <div>
              <p className="font-semibold">Email:</p>
              <p>support@easykaam.com</p>
            </div>
            <div>
              <p className="font-semibold">Working Hours:</p>
              <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
