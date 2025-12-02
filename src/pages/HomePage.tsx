import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { SafetySection } from "../components/SafetySection";
import { AboutSection } from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";

export default function HomePage() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <AboutSection />
      <SafetySection />
      <ServicesSection />
      {/* Optional padding / footer */}
      <div className="p-10"></div>
    </div>
  );
}
