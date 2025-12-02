import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SafetySection } from "./components/SafetySection";
import { AboutSection } from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <SafetySection />
      <ServicesSection />
      <div className="p-10"></div>
    </>
  );
}

export default App;
