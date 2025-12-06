import { motion } from "framer-motion";

export const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black text-gray-200">

      {/* Hero Section */}
      <section className="py-24 text-center px-6 border-b border-gray-800">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-white tracking-wide"
        >
          Privacy Policy
        </motion.h1>
        <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
          Your privacy matters at EasyKaam. This policy explains how your personal information is collected, used, and protected when you use our platform.
        </p>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gray-950 border border-gray-800 rounded-3xl shadow-2xl p-10 md:p-14 space-y-10 leading-relaxed">

          <p>
            Welcome to EasyKaam Platform. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
            Users who post or offer services through EasyKaam are referred to as <b>“Providers”</b>, and those who request or hire services are referred to as <b>“Clients”</b>.
          </p>

          <p>
            EASYKAAM (PVT.) LTD. (“we”, “EasyKaam”) operates and controls the processing of personal data unless stated otherwise.
            This policy applies to our mobile applications, website, and all related services.
          </p>

          {/* Section Template */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information in three main ways:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Information you provide directly</li>
              <li>Information we collect automatically</li>
              <li>Information received from third parties</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 text-white">a. Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-400 mt-2">
              <li>Account registration details</li>
              <li>Provider identity verification</li>
              <li>Profile content and media</li>
              <li>Orders, chats, and service reviews</li>
              <li>Support requests and feedback</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 text-white">b. Information We Collect Automatically</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-400 mt-2">
              <li>Location data</li>
              <li>Usage interaction data</li>
              <li>Device & network details</li>
              <li>Cookies & tracking tools</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 text-white">c. Information from Other Sources</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-400 mt-2">
              <li>Payment processors</li>
              <li>Verification & background services</li>
              <li>Public databases</li>
              <li>Referral programs</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Operate and improve the platform</li>
              <li>Enable communication and transactions</li>
              <li>Provide user support</li>
              <li>Personalize recommendations</li>
              <li>Send updates and offers</li>
              <li>Prevent fraud and ensure safety</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">3. Automated Decisions</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Provider matching</li>
              <li>Service recommendations</li>
              <li>Fraud detection systems</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">4. How We Share Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>With Clients and Providers</li>
              <li>With trusted third-party partners</li>
              <li>Inside EasyKaam corporate network</li>
              <li>Legal authorities when required</li>
              <li>With your explicit consent</li>
              <li>In anonymized format</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">5. International Data Transfers</h2>
            <p className="text-gray-400">
              Your data may be processed in countries outside your region with full legal safeguards in place.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights and Choices</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Access and update your data</li>
              <li>Request deletion of your account</li>
              <li>Withdraw consent at any time</li>
              <li>Opt out of marketing notifications</li>
              <li>Request data portability</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
            <p className="text-gray-400">
              We retain personal data only as long as required for legal, transactional, and security obligations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">8. Data Security</h2>
            <p className="text-gray-400">
              We use enterprise-grade security practices aligned with ISO/IEC 27001 standards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">9. General Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Not intended for children below legal age</li>
              <li>Support calls may be recorded</li>
              <li>We are not responsible for third-party websites</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-400">
              We may update this Privacy Policy periodically. Continued use of EasyKaam means acceptance of the updated policy.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};
