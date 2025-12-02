import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SafetyPage from "./pages/SafetyPage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { Contact } from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/safety" element={<SafetyPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
