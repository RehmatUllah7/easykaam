import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import SafetyPage from "./pages/SafetyPage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { Contact } from "./pages/ContactPage";

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
      </Routes>
    </Router>
  );
}

export default App;
