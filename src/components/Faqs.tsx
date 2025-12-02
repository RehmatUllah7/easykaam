import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    question: "What if I’m not satisfied with the service?",
    answer:
      "Your satisfaction is our priority. If you’re not happy with the service, please contact our support, and we will resolve the issue promptly.",
  },
];

export const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-12">
          We’ve answered some common questions about EasyKaam services.
        </p>

        <div className="max-w-3xl mx-auto space-y-4 text-left">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium text-gray-800 hover:bg-gray-100 transition"
              >
                {faq.question}
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
