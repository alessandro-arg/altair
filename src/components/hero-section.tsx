"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Menu, SparklesIcon, X } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const menuItems = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function HeroSection() {
  const [menuState, setMenuState] = useState(false);
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/6 bg-[oklch(0.2925_0.0157_264.3)]/80 backdrop-blur-md">
        <nav data-state={menuState && "active"}>
          <div className="m-auto max-w-5xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between lg:w-auto">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center space-x-2"
                >
                  <div className="size-7 rounded-lg bg-[oklch(0.6562_0.1826_262.74)] flex items-center justify-center">
                    <Image
                      src="/logo.svg"
                      alt="altair"
                      width={8}
                      height={8}
                      className="size-8 md:size-11.5"
                    />
                  </div>
                  <span className={cn("font-semibold text-lg", font.className)}>
                    Altair
                  </span>
                </Link>

                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>

              <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <div className="lg:pr-4">
                  <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm text-white/50 font-medium">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-accent-foreground block duration-150"
                        >
                          <span>{item.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                  <SignInButton mode="modal">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-white/70 hover:text-white hover:bg-white/5 text-xs h-8 px-3"
                    >
                      Log in
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button
                      size="sm"
                      className="bg-[oklch(0.6562_0.1826_262.74)] hover:bg-[oklch(0.7_0.18_262.74)] text-white text-xs h-8 px-3 shadow-lg shadow-[oklch(0.6562_0.1826_262.74)]/20"
                    >
                      Sign up
                    </Button>
                  </SignUpButton>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div
          aria-hidden
          className="z-2 pointer-events-none absolute inset-0 isolate hidden opacity-50 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <section className="bg-muted/50 dark:bg-background overflow-hidden">
          <div className="relative mx-auto max-w-5xl px-6 pt-28 lg:pt-24">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <Badge
                variant="outline"
                className="mb-6 inline-flex items-center gap-1.5 border-white/10 bg-white/5 text-white/60 text-sm px-3 py-1"
              >
                <SparklesIcon className="size-5 text-[oklch(0.6562_0.1826_262.74)]" />
                Version 1.0 out now!
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
                collaboration - all in one place. From idea to production,
                faster.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <SignUpButton mode="modal">
                  <Button
                    size="lg"
                    className="w-30 sm:w-auto bg-[oklch(0.6562_0.1826_262.74)] hover:bg-[oklch(0.7_0.18_262.74)] text-white h-11 px-6 text-sm shadow-xl shadow-[oklch(0.6562_0.1826_262.74)]/25 gap-2"
                  >
                    Get started
                    <ArrowRightIcon className="size-4 " />
                  </Button>
                </SignUpButton>
              </div>
            </div>
          </div>

          <div className="relative mx-auto mt-16 max-w-[90%] lg:max-w-5xl">
            <div className="rounded-2xl border border-white/8 bg-[oklch(0.25_0.012_264.34)] overflow-hidden shadow-2xl shadow-black/40">
              {/* Fake window chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/6">
                <div className="size-2.5 rounded-full bg-white/10" />
                <div className="size-2.5 rounded-full bg-white/10" />
                <div className="size-2.5 rounded-full bg-white/10" />
                <div className="ml-3 h-5 flex-1 max-w-48 rounded-md bg-white/5 flex items-center px-2">
                  <span className="text-white/30 text-[10px]">
                    altair.alessandro-argenziano.com
                  </span>
                </div>
              </div>
              {/* Content placeholder — swap for real screenshot */}
              <div className="aspect-video bg-linear-to-br from-[oklch(0.28_0.015_264.3)] to-[oklch(0.22_0.01_264.3)] flex items-center justify-center">
                <div className="text-center space-y-3">
                  <Image
                    className="dark:hidden"
                    src="/card.png"
                    alt="hero section"
                    width={2880}
                    height={2074}
                  />
                  <Image
                    className=" dark:block"
                    src="/altair_mockup.webp"
                    loading="eager"
                    alt="hero section image"
                    width={2880}
                    height={2074}
                  />
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
      </main>
    </>
  );
}
