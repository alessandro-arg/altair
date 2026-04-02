"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import {
  BrainCircuitIcon,
  CodeIcon,
  ZapIcon,
  LayersIcon,
  GitBranchIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Integrations from "@/components/integrations-1";
import FooterSection from "@/components/footer";
import { BorderBeam } from "@/components/ui/border-beam";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import HeroSection from "@/components/hero-section";

// ─── Navbar ──────────────────────────────────────────────────────────────────

const Navbar = () => (
  <header className="fixed top-0 inset-x-0 z-50 border-b border-white/6 bg-[oklch(0.2925_0.0157_264.3)]/80 backdrop-blur-md">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-14">
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="size-7 rounded-lg bg-[oklch(0.6562_0.1826_262.74)] flex items-center justify-center">
          <SparklesIcon className="size-4 text-white" />
        </div>
        <span className="font-semibold text-sm tracking-tight text-white">
          Altair
        </span>
      </div>

      {/* Nav links — hidden on mobile */}
      <nav className="hidden md:flex items-center gap-6 text-sm text-white/50">
        <a href="#features" className="hover:text-white transition-colors">
          Features
        </a>
        <a href="#how-it-works" className="hover:text-white transition-colors">
          How it works
        </a>
        <a href="#pricing" className="hover:text-white transition-colors">
          Pricing
        </a>
      </nav>

      {/* Auth buttons */}
      <div className="flex items-center gap-2">
        <SignInButton>
          <Button
            variant="ghost"
            size="sm"
            className="text-white/70 hover:text-white hover:bg-white/5 text-xs h-8 px-3"
          >
            Log in
          </Button>
        </SignInButton>
        <SignUpButton>
          <Button
            size="sm"
            className="bg-[oklch(0.6562_0.1826_262.74)] hover:bg-[oklch(0.7_0.18_262.74)] text-white text-xs h-8 px-3 shadow-lg shadow-[oklch(0.6562_0.1826_262.74)]/20"
          >
            Sign up
          </Button>
        </SignUpButton>
      </div>
    </div>
  </header>
);

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className="relative pt-32 pb-24 px-4 sm:px-6 overflow-hidden">
    {/* Background glow */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 flex items-start justify-center"
    >
      <div className="w-150 h-100 rounded-full bg-[oklch(0.6562_0.1826_262.74)]/10 blur-[120px] -translate-y-1/4" />
    </div>

    <div className="relative mx-auto max-w-3xl text-center">
      <Badge
        variant="outline"
        className="mb-6 inline-flex items-center gap-1.5 border-white/10 bg-white/5 text-white/60 text-xs px-3 py-1"
      >
        <SparklesIcon className="size-3 text-[oklch(0.6562_0.1826_262.74)]" />
        Now in beta — try it free
      </Badge>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
        Build smarter with
        <br />
        <span className="text-[oklch(0.6562_0.1826_262.74)]">
          AI-powered
        </span>{" "}
        workflows
      </h1>

      <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
        Altair combines intelligent agents, a code editor, and real-time
        collaboration — all in one place. From idea to production, faster.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <SignUpButton>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[oklch(0.6562_0.1826_262.74)] hover:bg-[oklch(0.7_0.18_262.74)] text-white h-11 px-6 text-sm shadow-xl shadow-[oklch(0.6562_0.1826_262.74)]/25 gap-2"
          >
            Get started free
            <ArrowRightIcon className="size-4" />
          </Button>
        </SignUpButton>
        <SignInButton>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 h-11 px-6 text-sm"
          >
            Sign in to your account
          </Button>
        </SignInButton>
      </div>
    </div>

    {/* App screenshot placeholder */}
    <div className="relative mx-auto mt-16 max-w-5xl">
      <div className="rounded-xl border border-white/8 bg-[oklch(0.25_0.012_264.34)] overflow-hidden shadow-2xl shadow-black/40">
        {/* Fake window chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/6">
          <div className="size-2.5 rounded-full bg-white/10" />
          <div className="size-2.5 rounded-full bg-white/10" />
          <div className="size-2.5 rounded-full bg-white/10" />
          <div className="ml-3 h-5 flex-1 max-w-48 rounded-md bg-white/5 flex items-center px-2">
            <span className="text-white/30 text-[10px]">altair.app</span>
          </div>
        </div>
        {/* Content placeholder — swap for real screenshot */}
        <div className="aspect-video bg-linear-to-br from-[oklch(0.28_0.015_264.3)] to-[oklch(0.22_0.01_264.3)] flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="size-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center mx-auto">
              <SparklesIcon className="size-6 text-white/20" />
            </div>
            <p className="text-white/20 text-sm">App screenshot</p>
          </div>
        </div>
      </div>
      {/* Glow under card */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-8 inset-x-8 h-16 bg-[oklch(0.6562_0.1826_262.74)]/10 blur-2xl rounded-full"
      />
    </div>
  </section>
);

// ─── Logo Cloud ───────────────────────────────────────────────────────────────

const LogoCloud = () => (
  <section className="py-12 px-4 sm:px-6 border-y border-white/6">
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-xs text-white/30 uppercase tracking-widest mb-8 font-medium">
        Trusted by developers at
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
        {["Vercel", "Linear", "Planetscale", "Turso", "Neon", "Resend"].map(
          (name) => (
            <span
              key={name}
              className="text-white/20 font-semibold text-sm hover:text-white/40 transition-colors cursor-default"
            >
              {name}
            </span>
          ),
        )}
      </div>
    </div>
  </section>
);

// ─── Features ─────────────────────────────────────────────────────────────────

const features = [
  {
    icon: BrainCircuitIcon,
    title: "AI Agents",
    description:
      "Autonomous agents that understand your codebase, write tests, fix bugs, and ship features — all without context-switching.",
  },
  {
    icon: CodeIcon,
    title: "Smart Code Editor",
    description:
      "A full-featured editor with syntax highlighting, autocomplete, and inline AI suggestions powered by the latest models.",
  },
  {
    icon: ZapIcon,
    title: "Instant Execution",
    description:
      "Run code in sandboxed environments instantly. No setup, no DevOps — just write and run.",
  },
  {
    icon: LayersIcon,
    title: "Project Context",
    description:
      "Altair indexes your entire project so AI always has the right context to give you accurate, relevant results.",
  },
  {
    icon: GitBranchIcon,
    title: "Version Control",
    description:
      "Built-in Git integration. Create branches, review diffs, and merge with confidence — right inside Altair.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure by default",
    description:
      "Enterprise-grade encryption, SOC 2 compliance, and fine-grained access controls keep your code and data safe.",
  },
];

const Features = () => (
  <section id="features" className="py-24 px-4 sm:px-6">
    <div className="mx-auto max-w-6xl">
      <div className="text-center mb-14">
        <Badge
          variant="outline"
          className="mb-4 border-white/10 bg-white/5 text-white/50 text-xs"
        >
          Features
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Everything you need to ship
        </h2>
        <p className="text-white/40 max-w-md mx-auto text-sm leading-relaxed">
          From intelligent code generation to seamless deployment — Altair has
          every tool a modern developer needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-xl border border-white/[0.07] bg-[oklch(0.25_0.012_264.34)] p-6 hover:border-white/13 hover:bg-[oklch(0.27_0.013_264.34)] transition-all duration-200"
          >
            <div className="size-9 rounded-lg bg-[oklch(0.6562_0.1826_262.74)]/10 flex items-center justify-center mb-4 group-hover:bg-[oklch(0.6562_0.1826_262.74)]/15 transition-colors">
              <f.icon className="size-4.5 text-[oklch(0.6562_0.1826_262.74)]" />
            </div>
            <h3 className="font-semibold text-white text-sm mb-2">{f.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── How it works ─────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "Connect your project",
    description:
      "Import from GitHub or start fresh. Altair indexes your codebase so AI understands the full picture.",
  },
  {
    number: "02",
    title: "Describe what you want",
    description:
      "Tell Altair what to build or fix in plain language. It reasons through the problem and plans the work.",
  },
  {
    number: "03",
    title: "Review and ship",
    description:
      "Review AI-generated changes with inline diffs, approve what you want, and push to production.",
  },
];

const HowItWorks = () => (
  <section
    id="how-it-works"
    className="py-24 px-4 sm:px-6 border-t border-white/6"
  >
    <div className="mx-auto max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: text */}
        <div>
          <Badge
            variant="outline"
            className="mb-4 border-white/10 bg-white/5 text-white/50 text-xs"
          >
            How it works
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5">
            From idea to running code in minutes
          </h2>
          <p className="text-white/40 text-sm leading-relaxed mb-10">
            Altair removes the friction between thinking and shipping. No
            boilerplate, no config hell — just focus on building.
          </p>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={step.number} className="flex gap-5">
                <div className="shrink-0 size-8 rounded-full border border-white/8 bg-white/5 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white/40">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">
                    {step.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: placeholder visual */}
        <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
          <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
          <div className="aspect-4/3 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key="image-id"
                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
              >
                <Image
                  src="/logo.png"
                  className="size-full object-cover object-top-left dark:mix-blend-lighten"
                  alt="altair image"
                  width={1207}
                  height={929}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <BorderBeam
            duration={6}
            size={200}
            className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
          />
        </div>
      </div>
    </div>
  </section>
);

// ─── Pricing ──────────────────────────────────────────────────────────────────

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for side projects and exploration.",
    features: [
      "50 AI completions / mo",
      "1 active project",
      "Community support",
      "Basic code editor",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    description: "For developers who ship every day.",
    features: [
      "Unlimited AI completions",
      "Unlimited projects",
      "Priority support",
      "Advanced AI agents",
      "Git integration",
      "Custom models",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$49",
    description: "Collaborate and ship faster together.",
    features: [
      "Everything in Pro",
      "Up to 10 seats",
      "Shared project context",
      "Team analytics",
      "SSO / SAML",
      "SLA support",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

const Pricing = () => (
  <section id="pricing" className="py-24 px-4 sm:px-6 border-t border-white/6">
    <div className="mx-auto max-w-5xl">
      <div className="text-center mb-14">
        <Badge
          variant="outline"
          className="mb-4 border-white/10 bg-white/5 text-white/50 text-xs"
        >
          Pricing
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-white/40 text-sm max-w-sm mx-auto">
          Start free. Upgrade when you need more power.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-xl p-6 border transition-all ${
              plan.highlighted
                ? "border-[oklch(0.6562_0.1826_262.74)]/40 bg-[oklch(0.6562_0.1826_262.74)]/5 shadow-lg shadow-[oklch(0.6562_0.1826_262.74)]/10"
                : "border-white/[0.07] bg-[oklch(0.25_0.012_264.34)]"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-[oklch(0.6562_0.1826_262.74)] text-white text-[10px] px-2.5 shadow-lg">
                  Most popular
                </Badge>
              </div>
            )}
            <div className="mb-5">
              <p className="text-sm font-semibold text-white">{plan.name}</p>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-white/30 text-sm">/mo</span>
              </div>
              <p className="mt-1.5 text-xs text-white/40">{plan.description}</p>
            </div>

            <ul className="space-y-2.5 mb-6">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-xs text-white/60"
                >
                  <CheckIcon className="size-3.5 text-[oklch(0.6562_0.1826_262.74)] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <SignUpButton>
              <Button
                variant={plan.highlighted ? "default" : "outline"}
                size="sm"
                className={`w-full text-xs h-9 ${
                  plan.highlighted
                    ? "bg-[oklch(0.6562_0.1826_262.74)] hover:bg-[oklch(0.7_0.18_262.74)] text-white"
                    : "border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </Button>
            </SignUpButton>
          </div>
        ))}
      </div>
    </div>
  </section>
);

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
  <section className="py-20 px-4 sm:px-6 border-t border-white/6">
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
        <SignUpButton>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[oklch(0.6562_0.1826_262.74)] hover:bg-[oklch(0.7_0.18_262.74)] text-white h-11 px-8 text-sm shadow-xl shadow-[oklch(0.6562_0.1826_262.74)]/20 gap-2"
          >
            Create free account
            <ArrowRightIcon className="size-4" />
          </Button>
        </SignUpButton>
        <SignInButton>
          <Button
            variant="ghost"
            size="lg"
            className="w-full sm:w-auto text-white/50 hover:text-white h-11 px-6 text-sm"
          >
            I already have an account
          </Button>
        </SignInButton>
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
      <Navbar />
      <main>
        <Hero />
        {/* <HeroSection /> */}
        <LogoCloud />
        <Features />
        <Integrations />
        <HowItWorks />
        <Pricing />
        <Contact />
        <CTABanner />
      </main>
      <Separator className="bg-white/6 mt-6" />
      <FooterSection />
    </div>
  );
};
