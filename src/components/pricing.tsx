"use client";

import { CheckIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "€0",
    description: "Perfect for side projects and exploration.",
    features: [
      "50 AI completions / mo",
      "2 active projects",
      "Community support",
      "Basic code editor",
    ],
    cta: "Start for free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "€10",
    description: "For developers who ship every day.",
    features: [
      "1000 AI completions / mo",
      "Unlimited projects",
      "Priority support",
      "Advanced AI agents",
      "GitHub Import & Export",
      "Custom models",
    ],
    cta: "Upgrade to pro",
    highlighted: true,
  },
];

export const Pricing = () => (
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

            <ul
              className={cn("space-y-2.5 mb-6", !plan.highlighted && "mb-19")}
            >
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

            <SignUpButton mode="modal">
              <Button
                variant={plan.highlighted ? "default" : "outline"}
                size="sm"
                className={`w-full text-xs h-9 mt-auto ${
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
