import { motion } from "framer-motion";

export const TermsConditionsPage = () => {
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
          Terms & Conditions
        </motion.h1>
        <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
          Please read these Terms carefully before using EasyKaam services. By using our platform, you agree to follow these terms.
        </p>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gray-950 border border-gray-800 rounded-3xl shadow-2xl p-10 md:p-14 space-y-10 leading-relaxed">

          <p>
            Welcome to EasyKaam! These Terms & Conditions (“Terms”) govern your use of the EasyKaam website, mobile app, and services.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">1. About EasyKaam</h2>
            <p className="text-gray-400">
              EasyKaam connects customers who need home and repair services (“Customers”) with verified technicians and service providers (“Professionals”). Our goal is to make home services easy, quick, and reliable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">2. Scope of Services</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Assignment of verified professionals based on location and availability.</li>
              <li>Customers receive professional details via SMS or app notification.</li>
              <li>Bookings can be canceled or modified before professional acceptance.</li>
              <li>Payments can be made online or in cash after service completion.</li>
              <li>Professionals pay EasyKaam service fee after receiving payment.</li>
              <li>Extended work or extra requests must be approved by EasyKaam.</li>
              <li>EasyKaam is not responsible for any arrangements outside the platform.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">3. Role & Responsibility of EasyKaam</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>We connect customers and professionals; we do not perform services directly.</li>
              <li>Professionals are verified, but EasyKaam is not liable for individual actions.</li>
              <li>In case of theft/loss/damage, verified professional details may be shared; compensation is not guaranteed.</li>
              <li>Accounts may be suspended for misuse, fraud, or inappropriate activity.</li>
              <li>Support assists in dispute resolution but cannot enforce settlements.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Collection & Privacy</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>We collect personal details such as name, phone, email, and gender.</li>
              <li>Data is used for account management, service updates, and gender-specific services.</li>
              <li>Accounts and data can be deleted via app or by contacting support.</li>
              <li>Social login unlinking permanently deletes associated data.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">5. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Provide accurate information and use the platform lawfully.</li>
              <li>Do not share or sell accounts; respect payment/cancellation rules.</li>
              <li>Professionals must deliver services on time and report scope changes.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">6. Fees & Payments</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Total service cost includes professional charge and EasyKaam fee.</li>
              <li>Service fees are non-refundable and non-transferable.</li>
              <li>Payments for materials or parts are direct to the technician.</li>
              <li>Accounts with unpaid fees may have restricted access.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">7. Refund & Return Policy</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Refunds apply only to service charges, not materials.</li>
              <li>Refunds issued only if the issue is related to service performed.</li>
              <li>Refunds credited to EasyKaam wallet; online bank payments handled through wallet.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">8. Guarantee & Re-Work Policy</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Home Services: 07 days guarantee</li>
              <li>On-the-spot checks: Plumbing, painting, polish, drainage</li>
              <li>Not applicable for appliance repair, short circuits, or deep cleaning past guarantee period.</li>
              <li>Requests after guarantee are treated as new bookings.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">9. Cancellation Policy</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Cancel before technician arrival: no cost.</li>
              <li>Late cancellations may incur visiting fee.</li>
              <li>Advance payments refunded if booking canceled before technician assignment.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">10. Arrival Time</h2>
            <p className="text-gray-400">
              Technician arrives within 1 hour of scheduled time. Delays due to traffic or emergencies will be communicated promptly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">11. Delivery Policy</h2>
            <p className="text-gray-400">
              EasyKaam partners and technicians aim to reach the service location within 1 hour of booking.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">12. Limitation of Liability</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>EasyKaam is not responsible for any direct, indirect, or incidental damages.</li>
              <li>Customers should be present and safeguard valuables during service.</li>
              <li>Refusal of recommended equipment replacement is at customer’s risk.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">13. Variation of Terms</h2>
            <p className="text-gray-400">
              EasyKaam may revise these Terms at any time. Continued platform use constitutes acceptance of updated Terms.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};
