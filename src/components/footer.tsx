"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "How it works",
    href: "#how-it-works",
  },
];

export default function FooterSection() {
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          href="#"
          aria-label="home"
          className="mx-auto size-fit flex items-center space-x-2 pointer-events-none cursor-default"
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
          <span className="font-semibold text-lg">Altair</span>
        </Link>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary block duration-150"
            >
              <span>{link.title}</span>
            </a>
          ))}
        </div>
        <div className="my-8 flex flex-wrap justify-center gap-4 text-sm">
          <Link
            href="https://github.com/alessandro-arg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition"
          >
            <FaGithub size={23} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/alessandro-argenziano"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition"
          >
            <FaLinkedin size={23} />
          </Link>
        </div>
        <span className="text-muted-foreground block text-center text-sm">
          {" "}
          © {2026} Altair, All rights reserved
        </span>
      </div>
    </footer>
  );
}
