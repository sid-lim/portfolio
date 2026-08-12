"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BASE_PATH, GRADIENT, SITE } from "@/lib/constants";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${
          scrolled ? "shadow-md shadow-black/10" : ""
        }`}
      >
        <Link href="/" aria-label="Home" className="group relative w-9 h-9 shrink-0 rounded-full p-[2px]">
          <span
            className="absolute inset-0 rounded-full transition-transform duration-500 group-hover:rotate-180"
            style={{ background: GRADIENT }}
          />
          <span className="relative flex h-full w-full items-center justify-center rounded-full bg-bg overflow-hidden">
            <Image
              src={`${BASE_PATH}/images/avatar.png`}
              alt={SITE.name}
              width={36}
              height={36}
              priority
              className="h-full w-full rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </span>
        </Link>

        <div className="hidden sm:block w-px h-5 bg-stroke mx-1" />

        {LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${
                active ? "text-text bg-stroke/50" : "text-muted hover:text-text hover:bg-stroke/50"
              }`}
            >
              {link.label}
            </Link>
          );
        })}

        <div className="w-px h-5 bg-stroke mx-1" />

        <a href={`mailto:${SITE.email}`} className="group relative shrink-0 rounded-full p-[1.5px]">
          <span
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: GRADIENT }}
          />
          <span className="relative flex items-center rounded-full bg-surface px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-text whitespace-nowrap">
            Say hi ↗
          </span>
        </a>
      </div>
    </nav>
  );
}
