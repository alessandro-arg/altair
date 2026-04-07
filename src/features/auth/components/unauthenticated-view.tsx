"use client";

import { Separator } from "@/components/ui/separator";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features";
import StaticLogoCloud from "@/components/logo-cloud";
import { Pricing } from "@/components/pricing";
import { HowItWorks } from "@/components/how-it-works";
import { Contact } from "@/components/contact";

export const UnauthenticatedView = () => {
  return (
    <div className="min-h-screen bg-[oklch(0.2925_0.0157_264.3)] relative">
      <main>
        <HeroSection />
        <StaticLogoCloud />
        <Separator className="bg-white/6 mt-6" />
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Separator className="bg-white/6 mt-6" />
      <FooterSection />
    </div>
  );
};
