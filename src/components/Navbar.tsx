"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import DownloadButton from "./DownloadButton";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Tiers", href: "#tiers" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050814]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/cryptozonelogo.jpeg"
            alt="Crypto Profit Zone"
            width={36}
            height={36}
            className="w-9 h-9 rounded-lg object-cover ring-1 ring-white/10"
            priority
          />
          <span className="text-base sm:text-lg font-bold tracking-tight">
            Crypto <span className="text-gradient-crypto">Profit Zone</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <DownloadButton size="md" label="Install" />
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-200 hover:bg-white/5"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#050814]/95 backdrop-blur-xl border-b border-white/5 animate-fade-up">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-slate-300 hover:text-white py-1.5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <DownloadButton size="md" fullWidth label="Install the App" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
