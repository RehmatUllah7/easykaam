import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { SafetySection } from "../components/SafetySection";
import { AboutSection } from "../components/AboutSection";
import { Faqs } from "../components/Faqs";
import { Working } from "../components/Working";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <AboutSection />
      <SafetySection />
      <Working />
      <Faqs />
    
      {/* Optional padding / footer */}
      <div className="p-10"></div>
        <Footer />
    </div>
  );
}
