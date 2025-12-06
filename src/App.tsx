import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import SafetyPage from "./pages/SafetyPage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { Contact } from "./pages/ContactPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsConditionsPage } from "./pages/TermsConditionsPage";

function App() {
  return (
    <Router>
      <ScrollToTop />   {/* ✅ FIXES BOTTOM SCROLL ISSUE GLOBALLY */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/safety" element={<SafetyPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
<Route path="/terms" element={<TermsConditionsPage />} />  {/* ✅ CATCH-ALL ROUTE */}
      </Routes>
    </Router>
  );
}

export default App;
