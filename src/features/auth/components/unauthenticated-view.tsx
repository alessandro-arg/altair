"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SignUpButton } from "@clerk/nextjs";
import { SparklesIcon, ArrowRightIcon } from "lucide-react";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features";
import StaticLogoCloud from "@/components/logo-cloud";
import { Pricing } from "@/components/pricing";
import { HowItWorks } from "@/components/how-it-works";
import { Contact } from "@/components/contact";

// ─── CTA Banner ───────────────────────────────────────────────────────────────

const CTABanner = () => (
  <section className="pt-20 pb-10 px-4 sm:px-6 border-t border-white/6 hidden sm:block">
    <div className="mx-auto max-w-2xl text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-96 h-40 bg-[oklch(0.6562_0.1826_262.74)]/10 blur-3xl rounded-full"
      />
      <h2 className="relative text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5">
        Start building today
      </h2>
      <p className="relative text-white/40 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
        No credit card required. Get up and running in under two minutes with a
        free account.
      </p>
      <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3">
        <SignUpButton mode="modal">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[oklch(0.6562_0.1826_262.74)] hover:bg-[oklch(0.7_0.18_262.74)] text-white h-11 px-8 text-sm shadow-xl shadow-[oklch(0.6562_0.1826_262.74)]/20 gap-2"
          >
            Create free account
            <ArrowRightIcon className="size-4" />
          </Button>
        </SignUpButton>
      </div>
    </div>
  </section>
);

// ─── Footer ───────────────────────────────────────────────────────────────────

const Footer = () => (
  <footer className="border-t border-white/6 px-4 sm:px-6 pt-12 pb-8">
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
        {/* Brand col */}
        <div className="col-span-2 sm:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="size-6 rounded-md bg-[oklch(0.6562_0.1826_262.74)] flex items-center justify-center">
              <SparklesIcon className="size-3.5 text-white" />
            </div>
            <span className="font-semibold text-sm text-white">Altair</span>
          </div>
          <p className="text-white/30 text-xs leading-relaxed max-w-45">
            The AI-native development environment for modern teams.
          </p>
        </div>

        {/* Link cols */}
        {[
          {
            title: "Product",
            links: ["Features", "Pricing", "Changelog", "Roadmap"],
          },
          {
            title: "Company",
            links: ["About", "Blog", "Careers", "Press"],
          },
          {
            title: "Legal",
            links: ["Privacy", "Terms", "Security", "Cookies"],
          },
        ].map((col) => (
          <div key={col.title}>
            <p className="text-white text-xs font-semibold mb-4">{col.title}</p>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/30 text-xs hover:text-white/60 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Separator className="bg-white/6 mb-6" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25">
        <p>© {new Date().getFullYear()} Altair. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white/50 transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-white/50 transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-white/50 transition-colors">
            Discord
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

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
