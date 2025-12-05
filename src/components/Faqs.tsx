import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I book a service?",
    answer: "You can book a service through our website or mobile app by selecting the service you need and choosing a convenient time.",
  },
  {
    question: "Are the professionals verified?",
    answer: "Yes, all our professionals are thoroughly verified and trained to ensure high-quality service.",
  },
  {
    question: "How do I make the payment?",
    answer: "You can pay securely online using multiple payment methods or directly to the professional after service completion.",
  },
  {
    question: "Can I reschedule my service?",
    answer: "Absolutely! You can reschedule your service easily through your account dashboard or by contacting our support.",
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer: "Your satisfaction is our priority. If you're not happy with the service, please contact our support, and we will resolve the issue promptly.",
  },
];

export const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
        
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about EasyKaam services. Can't find the answer you're looking for?{" "}
           
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.button
                onClick={() => toggle(index)}
                className={`w-full text-left p-6 rounded-2xl shadow-sm border transition-all duration-300 hover:shadow-md ${
                  openIndex === index
                    ? "bg-white border-blue-100 shadow-md"
                    : "bg-white border-gray-100 hover:border-blue-100"
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 transition-colors ${
                      openIndex === index ? "bg-blue-100" : "bg-gray-100"
                    }`}>
                      <span className={`font-bold ${openIndex === index ? "text-blue-300" : "text-gray-600"}`}>
                        {index + 1}
                      </span>
                    </div>
                    <h3 className={`text-lg md:text-xl font-semibold ${
                      openIndex === index ? "text-blue-300" : "text-gray-800"
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index 
                        ? "bg-blue-300 text-white" 
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 mt-4 border-t border-gray-100">
                        <div className="flex">
                          <div className="w-1 bg-linear-to-b from-blue-400 to-blue-300 rounded-full mr-4"></div>
                          <p className="text-gray-600 leading-relaxed">
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 bg-linear-to-r from-blue-50 to-indigo-50 rounded-3xl max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              We're here to help you with any other questions you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-300 text-white font-semibold rounded-xl hover:bg-blue-300 transition-all duration-300 hover:shadow-lg">
                Contact Support
              </button>
             
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};