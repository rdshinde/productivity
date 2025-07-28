"use client";
import { Navbar } from "@/components/ui/Navbar";
import { 
  HeroSection, 
  FeaturesSection, 
  HowItWorksSection, 
  PricingSection, 
  CTASection 
} from "@/components/home";
import { Footer } from "@/components/ui/Footer";
import { useEffect } from "react";
import { setupSmoothScroll } from "@/utils/smoothScroll";

export default function Home() {
  useEffect(() => {
    setupSmoothScroll();
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
