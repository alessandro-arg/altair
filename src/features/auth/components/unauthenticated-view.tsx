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

// ─── Contact ──────────────────────────────────────────────────────────────────

const Contact = () => (
  <section id="contact" className="py-24 px-4 sm:px-6 border-t border-white/6">
    <div className="mx-auto max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: info */}
        <div>
          <Badge
            variant="outline"
            className="mb-4 border-white/10 bg-white/5 text-white/50 text-xs"
          >
            Contact
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Get in touch
          </h2>
          <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-sm">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>

          <div className="space-y-7">
            {[
              { label: "Email", value: "hello@altair.app" },
              { label: "Phone", value: "+1 (234) 567-890" },
              {
                label: "Office",
                value: "123 Main Street, San Francisco, CA 94102",
              },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs font-semibold text-white mb-1">
                  {item.label}
                </p>
                <p className="text-white/40 text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="rounded-xl border border-white/[0.07] bg-[oklch(0.25_0.012_264.34)] p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-white/60">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full h-9 rounded-lg border border-white/8 bg-white/5 px-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[oklch(0.6562_0.1826_262.74)]/50 focus:border-[oklch(0.6562_0.1826_262.74)]/40 transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-white/60">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full h-9 rounded-lg border border-white/8 bg-white/5 px-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[oklch(0.6562_0.1826_262.74)]/50 focus:border-[oklch(0.6562_0.1826_262.74)]/40 transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5 mb-4">
            <label className="text-xs font-medium text-white/60">Subject</label>
            <input
              type="text"
              placeholder="How can we help?"
              className="w-full h-9 rounded-lg border border-white/8 bg-white/5 px-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[oklch(0.6562_0.1826_262.74)]/50 focus:border-[oklch(0.6562_0.1826_262.74)]/40 transition-all"
            />
          </div>

          <div className="space-y-1.5 mb-6">
            <label className="text-xs font-medium text-white/60">Message</label>
            <textarea
              rows={5}
              placeholder="Tell us more..."
              className="w-full rounded-lg border border-white/8 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[oklch(0.6562_0.1826_262.74)]/50 focus:border-[oklch(0.6562_0.1826_262.74)]/40 transition-all resize-none"
            />
          </div>

          <Button
            size="sm"
            className="w-full h-10 bg-[oklch(0.6562_0.1826_262.74)] hover:bg-[oklch(0.7_0.18_262.74)] text-white text-sm shadow-lg shadow-[oklch(0.6562_0.1826_262.74)]/20"
          >
            Send Message
          </Button>
        </div>
      </div>
    </div>
  </section>
);

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
        <HowItWorks />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Separator className="bg-white/6 mt-6" />
      <FooterSection />
    </div>
  );
};
