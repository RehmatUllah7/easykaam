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

    if (!formData.name.trim()) newErrors.name = "Full name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.comment.trim())
      newErrors.comment = "Comment field cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    // prevent only on invalid form
    if (!validate()) {
      e.preventDefault();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        bg-white 
        px-5 sm:px-6 md:px-8 lg:px-12 
        py-8 sm:py-9 md:py-10
        rounded-2xl sm:rounded-3xl 
        shadow-[0_8px_30px_rgba(138,201,244,0.15)] sm:shadow-[0_12px_40px_rgba(138,201,244,0.25)]
        border border-blue-50 sm:border-blue-100
        w-full
        mx-auto
      "
    >
      {/* Heading */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-extrabold text-gray-800">
          Contact Us
        </h2>
        <p className="text-gray-500 mt-1.5 sm:mt-2 text-sm sm:text-base">
          Give Feedback or Ask a Question
        </p>
      </div>

      {/* FORM SUBMISSION TO GMAIL */}
      <form
        className="space-y-4 sm:space-y-5 md:space-y-6"
        onSubmit={handleSubmit}
        action="https://formsubmit.co/faraz.ahmed.cs.7427@gmail.com"
        method="POST"
      >
        {/* Hidden Settings */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value="New Contact Form Message" />

        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8ac9f4] transition shadow-sm text-sm sm:text-base"
          />
          {errors.name && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8ac9f4] transition shadow-sm text-sm sm:text-base"
          />
          {errors.email && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Service */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
            Select Service (Optional)
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#8ac9f4] transition shadow-sm text-sm sm:text-base"
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
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
            Comments
          </label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows={3}
            placeholder="Write your message..."
            className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8ac9f4] transition shadow-sm resize-none text-sm sm:text-base"
          />
          {errors.comment && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">
              {errors.comment}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#8ac9f4] text-black py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:scale-[1.02] hover:shadow-lg sm:hover:shadow-xl transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
};
