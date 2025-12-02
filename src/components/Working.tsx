import { motion } from "framer-motion";

// Step data
const steps = [
  {
    title: "Book a Service",
    description: "Choose the service you need and schedule a convenient time for our experts to visit.",
    icon: "📝",
  },
  {
    title: "Expert Assigned",
    description: "A verified professional will be assigned to your request and confirmed immediately.",
    icon: "👷",
  },
  {
    title: "Service Delivered",
    description: "Our expert arrives, completes the work efficiently, and ensures everything is perfect.",
    icon: "⚡",
  },
  {
    title: "Payment & Feedback",
    description: "Pay securely online or offline and provide your valuable feedback to help us improve.",
    icon: "💳",
  },
];

export const Working = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">How EasyKaam Works</h2>
        <p className="text-gray-600 mb-12">
          Getting your home or office work done has never been easier. Just follow these simple steps.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
