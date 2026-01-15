import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AboutSection } from './components/AboutSection';
import { PlatformSection } from './components/PlatformSection';
import { PartnersSection } from './components/PartnersSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <PlatformSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}
