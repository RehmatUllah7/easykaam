import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const THEME_COLOR = "#8ac9f4";

const faqs = [
  {
    question: "How do I book a service?",
    answer:
      "You can book a service through our website or mobile app by selecting the service you need and choosing a convenient time.",
  },
  {
    question: "Are the professionals verified?",
    answer:
      "Yes, all our professionals are thoroughly verified and trained to ensure high-quality service.",
  },
  {
    question: "How do I make the payment?",
    answer:
      "You can pay securely online using multiple payment methods or directly to the professional after service completion.",
  },
  {
    question: "Can I reschedule my service?",
    answer:
      "Absolutely! You can reschedule your service easily through your account dashboard or by contacting our support.",
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer:
      "Your satisfaction is our priority. If you're not happy with the service, please contact our support, and we will resolve the issue promptly.",
  },
];

export const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-10 sm:py-14 md:py-20 bg-linear-to-br from-[#eaf6ff] via-white to-[#f3fbff] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 md:mb-16 px-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Everything you need to know about EasyKaam services. Can't find the
            answer you're looking for?
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto px-2 sm:px-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-3 sm:mb-4"
            >
              <motion.button
                onClick={() => toggle(index)}
                className={`w-full text-left p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-sm border transition-all duration-300 hover:shadow-md ${
                  openIndex === index
                    ? "bg-white shadow-md"
                    : "bg-white hover:shadow"
                }`}
                style={{
                  borderColor:
                    openIndex === index ? THEME_COLOR : "#f3f4f6",
                }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start sm:items-center justify-between">
                  <div className="flex items-start sm:items-center flex-1">
                    {/* Number Badge */}
                    <div
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center mr-3 sm:mr-4 transition-colors shrink-0"
                      style={{
                        backgroundColor:
                          openIndex === index ? "#dff1ff" : "#f3f4f6",
                      }}
                    >
                      <span
                        className="font-bold text-xs sm:text-sm"
                        style={{
                          color:
                            openIndex === index
                              ? THEME_COLOR
                              : "#4b5563",
                        }}
                      >
                        {index + 1}
                      </span>
                    </div>

                    {/* Question */}
                    <h3
                      className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold transition-colors text-left"
                      style={{
                        color:
                          openIndex === index
                            ? THEME_COLOR
                            : "#1f2933",
                      }}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle Icon */}
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors ml-3 shrink-0"
                    style={{
                      backgroundColor:
                        openIndex === index ? THEME_COLOR : "#f3f4f6",
                      color:
                        openIndex === index ? "#fff" : "#4b5563",
                    }}
                  >
                    {openIndex === index ? (
                      <Minus size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    ) : (
                      <Plus size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    )}
                  </motion.div>
                </div>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 sm:pt-5 md:pt-6 mt-3 sm:mt-4 border-t border-gray-100">
                        <div className="flex">
                          <div
                            className="w-1 rounded-full mr-3 sm:mr-4"
                            style={{
                              background: `linear-gradient(to bottom, ${THEME_COLOR}, #4a90e2)`,
                            }}
                          ></div>
                          <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10 sm:mt-12 md:mt-16 px-4"
        >
          <div className="inline-block p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl max-w-2xl bg-[#eaf6ff] w-full">
            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base">
              We're here to help you with any other questions you might have.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg w-full sm:w-auto text-sm sm:text-base md:text-base"
                style={{ backgroundColor: THEME_COLOR, color: "#000" }}
              >
                Contact Support
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};