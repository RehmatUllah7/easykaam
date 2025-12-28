import { motion } from "framer-motion";

export const DeleteAccountPage = () => {
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
          Delete Account
        </motion.h1>
        <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
          This page explains how you can request deletion of your EasyKaam account
          and associated personal data.
        </p>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gray-950 border border-gray-800 rounded-3xl shadow-2xl p-10 md:p-14 space-y-10 leading-relaxed">

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Account Deletion Policy
            </h2>

            <p className="text-gray-400 mb-6">
              Users can request deletion of their EasyKaam account at any time.
            </p>

            <p className="text-gray-400 mb-6">
              Since EasyKaam accounts are registered using a <b>mobile phone number</b>,
              users can request account deletion by contacting EasyKaam support
              from their registered phone number.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              How to Request Account Deletion
            </h3>

            <ul className="list-disc pl-6 space-y-3 text-gray-400">
              <li>
                Send a WhatsApp message or call EasyKaam support from your
                registered phone number
              </li>
              <li>
                Request <b>“Account Deletion”</b>
              </li>
              <li>
                Our team will verify the phone number and permanently delete
                the account and associated personal data
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Data Deletion
            </h3>
            <p className="text-gray-400">
              All personal data will be deleted in accordance with our
              <b> Privacy Policy</b>, except where retention is required
              by law or for legitimate business and security purposes.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};
