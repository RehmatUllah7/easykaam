import { motion } from "framer-motion";
import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    comment: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.comment.trim()) {
      newErrors.comment = "Comment field cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form Submitted:", formData);

    setFormData({
      name: "",
      email: "",
      service: "",
      comment: "",
    });

    setErrors({});
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        bg-white 
        px-8 py-10 md:px-12
        rounded-3xl 
        shadow-[0_12px_40px_rgba(138,201,244,0.25)] 
        border border-blue-100
        ml-0 md:ml-6 lg:ml-10
      "
    >
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-800">
          Contact Us
        </h2>
        <p className="text-gray-500 mt-2">
          Give Feedback or Ask a Question
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8ac9f4] transition shadow-sm"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8ac9f4] transition shadow-sm"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Service (Optional) */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Select Service (Optional)
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#8ac9f4] transition shadow-sm"
          >
            <option value="">Choose a service</option>
            <option value="electrician">Electrician</option>
            <option value="plumber">Plumber</option>
            <option value="painter">Painter</option>
            <option value="carpenter">Carpenter</option>
            <option value="cleaner">Cleaner</option>
          </select>
        </div>

        {/* Comment */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Comments
          </label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows={4}
            placeholder="Write your message..."
            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8ac9f4] transition shadow-sm resize-none"
          />
          {errors.comment && (
            <p className="text-red-500 text-sm mt-1">{errors.comment}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#8ac9f4] text-black py-3 rounded-xl font-bold text-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
};
